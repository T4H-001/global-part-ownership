import { PartCategory, VehicleSystem } from '@/types/parts';

// Comprehensive parts taxonomy - hierarchical structure
// Level 1 = Assembly, Level 2 = Component, Level 3 = Sub-component
// Includes ICE, EV, and hybrid vehicle systems

export const PARTS_TAXONOMY: Record<VehicleSystem, PartCategory[]> = {
  engine: [
    {
      id: 'eng-block', name: 'Engine Block Assembly', slug: 'engine-block', vehicle_system: 'engine', level: 1,
      description: 'Main engine block and core components',
      children: [
        { id: 'eng-block-cyl', name: 'Cylinder Block', slug: 'cylinder-block', vehicle_system: 'engine', level: 2, parent_id: 'eng-block',
          children: [
            { id: 'eng-block-cyl-liner', name: 'Cylinder Liner', slug: 'cylinder-liner', vehicle_system: 'engine', level: 3, parent_id: 'eng-block-cyl' },
            { id: 'eng-block-cyl-gasket', name: 'Cylinder Head Gasket', slug: 'cylinder-head-gasket', vehicle_system: 'engine', level: 3, parent_id: 'eng-block-cyl' },
          ]
        },
        { id: 'eng-block-piston', name: 'Pistons', slug: 'pistons', vehicle_system: 'engine', level: 2, parent_id: 'eng-block',
          children: [
            { id: 'eng-block-piston-ring', name: 'Piston Rings', slug: 'piston-rings', vehicle_system: 'engine', level: 3, parent_id: 'eng-block-piston' },
            { id: 'eng-block-piston-pin', name: 'Piston Pin', slug: 'piston-pin', vehicle_system: 'engine', level: 3, parent_id: 'eng-block-piston' },
          ]
        },
        { id: 'eng-block-crank', name: 'Crankshaft', slug: 'crankshaft', vehicle_system: 'engine', level: 2, parent_id: 'eng-block',
          children: [
            { id: 'eng-block-crank-bearing', name: 'Main Bearings', slug: 'main-bearings', vehicle_system: 'engine', level: 3, parent_id: 'eng-block-crank' },
            { id: 'eng-block-crank-pulley', name: 'Crankshaft Pulley', slug: 'crankshaft-pulley', vehicle_system: 'engine', level: 3, parent_id: 'eng-block-crank' },
          ]
        },
        { id: 'eng-block-conrod', name: 'Connecting Rods', slug: 'connecting-rods', vehicle_system: 'engine', level: 2, parent_id: 'eng-block' },
      ]
    },
    {
      id: 'eng-head', name: 'Cylinder Head Assembly', slug: 'cylinder-head', vehicle_system: 'engine', level: 1,
      description: 'Cylinder head and valve train',
      children: [
        { id: 'eng-head-cam', name: 'Camshaft', slug: 'camshaft', vehicle_system: 'engine', level: 2, parent_id: 'eng-head' },
        { id: 'eng-head-valve', name: 'Valves', slug: 'valves', vehicle_system: 'engine', level: 2, parent_id: 'eng-head',
          children: [
            { id: 'eng-head-valve-intake', name: 'Intake Valves', slug: 'intake-valves', vehicle_system: 'engine', level: 3, parent_id: 'eng-head-valve' },
            { id: 'eng-head-valve-exhaust', name: 'Exhaust Valves', slug: 'exhaust-valves', vehicle_system: 'engine', level: 3, parent_id: 'eng-head-valve' },
            { id: 'eng-head-valve-spring', name: 'Valve Springs', slug: 'valve-springs', vehicle_system: 'engine', level: 3, parent_id: 'eng-head-valve' },
          ]
        },
        { id: 'eng-head-rocker', name: 'Rocker Arms', slug: 'rocker-arms', vehicle_system: 'engine', level: 2, parent_id: 'eng-head' },
      ]
    },
    {
      id: 'eng-timing', name: 'Timing System', slug: 'timing-system', vehicle_system: 'engine', level: 1,
      children: [
        { id: 'eng-timing-chain', name: 'Timing Chain/Belt', slug: 'timing-chain-belt', vehicle_system: 'engine', level: 2, parent_id: 'eng-timing' },
        { id: 'eng-timing-tensioner', name: 'Tensioner', slug: 'timing-tensioner', vehicle_system: 'engine', level: 2, parent_id: 'eng-timing' },
        { id: 'eng-timing-gear', name: 'Timing Gears', slug: 'timing-gears', vehicle_system: 'engine', level: 2, parent_id: 'eng-timing' },
      ]
    },
    {
      id: 'eng-lubrication', name: 'Lubrication System', slug: 'lubrication-system', vehicle_system: 'engine', level: 1,
      children: [
        { id: 'eng-lub-pump', name: 'Oil Pump', slug: 'oil-pump', vehicle_system: 'engine', level: 2, parent_id: 'eng-lubrication' },
        { id: 'eng-lub-filter', name: 'Oil Filter', slug: 'oil-filter', vehicle_system: 'engine', level: 2, parent_id: 'eng-lubrication' },
        { id: 'eng-lub-pan', name: 'Oil Pan/Sump', slug: 'oil-pan', vehicle_system: 'engine', level: 2, parent_id: 'eng-lubrication' },
      ]
    },
    {
      id: 'eng-cooling', name: 'Cooling System', slug: 'cooling-system', vehicle_system: 'engine', level: 1,
      children: [
        { id: 'eng-cool-radiator', name: 'Radiator', slug: 'radiator', vehicle_system: 'engine', level: 2, parent_id: 'eng-cooling' },
        { id: 'eng-cool-pump', name: 'Water Pump', slug: 'water-pump', vehicle_system: 'engine', level: 2, parent_id: 'eng-cooling' },
        { id: 'eng-cool-thermo', name: 'Thermostat', slug: 'thermostat', vehicle_system: 'engine', level: 2, parent_id: 'eng-cooling' },
        { id: 'eng-cool-hose', name: 'Coolant Hoses', slug: 'coolant-hoses', vehicle_system: 'engine', level: 2, parent_id: 'eng-cooling' },
        { id: 'eng-cool-fan', name: 'Cooling Fan', slug: 'cooling-fan', vehicle_system: 'engine', level: 2, parent_id: 'eng-cooling' },
      ]
    },
  ],

  // EV Battery System - Complete taxonomy for electric vehicles
  ev_battery: [
    {
      id: 'ev-bat-pack', name: 'Battery Pack Assembly', slug: 'battery-pack', vehicle_system: 'ev_battery', level: 1,
      description: 'Complete high-voltage battery pack',
      children: [
        { id: 'ev-bat-module', name: 'Battery Modules', slug: 'battery-modules', vehicle_system: 'ev_battery', level: 2, parent_id: 'ev-bat-pack',
          children: [
            { id: 'ev-bat-cell', name: 'Battery Cells', slug: 'battery-cells', vehicle_system: 'ev_battery', level: 3, parent_id: 'ev-bat-module' },
            { id: 'ev-bat-busbar', name: 'Bus Bars', slug: 'bus-bars', vehicle_system: 'ev_battery', level: 3, parent_id: 'ev-bat-module' },
            { id: 'ev-bat-cell-holder', name: 'Cell Holders', slug: 'cell-holders', vehicle_system: 'ev_battery', level: 3, parent_id: 'ev-bat-module' },
          ]
        },
        { id: 'ev-bat-enclosure', name: 'Battery Enclosure', slug: 'battery-enclosure', vehicle_system: 'ev_battery', level: 2, parent_id: 'ev-bat-pack',
          children: [
            { id: 'ev-bat-tray', name: 'Battery Tray', slug: 'battery-tray', vehicle_system: 'ev_battery', level: 3, parent_id: 'ev-bat-enclosure' },
            { id: 'ev-bat-cover', name: 'Battery Cover', slug: 'battery-cover', vehicle_system: 'ev_battery', level: 3, parent_id: 'ev-bat-enclosure' },
            { id: 'ev-bat-seal', name: 'Sealing System', slug: 'battery-sealing', vehicle_system: 'ev_battery', level: 3, parent_id: 'ev-bat-enclosure' },
          ]
        },
      ]
    },
    {
      id: 'ev-bms', name: 'Battery Management System', slug: 'bms', vehicle_system: 'ev_battery', level: 1,
      description: 'Electronic control and monitoring system',
      children: [
        { id: 'ev-bms-master', name: 'BMS Master Controller', slug: 'bms-master', vehicle_system: 'ev_battery', level: 2, parent_id: 'ev-bms' },
        { id: 'ev-bms-slave', name: 'BMS Slave Boards', slug: 'bms-slave', vehicle_system: 'ev_battery', level: 2, parent_id: 'ev-bms' },
        { id: 'ev-bms-sensor', name: 'Voltage/Temp Sensors', slug: 'bms-sensors', vehicle_system: 'ev_battery', level: 2, parent_id: 'ev-bms' },
        { id: 'ev-bms-contactor', name: 'High Voltage Contactors', slug: 'hv-contactors', vehicle_system: 'ev_battery', level: 2, parent_id: 'ev-bms' },
        { id: 'ev-bms-fuse', name: 'HV Fuses', slug: 'hv-fuses', vehicle_system: 'ev_battery', level: 2, parent_id: 'ev-bms' },
      ]
    },
    {
      id: 'ev-bat-thermal', name: 'Battery Thermal Management', slug: 'battery-thermal', vehicle_system: 'ev_battery', level: 1,
      description: 'Cooling and heating systems for optimal battery temperature',
      children: [
        { id: 'ev-bat-cool-plate', name: 'Cooling Plates', slug: 'cooling-plates', vehicle_system: 'ev_battery', level: 2, parent_id: 'ev-bat-thermal' },
        { id: 'ev-bat-cool-pump', name: 'Coolant Pump', slug: 'battery-coolant-pump', vehicle_system: 'ev_battery', level: 2, parent_id: 'ev-bat-thermal' },
        { id: 'ev-bat-chiller', name: 'Battery Chiller', slug: 'battery-chiller', vehicle_system: 'ev_battery', level: 2, parent_id: 'ev-bat-thermal' },
        { id: 'ev-bat-heater', name: 'Battery Heater', slug: 'battery-heater', vehicle_system: 'ev_battery', level: 2, parent_id: 'ev-bat-thermal' },
        { id: 'ev-bat-thermal-paste', name: 'Thermal Interface Material', slug: 'thermal-interface', vehicle_system: 'ev_battery', level: 2, parent_id: 'ev-bat-thermal' },
      ]
    },
  ],

  // EV Electric Motor/Drive System
  ev_drivetrain: [
    {
      id: 'ev-motor', name: 'Electric Motor Assembly', slug: 'electric-motor', vehicle_system: 'ev_drivetrain', level: 1,
      description: 'Traction motor and related components',
      children: [
        { id: 'ev-motor-stator', name: 'Stator', slug: 'motor-stator', vehicle_system: 'ev_drivetrain', level: 2, parent_id: 'ev-motor',
          children: [
            { id: 'ev-motor-stator-wind', name: 'Stator Windings', slug: 'stator-windings', vehicle_system: 'ev_drivetrain', level: 3, parent_id: 'ev-motor-stator' },
            { id: 'ev-motor-stator-lam', name: 'Stator Laminations', slug: 'stator-laminations', vehicle_system: 'ev_drivetrain', level: 3, parent_id: 'ev-motor-stator' },
          ]
        },
        { id: 'ev-motor-rotor', name: 'Rotor', slug: 'motor-rotor', vehicle_system: 'ev_drivetrain', level: 2, parent_id: 'ev-motor',
          children: [
            { id: 'ev-motor-rotor-magnet', name: 'Permanent Magnets', slug: 'rotor-magnets', vehicle_system: 'ev_drivetrain', level: 3, parent_id: 'ev-motor-rotor' },
            { id: 'ev-motor-rotor-shaft', name: 'Rotor Shaft', slug: 'rotor-shaft', vehicle_system: 'ev_drivetrain', level: 3, parent_id: 'ev-motor-rotor' },
          ]
        },
        { id: 'ev-motor-bearing', name: 'Motor Bearings', slug: 'motor-bearings', vehicle_system: 'ev_drivetrain', level: 2, parent_id: 'ev-motor' },
        { id: 'ev-motor-housing', name: 'Motor Housing', slug: 'motor-housing', vehicle_system: 'ev_drivetrain', level: 2, parent_id: 'ev-motor' },
        { id: 'ev-motor-resolver', name: 'Position Resolver', slug: 'position-resolver', vehicle_system: 'ev_drivetrain', level: 2, parent_id: 'ev-motor' },
      ]
    },
    {
      id: 'ev-inverter', name: 'Power Inverter', slug: 'power-inverter', vehicle_system: 'ev_drivetrain', level: 1,
      description: 'DC to AC power conversion',
      children: [
        { id: 'ev-inv-igbt', name: 'IGBT/SiC Module', slug: 'igbt-module', vehicle_system: 'ev_drivetrain', level: 2, parent_id: 'ev-inverter' },
        { id: 'ev-inv-cap', name: 'DC Link Capacitor', slug: 'dc-link-capacitor', vehicle_system: 'ev_drivetrain', level: 2, parent_id: 'ev-inverter' },
        { id: 'ev-inv-control', name: 'Inverter Controller', slug: 'inverter-controller', vehicle_system: 'ev_drivetrain', level: 2, parent_id: 'ev-inverter' },
        { id: 'ev-inv-cool', name: 'Inverter Cooling System', slug: 'inverter-cooling', vehicle_system: 'ev_drivetrain', level: 2, parent_id: 'ev-inverter' },
      ]
    },
    {
      id: 'ev-reducer', name: 'Reduction Gearbox', slug: 'reduction-gearbox', vehicle_system: 'ev_drivetrain', level: 1,
      description: 'Single or multi-speed gearbox',
      children: [
        { id: 'ev-reducer-gear', name: 'Reduction Gears', slug: 'reduction-gears', vehicle_system: 'ev_drivetrain', level: 2, parent_id: 'ev-reducer' },
        { id: 'ev-reducer-bearing', name: 'Gearbox Bearings', slug: 'gearbox-bearings', vehicle_system: 'ev_drivetrain', level: 2, parent_id: 'ev-reducer' },
        { id: 'ev-reducer-diff', name: 'Integrated Differential', slug: 'integrated-diff', vehicle_system: 'ev_drivetrain', level: 2, parent_id: 'ev-reducer' },
      ]
    },
  ],

  // EV Charging System
  ev_charging: [
    {
      id: 'ev-charge-onboard', name: 'Onboard Charger', slug: 'onboard-charger', vehicle_system: 'ev_charging', level: 1,
      description: 'AC to DC conversion for Level 1/2 charging',
      children: [
        { id: 'ev-charge-obc-pfc', name: 'PFC Stage', slug: 'obc-pfc', vehicle_system: 'ev_charging', level: 2, parent_id: 'ev-charge-onboard' },
        { id: 'ev-charge-obc-dcdc', name: 'DC-DC Converter', slug: 'obc-dcdc', vehicle_system: 'ev_charging', level: 2, parent_id: 'ev-charge-onboard' },
        { id: 'ev-charge-obc-control', name: 'OBC Controller', slug: 'obc-controller', vehicle_system: 'ev_charging', level: 2, parent_id: 'ev-charge-onboard' },
      ]
    },
    {
      id: 'ev-charge-inlet', name: 'Charge Inlet', slug: 'charge-inlet', vehicle_system: 'ev_charging', level: 1,
      description: 'Charging port and connectors',
      children: [
        { id: 'ev-charge-inlet-ac', name: 'AC Charge Port (J1772/Type 2)', slug: 'ac-charge-port', vehicle_system: 'ev_charging', level: 2, parent_id: 'ev-charge-inlet' },
        { id: 'ev-charge-inlet-dc', name: 'DC Fast Charge Port (CCS/CHAdeMO)', slug: 'dc-charge-port', vehicle_system: 'ev_charging', level: 2, parent_id: 'ev-charge-inlet' },
        { id: 'ev-charge-inlet-nacs', name: 'NACS Port (Tesla)', slug: 'nacs-port', vehicle_system: 'ev_charging', level: 2, parent_id: 'ev-charge-inlet' },
        { id: 'ev-charge-inlet-door', name: 'Charge Door Assembly', slug: 'charge-door', vehicle_system: 'ev_charging', level: 2, parent_id: 'ev-charge-inlet' },
      ]
    },
    {
      id: 'ev-charge-dcdc', name: 'LV DC-DC Converter', slug: 'lv-dcdc', vehicle_system: 'ev_charging', level: 1,
      description: 'High voltage to 12V conversion',
      children: [
        { id: 'ev-charge-dcdc-unit', name: 'DC-DC Converter Unit', slug: 'dcdc-unit', vehicle_system: 'ev_charging', level: 2, parent_id: 'ev-charge-dcdc' },
      ]
    },
  ],

  transmission: [
    {
      id: 'trans-gearbox', name: 'Gearbox Assembly', slug: 'gearbox', vehicle_system: 'transmission', level: 1,
      children: [
        { id: 'trans-gear-input', name: 'Input Shaft', slug: 'input-shaft', vehicle_system: 'transmission', level: 2, parent_id: 'trans-gearbox' },
        { id: 'trans-gear-output', name: 'Output Shaft', slug: 'output-shaft', vehicle_system: 'transmission', level: 2, parent_id: 'trans-gearbox' },
        { id: 'trans-gear-synchro', name: 'Synchronizers', slug: 'synchronizers', vehicle_system: 'transmission', level: 2, parent_id: 'trans-gearbox' },
        { id: 'trans-gear-bearing', name: 'Transmission Bearings', slug: 'transmission-bearings', vehicle_system: 'transmission', level: 2, parent_id: 'trans-gearbox' },
      ]
    },
    {
      id: 'trans-clutch', name: 'Clutch Assembly', slug: 'clutch', vehicle_system: 'transmission', level: 1,
      children: [
        { id: 'trans-clutch-disc', name: 'Clutch Disc', slug: 'clutch-disc', vehicle_system: 'transmission', level: 2, parent_id: 'trans-clutch' },
        { id: 'trans-clutch-pressure', name: 'Pressure Plate', slug: 'pressure-plate', vehicle_system: 'transmission', level: 2, parent_id: 'trans-clutch' },
        { id: 'trans-clutch-flywheel', name: 'Flywheel', slug: 'flywheel', vehicle_system: 'transmission', level: 2, parent_id: 'trans-clutch' },
        { id: 'trans-clutch-release', name: 'Release Bearing', slug: 'release-bearing', vehicle_system: 'transmission', level: 2, parent_id: 'trans-clutch' },
      ]
    },
    {
      id: 'trans-diff', name: 'Differential', slug: 'differential', vehicle_system: 'transmission', level: 1,
      children: [
        { id: 'trans-diff-ring', name: 'Ring Gear', slug: 'ring-gear', vehicle_system: 'transmission', level: 2, parent_id: 'trans-diff' },
        { id: 'trans-diff-pinion', name: 'Pinion Gear', slug: 'pinion-gear', vehicle_system: 'transmission', level: 2, parent_id: 'trans-diff' },
        { id: 'trans-diff-spider', name: 'Spider Gears', slug: 'spider-gears', vehicle_system: 'transmission', level: 2, parent_id: 'trans-diff' },
      ]
    },
    {
      id: 'trans-drive', name: 'Driveline', slug: 'driveline', vehicle_system: 'transmission', level: 1,
      children: [
        { id: 'trans-drive-shaft', name: 'Driveshaft', slug: 'driveshaft', vehicle_system: 'transmission', level: 2, parent_id: 'trans-drive' },
        { id: 'trans-drive-cv', name: 'CV Joints', slug: 'cv-joints', vehicle_system: 'transmission', level: 2, parent_id: 'trans-drive' },
        { id: 'trans-drive-axle', name: 'Axle Shafts', slug: 'axle-shafts', vehicle_system: 'transmission', level: 2, parent_id: 'trans-drive' },
        { id: 'trans-drive-ujoint', name: 'U-Joints', slug: 'u-joints', vehicle_system: 'transmission', level: 2, parent_id: 'trans-drive' },
      ]
    },
  ],

  brakes: [
    {
      id: 'brake-disc', name: 'Disc Brake Assembly', slug: 'disc-brakes', vehicle_system: 'brakes', level: 1,
      children: [
        { id: 'brake-disc-rotor', name: 'Brake Rotors', slug: 'brake-rotors', vehicle_system: 'brakes', level: 2, parent_id: 'brake-disc' },
        { id: 'brake-disc-pad', name: 'Brake Pads', slug: 'brake-pads', vehicle_system: 'brakes', level: 2, parent_id: 'brake-disc' },
        { id: 'brake-disc-caliper', name: 'Brake Calipers', slug: 'brake-calipers', vehicle_system: 'brakes', level: 2, parent_id: 'brake-disc' },
      ]
    },
    {
      id: 'brake-drum', name: 'Drum Brake Assembly', slug: 'drum-brakes', vehicle_system: 'brakes', level: 1,
      children: [
        { id: 'brake-drum-drum', name: 'Brake Drums', slug: 'brake-drums', vehicle_system: 'brakes', level: 2, parent_id: 'brake-drum' },
        { id: 'brake-drum-shoe', name: 'Brake Shoes', slug: 'brake-shoes', vehicle_system: 'brakes', level: 2, parent_id: 'brake-drum' },
        { id: 'brake-drum-cylinder', name: 'Wheel Cylinders', slug: 'wheel-cylinders', vehicle_system: 'brakes', level: 2, parent_id: 'brake-drum' },
      ]
    },
    {
      id: 'brake-hydraulic', name: 'Hydraulic System', slug: 'brake-hydraulics', vehicle_system: 'brakes', level: 1,
      children: [
        { id: 'brake-hyd-master', name: 'Master Cylinder', slug: 'master-cylinder', vehicle_system: 'brakes', level: 2, parent_id: 'brake-hydraulic' },
        { id: 'brake-hyd-line', name: 'Brake Lines', slug: 'brake-lines', vehicle_system: 'brakes', level: 2, parent_id: 'brake-hydraulic' },
        { id: 'brake-hyd-fluid', name: 'Brake Fluid Reservoir', slug: 'brake-fluid-reservoir', vehicle_system: 'brakes', level: 2, parent_id: 'brake-hydraulic' },
      ]
    },
    {
      id: 'brake-abs', name: 'ABS System', slug: 'abs-system', vehicle_system: 'brakes', level: 1,
      children: [
        { id: 'brake-abs-module', name: 'ABS Module', slug: 'abs-module', vehicle_system: 'brakes', level: 2, parent_id: 'brake-abs' },
        { id: 'brake-abs-sensor', name: 'Wheel Speed Sensors', slug: 'wheel-speed-sensors', vehicle_system: 'brakes', level: 2, parent_id: 'brake-abs' },
        { id: 'brake-abs-pump', name: 'ABS Pump', slug: 'abs-pump', vehicle_system: 'brakes', level: 2, parent_id: 'brake-abs' },
      ]
    },
    {
      id: 'brake-regen', name: 'Regenerative Braking (EV/Hybrid)', slug: 'regen-braking', vehicle_system: 'brakes', level: 1,
      description: 'Energy recovery braking system',
      children: [
        { id: 'brake-regen-control', name: 'Regen Controller', slug: 'regen-controller', vehicle_system: 'brakes', level: 2, parent_id: 'brake-regen' },
        { id: 'brake-regen-blend', name: 'Brake Blending Module', slug: 'brake-blending', vehicle_system: 'brakes', level: 2, parent_id: 'brake-regen' },
      ]
    },
    {
      id: 'brake-parking', name: 'Parking Brake', slug: 'parking-brake', vehicle_system: 'brakes', level: 1,
      children: [
        { id: 'brake-park-cable', name: 'Parking Brake Cable', slug: 'parking-brake-cable', vehicle_system: 'brakes', level: 2, parent_id: 'brake-parking' },
        { id: 'brake-park-lever', name: 'Parking Brake Lever/Switch', slug: 'parking-brake-lever', vehicle_system: 'brakes', level: 2, parent_id: 'brake-parking' },
        { id: 'brake-park-epb', name: 'Electronic Parking Brake', slug: 'electronic-parking-brake', vehicle_system: 'brakes', level: 2, parent_id: 'brake-parking' },
      ]
    },
  ],

  suspension: [
    {
      id: 'susp-front', name: 'Front Suspension', slug: 'front-suspension', vehicle_system: 'suspension', level: 1,
      children: [
        { id: 'susp-front-strut', name: 'Front Struts/Shocks', slug: 'front-struts', vehicle_system: 'suspension', level: 2, parent_id: 'susp-front' },
        { id: 'susp-front-spring', name: 'Front Springs', slug: 'front-springs', vehicle_system: 'suspension', level: 2, parent_id: 'susp-front' },
        { id: 'susp-front-control', name: 'Control Arms', slug: 'front-control-arms', vehicle_system: 'suspension', level: 2, parent_id: 'susp-front' },
        { id: 'susp-front-ball', name: 'Ball Joints', slug: 'ball-joints', vehicle_system: 'suspension', level: 2, parent_id: 'susp-front' },
        { id: 'susp-front-sway', name: 'Front Sway Bar', slug: 'front-sway-bar', vehicle_system: 'suspension', level: 2, parent_id: 'susp-front' },
      ]
    },
    {
      id: 'susp-rear', name: 'Rear Suspension', slug: 'rear-suspension', vehicle_system: 'suspension', level: 1,
      children: [
        { id: 'susp-rear-shock', name: 'Rear Shocks', slug: 'rear-shocks', vehicle_system: 'suspension', level: 2, parent_id: 'susp-rear' },
        { id: 'susp-rear-spring', name: 'Rear Springs', slug: 'rear-springs', vehicle_system: 'suspension', level: 2, parent_id: 'susp-rear' },
        { id: 'susp-rear-trailing', name: 'Trailing Arms', slug: 'trailing-arms', vehicle_system: 'suspension', level: 2, parent_id: 'susp-rear' },
        { id: 'susp-rear-sway', name: 'Rear Sway Bar', slug: 'rear-sway-bar', vehicle_system: 'suspension', level: 2, parent_id: 'susp-rear' },
      ]
    },
    {
      id: 'susp-air', name: 'Air Suspension', slug: 'air-suspension', vehicle_system: 'suspension', level: 1,
      description: 'Pneumatic suspension system',
      children: [
        { id: 'susp-air-spring', name: 'Air Springs', slug: 'air-springs', vehicle_system: 'suspension', level: 2, parent_id: 'susp-air' },
        { id: 'susp-air-comp', name: 'Air Compressor', slug: 'air-compressor', vehicle_system: 'suspension', level: 2, parent_id: 'susp-air' },
        { id: 'susp-air-valve', name: 'Air Valves', slug: 'air-valves', vehicle_system: 'suspension', level: 2, parent_id: 'susp-air' },
        { id: 'susp-air-control', name: 'Ride Height Sensors', slug: 'ride-height-sensors', vehicle_system: 'suspension', level: 2, parent_id: 'susp-air' },
      ]
    },
    {
      id: 'susp-bushings', name: 'Bushings & Mounts', slug: 'bushings-mounts', vehicle_system: 'suspension', level: 1,
      children: [
        { id: 'susp-bush-control', name: 'Control Arm Bushings', slug: 'control-arm-bushings', vehicle_system: 'suspension', level: 2, parent_id: 'susp-bushings' },
        { id: 'susp-bush-sway', name: 'Sway Bar Bushings', slug: 'sway-bar-bushings', vehicle_system: 'suspension', level: 2, parent_id: 'susp-bushings' },
        { id: 'susp-bush-strut', name: 'Strut Mounts', slug: 'strut-mounts', vehicle_system: 'suspension', level: 2, parent_id: 'susp-bushings' },
      ]
    },
  ],

  steering: [
    {
      id: 'steer-rack', name: 'Steering Rack', slug: 'steering-rack', vehicle_system: 'steering', level: 1,
      children: [
        { id: 'steer-rack-inner', name: 'Inner Tie Rods', slug: 'inner-tie-rods', vehicle_system: 'steering', level: 2, parent_id: 'steer-rack' },
        { id: 'steer-rack-outer', name: 'Outer Tie Rods', slug: 'outer-tie-rods', vehicle_system: 'steering', level: 2, parent_id: 'steer-rack' },
        { id: 'steer-rack-boot', name: 'Rack Boots', slug: 'rack-boots', vehicle_system: 'steering', level: 2, parent_id: 'steer-rack' },
      ]
    },
    {
      id: 'steer-column', name: 'Steering Column', slug: 'steering-column', vehicle_system: 'steering', level: 1,
      children: [
        { id: 'steer-col-wheel', name: 'Steering Wheel', slug: 'steering-wheel', vehicle_system: 'steering', level: 2, parent_id: 'steer-column' },
        { id: 'steer-col-shaft', name: 'Steering Shaft', slug: 'steering-shaft', vehicle_system: 'steering', level: 2, parent_id: 'steer-column' },
        { id: 'steer-col-ujoint', name: 'Steering U-Joint', slug: 'steering-u-joint', vehicle_system: 'steering', level: 2, parent_id: 'steer-column' },
      ]
    },
    {
      id: 'steer-power', name: 'Power Steering', slug: 'power-steering', vehicle_system: 'steering', level: 1,
      children: [
        { id: 'steer-power-pump', name: 'Power Steering Pump', slug: 'power-steering-pump', vehicle_system: 'steering', level: 2, parent_id: 'steer-power' },
        { id: 'steer-power-hose', name: 'Power Steering Hoses', slug: 'power-steering-hoses', vehicle_system: 'steering', level: 2, parent_id: 'steer-power' },
        { id: 'steer-power-reservoir', name: 'PS Fluid Reservoir', slug: 'ps-fluid-reservoir', vehicle_system: 'steering', level: 2, parent_id: 'steer-power' },
        { id: 'steer-power-eps', name: 'Electric Power Steering Motor', slug: 'eps-motor', vehicle_system: 'steering', level: 2, parent_id: 'steer-power' },
      ]
    },
  ],

  body: [
    {
      id: 'body-exterior', name: 'Exterior Panels', slug: 'exterior-panels', vehicle_system: 'body', level: 1,
      children: [
        { id: 'body-ext-hood', name: 'Hood/Bonnet', slug: 'hood-bonnet', vehicle_system: 'body', level: 2, parent_id: 'body-exterior' },
        { id: 'body-ext-frunk', name: 'Front Trunk (Frunk)', slug: 'frunk', vehicle_system: 'body', level: 2, parent_id: 'body-exterior' },
        { id: 'body-ext-fender', name: 'Fenders', slug: 'fenders', vehicle_system: 'body', level: 2, parent_id: 'body-exterior' },
        { id: 'body-ext-door', name: 'Doors', slug: 'doors', vehicle_system: 'body', level: 2, parent_id: 'body-exterior' },
        { id: 'body-ext-trunk', name: 'Trunk/Boot Lid', slug: 'trunk-boot-lid', vehicle_system: 'body', level: 2, parent_id: 'body-exterior' },
        { id: 'body-ext-roof', name: 'Roof Panel', slug: 'roof-panel', vehicle_system: 'body', level: 2, parent_id: 'body-exterior' },
        { id: 'body-ext-quarter', name: 'Quarter Panels', slug: 'quarter-panels', vehicle_system: 'body', level: 2, parent_id: 'body-exterior' },
      ]
    },
    {
      id: 'body-bumpers', name: 'Bumpers', slug: 'bumpers', vehicle_system: 'body', level: 1,
      children: [
        { id: 'body-bump-front', name: 'Front Bumper', slug: 'front-bumper', vehicle_system: 'body', level: 2, parent_id: 'body-bumpers' },
        { id: 'body-bump-rear', name: 'Rear Bumper', slug: 'rear-bumper', vehicle_system: 'body', level: 2, parent_id: 'body-bumpers' },
        { id: 'body-bump-reinforce', name: 'Bumper Reinforcement', slug: 'bumper-reinforcement', vehicle_system: 'body', level: 2, parent_id: 'body-bumpers' },
      ]
    },
    {
      id: 'body-glass', name: 'Glass & Windows', slug: 'glass-windows', vehicle_system: 'body', level: 1,
      children: [
        { id: 'body-glass-wind', name: 'Windshield', slug: 'windshield', vehicle_system: 'body', level: 2, parent_id: 'body-glass' },
        { id: 'body-glass-rear', name: 'Rear Window', slug: 'rear-window', vehicle_system: 'body', level: 2, parent_id: 'body-glass' },
        { id: 'body-glass-side', name: 'Side Windows', slug: 'side-windows', vehicle_system: 'body', level: 2, parent_id: 'body-glass' },
        { id: 'body-glass-roof', name: 'Glass Roof/Panoramic', slug: 'glass-roof', vehicle_system: 'body', level: 2, parent_id: 'body-glass' },
        { id: 'body-glass-mirror', name: 'Mirrors', slug: 'mirrors', vehicle_system: 'body', level: 2, parent_id: 'body-glass' },
      ]
    },
    {
      id: 'body-trim', name: 'Exterior Trim', slug: 'exterior-trim', vehicle_system: 'body', level: 1,
      children: [
        { id: 'body-trim-grille', name: 'Grille', slug: 'grille', vehicle_system: 'body', level: 2, parent_id: 'body-trim' },
        { id: 'body-trim-molding', name: 'Body Moldings', slug: 'body-moldings', vehicle_system: 'body', level: 2, parent_id: 'body-trim' },
        { id: 'body-trim-emblem', name: 'Emblems & Badges', slug: 'emblems-badges', vehicle_system: 'body', level: 2, parent_id: 'body-trim' },
      ]
    },
  ],

  electrical: [
    {
      id: 'elec-power', name: 'Power System', slug: 'power-system', vehicle_system: 'electrical', level: 1,
      children: [
        { id: 'elec-power-battery', name: '12V Battery', slug: '12v-battery', vehicle_system: 'electrical', level: 2, parent_id: 'elec-power' },
        { id: 'elec-power-alt', name: 'Alternator', slug: 'alternator', vehicle_system: 'electrical', level: 2, parent_id: 'elec-power' },
        { id: 'elec-power-starter', name: 'Starter Motor', slug: 'starter-motor', vehicle_system: 'electrical', level: 2, parent_id: 'elec-power' },
      ]
    },
    {
      id: 'elec-control', name: 'Control Modules', slug: 'control-modules', vehicle_system: 'electrical', level: 1,
      children: [
        { id: 'elec-ctrl-ecu', name: 'ECU/PCM', slug: 'ecu-pcm', vehicle_system: 'electrical', level: 2, parent_id: 'elec-control' },
        { id: 'elec-ctrl-bcm', name: 'Body Control Module', slug: 'bcm', vehicle_system: 'electrical', level: 2, parent_id: 'elec-control' },
        { id: 'elec-ctrl-tcm', name: 'Transmission Control Module', slug: 'tcm', vehicle_system: 'electrical', level: 2, parent_id: 'elec-control' },
        { id: 'elec-ctrl-vcu', name: 'Vehicle Control Unit (EV)', slug: 'vcu', vehicle_system: 'electrical', level: 2, parent_id: 'elec-control' },
      ]
    },
    {
      id: 'elec-sensors', name: 'Sensors', slug: 'sensors', vehicle_system: 'electrical', level: 1,
      children: [
        { id: 'elec-sens-o2', name: 'Oxygen Sensors', slug: 'oxygen-sensors', vehicle_system: 'electrical', level: 2, parent_id: 'elec-sensors' },
        { id: 'elec-sens-map', name: 'MAP Sensor', slug: 'map-sensor', vehicle_system: 'electrical', level: 2, parent_id: 'elec-sensors' },
        { id: 'elec-sens-maf', name: 'MAF Sensor', slug: 'maf-sensor', vehicle_system: 'electrical', level: 2, parent_id: 'elec-sensors' },
        { id: 'elec-sens-cam', name: 'Camshaft Position Sensor', slug: 'cam-position-sensor', vehicle_system: 'electrical', level: 2, parent_id: 'elec-sensors' },
        { id: 'elec-sens-crank', name: 'Crankshaft Position Sensor', slug: 'crank-position-sensor', vehicle_system: 'electrical', level: 2, parent_id: 'elec-sensors' },
      ]
    },
    {
      id: 'elec-wiring', name: 'Wiring & Harnesses', slug: 'wiring-harnesses', vehicle_system: 'electrical', level: 1,
      children: [
        { id: 'elec-wire-main', name: 'Main Wiring Harness', slug: 'main-harness', vehicle_system: 'electrical', level: 2, parent_id: 'elec-wiring' },
        { id: 'elec-wire-engine', name: 'Engine Harness', slug: 'engine-harness', vehicle_system: 'electrical', level: 2, parent_id: 'elec-wiring' },
        { id: 'elec-wire-hv', name: 'High Voltage Harness (EV)', slug: 'hv-harness', vehicle_system: 'electrical', level: 2, parent_id: 'elec-wiring' },
      ]
    },
  ],

  interior: [
    {
      id: 'int-seats', name: 'Seating', slug: 'seating', vehicle_system: 'interior', level: 1,
      children: [
        { id: 'int-seat-front', name: 'Front Seats', slug: 'front-seats', vehicle_system: 'interior', level: 2, parent_id: 'int-seats' },
        { id: 'int-seat-rear', name: 'Rear Seats', slug: 'rear-seats', vehicle_system: 'interior', level: 2, parent_id: 'int-seats' },
        { id: 'int-seat-heat', name: 'Seat Heaters', slug: 'seat-heaters', vehicle_system: 'interior', level: 2, parent_id: 'int-seats' },
        { id: 'int-seat-vent', name: 'Seat Ventilation', slug: 'seat-ventilation', vehicle_system: 'interior', level: 2, parent_id: 'int-seats' },
      ]
    },
    {
      id: 'int-dash', name: 'Dashboard', slug: 'dashboard', vehicle_system: 'interior', level: 1,
      children: [
        { id: 'int-dash-cluster', name: 'Instrument Cluster', slug: 'instrument-cluster', vehicle_system: 'interior', level: 2, parent_id: 'int-dash' },
        { id: 'int-dash-display', name: 'Center Display/Infotainment', slug: 'center-display', vehicle_system: 'interior', level: 2, parent_id: 'int-dash' },
        { id: 'int-dash-hud', name: 'Head-Up Display', slug: 'head-up-display', vehicle_system: 'interior', level: 2, parent_id: 'int-dash' },
      ]
    },
    {
      id: 'int-trim', name: 'Interior Trim', slug: 'interior-trim', vehicle_system: 'interior', level: 1,
      children: [
        { id: 'int-trim-door', name: 'Door Panels', slug: 'door-panels', vehicle_system: 'interior', level: 2, parent_id: 'int-trim' },
        { id: 'int-trim-console', name: 'Center Console', slug: 'center-console', vehicle_system: 'interior', level: 2, parent_id: 'int-trim' },
        { id: 'int-trim-headliner', name: 'Headliner', slug: 'headliner', vehicle_system: 'interior', level: 2, parent_id: 'int-trim' },
        { id: 'int-trim-carpet', name: 'Carpet/Floor Covering', slug: 'carpet-floor', vehicle_system: 'interior', level: 2, parent_id: 'int-trim' },
      ]
    },
  ],

  hvac: [
    {
      id: 'hvac-ac', name: 'Air Conditioning', slug: 'air-conditioning', vehicle_system: 'hvac', level: 1,
      children: [
        { id: 'hvac-ac-comp', name: 'AC Compressor', slug: 'ac-compressor', vehicle_system: 'hvac', level: 2, parent_id: 'hvac-ac' },
        { id: 'hvac-ac-cond', name: 'Condenser', slug: 'condenser', vehicle_system: 'hvac', level: 2, parent_id: 'hvac-ac' },
        { id: 'hvac-ac-evap', name: 'Evaporator', slug: 'evaporator', vehicle_system: 'hvac', level: 2, parent_id: 'hvac-ac' },
        { id: 'hvac-ac-exp', name: 'Expansion Valve', slug: 'expansion-valve', vehicle_system: 'hvac', level: 2, parent_id: 'hvac-ac' },
        { id: 'hvac-ac-heatpump', name: 'Heat Pump (EV)', slug: 'heat-pump', vehicle_system: 'hvac', level: 2, parent_id: 'hvac-ac' },
      ]
    },
    {
      id: 'hvac-heat', name: 'Heating System', slug: 'heating-system', vehicle_system: 'hvac', level: 1,
      children: [
        { id: 'hvac-heat-core', name: 'Heater Core', slug: 'heater-core', vehicle_system: 'hvac', level: 2, parent_id: 'hvac-heat' },
        { id: 'hvac-heat-blower', name: 'Blower Motor', slug: 'blower-motor', vehicle_system: 'hvac', level: 2, parent_id: 'hvac-heat' },
        { id: 'hvac-heat-ptc', name: 'PTC Heater (EV)', slug: 'ptc-heater', vehicle_system: 'hvac', level: 2, parent_id: 'hvac-heat' },
      ]
    },
    {
      id: 'hvac-control', name: 'Climate Control', slug: 'climate-control', vehicle_system: 'hvac', level: 1,
      children: [
        { id: 'hvac-ctrl-unit', name: 'Climate Control Unit', slug: 'climate-control-unit', vehicle_system: 'hvac', level: 2, parent_id: 'hvac-control' },
        { id: 'hvac-ctrl-actuator', name: 'Blend Door Actuators', slug: 'blend-door-actuators', vehicle_system: 'hvac', level: 2, parent_id: 'hvac-control' },
      ]
    },
  ],

  fuel_system: [
    {
      id: 'fuel-tank', name: 'Fuel Tank Assembly', slug: 'fuel-tank', vehicle_system: 'fuel_system', level: 1,
      children: [
        { id: 'fuel-tank-main', name: 'Fuel Tank', slug: 'fuel-tank-main', vehicle_system: 'fuel_system', level: 2, parent_id: 'fuel-tank' },
        { id: 'fuel-tank-pump', name: 'Fuel Pump', slug: 'fuel-pump', vehicle_system: 'fuel_system', level: 2, parent_id: 'fuel-tank' },
        { id: 'fuel-tank-sender', name: 'Fuel Level Sender', slug: 'fuel-level-sender', vehicle_system: 'fuel_system', level: 2, parent_id: 'fuel-tank' },
      ]
    },
    {
      id: 'fuel-delivery', name: 'Fuel Delivery', slug: 'fuel-delivery', vehicle_system: 'fuel_system', level: 1,
      children: [
        { id: 'fuel-del-rail', name: 'Fuel Rail', slug: 'fuel-rail', vehicle_system: 'fuel_system', level: 2, parent_id: 'fuel-delivery' },
        { id: 'fuel-del-inj', name: 'Fuel Injectors', slug: 'fuel-injectors', vehicle_system: 'fuel_system', level: 2, parent_id: 'fuel-delivery' },
        { id: 'fuel-del-filter', name: 'Fuel Filter', slug: 'fuel-filter', vehicle_system: 'fuel_system', level: 2, parent_id: 'fuel-delivery' },
        { id: 'fuel-del-reg', name: 'Fuel Pressure Regulator', slug: 'fuel-pressure-regulator', vehicle_system: 'fuel_system', level: 2, parent_id: 'fuel-delivery' },
      ]
    },
  ],

  exhaust: [
    {
      id: 'exh-manifold', name: 'Exhaust Manifold', slug: 'exhaust-manifold', vehicle_system: 'exhaust', level: 1,
      children: [
        { id: 'exh-man-header', name: 'Headers', slug: 'headers', vehicle_system: 'exhaust', level: 2, parent_id: 'exh-manifold' },
        { id: 'exh-man-gasket', name: 'Manifold Gaskets', slug: 'manifold-gaskets', vehicle_system: 'exhaust', level: 2, parent_id: 'exh-manifold' },
      ]
    },
    {
      id: 'exh-emissions', name: 'Emissions Control', slug: 'emissions-control', vehicle_system: 'exhaust', level: 1,
      children: [
        { id: 'exh-em-cat', name: 'Catalytic Converter', slug: 'catalytic-converter', vehicle_system: 'exhaust', level: 2, parent_id: 'exh-emissions' },
        { id: 'exh-em-dpf', name: 'Diesel Particulate Filter', slug: 'dpf', vehicle_system: 'exhaust', level: 2, parent_id: 'exh-emissions' },
        { id: 'exh-em-egr', name: 'EGR Valve', slug: 'egr-valve', vehicle_system: 'exhaust', level: 2, parent_id: 'exh-emissions' },
      ]
    },
    {
      id: 'exh-system', name: 'Exhaust System', slug: 'exhaust-system', vehicle_system: 'exhaust', level: 1,
      children: [
        { id: 'exh-sys-pipe', name: 'Exhaust Pipes', slug: 'exhaust-pipes', vehicle_system: 'exhaust', level: 2, parent_id: 'exh-system' },
        { id: 'exh-sys-muffler', name: 'Muffler', slug: 'muffler', vehicle_system: 'exhaust', level: 2, parent_id: 'exh-system' },
        { id: 'exh-sys-tip', name: 'Exhaust Tips', slug: 'exhaust-tips', vehicle_system: 'exhaust', level: 2, parent_id: 'exh-system' },
      ]
    },
  ],

  wheels_tyres: [
    {
      id: 'wheel-assembly', name: 'Wheel Assembly', slug: 'wheel-assembly', vehicle_system: 'wheels_tyres', level: 1,
      children: [
        { id: 'wheel-rim', name: 'Wheels/Rims', slug: 'wheels-rims', vehicle_system: 'wheels_tyres', level: 2, parent_id: 'wheel-assembly' },
        { id: 'wheel-tyre', name: 'Tyres', slug: 'tyres', vehicle_system: 'wheels_tyres', level: 2, parent_id: 'wheel-assembly' },
        { id: 'wheel-hub', name: 'Wheel Hub', slug: 'wheel-hub', vehicle_system: 'wheels_tyres', level: 2, parent_id: 'wheel-assembly' },
        { id: 'wheel-bearing', name: 'Wheel Bearings', slug: 'wheel-bearings', vehicle_system: 'wheels_tyres', level: 2, parent_id: 'wheel-assembly' },
      ]
    },
    {
      id: 'wheel-tpms', name: 'TPMS System', slug: 'tpms-system', vehicle_system: 'wheels_tyres', level: 1,
      children: [
        { id: 'wheel-tpms-sensor', name: 'TPMS Sensors', slug: 'tpms-sensors', vehicle_system: 'wheels_tyres', level: 2, parent_id: 'wheel-tpms' },
        { id: 'wheel-tpms-module', name: 'TPMS Module', slug: 'tpms-module', vehicle_system: 'wheels_tyres', level: 2, parent_id: 'wheel-tpms' },
      ]
    },
  ],

  safety: [
    {
      id: 'safe-airbag', name: 'Airbag System', slug: 'airbag-system', vehicle_system: 'safety', level: 1,
      children: [
        { id: 'safe-air-front', name: 'Front Airbags', slug: 'front-airbags', vehicle_system: 'safety', level: 2, parent_id: 'safe-airbag' },
        { id: 'safe-air-side', name: 'Side Airbags', slug: 'side-airbags', vehicle_system: 'safety', level: 2, parent_id: 'safe-airbag' },
        { id: 'safe-air-curtain', name: 'Curtain Airbags', slug: 'curtain-airbags', vehicle_system: 'safety', level: 2, parent_id: 'safe-airbag' },
        { id: 'safe-air-module', name: 'Airbag Control Module', slug: 'airbag-module', vehicle_system: 'safety', level: 2, parent_id: 'safe-airbag' },
      ]
    },
    {
      id: 'safe-belt', name: 'Seatbelt System', slug: 'seatbelt-system', vehicle_system: 'safety', level: 1,
      children: [
        { id: 'safe-belt-retract', name: 'Seatbelt Retractors', slug: 'seatbelt-retractors', vehicle_system: 'safety', level: 2, parent_id: 'safe-belt' },
        { id: 'safe-belt-buckle', name: 'Seatbelt Buckles', slug: 'seatbelt-buckles', vehicle_system: 'safety', level: 2, parent_id: 'safe-belt' },
        { id: 'safe-belt-pretens', name: 'Pretensioners', slug: 'pretensioners', vehicle_system: 'safety', level: 2, parent_id: 'safe-belt' },
      ]
    },
    {
      id: 'safe-adas', name: 'ADAS Systems', slug: 'adas-systems', vehicle_system: 'safety', level: 1,
      description: 'Advanced Driver Assistance Systems',
      children: [
        { id: 'safe-adas-camera', name: 'ADAS Cameras', slug: 'adas-cameras', vehicle_system: 'safety', level: 2, parent_id: 'safe-adas' },
        { id: 'safe-adas-radar', name: 'Radar Sensors', slug: 'radar-sensors', vehicle_system: 'safety', level: 2, parent_id: 'safe-adas' },
        { id: 'safe-adas-lidar', name: 'LiDAR Sensors', slug: 'lidar-sensors', vehicle_system: 'safety', level: 2, parent_id: 'safe-adas' },
        { id: 'safe-adas-ultrasonic', name: 'Ultrasonic Sensors', slug: 'ultrasonic-sensors', vehicle_system: 'safety', level: 2, parent_id: 'safe-adas' },
        { id: 'safe-adas-ecu', name: 'ADAS Control Unit', slug: 'adas-control-unit', vehicle_system: 'safety', level: 2, parent_id: 'safe-adas' },
      ]
    },
  ],

  lighting: [
    {
      id: 'light-exterior', name: 'Exterior Lighting', slug: 'exterior-lighting', vehicle_system: 'lighting', level: 1,
      children: [
        { id: 'light-ext-head', name: 'Headlights', slug: 'headlights', vehicle_system: 'lighting', level: 2, parent_id: 'light-exterior',
          children: [
            { id: 'light-ext-head-led', name: 'LED Headlight Module', slug: 'led-headlight', vehicle_system: 'lighting', level: 3, parent_id: 'light-ext-head' },
            { id: 'light-ext-head-matrix', name: 'Matrix LED Unit', slug: 'matrix-led', vehicle_system: 'lighting', level: 3, parent_id: 'light-ext-head' },
            { id: 'light-ext-head-laser', name: 'Laser Light Module', slug: 'laser-light', vehicle_system: 'lighting', level: 3, parent_id: 'light-ext-head' },
          ]
        },
        { id: 'light-ext-tail', name: 'Taillights', slug: 'taillights', vehicle_system: 'lighting', level: 2, parent_id: 'light-exterior' },
        { id: 'light-ext-fog', name: 'Fog Lights', slug: 'fog-lights', vehicle_system: 'lighting', level: 2, parent_id: 'light-exterior' },
        { id: 'light-ext-turn', name: 'Turn Signals', slug: 'turn-signals', vehicle_system: 'lighting', level: 2, parent_id: 'light-exterior' },
        { id: 'light-ext-drl', name: 'Daytime Running Lights', slug: 'drl', vehicle_system: 'lighting', level: 2, parent_id: 'light-exterior' },
      ]
    },
    {
      id: 'light-interior', name: 'Interior Lighting', slug: 'interior-lighting', vehicle_system: 'lighting', level: 1,
      children: [
        { id: 'light-int-dome', name: 'Dome Lights', slug: 'dome-lights', vehicle_system: 'lighting', level: 2, parent_id: 'light-interior' },
        { id: 'light-int-ambient', name: 'Ambient Lighting', slug: 'ambient-lighting', vehicle_system: 'lighting', level: 2, parent_id: 'light-interior' },
        { id: 'light-int-footwell', name: 'Footwell Lights', slug: 'footwell-lights', vehicle_system: 'lighting', level: 2, parent_id: 'light-interior' },
      ]
    },
  ],
};

