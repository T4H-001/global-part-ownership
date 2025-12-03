// Vehicle Systems - Top level categories
export type VehicleSystem = 
  | 'body'
  | 'engine'
  | 'transmission'
  | 'suspension'
  | 'brakes'
  | 'electrical'
  | 'interior'
  | 'hvac'
  | 'fuel_system'
  | 'exhaust'
  | 'wheels_tyres'
  | 'steering'
  | 'safety'
  | 'lighting';

export type PartCondition = 
  | 'new'
  | 'refurbished'
  | 'used'
  | 'damaged'
  | 'recycled'
  | 'disposed';

export type PartIdentificationMethod = 
  | 'qr_code'
  | 'rfid_tag'
  | 'serial_number'
  | 'oem_stamp'
  | 'laser_etched'
  | 'vin_linked';

export type PartVerificationStatus = 
  | 'unverified'
  | 'self_reported'
  | 'manufacturer_verified'
  | 'third_party_verified'
  | 'blockchain_anchored';

export type PartEventType = 
  | 'manufactured'
  | 'distributed'
  | 'sold'
  | 'installed'
  | 'serviced'
  | 'removed'
  | 'transferred'
  | 'recalled'
  | 'warranty_claim'
  | 'recycled'
  | 'disposed';

// Part Category (hierarchical taxonomy)
export interface PartCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  vehicle_system: VehicleSystem;
  parent_id?: string;
  level: number; // 1=Assembly, 2=Component, 3=Sub-component
  icon_name?: string;
  children?: PartCategory[];
  created_at?: string;
  updated_at?: string;
}

// Compatible vehicle model info
export interface CompatibleModel {
  make: string;
  model: string;
  years?: string;
  variant?: string;
}

// Parts Catalog (master list of part types)
export interface PartsCatalogItem {
  id: string;
  category_id: string;
  category?: PartCategory;
  name: string;
  description?: string;
  oem_part_number?: string;
  manufacturer_name?: string;
  manufacturer_id?: string;
  compatible_makes?: string[];
  compatible_models?: CompatibleModel[];
  specifications?: Record<string, any>;
  weight_kg?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
    unit: 'mm' | 'cm' | 'in';
  };
  materials?: string[];
  recyclable?: boolean;
  average_lifespan_km?: number;
  average_lifespan_years?: number;
  image_urls?: string[];
  created_at?: string;
  updated_at?: string;
}

// Vehicle
export interface Vehicle {
  id: string;
  vin: string;
  owner_id?: string;
  make: string;
  model: string;
  year: number;
  variant?: string;
  engine_code?: string;
  transmission_type?: string;
  body_type?: string;
  color?: string;
  registration_plate?: string;
  registration_state?: string;
  registration_country?: string;
  odometer_km?: number;
  last_service_date?: string;
  metadata?: Record<string, any>;
  created_at?: string;
  updated_at?: string;
}

// Part Registration (individual parts in the system)
export interface PartRegistration {
  id: string;
  catalog_part_id?: string;
  catalog_part?: PartsCatalogItem;
  serial_number?: string;
  batch_number?: string;
  unique_identifier: string;
  identification_method: PartIdentificationMethod;
  
  condition: PartCondition;
  verification_status: PartVerificationStatus;
  
  current_owner_id?: string;
  current_vehicle_id?: string;
  current_vehicle?: Vehicle;
  installed_position?: string;
  
  manufacturer_id?: string;
  manufacture_date?: string;
  manufacture_location?: string;
  
  warranty_expiry?: string;
  warranty_km_limit?: number;
  
  blockchain_tx_hash?: string;
  merkle_root?: string;
  
  custom_data?: Record<string, any>;
  created_at?: string;
  updated_at?: string;
}

// Part Lifecycle Event
export interface PartLifecycleEvent {
  id: string;
  part_registration_id: string;
  event_type: PartEventType;
  event_date?: string;
  
  performed_by?: string;
  business_id?: string;
  
  vehicle_id?: string;
  vehicle?: Vehicle;
  odometer_at_event?: number;
  
  location_name?: string;
  location_coordinates?: { lat: number; lng: number };
  
  from_owner_id?: string;
  to_owner_id?: string;
  
  notes?: string;
  attachments?: string[];
  
  event_hash?: string;
  blockchain_anchored?: boolean;
  
  created_at?: string;
}

// Manufacturer
export interface Manufacturer {
  id: string;
  name: string;
  code?: string;
  country?: string;
  website?: string;
  logo_url?: string;
  verified?: boolean;
  oem?: boolean;
  contact_email?: string;
  api_endpoint?: string;
  created_at?: string;
  updated_at?: string;
}

// Vehicle System metadata for UI
export interface VehicleSystemInfo {
  id: VehicleSystem;
  name: string;
  description: string;
  icon: string;
  color: string;
}

// Helper to get vehicle system display info
export const VEHICLE_SYSTEMS: VehicleSystemInfo[] = [
  { id: 'body', name: 'Body & Exterior', description: 'Panels, bumpers, doors, windows, mirrors', icon: 'Car', color: 'hsl(210, 70%, 50%)' },
  { id: 'engine', name: 'Engine', description: 'Engine block, pistons, valves, timing components', icon: 'Cog', color: 'hsl(0, 70%, 50%)' },
  { id: 'transmission', name: 'Transmission', description: 'Gearbox, clutch, differentials, driveshafts', icon: 'Settings2', color: 'hsl(30, 70%, 50%)' },
  { id: 'suspension', name: 'Suspension', description: 'Shocks, struts, springs, control arms', icon: 'ArrowUpDown', color: 'hsl(280, 70%, 50%)' },
  { id: 'brakes', name: 'Brakes', description: 'Rotors, pads, calipers, brake lines, ABS', icon: 'Disc', color: 'hsl(350, 70%, 50%)' },
  { id: 'electrical', name: 'Electrical', description: 'Battery, alternator, wiring, sensors, ECU', icon: 'Zap', color: 'hsl(45, 70%, 50%)' },
  { id: 'interior', name: 'Interior', description: 'Seats, dashboard, trim, controls, airbags', icon: 'Armchair', color: 'hsl(200, 50%, 50%)' },
  { id: 'hvac', name: 'HVAC', description: 'Air conditioning, heating, ventilation', icon: 'Wind', color: 'hsl(180, 60%, 50%)' },
  { id: 'fuel_system', name: 'Fuel System', description: 'Fuel tank, pump, injectors, lines', icon: 'Fuel', color: 'hsl(140, 60%, 40%)' },
  { id: 'exhaust', name: 'Exhaust', description: 'Manifold, catalytic converter, muffler, pipes', icon: 'Factory', color: 'hsl(0, 0%, 50%)' },
  { id: 'wheels_tyres', name: 'Wheels & Tyres', description: 'Wheels, tyres, hubcaps, TPMS', icon: 'Circle', color: 'hsl(220, 60%, 50%)' },
  { id: 'steering', name: 'Steering', description: 'Steering wheel, rack, column, power steering', icon: 'Navigation', color: 'hsl(160, 60%, 45%)' },
  { id: 'safety', name: 'Safety Systems', description: 'Airbags, seatbelts, crash sensors', icon: 'Shield', color: 'hsl(120, 60%, 40%)' },
  { id: 'lighting', name: 'Lighting', description: 'Headlights, taillights, indicators, interior lights', icon: 'Lightbulb', color: 'hsl(50, 80%, 55%)' },
];
