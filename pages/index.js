import React from "react";
import Head from "next/head";
import { Input, DatePicker, Select, Switch } from "../src/components";
import { useForm, FormProvider } from "react-hook-form";
import { Grid, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "45px",
    fontWeight: 100,
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
      fontSize: "40px",
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
  fixed: true,
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
          <Input name="description" label="Descrição" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input name="value" label="Valor" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            name="installments"
            label="Parcelas"
            options={installmentsOptions}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Select
            options={paymentMethods}
            getOptionLabel={(option) => option.name}
            label="Meio de pagamento"
            name="paymentMethod"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={5}>
          <Switch name="fixed" label="Gasto fixo" />
        </Grid>
        <Grid item xs={12} sm={7}>
          <DatePicker name="dueDate" format={"dd"} label="Dia de Pagamento" />
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