// Helper functions
export function getAllCategories(): PartCategory[] {
  const categories: PartCategory[] = [];
  
  const collectCategories = (cats: PartCategory[]) => {
    for (const cat of cats) {
      categories.push(cat);
      if (cat.children) {
        collectCategories(cat.children);
      }
    }
  };
  
  Object.values(PARTS_TAXONOMY).forEach(systemCategories => {
    collectCategories(systemCategories);
  });
  
  return categories;
}

export function findCategoryById(id: string): PartCategory | undefined {
  const searchInCategories = (cats: PartCategory[]): PartCategory | undefined => {
    for (const cat of cats) {
      if (cat.id === id) return cat;
      if (cat.children) {
        const found = searchInCategories(cat.children);
        if (found) return found;
      }
    }
    return undefined;
  };
  
  for (const systemCategories of Object.values(PARTS_TAXONOMY)) {
    const found = searchInCategories(systemCategories);
    if (found) return found;
  }
  
  return undefined;
}

export function getCategoryPath(id: string): PartCategory[] {
  const path: PartCategory[] = [];
  
  const searchPath = (cats: PartCategory[], currentPath: PartCategory[]): boolean => {
    for (const cat of cats) {
      const newPath = [...currentPath, cat];
      if (cat.id === id) {
        path.push(...newPath);
        return true;
      }
      if (cat.children && searchPath(cat.children, newPath)) {
        return true;
      }
    }
    return false;
  };
  
  for (const systemCategories of Object.values(PARTS_TAXONOMY)) {
    if (searchPath(systemCategories, [])) break;
  }
  
  return path;
}

export function countPartsInSystem(system: VehicleSystem): number {
  let count = 0;
  
  const countCategories = (cats: PartCategory[]) => {
    for (const cat of cats) {
      count++;
      if (cat.children) {
        countCategories(cat.children);
      }
    }
  };
  
  countCategories(PARTS_TAXONOMY[system] || []);
  return count;
}
