---
layout: post
title: "Playing guitar on Linux"
date: 2026-08-09 00:00:00 +0700
categories: [Ubuntu, PipeWire, Guitarix, Jack, Ardour]
image: Broadcast_Mail.png
---

Nowadays, to play with an electric guitar you just need two things: A Linux computer and a sound card.
The rest can entirely rely on Open Source: amplifier simulation, sound production, etc.

Since Ubuntu 24.04, PipeWire became the default audio stack.
Before that, you usually had to use PulseAudio for the standard desktop sound and Jack for music production and playing.
Integrating the two was flaky and not straghtforward.

The vast majority of music software is only compatible with Jack, but PipeWire has a trick.
By using `pipewire-jack`, you can make any Jack compatible software use PipeWire.
This makes PipeWire the perfect solution to play music on an Ubuntu computer without complexity or having to break the rest of your sound.

## The `pipewire-jack` trick

When installing `pipewire-jack`, you get this folder: `/usr/lib/x86_64-linux-gnu/pipewire-*/jack/`.
It contains library that look just like Jack but are meant to lure softwares loading Jack so it interfaces with PipeWire.

This makes all the software that is Jack compatible suddenlty work seamlessly with PipeWire.

Once you installed `pipewire-jack`, make sure to add your user to the audio group and then:

```
sudo cp /usr/share/doc/pipewire/examples/ld.so.conf.d/pipewire-jack-*.conf /etc/ld.so.conf.d/
sudo ldconfig
```

This takes the runtime linker example configuration from `pipewire-jack` and install it.
This way, the `pipewire-jack` Jack libraries will be loaded at runtime by any software.

For example, you can install Carla (Jack only) and already see your patchbay:
![Carla with PipeWire](/static/img/posts/Playing_guitar_on_Linux/Carla_with_pipewire.jpg "Carla with PipeWire")

## Playing the guitar

Plug your Linux compatible sound card (I am using a Volt 276 but a lot of entry level sound card support Linux).

Now that PipeWire is ready, we can install the software we want.
As a good starting point Guitarix is very good option.
It has many amplifiers, many effects and even sound banks that people are sharing.

But before running Guitarix we can get started with RaySession.

### Raysession

RaySession can be use for many things: PipeWire configuration (buffer size), Patchbay configuration, and even to start all the software you want.

We can start by installing RaySession and Guitarix from `apt`.
Then start RaySession and create a Guitar session.

Add a new application in your session, select Guitarix.

Make sure to connect in the patchbay the entry of your soundcard to Guitarix,
and the output of Guitarix in your soundcard Output.

On the top right of RaySession you will see that you can select the buffer size.
This is how much buffer PipeWire should keep.
The higher the buffer the more you will have latency (you want very low latency since you don't want to hear the note half a second after you played it).
But keep in mind that the buffer should be calibrated to your CPU power.
The amount of Xruns represent how many times your CPU couldn't process the buffer on time and had to drop.
In this case you generally hear a crack or the sound stopping for a second.
On most of my computers I can get a 5ms latency with a 256 buffer size.

TODO: screenshot of RaySession.

### Guitarix

Now that everything is ready we can start playing guitar and play with Guitarix.
I found that the community sound bank was not ideal for me (very different sound levels, and just not adapted to my instrument).

So I recommand that you start with the cleanest sound you can get and from there add your effects.

My recommandations are:
- Add the guitar tuner
- Adjust the noise gate
- Select the "---" amplifier
- Configure the gain and master volume of the amplifier

From here you can save your own bank and then add your effects: reverb, overdrive, chorus, etc.
This is a great way for you to dicover how to make your sound.

TODO: Screenshot Guitarix


## Bonus: Ardour and music production.

After playing Guitar live on you computer if you want to go further I recommand Ardour.
You can create a new RaySession session, connect a midi Keyboard and start recording,
or just editing your own music.
For keyboard playing (a small Akai mini in my case), I found that Ardour was the only good solution.

The Ubuntu repository is full of lv2 and VST.
You can see some with:
```
apt list | grep lv2
```
```

```
[Ardour documentation](https://ardour.org/instruments.html) has some examples of what you can use as a starting point.

When using Guitarix and Ardour,
you can either load each and every plugin from Guitarix within an ardour track.
Or you can keep Guitarix as a standalone and pipe Guitarix into ardour from your patchbay (which is my prefered way).

TODO: ardour + keyboard + Guitarix

