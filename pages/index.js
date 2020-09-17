import React from "react";
import Head from "next/head";
import { Input } from "../src/components";
import { useForm, FormProvider } from "react-hook-form";
import { Grid, Button, Container, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import Autocomplete from "@material-ui/lab/Autocomplete";

const paymentMethods = [
  { name: "Nubank" },
  { name: "Sicoob" },
  { name: "Inter" },
  { name: "Boleto" },
];
const categories = [{ name: "Lazer" }, { name: "Mercado" }, { name: "Posto" }];

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
  desciption: "",
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
          <Input name="value" label="Valor" />
        </Grid>
        <Grid item xs={12}>
          <Input name="installments" label="Parcelas" />
        </Grid>

        <Grid item xs={12}>
          <Autocomplete
            id="combo-box-demo"
            options={paymentMethods}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                margin="dense"
                fullwidth
                label="Método de pagamento"
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            id="combo-box-demo"
            options={categories}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                margin="dense"
                fullwidth
                label="Categoria"
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Input name="purchaseDate" label="Data da compra" />
        </Grid>
        <Grid item xs={12}>
          <Input name="fixed" label="Gasto fixo" />
        </Grid>
        <Grid item xs={12}>
          <Input name="dueDate" label="Data de Pagamento" />
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
