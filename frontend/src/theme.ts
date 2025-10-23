import { createTheme, InputWrapper, type MantineTheme } from "@mantine/core";

const bluePalette = [
    "#e6f2ff",
    "#cce5ff",
    "#b3d8ff",
    "#99ccff",
    "#80bfff",
    "#66b3ff",
    "#4d99e6",
    "#3380cc",
    "#1a66b3",
    "#004d99",
] as const;

export const theme = createTheme({
    fontFamily: "Geist, sans-serif",
    primaryColor: "blue",
    colors: {
        blue: bluePalette,
        error: [
            "#fff5f5",
            "#ffe3e3",
            "#ffc9c9",
            "#ffa8a8",
            "#ff8787",
            "#ff6b6b",
            "#fa5252",
            "#e03131",
            "#bf2a2a",
            "#992525",
        ],
    },
    components: {
        InputWrapper: {
            styles: {
                error: {
                    marginTop: "6px"
                }
            }
        },
        Button: {
            defaultProps: {
                size: 'sm',
                radius: 'sm',
                gradient: { from: "#2563eb", to: "#45bbed", deg: 90 },
            }
        },
        Input: {
            styles: (theme: MantineTheme) => ({
                input: {
                    backgroundColor: theme.white,
                    color: theme.colors.gray[10],
                    '&:focus': {
                        borderColor: theme.colors.green[7],
                    },
                }
            }),
            defaultProps: {
                size: 'md',
                radius: 'md'
            },
        },
        InputBase: {
            styles: (theme: MantineTheme) => ({
                input: {
                    backgroundColor: theme.white,
                    color: theme.colors.gray[10],
                    '&:focus': {
                        borderColor: theme.colors.green[7],
                    },
                }
            }),
            defaultProps: {
                size: 'md',
                radius: 'md'
            },
        },
        Select: {
            styles: (theme: MantineTheme) => ({
                input: {
                    backgroundColor: theme.white,
                    color: theme.colors.gray[10],
                    '&:focus': {
                        borderColor: theme.colors.green[7],
                    },
                }
            }),
            defaultProps: {
                size: 'md',
                radius: 'md'
            },
        },
        MultiSelect: {
            styles: (theme: MantineTheme) => ({
                input: {
                    backgroundColor: theme.white,
                    color: theme.colors.gray[10],
                    '&:focus': {
                        borderColor: theme.colors.green[7],
                    },
                }
            }),
            defaultProps: {
                size: 'md',
                radius: 'md'
            },
        },
        Textarea: {
            styles: (theme: MantineTheme) => ({
                input: {
                    backgroundColor: theme.white,
                    color: theme.colors.gray[10],
                    '&:focus': {
                        borderColor: theme.colors.green[7],
                    },
                }
            }),
            defaultProps: {
                size: 'md',
                radius: 'md'
            },
        },
        Modal: {
            defaultProps: {
                size: 'xl',
                overlayProps: {
                    backgroundOpacity: 0.55,
                    blur: 3,
                }
            },
            styles: (theme: MantineTheme) => ({
                header: {
                    marginBottom: theme.spacing.md,
                    paddingTop: theme.spacing.sm,
                    paddingBottom: theme.spacing.sm,
                    color: theme.colors.gray[6]
                },
            }),
        }
    },
})