import { LoadingService } from '../../services/loading.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpEventType } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

let pendingRequest = 0;

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.showLoading();
    pendingRequest++;

    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if (event.type === HttpEventType.Response) {
            this.handleHideLoading();
          }
        },
        error: (_) => {
          this.handleHideLoading();
        }
      })
    );
  }

  handleHideLoading() {
    pendingRequest--;
    pendingRequest === 0 ? this.loadingService.hideLoading() : null;
  }
}
