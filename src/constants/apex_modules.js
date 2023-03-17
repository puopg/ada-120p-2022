module.exports = {
    "return_pump": {
        moduleName: "Cor_3_1",
        description: "Return Pump - COR15",
    },
    "sump_water_low_optical_sensor": {
        moduleName: "Swx6_1",
        description: "Optical Sensor - Sump Return Pump Low Water Warning",
    },
    "tank_water_high_optical_sensor": {
        moduleName: "Swx6_2",
        description: "Optical Sensor - Tank High Water Level",
    },
    "water_on_ground_behind_tank_sensor": {
        moduleName: "Swx6_3",
        description: "Solid State Leak Detection Probe - Behind Tank",
    },
    "water_on_shelf_near_skimmer_sensor": {
        moduleName: "Swx6_4",
        description: "Solid State Leak Detection Probe - Inside Tank, near skimmer",
    },
    "sump_low_detector": {
        moduleName: "Sump_Low_Det",
        description: "Virtual Outlet - Detects when sump water level in return chamber gets low, accounting for sensor toggling at thresholds.",
    }
};