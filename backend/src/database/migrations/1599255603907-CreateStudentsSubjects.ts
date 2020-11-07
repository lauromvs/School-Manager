import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateStudentsSubjects1599255603907
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'studentsSubjects',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'id_student',
            type: 'uuid',
          },
          {
            name: 'id_subject',
            type: 'uuid',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'studentsSubjects',
      new TableForeignKey({
        name: 'idStudent',
        columnNames: ['id_student'],
        referencedColumnNames: ['id'],
        referencedTableName: 'students',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'studentsSubjects',
      new TableForeignKey({
        name: 'idSubject',
        columnNames: ['id_subject'],
        referencedColumnNames: ['id'],
        referencedTableName: 'subjects',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('studentsSubjects', 'idSubject');
    await queryRunner.dropForeignKey('studentsSubjects', 'idStudent');
    await queryRunner.dropTable('subjects');
  }
}
