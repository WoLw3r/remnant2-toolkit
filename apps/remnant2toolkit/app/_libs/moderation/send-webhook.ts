'use server';

import { type DiscordWebhookParams } from '@/app/_libs/moderation/_types/discord-webhook-params';
import { WEBHOOKS } from '@/app/_libs/moderation/_types/webhooks';

export async function sendWebhook({
  params,
  webhook,
}: {
  params: DiscordWebhookParams;
  webhook: keyof typeof WEBHOOKS;
}) {
  const res = await fetch(`${WEBHOOKS[webhook]}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!res.ok) {
    console.error(`Error in sending ${webhook} webhook to Discord!`);
    console.error(res.statusText);
  }
}
