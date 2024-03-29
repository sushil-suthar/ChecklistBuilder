import { NgModule } from '@angular/core';

import { ChecklistBuilderComponent } from './checklist-builder.component';
import { CreateQuestionComponent } from '../create-question/create-question.component';
import { QuestionSettingsComponent } from '../question-settings/question-settings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material';
import { QuestionListComponent } from '../question-list/question-list.component';



@NgModule({
  declarations: [ChecklistBuilderComponent,
                  CreateQuestionComponent,
                  QuestionSettingsComponent,
                  QuestionListComponent],
  imports: [NgbModule, MatTabsModule]
})
export class ChecklistBuilderModule {}
