### 3/10/2022
Update @ 10:42 AM
- Changed `return_pump` code to NOT use `Sump_Low_Det` to turn off since if the pump shuts off, water continues to
drain from the overflow into the sump, which makes the water level rise, and that inverts the switch. This results
in the detection toggling on and off.
   - Instead, `return_pump` is will always be on, and a notification is all that will be sent to me when the sump level gets low.

Original
- Added: Virtual Outlet `Sump_Low_Det` to help in better detecting when return level in water gets too low.
- Changed `email_alert` code to use `Sump_Low_Det` when detecting sump water level low to send a notification.
- Changed `return_pump` code to use `Sump_Low_Det` before triggering `OFF`.

### 3/5/2022
- Changed code for return pump to account for sump low level since I think FMM reconfiguration worked.

### 3/1/2022
- Issue with Optical Sensor triggering on and off occasionally for like a microsecond or something.
   - Got a new sensor, same issue.
   - Found out FMM port was configured for "Water on ground", and not "Optical Sensor".
   - Testing port after reconfiguring FMM

### 1/09/2023
- Super windy and raining cause a power outage. When the power came back, the FMM was detected twice in apex
- Apex was disconnected from fusion, and had its date reset to 2008.
- Had to trigger a manual restart, then it reconnected to fusion and network and synced calendar
- Then deleted module and swapped to new named module.