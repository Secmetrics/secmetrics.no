window.searchIndex = {
  fields: ["title", "body"],
  pipeline: ["trimmer", "stopWordFilter", "stemmer"],
  ref: "id",
  version: "0.9.5",
  index: {
    body: {
      root: {
        docs: {},
        df: 0,
        c: {
          docs: {},
          df: 0,
          o: {
            docs: {},
            df: 0,
            n: {
              docs: {},
              df: 0,
              t: {
                docs: {},
                df: 0,
                a: {
                  docs: {},
                  df: 0,
                  c: {
                    docs: {},
                    df: 0,
                    t: {
                      docs: { "http://127.0.0.1:1111/contact/": { tf: 1.0 } },
                      df: 1,
                    },
                  },
                },
              },
            },
          },
        },
        h: {
          docs: {},
          df: 0,
          o: {
            docs: {},
            df: 0,
            m: {
              docs: {},
              df: 0,
              e: { docs: { "http://127.0.0.1:1111/": { tf: 1.0 } }, df: 1 },
            },
          },
        },
        p: {
          docs: {},
          df: 0,
          a: {
            docs: {},
            df: 0,
            g: {
              docs: {},
              df: 0,
              e: { docs: { "http://127.0.0.1:1111/": { tf: 1.0 } }, df: 1 },
            },
          },
          o: {
            docs: {},
            df: 0,
            l: {
              docs: {},
              df: 0,
              i: {
                docs: {},
                df: 0,
                c: {
                  docs: {},
                  df: 0,
                  i: {
                    docs: { "http://127.0.0.1:1111/privacy/": { tf: 1.0 } },
                    df: 1,
                  },
                },
              },
            },
          },
          r: {
            docs: {},
            df: 0,
            i: {
              docs: {},
              df: 0,
              v: {
                docs: {},
                df: 0,
                a: {
                  docs: {},
                  df: 0,
                  c: {
                    docs: {},
                    df: 0,
                    i: {
                      docs: { "http://127.0.0.1:1111/privacy/": { tf: 1.0 } },
                      df: 1,
                    },
                  },
                },
              },
            },
          },
        },
        s: {
          docs: {},
          df: 0,
          e: {
            docs: {},
            df: 0,
            r: {
              docs: {},
              df: 0,
              v: {
                docs: {},
                df: 0,
                i: {
                  docs: {},
                  df: 0,
                  c: {
                    docs: { "http://127.0.0.1:1111/terms/": { tf: 1.0 } },
                    df: 1,
                  },
                },
              },
            },
          },
        },
        t: {
          docs: {},
          df: 0,
          e: {
            docs: {},
            df: 0,
            r: {
              docs: {},
              df: 0,
              m: {
                docs: { "http://127.0.0.1:1111/terms/": { tf: 1.0 } },
                df: 1,
              },
            },
          },
        },
      },
    },
    title: {
      root: {
        docs: {},
        df: 0,
        c: {
          docs: {},
          df: 0,
          o: {
            docs: {},
            df: 0,
            n: {
              docs: {},
              df: 0,
              t: {
                docs: {},
                df: 0,
                a: {
                  docs: {},
                  df: 0,
                  c: {
                    docs: {},
                    df: 0,
                    t: {
                      docs: { "http://127.0.0.1:1111/contact/": { tf: 1.0 } },
                      df: 1,
                    },
                  },
                },
              },
            },
          },
        },
        h: {
          docs: {},
          df: 0,
          o: {
            docs: {},
            df: 0,
            m: {
              docs: {},
              df: 0,
              e: { docs: { "http://127.0.0.1:1111/": { tf: 1.0 } }, df: 1 },
            },
          },
        },
        p: {
          docs: {},
          df: 0,
          a: {
            docs: {},
            df: 0,
            g: {
              docs: {},
              df: 0,
              e: { docs: { "http://127.0.0.1:1111/": { tf: 1.0 } }, df: 1 },
            },
          },
          o: {
            docs: {},
            df: 0,
            l: {
              docs: {},
              df: 0,
              i: {
                docs: {},
                df: 0,
                c: {
                  docs: {},
                  df: 0,
                  i: {
                    docs: { "http://127.0.0.1:1111/privacy/": { tf: 1.0 } },
                    df: 1,
                  },
                },
              },
            },
          },
          r: {
            docs: {},
            df: 0,
            i: {
              docs: {},
              df: 0,
              v: {
                docs: {},
                df: 0,
                a: {
                  docs: {},
                  df: 0,
                  c: {
                    docs: {},
                    df: 0,
                    i: {
                      docs: { "http://127.0.0.1:1111/privacy/": { tf: 1.0 } },
                      df: 1,
                    },
                  },
                },
              },
            },
          },
        },
        s: {
          docs: {},
          df: 0,
          e: {
            docs: {},
            df: 0,
            r: {
              docs: {},
              df: 0,
              v: {
                docs: {},
                df: 0,
                i: {
                  docs: {},
                  df: 0,
                  c: {
                    docs: { "http://127.0.0.1:1111/terms/": { tf: 1.0 } },
                    df: 1,
                  },
                },
              },
            },
          },
        },
        t: {
          docs: {},
          df: 0,
          e: {
            docs: {},
            df: 0,
            r: {
              docs: {},
              df: 0,
              m: {
                docs: { "http://127.0.0.1:1111/terms/": { tf: 1.0 } },
                df: 1,
              },
            },
          },
        },
      },
    },
  },
  documentStore: {
    save: true,
    docs: {
      "http://127.0.0.1:1111/": {
        body: "",
        id: "http://127.0.0.1:1111/",
        title: "Home page",
      },
      "http://127.0.0.1:1111/contact/": {
        body: "",
        id: "http://127.0.0.1:1111/contact/",
        title: "Contact",
      },
      "http://127.0.0.1:1111/privacy/": {
        body: "",
        id: "http://127.0.0.1:1111/privacy/",
        title: "Privacy Policy",
      },
      "http://127.0.0.1:1111/terms/": {
        body: "",
        id: "http://127.0.0.1:1111/terms/",
        title: "Terms of Service",
      },
    },
    docInfo: {
      "http://127.0.0.1:1111/": { body: 0, title: 2 },
      "http://127.0.0.1:1111/contact/": { body: 0, title: 1 },
      "http://127.0.0.1:1111/privacy/": { body: 0, title: 2 },
      "http://127.0.0.1:1111/terms/": { body: 0, title: 2 },
    },
    length: 4,
  },
  lang: "English",
};
