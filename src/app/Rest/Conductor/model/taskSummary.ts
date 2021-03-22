/**
 * 
 * 
 *
 * 
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface TaskSummary {
    workflowId?: string;
    workflowType?: string;
    correlationId?: string;
    scheduledTime?: string;
    startTime?: string;
    updateTime?: string;
    endTime?: string;
    status?: TaskSummary.StatusEnum;
    reasonForIncompletion?: string;
    executionTime?: number;
    queueWaitTime?: number;
    taskDefName?: string;
    taskType?: string;
    input?: string;
    output?: string;
    taskId?: string;
    externalInputPayloadStoragePath?: string;
    externalOutputPayloadStoragePath?: string;
    workflowPriority?: number;
}
export namespace TaskSummary {
    export type StatusEnum = 'IN_PROGRESS' | 'CANCELED' | 'FAILED' | 'FAILED_WITH_TERMINAL_ERROR' | 'COMPLETED' | 'COMPLETED_WITH_ERRORS' | 'SCHEDULED' | 'TIMED_OUT' | 'SKIPPED';
    export const StatusEnum = {
        INPROGRESS: 'IN_PROGRESS' as StatusEnum,
        CANCELED: 'CANCELED' as StatusEnum,
        FAILED: 'FAILED' as StatusEnum,
        FAILEDWITHTERMINALERROR: 'FAILED_WITH_TERMINAL_ERROR' as StatusEnum,
        COMPLETED: 'COMPLETED' as StatusEnum,
        COMPLETEDWITHERRORS: 'COMPLETED_WITH_ERRORS' as StatusEnum,
        SCHEDULED: 'SCHEDULED' as StatusEnum,
        TIMEDOUT: 'TIMED_OUT' as StatusEnum,
        SKIPPED: 'SKIPPED' as StatusEnum
    }
}
