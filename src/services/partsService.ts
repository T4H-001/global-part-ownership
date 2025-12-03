import {
  PartCategory,
  PartsCatalogItem,
  PartRegistration,
  PartLifecycleEvent,
  Vehicle,
  Manufacturer,
  VehicleSystem,
  PartCondition,
  PartEventType,
  PartIdentificationMethod,
} from '@/types/parts';
import { PARTS_TAXONOMY, getAllCategories, findCategoryById } from '@/data/partsTaxonomy';

/**
 * Parts Service - Phase 1 Foundation
 * 
 * Currently provides:
 * - Full parts taxonomy (14 vehicle systems, 200+ part categories)
 * - Local data operations
 * 
 * Database tables required for full functionality:
 * - vehicles
 * - part_registrations  
 * - part_lifecycle_events
 * - parts_catalog
 * - manufacturers
 * 
 * These will be created in the Cloud tab.
 */
class PartsService {
  // ==================== TAXONOMY (LOCAL DATA) ====================
  
  getTaxonomy(): Record<VehicleSystem, PartCategory[]> {
    return PARTS_TAXONOMY;
  }

  getAllCategories(): PartCategory[] {
    return getAllCategories();
  }

  getCategoryById(id: string): PartCategory | undefined {
    return findCategoryById(id);
  }

  getCategoriesBySystem(system: VehicleSystem): PartCategory[] {
    return PARTS_TAXONOMY[system] || [];
  }

  getSystemsWithCounts(): { system: VehicleSystem; name: string; count: number }[] {
    const systems = Object.keys(PARTS_TAXONOMY) as VehicleSystem[];
    return systems.map(system => {
      const categories = this.getCategoriesBySystem(system);
      let count = 0;
      const countCategories = (cats: PartCategory[]) => {
        for (const cat of cats) {
          count++;
          if (cat.children) countCategories(cat.children);
        }
      };
      countCategories(categories);
      return {
        system,
        name: system.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        count,
      };
    });
  }

  // ==================== UNIQUE IDENTIFIER GENERATION ====================

  generateUniqueIdentifier(method: PartIdentificationMethod, serialNumber?: string): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8);
    const prefix = method.substring(0, 2).toUpperCase();
    
    if (serialNumber) {
      return `${prefix}-${serialNumber}-${timestamp}`;
    }
    
    return `${prefix}-${timestamp}-${random}`.toUpperCase();
  }

  // ==================== STUB METHODS (Require DB tables) ====================
  // These will be implemented once database tables are created via Cloud tab

  async registerVehicle(vehicle: Partial<Vehicle>): Promise<Vehicle | null> {
    console.warn('Database tables not yet created. Create via Cloud tab.');
    return null;
  }

  async registerPart(part: Partial<PartRegistration>): Promise<PartRegistration | null> {
    console.warn('Database tables not yet created. Create via Cloud tab.');
    return null;
  }

  async addLifecycleEvent(event: Partial<PartLifecycleEvent>): Promise<PartLifecycleEvent | null> {
    console.warn('Database tables not yet created. Create via Cloud tab.');
    return null;
  }

  async getUserVehicles(userId: string): Promise<Vehicle[]> {
    console.warn('Database tables not yet created. Create via Cloud tab.');
    return [];
  }

  async getUserParts(userId: string): Promise<PartRegistration[]> {
    console.warn('Database tables not yet created. Create via Cloud tab.');
    return [];
  }

  async getPartLifecycle(partId: string): Promise<PartLifecycleEvent[]> {
    console.warn('Database tables not yet created. Create via Cloud tab.');
    return [];
  }
}

export const partsService = new PartsService();
