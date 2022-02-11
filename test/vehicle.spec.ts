import { expect } from 'vitest';
import { describe, it } from 'vitest';
import { faker } from '../src';

describe('vehicle', () => {
  describe('vehicle()', () => {
    it('returns a random vehicle', () => {
      const vehicle = faker.vehicle.vehicle();

      expect(vehicle).toBe('Ford Explorer');
    });
  });

  describe('manufacturer()', () => {
    it('returns random manufacturer', () => {
      const manufacturer = faker.vehicle.manufacturer();

      expect(manufacturer).toBe('Porsche');
    });
  });

  describe('type()', () => {
    it('returns random vehicle type', () => {
      const type = faker.vehicle.type();

      expect(type).toBe('Minivan');
    });
  });

  describe('fuel()', () => {
    it('returns a fuel type', () => {
      const fuel = faker.vehicle.fuel();

      expect(fuel).toBe('Hybrid');
    });
  });

  describe('vin()', () => {
    it('returns valid vin number', () => {
      const vin = faker.vehicle.vin();
      expect(vin).match(
        /^([A-HJ-NPR-Z0-9]{10}[A-HJ-NPR-Z0-9]{1}[A-HJ-NPR-Z0-9]{1}\d{5})$/
      );
    });
  });

  describe('color()', () => {
    it('returns a random color', () => {
      const color = faker.vehicle.color();

      expect(color).toBe('black');
    });
  });

  describe('vrm()', () => {
    it('returns a random vrm', () => {
      const vrm = faker.vehicle.vrm();

      expect(vrm).toBe('MF59EEW');
    });
  });

  describe('bicycle()', () => {
    it('returns a random type of bicycle', () => {
      const bicycle = faker.vehicle.bicycle();

      expect(bicycle).toBe('Adventure Road Bicycle');
    });
  });
});
