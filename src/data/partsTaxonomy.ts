import { PartCategory, VehicleSystem } from '@/types/parts';

// Comprehensive parts taxonomy - hierarchical structure
// Level 1 = Assembly, Level 2 = Component, Level 3 = Sub-component

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
      id: 'brake-parking', name: 'Parking Brake', slug: 'parking-brake', vehicle_system: 'brakes', level: 1,
      children: [
        { id: 'brake-park-cable', name: 'Parking Brake Cable', slug: 'parking-brake-cable', vehicle_system: 'brakes', level: 2, parent_id: 'brake-parking' },
        { id: 'brake-park-lever', name: 'Parking Brake Lever/Switch', slug: 'parking-brake-lever', vehicle_system: 'brakes', level: 2, parent_id: 'brake-parking' },
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
      ]
    },
  ],

  body: [
    {
      id: 'body-exterior', name: 'Exterior Panels', slug: 'exterior-panels', vehicle_system: 'body', level: 1,
      children: [
        { id: 'body-ext-hood', name: 'Hood/Bonnet', slug: 'hood-bonnet', vehicle_system: 'body', level: 2, parent_id: 'body-exterior' },
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
        { id: 'elec-power-battery', name: 'Battery', slug: 'battery', vehicle_system: 'electrical', level: 2, parent_id: 'elec-power' },
        { id: 'elec-power-alt', name: 'Alternator', slug: 'alternator', vehicle_system: 'electrical', level: 2, parent_id: 'elec-power' },
        { id: 'elec-power-starter', name: 'Starter Motor', slug: 'starter-motor', vehicle_system: 'electrical', level: 2, parent_id: 'elec-power' },
      ]
    },
    {
      id: 'elec-control', name: 'Control Modules', slug: 'control-modules', vehicle_system: 'electrical', level: 1,
      children: [
        { id: 'elec-ctrl-ecu', name: 'ECU/PCM', slug: 'ecu-pcm', vehicle_system: 'electrical', level: 2, parent_id: 'elec-control' },
        { id: 'elec-ctrl-bcm', name: 'Body Control Module', slug: 'body-control-module', vehicle_system: 'electrical', level: 2, parent_id: 'elec-control' },
        { id: 'elec-ctrl-tcm', name: 'Transmission Control Module', slug: 'transmission-control-module', vehicle_system: 'electrical', level: 2, parent_id: 'elec-control' },
      ]
    },
    {
      id: 'elec-sensors', name: 'Sensors', slug: 'sensors', vehicle_system: 'electrical', level: 1,
      children: [
        { id: 'elec-sens-o2', name: 'Oxygen Sensors', slug: 'oxygen-sensors', vehicle_system: 'electrical', level: 2, parent_id: 'elec-sensors' },
        { id: 'elec-sens-maf', name: 'MAF Sensor', slug: 'maf-sensor', vehicle_system: 'electrical', level: 2, parent_id: 'elec-sensors' },
        { id: 'elec-sens-map', name: 'MAP Sensor', slug: 'map-sensor', vehicle_system: 'electrical', level: 2, parent_id: 'elec-sensors' },
        { id: 'elec-sens-tps', name: 'Throttle Position Sensor', slug: 'throttle-position-sensor', vehicle_system: 'electrical', level: 2, parent_id: 'elec-sensors' },
        { id: 'elec-sens-crank', name: 'Crankshaft Position Sensor', slug: 'crankshaft-position-sensor', vehicle_system: 'electrical', level: 2, parent_id: 'elec-sensors' },
        { id: 'elec-sens-cam', name: 'Camshaft Position Sensor', slug: 'camshaft-position-sensor', vehicle_system: 'electrical', level: 2, parent_id: 'elec-sensors' },
      ]
    },
    {
      id: 'elec-wiring', name: 'Wiring & Harnesses', slug: 'wiring-harnesses', vehicle_system: 'electrical', level: 1,
      children: [
        { id: 'elec-wire-main', name: 'Main Wiring Harness', slug: 'main-wiring-harness', vehicle_system: 'electrical', level: 2, parent_id: 'elec-wiring' },
        { id: 'elec-wire-fuse', name: 'Fuse Box', slug: 'fuse-box', vehicle_system: 'electrical', level: 2, parent_id: 'elec-wiring' },
        { id: 'elec-wire-relay', name: 'Relays', slug: 'relays', vehicle_system: 'electrical', level: 2, parent_id: 'elec-wiring' },
      ]
    },
  ],

  interior: [
    {
      id: 'int-seats', name: 'Seating', slug: 'seating', vehicle_system: 'interior', level: 1,
      children: [
        { id: 'int-seat-front', name: 'Front Seats', slug: 'front-seats', vehicle_system: 'interior', level: 2, parent_id: 'int-seats' },
        { id: 'int-seat-rear', name: 'Rear Seats', slug: 'rear-seats', vehicle_system: 'interior', level: 2, parent_id: 'int-seats' },
        { id: 'int-seat-belt', name: 'Seatbelts', slug: 'seatbelts', vehicle_system: 'interior', level: 2, parent_id: 'int-seats' },
      ]
    },
    {
      id: 'int-dash', name: 'Dashboard', slug: 'dashboard', vehicle_system: 'interior', level: 1,
      children: [
        { id: 'int-dash-cluster', name: 'Instrument Cluster', slug: 'instrument-cluster', vehicle_system: 'interior', level: 2, parent_id: 'int-dash' },
        { id: 'int-dash-infotain', name: 'Infotainment System', slug: 'infotainment-system', vehicle_system: 'interior', level: 2, parent_id: 'int-dash' },
        { id: 'int-dash-glove', name: 'Glove Box', slug: 'glove-box', vehicle_system: 'interior', level: 2, parent_id: 'int-dash' },
      ]
    },
    {
      id: 'int-trim', name: 'Interior Trim', slug: 'interior-trim', vehicle_system: 'interior', level: 1,
      children: [
        { id: 'int-trim-door', name: 'Door Panels', slug: 'door-panels', vehicle_system: 'interior', level: 2, parent_id: 'int-trim' },
        { id: 'int-trim-headliner', name: 'Headliner', slug: 'headliner', vehicle_system: 'interior', level: 2, parent_id: 'int-trim' },
        { id: 'int-trim-carpet', name: 'Carpeting', slug: 'carpeting', vehicle_system: 'interior', level: 2, parent_id: 'int-trim' },
        { id: 'int-trim-console', name: 'Center Console', slug: 'center-console', vehicle_system: 'interior', level: 2, parent_id: 'int-trim' },
      ]
    },
  ],

  hvac: [
    {
      id: 'hvac-ac', name: 'Air Conditioning', slug: 'air-conditioning', vehicle_system: 'hvac', level: 1,
      children: [
        { id: 'hvac-ac-comp', name: 'AC Compressor', slug: 'ac-compressor', vehicle_system: 'hvac', level: 2, parent_id: 'hvac-ac' },
        { id: 'hvac-ac-cond', name: 'AC Condenser', slug: 'ac-condenser', vehicle_system: 'hvac', level: 2, parent_id: 'hvac-ac' },
        { id: 'hvac-ac-evap', name: 'Evaporator', slug: 'evaporator', vehicle_system: 'hvac', level: 2, parent_id: 'hvac-ac' },
        { id: 'hvac-ac-drier', name: 'Receiver/Drier', slug: 'receiver-drier', vehicle_system: 'hvac', level: 2, parent_id: 'hvac-ac' },
      ]
    },
    {
      id: 'hvac-heat', name: 'Heating', slug: 'heating', vehicle_system: 'hvac', level: 1,
      children: [
        { id: 'hvac-heat-core', name: 'Heater Core', slug: 'heater-core', vehicle_system: 'hvac', level: 2, parent_id: 'hvac-heat' },
        { id: 'hvac-heat-valve', name: 'Heater Valve', slug: 'heater-valve', vehicle_system: 'hvac', level: 2, parent_id: 'hvac-heat' },
      ]
    },
    {
      id: 'hvac-vent', name: 'Ventilation', slug: 'ventilation', vehicle_system: 'hvac', level: 1,
      children: [
        { id: 'hvac-vent-blower', name: 'Blower Motor', slug: 'blower-motor', vehicle_system: 'hvac', level: 2, parent_id: 'hvac-vent' },
        { id: 'hvac-vent-cabin', name: 'Cabin Air Filter', slug: 'cabin-air-filter', vehicle_system: 'hvac', level: 2, parent_id: 'hvac-vent' },
        { id: 'hvac-vent-duct', name: 'Air Ducts', slug: 'air-ducts', vehicle_system: 'hvac', level: 2, parent_id: 'hvac-vent' },
      ]
    },
  ],

  fuel_system: [
    {
      id: 'fuel-storage', name: 'Fuel Storage', slug: 'fuel-storage', vehicle_system: 'fuel_system', level: 1,
      children: [
        { id: 'fuel-stor-tank', name: 'Fuel Tank', slug: 'fuel-tank', vehicle_system: 'fuel_system', level: 2, parent_id: 'fuel-storage' },
        { id: 'fuel-stor-cap', name: 'Fuel Cap', slug: 'fuel-cap', vehicle_system: 'fuel_system', level: 2, parent_id: 'fuel-storage' },
        { id: 'fuel-stor-neck', name: 'Filler Neck', slug: 'filler-neck', vehicle_system: 'fuel_system', level: 2, parent_id: 'fuel-storage' },
      ]
    },
    {
      id: 'fuel-delivery', name: 'Fuel Delivery', slug: 'fuel-delivery', vehicle_system: 'fuel_system', level: 1,
      children: [
        { id: 'fuel-del-pump', name: 'Fuel Pump', slug: 'fuel-pump', vehicle_system: 'fuel_system', level: 2, parent_id: 'fuel-delivery' },
        { id: 'fuel-del-filter', name: 'Fuel Filter', slug: 'fuel-filter', vehicle_system: 'fuel_system', level: 2, parent_id: 'fuel-delivery' },
        { id: 'fuel-del-line', name: 'Fuel Lines', slug: 'fuel-lines', vehicle_system: 'fuel_system', level: 2, parent_id: 'fuel-delivery' },
        { id: 'fuel-del-rail', name: 'Fuel Rail', slug: 'fuel-rail', vehicle_system: 'fuel_system', level: 2, parent_id: 'fuel-delivery' },
      ]
    },
    {
      id: 'fuel-injection', name: 'Fuel Injection', slug: 'fuel-injection', vehicle_system: 'fuel_system', level: 1,
      children: [
        { id: 'fuel-inj-injector', name: 'Fuel Injectors', slug: 'fuel-injectors', vehicle_system: 'fuel_system', level: 2, parent_id: 'fuel-injection' },
        { id: 'fuel-inj-throttle', name: 'Throttle Body', slug: 'throttle-body', vehicle_system: 'fuel_system', level: 2, parent_id: 'fuel-injection' },
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
      id: 'exh-emission', name: 'Emission Control', slug: 'emission-control', vehicle_system: 'exhaust', level: 1,
      children: [
        { id: 'exh-em-cat', name: 'Catalytic Converter', slug: 'catalytic-converter', vehicle_system: 'exhaust', level: 2, parent_id: 'exh-emission' },
        { id: 'exh-em-egr', name: 'EGR Valve', slug: 'egr-valve', vehicle_system: 'exhaust', level: 2, parent_id: 'exh-emission' },
        { id: 'exh-em-dpf', name: 'DPF (Diesel)', slug: 'dpf', vehicle_system: 'exhaust', level: 2, parent_id: 'exh-emission' },
      ]
    },
    {
      id: 'exh-system', name: 'Exhaust System', slug: 'exhaust-system', vehicle_system: 'exhaust', level: 1,
      children: [
        { id: 'exh-sys-pipe', name: 'Exhaust Pipes', slug: 'exhaust-pipes', vehicle_system: 'exhaust', level: 2, parent_id: 'exh-system' },
        { id: 'exh-sys-muffler', name: 'Muffler', slug: 'muffler', vehicle_system: 'exhaust', level: 2, parent_id: 'exh-system' },
        { id: 'exh-sys-resonator', name: 'Resonator', slug: 'resonator', vehicle_system: 'exhaust', level: 2, parent_id: 'exh-system' },
        { id: 'exh-sys-tip', name: 'Exhaust Tips', slug: 'exhaust-tips', vehicle_system: 'exhaust', level: 2, parent_id: 'exh-system' },
      ]
    },
  ],

  wheels_tyres: [
    {
      id: 'whl-wheels', name: 'Wheels', slug: 'wheels', vehicle_system: 'wheels_tyres', level: 1,
      children: [
        { id: 'whl-whl-alloy', name: 'Alloy Wheels', slug: 'alloy-wheels', vehicle_system: 'wheels_tyres', level: 2, parent_id: 'whl-wheels' },
        { id: 'whl-whl-steel', name: 'Steel Wheels', slug: 'steel-wheels', vehicle_system: 'wheels_tyres', level: 2, parent_id: 'whl-wheels' },
        { id: 'whl-whl-spare', name: 'Spare Wheel', slug: 'spare-wheel', vehicle_system: 'wheels_tyres', level: 2, parent_id: 'whl-wheels' },
      ]
    },
    {
      id: 'whl-tyres', name: 'Tyres', slug: 'tyres', vehicle_system: 'wheels_tyres', level: 1,
      children: [
        { id: 'whl-tyre-summer', name: 'Summer Tyres', slug: 'summer-tyres', vehicle_system: 'wheels_tyres', level: 2, parent_id: 'whl-tyres' },
        { id: 'whl-tyre-winter', name: 'Winter Tyres', slug: 'winter-tyres', vehicle_system: 'wheels_tyres', level: 2, parent_id: 'whl-tyres' },
        { id: 'whl-tyre-allseason', name: 'All-Season Tyres', slug: 'all-season-tyres', vehicle_system: 'wheels_tyres', level: 2, parent_id: 'whl-tyres' },
      ]
    },
    {
      id: 'whl-hardware', name: 'Wheel Hardware', slug: 'wheel-hardware', vehicle_system: 'wheels_tyres', level: 1,
      children: [
        { id: 'whl-hw-lug', name: 'Lug Nuts/Bolts', slug: 'lug-nuts-bolts', vehicle_system: 'wheels_tyres', level: 2, parent_id: 'whl-hardware' },
        { id: 'whl-hw-hub', name: 'Hub Caps', slug: 'hub-caps', vehicle_system: 'wheels_tyres', level: 2, parent_id: 'whl-hardware' },
        { id: 'whl-hw-tpms', name: 'TPMS Sensors', slug: 'tpms-sensors', vehicle_system: 'wheels_tyres', level: 2, parent_id: 'whl-hardware' },
        { id: 'whl-hw-bearing', name: 'Wheel Bearings', slug: 'wheel-bearings', vehicle_system: 'wheels_tyres', level: 2, parent_id: 'whl-hardware' },
      ]
    },
  ],

  safety: [
    {
      id: 'safe-restraint', name: 'Restraint Systems', slug: 'restraint-systems', vehicle_system: 'safety', level: 1,
      children: [
        { id: 'safe-rest-airbag', name: 'Airbags', slug: 'airbags', vehicle_system: 'safety', level: 2, parent_id: 'safe-restraint',
          children: [
            { id: 'safe-rest-airbag-driver', name: 'Driver Airbag', slug: 'driver-airbag', vehicle_system: 'safety', level: 3, parent_id: 'safe-rest-airbag' },
            { id: 'safe-rest-airbag-pass', name: 'Passenger Airbag', slug: 'passenger-airbag', vehicle_system: 'safety', level: 3, parent_id: 'safe-rest-airbag' },
            { id: 'safe-rest-airbag-side', name: 'Side Airbags', slug: 'side-airbags', vehicle_system: 'safety', level: 3, parent_id: 'safe-rest-airbag' },
            { id: 'safe-rest-airbag-curtain', name: 'Curtain Airbags', slug: 'curtain-airbags', vehicle_system: 'safety', level: 3, parent_id: 'safe-rest-airbag' },
          ]
        },
        { id: 'safe-rest-belt', name: 'Seatbelt Systems', slug: 'seatbelt-systems', vehicle_system: 'safety', level: 2, parent_id: 'safe-restraint' },
        { id: 'safe-rest-pretens', name: 'Pretensioners', slug: 'pretensioners', vehicle_system: 'safety', level: 2, parent_id: 'safe-restraint' },
      ]
    },
    {
      id: 'safe-sensor', name: 'Safety Sensors', slug: 'safety-sensors', vehicle_system: 'safety', level: 1,
      children: [
        { id: 'safe-sens-crash', name: 'Crash Sensors', slug: 'crash-sensors', vehicle_system: 'safety', level: 2, parent_id: 'safe-sensor' },
        { id: 'safe-sens-occupant', name: 'Occupant Sensors', slug: 'occupant-sensors', vehicle_system: 'safety', level: 2, parent_id: 'safe-sensor' },
        { id: 'safe-sens-park', name: 'Parking Sensors', slug: 'parking-sensors', vehicle_system: 'safety', level: 2, parent_id: 'safe-sensor' },
        { id: 'safe-sens-blind', name: 'Blind Spot Sensors', slug: 'blind-spot-sensors', vehicle_system: 'safety', level: 2, parent_id: 'safe-sensor' },
      ]
    },
    {
      id: 'safe-child', name: 'Child Safety', slug: 'child-safety', vehicle_system: 'safety', level: 1,
      children: [
        { id: 'safe-child-isofix', name: 'ISOFIX Anchors', slug: 'isofix-anchors', vehicle_system: 'safety', level: 2, parent_id: 'safe-child' },
        { id: 'safe-child-lock', name: 'Child Locks', slug: 'child-locks', vehicle_system: 'safety', level: 2, parent_id: 'safe-child' },
      ]
    },
  ],

  lighting: [
    {
      id: 'light-exterior', name: 'Exterior Lighting', slug: 'exterior-lighting', vehicle_system: 'lighting', level: 1,
      children: [
        { id: 'light-ext-head', name: 'Headlights', slug: 'headlights', vehicle_system: 'lighting', level: 2, parent_id: 'light-exterior',
          children: [
            { id: 'light-ext-head-bulb', name: 'Headlight Bulbs', slug: 'headlight-bulbs', vehicle_system: 'lighting', level: 3, parent_id: 'light-ext-head' },
            { id: 'light-ext-head-hous', name: 'Headlight Housing', slug: 'headlight-housing', vehicle_system: 'lighting', level: 3, parent_id: 'light-ext-head' },
            { id: 'light-ext-head-led', name: 'LED Modules', slug: 'led-modules', vehicle_system: 'lighting', level: 3, parent_id: 'light-ext-head' },
          ]
        },
        { id: 'light-ext-tail', name: 'Taillights', slug: 'taillights', vehicle_system: 'lighting', level: 2, parent_id: 'light-exterior' },
        { id: 'light-ext-turn', name: 'Turn Signals', slug: 'turn-signals', vehicle_system: 'lighting', level: 2, parent_id: 'light-exterior' },
        { id: 'light-ext-fog', name: 'Fog Lights', slug: 'fog-lights', vehicle_system: 'lighting', level: 2, parent_id: 'light-exterior' },
        { id: 'light-ext-drl', name: 'DRL (Daytime Running Lights)', slug: 'daytime-running-lights', vehicle_system: 'lighting', level: 2, parent_id: 'light-exterior' },
      ]
    },
    {
      id: 'light-interior', name: 'Interior Lighting', slug: 'interior-lighting', vehicle_system: 'lighting', level: 1,
      children: [
        { id: 'light-int-dome', name: 'Dome Light', slug: 'dome-light', vehicle_system: 'lighting', level: 2, parent_id: 'light-interior' },
        { id: 'light-int-dash', name: 'Dashboard Lights', slug: 'dashboard-lights', vehicle_system: 'lighting', level: 2, parent_id: 'light-interior' },
        { id: 'light-int-map', name: 'Map Lights', slug: 'map-lights', vehicle_system: 'lighting', level: 2, parent_id: 'light-interior' },
        { id: 'light-int-foot', name: 'Footwell Lights', slug: 'footwell-lights', vehicle_system: 'lighting', level: 2, parent_id: 'light-interior' },
      ]
    },
  ],
};

