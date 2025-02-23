import { NextResponse } from 'next/server';
import webpush from 'web-push';

webpush.setVapidDetails(
    'mailto:jloyd9836@gmail.com',
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
    process.env.VAPID_PRIVATE_KEY!
);

export async function POST(req: Request) {
    try {
        const { subscription, message } = await req.json();
        if (!subscription || !subscription.endpoint) {
            throw new Error('Subscription must have an endpoint.');
        }

        const payload = JSON.stringify({
            title: message.title || 'New Message',  // Default title
            body: message.body || 'You have a new message'  // Default body
        });

        await webpush.sendNotification(subscription, payload);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Push error:', error);
        return NextResponse.json({ 
            error: error instanceof Error ? error.message : 'Unknown error' 
        }, { status: 500 });
    }
}