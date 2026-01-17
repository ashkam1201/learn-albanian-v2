import { AfterViewInit, ChangeDetectorRef, Component, DestroyRef, ViewChild, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { routeAnimations } from '../animations/route-animations';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    Header,
    Footer,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
  ],
  animations: [routeAnimations],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements AfterViewInit {
  @ViewChild(RouterOutlet) private outlet?: RouterOutlet;

  private readonly destroyRef = inject(DestroyRef);
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);

  protected readonly isMobile = signal(false);
  protected readonly sidenavMode = signal<'over' | 'side'>('side');
  protected readonly sidenavOpened = signal(true);
  protected readonly routeAnimationKey = signal<string | undefined>(undefined);

  constructor() {
    this.breakpointObserver
      .observe('(max-width: 900px)')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((state) => {
        this.isMobile.set(state.matches);
        this.sidenavMode.set(state.matches ? 'over' : 'side');
        this.sidenavOpened.set(!state.matches);
      });

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((event) => {
        const key = this.getRouteAnimationKey();
        this.routeAnimationKey.set(`${key ?? 'route'}-${event.id}`);
      });
  }

  ngAfterViewInit(): void {
    if (this.outlet?.isActivated) {
      const key =
        this.outlet.activatedRouteData?.['animation'] ?? this.outlet.activatedRoute?.routeConfig?.path;
      this.routeAnimationKey.set(`${key ?? 'route'}-init`);
      this.cdr.detectChanges();
    }
  }

  private getRouteAnimationKey(): string | undefined {
    let current = this.router.routerState.root;
    while (current.firstChild) {
      current = current.firstChild;
    }
    return current.snapshot.data?.['animation'] ?? current.snapshot.routeConfig?.path;
  }
}
