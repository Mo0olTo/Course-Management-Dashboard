import { Component, input, Input, output, TemplateRef } from '@angular/core';
import { badgeClass, categoryColor } from '../../utils/table-style.utils';
import { DatePipe } from '@angular/common';
import { TableColumn } from '../../../features/courses/models/table.column';


@Component({
  selector: 'app-reusable-table',
  imports: [DatePipe],
  templateUrl: './reusable-table.html',
  styleUrl: './reusable-table.scss',
})
export class ReusableTable {

  columns = input.required<TableColumn[]>();
  data = input.required<any[]>();

  view = output<string>();
  edit = output<string>();
  delete = output<string>();

  badgeClass = badgeClass;
  categoryColor = categoryColor;
}
