import { Injector, ValueEqualityFn } from '@angular/core';
import { StorePlugin } from './store-plugin';

/**
 * Configuration options for a signal store.
 *
 * @typeparam TState The type of the store's initial state.
 */
export interface StoreConfig<TState> {
  /**
   * The initial state of the store.
   */
  initialState: TState;
  /**
   * The name of the store (optional, default: constructor name).
   */
  name?: string;
  /**
   * Optional Di injector can be passed for effects and query objects. Only useful for dynamic stores, that are not registered in DI (optional, default: null)
   */
  injector?: Injector | null;
  /**
   * The equality function to compare previous and new states, determining whether
   * a change notification should be published.
   * If not provided, the default equality function from Angular signals is used.
   * It is recommended that users do not modify the equality function except
   * in exceptional and specialized use cases.
   */
  stateEqualityFn?: ValueEqualityFn<TState> | null;
  /**
   * A list of plugins to use
   */
  plugins?: StorePlugin[];
}
