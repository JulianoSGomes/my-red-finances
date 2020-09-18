import React from "react";
import Head from "next/head";
import { Input, DatePicker, Select } from "../src/components";
import { useForm, FormProvider } from "react-hook-form";
import {
  Grid,
  Button,
  Container,
  TextField,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";

const paymentMethods = [
  { name: "Nubank" },
  { name: "Sicoob" },
  { name: "Inter" },
  { name: "Boleto" },
];
const categories = [{ name: "Lazer" }, { name: "Mercado" }, { name: "Posto" }];

const installmentsOptions = Array.from(Array(36).keys()).map((item) =>
  String(item)
);

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "45px",
    fontWeight: 100,
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(8),
  },
  label: {
    display: "block",
  },
  input: {
    width: 200,
  },
  listbox: {
    width: 200,
    margin: 0,
    padding: 0,
    zIndex: 1,
    position: "absolute",
    listStyle: "none",
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
    maxHeight: 200,
    border: "1px solid rgba(0,0,0,.25)",
    '& li[data-focus="true"]': {
      backgroundColor: "#4a8df6",
      color: "white",
      cursor: "pointer",
    },
    "& li:active": {
      backgroundColor: "#2977f5",
      color: "white",
    },
  },
}));
const defaultValues = {
  description: "",
  value: "",
  installments: "",
  paymentMethod: "",
  category: "",
  purchaseDate: "",
  fixed: "",
  dueDate: "",
};

export default function Home() {
  const classes = useStyles();
  const methods = useForm({
    defaultValues,
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Container className={classes.container} maxWidth="xs">
      <Head>
        <title>My Red Finance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={classes.title}>My Red Finances</div>
        <FormProvider {...methods} moduleName="teste">
          <Form onSubmit={onSubmit} methods={methods} />
        </FormProvider>
      </main>
    </Container>
  );
}

const Form = ({ onSubmit, methods }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <Input name="description" label="Descrição" />
        </Grid>
        <Grid item xs={6}>
          <Input name="value" label="Valor" />
        </Grid>
        <Grid item xs={6}>
          <Select
            name="installments"
            label="Parcelas"
            options={installmentsOptions}
            // getOptionLabel={(option) => option.name}
          />
        </Grid>

        <Grid item xs={6}>
          <Select
            options={paymentMethods}
            getOptionLabel={(option) => option.name}
            label="Método de pagamento"
            name="paymentMethod"
          />
        </Grid>
        <Grid item xs={6}>
          <Select
            options={categories}
            getOptionLabel={(option) => option.name}
            label="Categoria"
            name="category"
          />
        </Grid>
        <Grid item xs={12}>
          <DatePicker name="purchaseDate" label="Data da compra" />
        </Grid>
        <Grid item xs={5}>
          <FormControlLabel
            control={
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
              />
            }
            label="Gasto fixo"
          />
        </Grid>
        <Grid item xs={7}>
          <DatePicker
            name="dueDate"
            format={"dd"}
            views={["date"]}
            label="Dia de Pagamento"
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth color="primary" variant="contained" type="submit">
            SAVE
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth color="secondary" variant="contained" type="submit">
            RESET
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
