const styles = theme => ({
  root: {
    width: 300,
    margin: "auto",
    paddingTop: 150,
    "& h3": {
      textAlign: "center"
    }
  },
  input: {
    marginTop: 40
  },
  login: {
    width: 120,
    float: "right",
    marginTop: `${theme.hv.spacing.lg}px`
  },
  sentenceCase: {
    textTransform: `full-size-kana`
  }
});

export default styles;
