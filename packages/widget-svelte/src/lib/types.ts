import { type FeedbackPayload } from '@loopbackapp/widget-shared';

export type FormState = Omit<FeedbackPayload, 'emotion'> & {
	emotion: number | null;
};
