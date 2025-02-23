import { NextResponse } from 'next/server';
import webpush from 'web-push';

const vapidDetails = {
    subject: 'mailto:jloyd9836@gmail.com',
    publicKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
    privateKey: process.env.VAPID_PRIVATE_KEY!
};

webpush.setVapidDetails(
    vapidDetails.subject,
    vapidDetails.publicKey,
    vapidDetails.privateKey
);

export async function POST(req: Request) {
    try {
        const { subscription, message } = await req.json();

        await webpush.sendNotification(
            subscription,
            JSON.stringify({
                title: message.title,
                body: message.body
            })
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Push notification error:', error);
        return NextResponse.json(
            { error: 'Failed to send push notification' },
            { status: 500 }
        );
    }
}