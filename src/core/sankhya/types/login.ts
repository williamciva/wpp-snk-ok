export type Login = {
    NOMUSU: {
      $: string,
    },
    INTERNO: {
      $: string,
    },
}

export type OutLogin = {
  callID: {
    $: string
  },
  jsessionid: {
    $: string
  },
  idusu: {
    $: string
  }
}