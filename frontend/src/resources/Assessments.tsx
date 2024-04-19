//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const AssessmentsTitle = () => {
  const record = useRecordContext();
  return <span>Assessments {record ? `"${record.bodyChartFront}"` : ''}</span>;
};

export const AssessmentsList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <ImageField source="bodyChartFront" />
      <ImageField source="bodyChartLeftSide" />
      <ImageField source="bodyChartRightSide" />
      <ImageField source="bodyChartBack" />
      <NumberField source="adjustmentAngles" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const AssessmentsEdit = () => (
  <Edit title={<AssessmentsTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ImageInput source="bodyChartFront" />
        </Grid>
        <Grid item xs={4}>
          <ImageInput source="bodyChartLeftSide" />
        </Grid>
        <Grid item xs={4}>
          <ImageInput source="bodyChartRightSide" />
        </Grid>
        <Grid item xs={4}>
          <ImageInput source="bodyChartBack" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="adjustmentAngles" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const AssessmentsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ImageInput source="bodyChartFront" />
        </Grid>
        <Grid item xs={4}>
          <ImageInput source="bodyChartLeftSide" />
        </Grid>
        <Grid item xs={4}>
          <ImageInput source="bodyChartRightSide" />
        </Grid>
        <Grid item xs={4}>
          <ImageInput source="bodyChartBack" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="adjustmentAngles" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
  ,
];