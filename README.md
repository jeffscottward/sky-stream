# sky-stream
A full stack app to run on a Raspberry-Pi to remotely trigger SpireWorks lights in NYC for a fee from a live stream

### Project planning

#### User story
1. User lands on free live stream (youtube, twitch, etc)
2. User see's current song, rotating mesgs in top corner, and PIP of SkyStream app state
3. IF (time > 9pm && time < 1:55 AM && no donation paywall / not disabled in Spireworks) THEN =>
  - User SEES instructions on how to pay to control the lights
  - User CAN CLICK on a link in description (or scan a QR code?) and is taken to SkyStream
  - IF (no one is controlling lights) THEN => 
    - have call to action screenshot of the UI and instructions on how to play
  - IF (someone is controlling lights) THEN =>
    - User sees updates in the PIP from the person controlling SkyStream UI
    - Show instructions next to the current app state
    - (????) User sees the queue/time(?) to line up to play with the lights
  ELSE => Display message that the app is not available tonight
4. In SkyStream App - app is locked from interactivity unitl there is a payment
5. - IF (someone is controlling lights) THEN => Show the current state of their actions
6. User pays via paypal/venmo/CC/crypto to control lights
7. User is placed in queue to control the lights
8. User is notified just before and at the moment of the session begining that they can control the lights
9. Play with the lights
10 .Timer runs out - thanks for playing
11. CTA - Would you like to play again?