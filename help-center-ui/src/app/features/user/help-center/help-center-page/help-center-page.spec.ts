import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { vi } from 'vitest';
import { provideAngularSvgIcon } from 'angular-svg-icon';

import { HelpCenterPage } from './help-center-page';

describe('HelpCenterPage', () => {
  let component: HelpCenterPage;
  let fixture: ComponentFixture<HelpCenterPage>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpCenterPage],
      providers: [provideRouter([]), provideAngularSvgIcon()],
    }).compileComponents();

    fixture = TestBed.createComponent(HelpCenterPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should suggest articles from section content across topics', () => {
    component.onSearchInput('restaurant profile');

    expect(component.suggestions.length).toBeGreaterThan(0);
    expect(component.suggestions[0].articleTitle).toContain('Restaurant Profile');
    expect(component.suggestions[0].topicSlug).toBe('getting-started');
  });

  it('should navigate to article route when selecting a suggestion', () => {
    component.onSearchInput('restaurant profile');
    const suggestion = component.suggestions[0];
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    component.selectSuggestion(suggestion);

    expect(navigateSpy).toHaveBeenCalledWith(['/help', suggestion.topicSlug, suggestion.articleSlug]);
  });
});
