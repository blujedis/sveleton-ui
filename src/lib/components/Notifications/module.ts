import { SvelteComponent } from 'svelte';
import { Notification, type NotificationProps } from '../Notification';

export class NotificationsComponent extends SvelteComponent<NotificationProps> {}

export type NotificationPosition =
	| 'top-right'
	| 'bottom-right'
	| 'top-left'
	| 'bottom-left'
	| 'top-center'
	| 'bottom-center';

export interface NotificationsProps {
	Component?: typeof NotificationsComponent;
	duration?: number;
	group?: string;
	position?: NotificationPosition;
	transition?: 'zoom' | 'reveal' | 'none';
}

export const notificationsDefaults: NotificationsProps = {
	Component: Notification,
	group: 'default',
	duration: 4000,
	position: 'top-right',
	transition: 'reveal'
};

export const notificationsPosition = {
	'bottom-right': { x: 400, y: 0 },
	'top-right': { x: 400, y: 0 },
	'bottom-left': { x: -400, y: 0 },
	'top-left': { x: -400, y: 0 },
	'bottom-center': { x: 0, y: 0 },
	'top-center': { x: 0, y: 0 }
} as Record<NotificationPosition, { x: number; y: number }>;
