import { FunctionComponent } from 'preact';
import { HTMLAttributes } from 'preact/compat';

export interface PlaceOrderProps extends HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    onClick: (event: Event) => Promise<void>;
}
export declare const PlaceOrder: FunctionComponent<PlaceOrderProps>;
//# sourceMappingURL=PlaceOrder.d.ts.map