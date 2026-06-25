import {
  CanDeactivateFn,
} from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

/**
 * Guard to prevent navigation away from a component with unsaved changes.
 * The component must implement the `canDeactivate` method, which can return
 * an Observable, Promise, or boolean.
 */
export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component,
): Observable<boolean> | Promise<boolean> | boolean => {
  if (!component || typeof component.canDeactivate !== 'function') {
    return true;
  }
  return component.canDeactivate();
};