// Helper function to flatten taxonomy for search
export function flattenTaxonomy(categories: PartCategory[]): PartCategory[] {
  const result: PartCategory[] = [];
  
  function traverse(cats: PartCategory[]) {
    for (const cat of cats) {
      result.push(cat);
      if (cat.children) {
        traverse(cat.children);
      }
    }
  }
  
  traverse(categories);
  return result;
}

// Get all categories flat
export function getAllCategories(): PartCategory[] {
  const allCategories: PartCategory[] = [];
  
  for (const system of Object.keys(PARTS_TAXONOMY) as VehicleSystem[]) {
    allCategories.push(...flattenTaxonomy(PARTS_TAXONOMY[system]));
  }
  
  return allCategories;
}

// Find category by slug
export function findCategoryBySlug(slug: string): PartCategory | undefined {
  return getAllCategories().find(cat => cat.slug === slug);
}

// Find category by ID
export function findCategoryById(id: string): PartCategory | undefined {
  return getAllCategories().find(cat => cat.id === id);
}

// Get category path (breadcrumb)
export function getCategoryPath(categoryId: string): PartCategory[] {
  const path: PartCategory[] = [];
  let current = findCategoryById(categoryId);
  
  while (current) {
    path.unshift(current);
    current = current.parent_id ? findCategoryById(current.parent_id) : undefined;
  }
  
  return path;
}

// Count parts in taxonomy
export function getTaxonomyStats() {
  const categories = getAllCategories();
  return {
    totalCategories: categories.length,
    systems: Object.keys(PARTS_TAXONOMY).length,
    assemblies: categories.filter(c => c.level === 1).length,
    components: categories.filter(c => c.level === 2).length,
    subComponents: categories.filter(c => c.level === 3).length,
  };
}
