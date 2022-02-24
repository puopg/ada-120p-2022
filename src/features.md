# Features

## Plumbing

### Siphon Failure Detection
When the siphon on the CPR overflow box fails for whatever reason, water will cease to enter the sump, causing the return pump to drain the sump until it runs dry.

If the water level in the tank rises too high, an optical sensor (`Swx_6_2`) will trigger and stop the return pump. Now, on the chance that the check valve on the return line also fails, this will lead to an oscillating effect of the pump turning on to fill the tank back up, hitting the sensor, only to get shut off and back siphoning water into the sump again. I guess the downside is really that my phone will get totally hammered with notifications.