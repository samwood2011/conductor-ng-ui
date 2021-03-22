export * from './admin.service';
import { AdminService } from './admin.service';
export * from './eventServices.service';
import { EventServicesService } from './eventServices.service';
export * from './healthCheck.service';
import { HealthCheckService } from './healthCheck.service';
export * from './metadataManagement.service';
import { MetadataManagementService } from './metadataManagement.service';
export * from './taskManagement.service';
import { TaskManagementService } from './taskManagement.service';
export * from './workflowBulkManagement.service';
import { WorkflowBulkManagementService } from './workflowBulkManagement.service';
export * from './workflowManagement.service';
import { WorkflowManagementService } from './workflowManagement.service';
export const APIS = [AdminService, EventServicesService, HealthCheckService, MetadataManagementService, TaskManagementService, WorkflowBulkManagementService, WorkflowManagementService];
