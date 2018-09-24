import { TestBed } from '@angular/core/testing';

import { UserSettingsServicesService } from './user-settings-services.service';

describe('UserSettingsServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserSettingsServicesService = TestBed.get(UserSettingsServicesService);
    expect(service).toBeTruthy();
  });
});
