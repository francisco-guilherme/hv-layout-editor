const getComponents = () => [
  {
    name: "Actions",
    doc: {
      description: "",
      displayName: "Actions",
      methods: [],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to element root.",
                required: false
              },
              button: {
                name: "string",
                description: "Styles applied to the visible buttons.",
                required: false
              },
              actionContainer: {
                name: "string",
                description: "Styles applied to the action container wrapper.",
                required: false
              },
              dropDownMenu: {
                name: "string",
                description: "Styles applied to the DropDownMenu component.",
                required: false
              },
              dropDownMenuButton: {
                name: "string",
                description:
                  "Styles applied to the DropDownMenu IconButton component.",
                required: false
              },
              dropDownMenuButtonSelected: {
                name: "string",
                description:
                  "Styles applied to the DropDownMenu IconButton component when it is selected.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied to the actions."
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Component identifier."
        },
        category: {
          type: {
            name: "enum",
            value: [
              {
                value: '"primary"',
                computed: false
              },
              {
                value: '"secondary"',
                computed: false
              },
              {
                value: '"ghost"',
                computed: false
              },
              {
                value: '"ghostSecondary"',
                computed: false
              },
              {
                value: '"semantic"',
                computed: false
              }
            ]
          },
          required: false,
          description: "Button category.",
          defaultValue: {
            value: '"ghost"',
            computed: false
          }
        },
        disabled: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Whether actions should be all disabled",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        actions: {
          type: {
            name: "union",
            value: [
              {
                name: "node"
              },
              {
                name: "arrayOf",
                value: {
                  name: "shape",
                  value: {
                    id: {
                      name: "string",
                      required: true
                    },
                    label: {
                      name: "string",
                      required: false
                    },
                    iconCallback: {
                      name: "func",
                      required: false
                    },
                    disabled: {
                      name: "bool",
                      required: false
                    }
                  }
                }
              }
            ]
          },
          required: false,
          description:
            "The renderable content inside the actions slot of the footer,\nor an Array of actions ´{id, label, icon, disabled}´",
          defaultValue: {
            value: "[]",
            computed: false
          }
        },
        actionsCallback: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The callback function ran when an action is triggered, receiving ´action´ as param"
        },
        maxVisibleActions: {
          type: {
            name: "number"
          },
          required: false,
          description:
            "The number of maximum visible actions before they're collapsed into a ´DropDownMenu´.",
          defaultValue: {
            value: "Infinity",
            computed: true
          }
        }
      }
    }
  },
  {
    name: "AssetInventory",
    doc: {
      description:
        "An Asset Inventory allows to switch between views. The Sort and Filter are defined using the metadata configuration, while the remaining configuration can be ser in the AssetInventory or in the individual views.",
      displayName: "AssetInventory",
      methods: [
        {
          name: "areArraysEquals",
          docblock: null,
          modifiers: ["static"],
          params: [
            {
              name: "a1",
              type: null
            },
            {
              name: "a2",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "getPaginationData",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "values",
              type: null
            },
            {
              name: "pageSize",
              type: null
            },
            {
              name: "page",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "changeView",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "event",
              type: null
            },
            {
              name: "id",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "setViewValues",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "returnedViewValues",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "setSearchResults",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "results",
              type: null
            },
            {
              name: "value",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "renderSearch",
          docblock: "Show the search component.\n\n@returns {*}",
          modifiers: [],
          params: [],
          returns: {
            description: null,
            type: {
              name: "mixed"
            }
          },
          description: "Show the search component."
        },
        {
          name: "onSort",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "sortFunc",
              type: null
            },
            {
              name: "id",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "renderSort",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null
        },
        {
          name: "paginationOnPageChange",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "page",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "paginationOnPageSizeChange",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "newPageSize",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "renderPagination",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null
        },
        {
          name: "innerOnSelection",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "onSelection",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "propsFillerManager",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "source",
              type: null
            },
            {
              name: "target",
              type: null
            },
            {
              name: "props",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "propsFiller",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "source",
              type: null
            },
            {
              name: "target",
              type: null
            },
            {
              name: "propName",
              type: null
            },
            {
              name: "value",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "fillChildProp",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "child",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "renderView",
          docblock: "Render the view.\n\n@returns {*}",
          modifiers: [],
          params: [],
          returns: {
            description: null,
            type: {
              name: "mixed"
            }
          },
          description: "Render the view."
        },
        {
          name: "renderFilterPlaceholder",
          docblock: "Render the passed filter placeholder.\n\n@returns {*}",
          modifiers: [],
          params: [],
          returns: {
            description: null,
            type: {
              name: "mixed"
            }
          },
          description: "Render the passed filter placeholder."
        }
      ],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied.",
          defaultValue: {
            value: '""',
            computed: false
          }
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node.",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the root component.",
                required: false
              },
              controlsContainer: {
                name: "string",
                description: "Styles applied to the controls container.",
                required: false
              },
              search: {
                name: "string",
                description: "Styles applied to the search container.",
                required: false
              },
              rightControls: {
                name: "string",
                description: "Styles applied to the right controls container.",
                required: false
              },
              multiButtons: {
                name: "string",
                description: "Styles applied to the multiButtons.",
                required: false
              },
              viewContainer: {
                name: "string",
                description: "Styles applied to the view container.",
                required: false
              },
              searchBoxContainer: {
                name: "string",
                description: "Styles applied to the search box container.",
                required: false
              },
              sortContainer: {
                name: "string",
                description: "Styles applied to the sort container.",
                required: false
              },
              pagination: {
                name: "string",
                description: "Styles applied to the pagination component.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the component styles applied."
        },
        children: {
          type: {
            name: "union",
            value: [
              {
                name: "arrayOf",
                value: {
                  name: "node"
                }
              },
              {
                name: "node"
              }
            ]
          },
          required: true,
          description: "Views components."
        },
        values: {
          type: {
            name: "arrayOf",
            value: {
              name: "shape",
              value: {
                id: {
                  name: "string",
                  required: false
                }
              }
            }
          },
          required: true,
          description: "Data passed to the component."
        },
        labels: {
          type: {
            name: "shape",
            value: {
              sortBy: {
                name: "string",
                description: "Sort label.",
                required: false
              },
              inputLabel: {
                name: "string",
                description: "the label on top of the search box.",
                required: false
              },
              placeholder: {
                name: "string",
                description: "the placeholder value of the search box.",
                required: false
              }
            }
          },
          required: false,
          description: "Labels."
        },
        configuration: {
          type: {
            name: "shape",
            value: {
              metadata: {
                name: "arrayOf",
                value: {
                  name: "shape",
                  value: {
                    id: {
                      name: "string",
                      required: false
                    },
                    title: {
                      name: "string",
                      required: false
                    },
                    accessor: {
                      name: "string",
                      required: false
                    },
                    cellType: {
                      name: "enum",
                      value: [
                        {
                          value: '"alpha-numeric"',
                          computed: false
                        },
                        {
                          value: '"numeric"',
                          computed: false
                        },
                        {
                          value: '"date"',
                          computed: false
                        },
                        {
                          value: '"node"',
                          computed: false
                        }
                      ],
                      required: false
                    },
                    sortable: {
                      name: "bool",
                      required: false
                    },
                    sortFunction: {
                      name: "func",
                      required: false
                    },
                    searchable: {
                      name: "bool",
                      required: false
                    },
                    searchFunction: {
                      name: "func",
                      required: false
                    }
                  }
                },
                required: true
              },
              viewConfiguration: {
                name: "instanceOf",
                value: "Object",
                required: false
              }
            }
          },
          required: true,
          description:
            "Contains the metadata for the values and the necessary configuration for the views,\ncheck the views for the specific view configuration."
        },
        onSelection: {
          type: {
            name: "func"
          },
          required: false,
          description: "Callback evoked in the selection of the card.",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        actions: {
          type: {
            name: "arrayOf",
            value: {
              name: "shape",
              value: {
                id: {
                  name: "string",
                  required: false
                },
                label: {
                  name: "string",
                  required: false
                },
                icon: {
                  name: "func",
                  required: false
                },
                disabled: {
                  name: "bool",
                  required: false
                }
              }
            }
          },
          required: false,
          description: "List of actions to be passed to the views.",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        actionsCallback: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The callback function ran when an action is triggered, receiving ´action´ as param",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        maxVisibleActions: {
          type: {
            name: "number"
          },
          required: false,
          description:
            "The number of maximum visible actions before they're collapsed into a ´DropDownMenu´.",
          defaultValue: {
            value: "1",
            computed: false
          }
        },
        FilterPlaceholder: {
          type: {
            name: "element"
          },
          required: false,
          description: "Extra filters",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        isSelectable: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Indicates if the views are selectable.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        selectedValues: {
          type: {
            name: "arrayOf",
            value: {
              name: "string"
            }
          },
          required: false,
          description:
            "Values selected. The list can be maintain internally or it can be passed (overwriting the internal).",
          defaultValue: {
            value: "[]",
            computed: false
          }
        },
        selectedView: {
          type: {
            name: "string"
          },
          required: false,
          description: "The selected view id.",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        hasPagination: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Defines if it has pagination.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        paginationServerSide: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Enable or disable the server side pagination mechanism",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        pageSizeOptions: {
          type: {
            name: "arrayOf",
            value: {
              name: "number"
            }
          },
          required: false,
          description: "The array of possible page sizes for the dropdown.",
          defaultValue: {
            value: "[5, 10, 20, 25, 50, 100]",
            computed: false
          }
        },
        pageSize: {
          type: {
            name: "number"
          },
          required: false,
          description: "Page size.",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        page: {
          type: {
            name: "number"
          },
          required: false,
          description: "The currently selected page (0-indexed).",
          defaultValue: {
            value: "0",
            computed: false
          }
        },
        pages: {
          type: {
            name: "number"
          },
          required: false,
          description: "The number of pages the component has.",
          defaultValue: {
            value: "0",
            computed: false
          }
        },
        onPageChange: {
          type: {
            name: "func"
          },
          required: false,
          description: "Page change callback.",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        onPageSizeChange: {
          type: {
            name: "func"
          },
          required: false,
          description: "Page size change callback.",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        onSearch: {
          type: {
            name: "func"
          },
          required: false,
          description: "Search callback.",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        onSortChange: {
          type: {
            name: "func"
          },
          required: false,
          description: "Sort callback.",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        onViewChange: {
          type: {
            name: "func"
          },
          required: false,
          description: "View change callback.",
          defaultValue: {
            value: "() => {}",
            computed: false
          }
        },
        sortOptionId: {
          type: {
            name: "string"
          },
          required: false,
          description:
            "Visual indication of the sort applied. The id is given by the metadata.id+Asc or metadata.id+Desc.",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        searchString: {
          type: {
            name: "string"
          },
          required: false,
          description: "Visual indicator of the search string used.",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        disablePortal: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Disable portal on the Sort dropdown",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        searchProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description: "Other props passed to the searchbox.",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        sortProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "Others props passed to the Sort. If you want to control the aria-label\nuse the labels.sortBy, as it is mapped directly to the aria-label.",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        multibuttonProps: {
          type: {
            name: "arrayOf",
            value: {
              name: "shape",
              value: {
                id: {
                  name: "string",
                  required: false
                }
              }
            }
          },
          required: false,
          description:
            "Array of others prop passed to the created button. Each element must include the id of the view\nand other props to pe passed to each button.",
          defaultValue: {
            value: "[]",
            computed: false
          }
        }
      }
    }
  },
  {
    name: "Avatar",
    doc: {
      description:
        "Avatars can be used to represent a user or a brand.\nThey can show an image, an icon or the initial letters of a name, for example.",
      displayName: "HvAvatar",
      methods: [],
      props: {
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Identifier to be applied to the root element."
        },
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied to the root element."
        },
        style: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description: "Inline styles to be applied to the root element."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the root element.",
                required: false
              },
              S: {
                name: "string",
                description:
                  "Styles applied to the root element when size is S.",
                required: false
              },
              M: {
                name: "string",
                description:
                  "Styles applied to the root element when size is M.",
                required: false
              },
              L: {
                name: "string",
                description:
                  "Styles applied to the root element when size is L.",
                required: false
              },
              img: {
                name: "string",
                description:
                  "Styles applied to the img element if either `src` or `srcSet` is defined.",
                required: false
              },
              fallback: {
                name: "string",
                description: "Styles applied to the fallback icon.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the component styles."
        },
        children: {
          type: {
            name: "node"
          },
          required: false,
          description:
            "Used to render icon or text elements inside the Avatar if `src` is not set.\nThis can be an element, or just a string."
        },
        component: {
          type: {
            name: "elementType"
          },
          required: false,
          description:
            "The component used for the root node.\nEither a string to use a DOM element or a component."
        },
        size: {
          type: {
            name: "enum",
            value: [
              {
                value: '"S"',
                computed: false
              },
              {
                value: '"M"',
                computed: false
              },
              {
                value: '"L"',
                computed: false
              }
            ]
          },
          required: false,
          description: "Sets one of the standard sizes of the icons"
        },
        backgroundColor: {
          type: {
            name: "string"
          },
          required: false,
          description:
            "A String representing the background color of the avatar.\nYou can use either an HEX or color name from the palette."
        },
        color: {
          type: {
            name: "string"
          },
          required: false,
          description:
            "A String representing the foreground color of the avatar's\nletters or the generic User icon fallback.\nYou can use either an HEX or color name from the palette."
        },
        src: {
          type: {
            name: "string"
          },
          required: false,
          description: "The `src` attribute for the `img` element."
        },
        srcSet: {
          type: {
            name: "string"
          },
          required: false,
          description:
            "The `srcSet` attribute for the `img` element.\nUse this attribute for responsive image display."
        },
        sizes: {
          type: {
            name: "string"
          },
          required: false,
          description: "The `sizes` attribute for the `img` element."
        },
        alt: {
          type: {
            name: "string"
          },
          required: false,
          description:
            "Used in combination with `src` or `srcSet` to\nprovide an alt attribute for the rendered `img` element."
        },
        imgProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "Attributes applied to the `img` element if the component is used to display an image.\nIt can be used to listen for the loading error event."
        }
      }
    }
  },
  {
    name: "Badge",
    doc: {
      description:
        "The badge is a component used to show the user that there is something new in the app.",
      displayName: "Badge",
      methods: [],
      props: {
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the component root class.",
                required: false
              },
              badgePosition: {
                name: "string",
                description: "Styles applied to the component badge position.",
                required: false
              },
              badge: {
                name: "string",
                description: "Styles applied to the component badge.",
                required: false
              },
              badgeIcon: {
                name: "string",
                description: "Styles applied to the component badge icon.",
                required: false
              },
              showCount: {
                name: "string",
                description:
                  "Styles applied to the component when shows count.",
                required: false
              },
              showLabel: {
                name: "string",
                description:
                  "Styles applied to the component when shows label.",
                required: false
              },
              badgeOneDigit: {
                name: "string",
                description:
                  "Styles applied to the component when count has one digit.",
                required: false
              },
              badgeContainer: {
                name: "string",
                description: "Styles applied to the component badge container.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied to the badge."
        },
        count: {
          type: {
            name: "number"
          },
          required: false,
          description:
            "Count is the number of unread notifications.\nNote count and label are mutually exclusive.\ncount is ignored when label is specified at the same time."
        },
        showCount: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "True if count should be displayed.\nNote showCount and label are mutually exclusive.\nshowCount is ignored when label is specified at the same time."
        },
        maxCount: {
          type: {
            name: "number"
          },
          required: false,
          description:
            "The maximum number of unread notifications to be displayed"
        },
        label: {
          type: {
            name: "string"
          },
          required: false,
          description:
            "Custom text to show in place of count.\nNote showCount and label are mutually exclusive.\nshowCount is ignored when label is specified at the same time."
        },
        icon: {
          type: {
            name: "node"
          },
          required: false,
          description: "Icon which the notification will be attached."
        },
        text: {
          type: {
            name: "string"
          },
          required: false,
          description: "Text which the notification will be attached."
        },
        textVariant: {
          type: {
            name: "string"
          },
          required: false,
          description: "Text variant."
        }
      }
    }
  },
  {
    name: "Banner",
    doc: {
      description:
        "A Banner displays an important, succinct message. The banner provides actions for users to address (or dismiss the banner).\nIt requires an user action to close. Banners should appear at the top of the screen, below a top app bar.",
      displayName: "HvBanner",
      methods: [],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the component root class.",
                required: false
              },
              rootClosed: {
                name: "string",
                description:
                  "Styles applied to the component root class when the component is closed.",
                required: false
              },
              anchorOriginTopCenter: {
                name: "string",
                description:
                  "Styles applied to the component when define as top.",
                required: false
              },
              anchorOriginBottomCenter: {
                name: "string",
                description:
                  "Styles applied to the component when define as bottom.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied."
        },
        open: {
          type: {
            name: "bool"
          },
          required: true,
          description: "If true, Snackbar is open."
        },
        onClose: {
          type: {
            name: "func"
          },
          required: true,
          description:
            "Callback fired when the component requests to be closed. Typically onClose is used to set state in the parent component, which is used to control the Snackbar open prop. The reason parameter can optionally be used to control the response to onClose, for example ignoring clickaway."
        },
        label: {
          type: {
            name: "string"
          },
          required: false,
          description: "The message to display."
        },
        anchorOrigin: {
          type: {
            name: "enum",
            value: [
              {
                value: '"top"',
                computed: false
              },
              {
                value: '"bottom"',
                computed: false
              }
            ]
          },
          required: false,
          description: "The anchor of the Snackbar."
        },
        variant: {
          type: {
            name: "enum",
            value: [
              {
                value: '"success"',
                computed: false
              },
              {
                value: '"warning"',
                computed: false
              },
              {
                value: '"error"',
                computed: false
              },
              {
                value: '"info"',
                computed: false
              },
              {
                value: '"default"',
                computed: false
              }
            ]
          },
          required: false,
          description: "Variant of the snackbar."
        },
        customIcon: {
          type: {
            name: "node"
          },
          required: false,
          description: "Custom icon to replace the variant default."
        },
        showIcon: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Controls if the associated icon to the variant should be shown."
        },
        actions: {
          type: {
            name: "union",
            value: [
              {
                name: "node"
              },
              {
                name: "arrayOf",
                value: {
                  name: "shape",
                  value: {
                    id: {
                      name: "string",
                      required: true
                    },
                    label: {
                      name: "string",
                      required: true
                    },
                    icon: {
                      name: "func",
                      required: false
                    },
                    disabled: {
                      name: "bool",
                      required: false
                    }
                  }
                }
              }
            ]
          },
          required: false,
          description: "Actions to display on the right side."
        },
        actionsCallback: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The callback function ran when an action is triggered, receiving ´action´ as param"
        },
        actionsPosition: {
          type: {
            name: "enum",
            value: [
              {
                value: '"auto"',
                computed: false
              },
              {
                value: '"inline"',
                computed: false
              },
              {
                value: '"bottom-right"',
                computed: false
              }
            ]
          },
          required: false,
          description: "The position property of the header."
        },
        transitionDuration: {
          type: {
            name: "number"
          },
          required: false,
          description:
            "How much the transition animation last in milliseconds, if 0 no animation is played."
        },
        transitionDirection: {
          type: {
            name: "enum",
            value: [
              {
                value: '"up"',
                computed: false
              },
              {
                value: '"down"',
                computed: false
              },
              {
                value: '"left"',
                computed: false
              },
              {
                value: '"right"',
                computed: false
              }
            ]
          },
          required: false,
          description: "Direction of slide transition."
        },
        offset: {
          type: {
            name: "number"
          },
          required: false,
          description:
            "Offset from top/bottom of the page, in px. Defaults to 60px."
        },
        bannerContentProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "Props to pass down to the Banner Wrapper. An object `actionProps` can be included to be passed as others to actions."
        }
      }
    }
  },
  {
    name: "Barchart",
    doc: {
      description:
        "A Bar chart is a chart or graph that presents categorical data with rectangular bars.\n\nOur implementation uses as base Plotly. If you have a specific case\nthat we don't cover directly, the Plotly [documentation](https://plotly.com/javascript/) is a good starting point.",
      displayName: "Barchart",
      methods: [],
      props: {
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "An Id passed on to the component"
        },
        classes: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "A Jss Object used to override or extend the styles applied."
        },
        title: {
          type: {
            name: "string"
          },
          required: false,
          description: "Title of the chart."
        },
        subtitle: {
          type: {
            name: "string"
          },
          required: false,
          description: "Subtitle of the chart."
        },
        data: {
          type: {
            name: "arrayOf",
            value: {
              name: "instanceOf",
              value: "Object"
            }
          },
          required: true,
          description:
            "Plotly data object (see https://plot.ly/javascript/reference/)."
        },
        layout: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "Plotly layout object (see https://plot.ly/javascript/reference/#layout)."
        },
        config: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "Plotly config object (see https://plot.ly/javascript/configuration-options/)."
        },
        tooltipType: {
          type: {
            name: "enum",
            value: [
              {
                value: '"single"',
                computed: false
              },
              {
                value: '"multiple"',
                computed: false
              }
            ]
          },
          required: false,
          description: "Defines if should use a single or multiline tooltip.",
          defaultValue: {
            value: '"multiple"',
            computed: false
          }
        },
        stack: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Sets is the chart is stack.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        horizontal: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Sets is the chart is horizontal.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        xAxisTitle: {
          type: {
            name: "string"
          },
          required: false,
          description: "Defines the title of the X axis."
        },
        yAxisTitle: {
          type: {
            name: "string"
          },
          required: false,
          description: "Defines the title of the Y axis."
        }
      }
    }
  },
  {
    name: "BreadCrumb",
    doc: {
      description:
        "A breadcrumb is a graphical control element frequently used as a navigational aid.",
      displayName: "BreadCrumb",
      methods: [],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the component root class.",
                required: false
              },
              link: {
                name: "string",
                description: "Styles applied to the links.",
                required: false
              },
              separator: {
                name: "string",
                description: "Styles applied to the separator.",
                required: false
              },
              orderedList: {
                name: "string",
                description: "Styles applied to the list.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied."
        },
        listRoute: {
          type: {
            name: "arrayOf",
            value: {
              name: "shape",
              value: {
                label: {
                  name: "string",
                  required: false
                },
                path: {
                  name: "string",
                  required: false
                }
              }
            }
          },
          required: false,
          description: "List of breadcrumb."
        },
        url: {
          type: {
            name: "string"
          },
          required: false,
          description: "URL to build the breadcrumb."
        },
        maxVisible: {
          type: {
            name: "number"
          },
          required: false,
          description: "Number of pages visible."
        },
        component: {
          type: {
            name: "elementType"
          },
          required: false,
          description:
            "The component used for the link node.\nEither a string to use a DOM element or a component."
        },
        onClick: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "Function passed to the component. If defined the component prop is used as the link node."
        },
        dropDownMenuProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "Props passed down to the DropDownMenu sub-menu component."
        }
      }
    }
  },
  {
    name: "BulkActions",
    doc: {
      description:
        'Bulk Actions allow users to perform an action to a single or multiple items,\nalso known as "batch production" of multiple items at once, one stage at a time.',
      displayName: "HvBulkActions",
      methods: [],
      props: {
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node."
        },
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the component root class.",
                required: false
              },
              editMode: {
                name: "string",
                description:
                  "Styles applied to the component root class when in edit mode.",
                required: false
              },
              actions: {
                name: "string",
                description: "Styles applied to the Actions root class.",
                required: false
              },
              selectAllContainer: {
                name: "string",
                description: "Styles applied to the Select All container.",
                required: false
              },
              selectAll: {
                name: "string",
                description: "Styles applied to the Select All checkbox.",
                required: false
              },
              selectAllPages: {
                name: "string",
                description: "Styles applied to the Select All pages button.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied."
        },
        labels: {
          type: {
            name: "shape",
            value: {
              selectAll: {
                name: "string",
                description:
                  "Label applied to the Select All when no item is selected.",
                required: false
              },
              selectAllPages: {
                name: "string",
                description:
                  "Label applied to the Select All across all pages.",
                required: false
              },
              deselectAllPages: {
                name: "string",
                description:
                  "Label applied to the Select All across all pages when all elements are selected.",
                required: false
              }
            }
          },
          required: false,
          description: "Labels"
        },
        selectAllLabel: {
          type: {
            name: "node"
          },
          required: false,
          description: "Custom label for select all checkbox"
        },
        showSelectAllPages: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Whether select all pages element should be visible"
        },
        numTotal: {
          type: {
            name: "number"
          },
          required: false,
          description: "The total number of elements"
        },
        numSelected: {
          type: {
            name: "number"
          },
          required: false,
          description: "The number of elements currently selected"
        },
        onSelectAll: {
          type: {
            name: "func"
          },
          required: false,
          description:
            'Function called when the "select all" Checkbox is toggled.'
        },
        onSelectAllPages: {
          type: {
            name: "func"
          },
          required: false,
          description:
            'Function called when the "select all pages" button is clicked toggled.'
        },
        actions: {
          type: {
            name: "union",
            value: [
              {
                name: "node"
              },
              {
                name: "arrayOf",
                value: {
                  name: "shape",
                  value: {
                    id: {
                      name: "string",
                      required: true
                    },
                    label: {
                      name: "string",
                      required: false
                    },
                    iconCallback: {
                      name: "func",
                      required: false
                    },
                    disabled: {
                      name: "bool",
                      required: false
                    }
                  }
                }
              }
            ]
          },
          required: false,
          description:
            "The renderable content inside the right actions slot,\nor an Array of actions `{ id, label, icon, disabled, ... }`"
        },
        actionsDisabled: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Whether actions should be all disabled"
        },
        actionsCallback: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The callback function ran when an action is triggered, receiving `action` as param"
        },
        maxVisibleActions: {
          type: {
            name: "number"
          },
          required: false,
          description:
            "The number of maximum visible actions before they're collapsed into a `DropDownMenu`."
        }
      }
    }
  },
  {
    name: "Button",
    doc: {
      description:
        "A button refers to a graphical control element that provides the user a simple way to trigger an event.",
      displayName: "HvButton",
      methods: [],
      props: {
        category: {
          type: {
            name: "enum",
            value: [
              {
                value: '"ghost"',
                computed: false
              },
              {
                value: '"ghostSecondary"',
                computed: false
              },
              {
                value: '"icon"',
                computed: false
              },
              {
                value: '"primary"',
                computed: false
              },
              {
                value: '"secondary"',
                computed: false
              },
              {
                value: '"semantic"',
                computed: false
              }
            ]
          },
          required: false,
          description: "Category of button to use"
        },
        children: {
          type: {
            name: "node"
          },
          required: true,
          description: "The content of the button."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              ghost: {
                name: "string",
                description: "Styles applied to the ghost button.",
                required: false
              },
              ghostDisabled: {
                name: "string",
                description:
                  "Styles applied to the ghost button when it is disabled.",
                required: false
              },
              ghostSecondary: {
                name: "string",
                description: "Styles applied to the secondary ghost button.",
                required: false
              },
              ghostSecondaryDisabled: {
                name: "string",
                description:
                  "Styles applied to the secondary ghost button when it is disabled.",
                required: false
              },
              primary: {
                name: "string",
                description: "Styles applied to the primary button.",
                required: false
              },
              primaryDisabled: {
                name: "string",
                description:
                  "Styles applied to the primary button when it is disabled.",
                required: false
              },
              root: {
                name: "string",
                description: "Styles applied to the component root class.",
                required: false
              },
              rootIcon: {
                name: "string",
                description:
                  "Styles applied to the component root when category is icon.",
                required: false
              },
              secondary: {
                name: "string",
                description: "Styles applied to the secondary button.",
                required: false
              },
              secondaryDisabled: {
                name: "string",
                description:
                  "Styles applied to the secondary button when it is disabled.",
                required: false
              },
              semantic: {
                name: "string",
                description: "Styles applied to the semantic button.",
                required: false
              },
              semanticDisabled: {
                name: "string",
                description:
                  "Styles applied to the semantic button when it is disabled.",
                required: false
              },
              startIcon: {
                name: "string",
                description: "Styles applied to the inspireRed primary button.",
                required: false
              }
            }
          },
          required: false,
          description:
            "Override or extend the styles applied to the component.\nSee CSS API tab for more details."
        },
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "@ignore"
        },
        disabled: {
          type: {
            name: "bool"
          },
          required: false,
          description: "If `true`, the button will be disabled."
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node."
        },
        onClick: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The function executed when the button is pressed.\n@param event React.MouseEvent<HTMLButtonElement>"
        },
        startIcon: {
          type: {
            name: "node"
          },
          required: false,
          description: "Element placed before the children."
        },
        overrideIconColors: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Defines the default colors of the button are forced into the icon."
        }
      }
    }
  },
  {
    name: "Card",
    doc: {
      description:
        "A card container to be used for short and related of information.",
      displayName: "HvCard",
      methods: [],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the cardContainer node."
        },
        cardButtonProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "Extra properties to be passed element used to represent the clickable default card.",
          defaultValue: {
            value: "{}",
            computed: false
          }
        },
        headerProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "Extra properties to be passed element used to represent the default header card.",
          defaultValue: {
            value: "{}",
            computed: false
          }
        },
        mediaProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "Extra properties to be passed element used to represent the default media element.",
          defaultValue: {
            value: "{}",
            computed: false
          }
        },
        footerProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "Extra properties to be passed element used to represent the default footer card.",
          defaultValue: {
            value: "{}",
            computed: false
          }
        },
        contentProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "Extra properties to be passed element used to represent the default content card.",
          defaultValue: {
            value: "{}",
            computed: false
          }
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Style applied to the root.",
                required: false
              },
              cardContentWrapper: {
                name: "string",
                description: "Style applied to the card wrapper.",
                required: false
              },
              cardContainer: {
                name: "string",
                description: "Style applied to the cardContainer.",
                required: false
              },
              cardContainerSelected: {
                name: "string",
                description:
                  "Style applied to the cardContainer when component is selected.",
                required: false
              },
              upperAreaSelectable: {
                name: "string",
                description:
                  "Style applied to the upper area when the component is selectable.",
                required: false
              },
              semanticContainer: {
                name: "string",
                description:
                  "Style applied to the container of the semantic bar on top.",
                required: false
              },
              semanticSelected: {
                name: "string",
                description:
                  "Style applied to the container of the semantic bar on top when the component is selectable.",
                required: false
              },
              selectable: {
                name: "string",
                description:
                  "Style applied to the component when it is selectable.",
                required: false
              },
              selected: {
                name: "string",
                description:
                  "Style applied to the component when it is selected.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied."
        },
        children: {
          type: {
            name: "node"
          },
          required: false,
          description: "The content inside the card."
        },
        headerTitle: {
          type: {
            name: "node"
          },
          required: false,
          description:
            "The renderable content inside the title slot of the header."
        },
        subheader: {
          type: {
            name: "node"
          },
          required: false,
          description:
            "The renderable content inside the subheader slot of the header."
        },
        icon: {
          type: {
            name: "node"
          },
          required: false,
          description:
            "The renderable content inside the icon slot of the header."
        },
        actions: {
          type: {
            name: "union",
            value: [
              {
                name: "node"
              },
              {
                name: "arrayOf",
                value: {
                  name: "shape",
                  value: {
                    id: {
                      name: "string",
                      required: true
                    },
                    label: {
                      name: "string",
                      required: true
                    },
                    icon: {
                      name: "func",
                      required: false
                    }
                  }
                }
              }
            ]
          },
          required: false,
          description:
            "The renderable content inside the actions slot of the footer,\nor an Array of actions ´{id, label, icon}´"
        },
        actionsCallback: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The callback function ran when an action is triggered, receiving ´action´ as param"
        },
        actionsAlignment: {
          type: {
            name: "enum",
            value: [
              {
                value: '"left"',
                computed: false
              },
              {
                value: '"right"',
                computed: false
              }
            ]
          },
          required: false,
          description: "The alignment applied to the action elements",
          defaultValue: {
            value: '"left"',
            computed: false
          }
        },
        innerCardContent: {
          type: {
            name: "node"
          },
          required: false,
          description: "The renderable content inside the body of the card."
        },
        mediaPath: {
          type: {
            name: "string"
          },
          required: false,
          description: "The path to the image to show in the media slot."
        },
        mediaTitle: {
          type: {
            name: "string"
          },
          required: false,
          description: "The title of the media."
        },
        mediaHeight: {
          type: {
            name: "number"
          },
          required: false,
          description:
            "The height necessary to adjust the media container to the image."
        },
        semantic: {
          type: {
            name: "enum",
            value: [
              {
                value: '"sema0"',
                computed: false
              },
              {
                value: '"sema1"',
                computed: false
              },
              {
                value: '"sema2"',
                computed: false
              },
              {
                value: '"sema3"',
                computed: false
              },
              {
                value: '"sema4"',
                computed: false
              },
              {
                value: '"sema5"',
                computed: false
              },
              {
                value: '"sema6"',
                computed: false
              },
              {
                value: '"sema7"',
                computed: false
              },
              {
                value: '"sema8"',
                computed: false
              },
              {
                value: '"sema9"',
                computed: false
              },
              {
                value: '"sema10"',
                computed: false
              },
              {
                value: '"sema11"',
                computed: false
              },
              {
                value: '"sema12"',
                computed: false
              },
              {
                value: '"sema13"',
                computed: false
              },
              {
                value: '"sema14"',
                computed: false
              },
              {
                value: '"sema15"',
                computed: false
              },
              {
                value: '"sema16"',
                computed: false
              },
              {
                value: '"sema17"',
                computed: false
              },
              {
                value: '"sema18"',
                computed: false
              },
              {
                value: '"sema19"',
                computed: false
              }
            ]
          },
          required: false,
          description:
            "The border color at the top of the card. Must be one of palette semantic colors. To set another color, the borderTop should be override.",
          defaultValue: {
            value: '"sema0"',
            computed: false
          }
        },
        onClick: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The function that will be executed when the upper part of the card is clicked.\n only works for the default card."
        },
        noHeader: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Removes the header for the default card.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        noFooter: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Removes the footer for the default card.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        selectOnClickAction: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "allows selecting on click action.\n only works for the default card.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        onChange: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The function that will be executed when the card is selected."
        },
        isSelectable: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "´true´ if the card should have a checkbox in the footer to be selectable ´false´ if it is not required.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        checked: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If `true` the checkbox is selected, if set to `false` the checkbox is not selected.\nnote: if this value is specified the state of the checkbox must be managed",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        checkboxProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "Properties to be passed onto the checkbox component, the values of the object are equivalent to the\nHvCheckbox API."
        },
        maxVisibleActions: {
          type: {
            name: "number"
          },
          required: false,
          description:
            "The number of maximum visible actions before they're collapsed into a ´DropDownMenu´.",
          defaultValue: {
            value: "1",
            computed: false
          }
        }
      }
    }
  },
  {
    name: "Chart",
    doc: {
      description: "",
      displayName: "Chart",
      methods: [],
      props: {
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "An Id passed on to the component"
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                required: false
              },
              titleContainer: {
                name: "string",
                required: false
              },
              subtitle: {
                name: "string",
                required: false
              },
              paddingTop: {
                name: "string",
                required: false
              }
            }
          },
          required: false,
          description:
            "A Jss Object used to override or extend the styles applied."
        },
        title: {
          type: {
            name: "string"
          },
          required: false,
          description: "Title of the chart."
        },
        subtitle: {
          type: {
            name: "string"
          },
          required: false,
          description: "Subtitle of the chart."
        },
        data: {
          type: {
            name: "arrayOf",
            value: {
              name: "instanceOf",
              value: "Object"
            }
          },
          required: true,
          description:
            "Plotly data object (see https://plot.ly/javascript/reference/)."
        },
        layout: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: true,
          description:
            "Plotly layout object (see https://plot.ly/javascript/reference/#layout)."
        },
        config: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "Plotly config object (see https://plot.ly/javascript/configuration-options/)."
        },
        tooltipType: {
          type: {
            name: "enum",
            value: [
              {
                value: '"single"',
                computed: false
              },
              {
                value: '"multiple"',
                computed: false
              }
            ]
          },
          required: false,
          description: "Defines if should use a single or multiline tooltip.",
          defaultValue: {
            value: '"multiple"',
            computed: false
          }
        },
        afterPlot: {
          type: {
            name: "func"
          },
          required: false,
          description: "Function to be called after plot render."
        },
        xAxisTitle: {
          type: {
            name: "string"
          },
          required: false,
          description: "Defines the X axis title."
        },
        yAxisTitle: {
          type: {
            name: "string"
          },
          required: false,
          description: "Defines the Y axis title."
        }
      }
    }
  },
  {
    name: "Container",
    doc: {
      description:
        "The Container is the element responsible to create and add the margins to the page, and make them react to the current screen size. We override the default maxWidth to xl",
      displayName: "HvContainer",
      methods: [],
      props: {
        children: {
          type: {
            name: "node"
          },
          required: true,
          description: ""
        },
        classes: {
          type: {
            name: "object"
          },
          required: true,
          description:
            "Override or extend the styles applied to the component.\nSee [CSS API](#css) below for more details."
        },
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "@ignore"
        },
        component: {
          type: {
            name: "elementType"
          },
          required: false,
          description:
            "The component used for the root node.\nEither a string to use a DOM element or a component."
        },
        disableGutters: {
          type: {
            name: "bool"
          },
          required: false,
          description: "If `true`, the left and right padding is removed."
        },
        fixed: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Set the max-width to match the min-width of the current breakpoint.\nThis is useful if you'd prefer to design for a fixed set of sizes\ninstead of trying to accommodate a fully fluid viewport.\nIt's fluid by default."
        },
        maxWidth: {
          type: {
            name: "enum",
            value: [
              {
                value: '"xs"',
                computed: false
              },
              {
                value: '"sm"',
                computed: false
              },
              {
                value: '"md"',
                computed: false
              },
              {
                value: '"lg"',
                computed: false
              },
              {
                value: '"xl"',
                computed: false
              },
              {
                value: "false",
                computed: false
              }
            ]
          },
          required: false,
          description:
            "Determine the max-width of the container.\nThe container width grows with the size of the screen.\nSet to `false` to disable `maxWidth`.",
          defaultValue: {
            value: '"xl"',
            computed: false
          }
        }
      }
    }
  },
  {
    name: "DatePicker",
    doc: {
      description: "A graphical widget which allows the user to select a date.",
      displayName: "HvDatePicker",
      methods: [
        {
          name: "resolveStateFromProps",
          docblock:
            "Resolves the state using the received props.\n\n@memberOf HvDatePicker",
          modifiers: ["static"],
          params: [
            {
              name: "value"
            },
            {
              name: "startValue"
            },
            {
              name: "endValue"
            },
            {
              name: "rangeMode"
            }
          ],
          returns: null,
          description: "Resolves the state using the received props."
        },
        {
          name: "setCalendarOpen",
          docblock:
            "Changes the calendar open state according to the received flag.\n\n@param {boolean} open - Opens / closes the calendar according to this flag.\n@memberOf HvDatePicker",
          modifiers: [],
          params: [
            {
              name: "open",
              description:
                "Opens / closes the calendar according to this flag.",
              type: {
                name: "boolean"
              },
              optional: false
            }
          ],
          returns: null,
          description:
            "Changes the calendar open state according to the received flag."
        },
        {
          name: "createCalendarPlacement",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "data",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "updateCalendarPlacement",
          docblock:
            "Updates the calendar placement in case the Popper placement changed.\n\n@param {Object} data - The data provided by the popper plugin.\n@memberOf HvDatePicker",
          modifiers: [],
          params: [
            {
              name: "data",
              description: "The data provided by the popper plugin.",
              type: {
                name: "Object"
              },
              optional: false
            }
          ],
          returns: null,
          description:
            "Updates the calendar placement in case the Popper placement changed."
        },
        {
          name: "handleApplyAction",
          docblock:
            "Handles the `Apply` action. Both single and ranged modes are handled here.\n\n@memberOf HvDatePicker",
          modifiers: [],
          params: [],
          returns: null,
          description:
            "Handles the `Apply` action. Both single and ranged modes are handled here."
        },
        {
          name: "handleCancelAction",
          docblock:
            "Handles the `Cancel` action. Both single and ranged modes are handled here.\n\n@memberOf HvDatePicker",
          modifiers: [],
          params: [],
          returns: null,
          description:
            "Handles the `Cancel` action. Both single and ranged modes are handled here."
        },
        {
          name: "handleKeyboardClick",
          docblock: "Handle keyboard click in the input.\n\n@param event",
          modifiers: [],
          params: [
            {
              name: "event",
              description: null,
              type: null,
              optional: false
            }
          ],
          returns: null,
          description: "Handle keyboard click in the input."
        },
        {
          name: "handleCalendarIconClick",
          docblock:
            "Handles the click on the Calendar icon inside the input.\n\n@memberOf HvDatePicker",
          modifiers: [],
          params: [
            {
              name: "event"
            }
          ],
          returns: null,
          description:
            "Handles the click on the Calendar icon inside the input."
        },
        {
          name: "handleCalendarClickAway",
          docblock:
            "Handles the event of clicking away from the Calendar.\n\n@param {Object} event - The event triggered when clicking outside of the calendar container.\n@memberOf HvDatePicker",
          modifiers: [],
          params: [
            {
              name: "event",
              description:
                "The event triggered when clicking outside of the calendar container.",
              type: {
                name: "Object"
              },
              optional: false
            }
          ],
          returns: null,
          description: "Handles the event of clicking away from the Calendar."
        },
        {
          name: "getFormattedSelectedDate",
          docblock:
            "Gets the formatted selected value to be displayed on the input.\n\n@memberOf HvDatePicker",
          modifiers: [],
          params: [],
          returns: null,
          description:
            "Gets the formatted selected value to be displayed on the input."
        },
        {
          name: "cancelDateSelection",
          docblock:
            "Cancels the date selection and closes the Calendar component.\n\n@memberOf HvDatePicker",
          modifiers: [],
          params: [],
          returns: null,
          description:
            "Cancels the date selection and closes the Calendar component."
        },
        {
          name: "setSingleDate",
          docblock:
            "Set the date in the input, and changes the calendar visibility (hide).\n\n@param {Date} date - Date value that was selected.\n@param closeCalendar\n@memberOf HvDatePicker",
          modifiers: [],
          params: [
            {
              name: "date",
              description: "Date value that was selected.",
              type: {
                name: "Date"
              },
              optional: false
            },
            {
              name: "closeCalendar",
              description: null,
              type: null,
              optional: false
            }
          ],
          returns: null,
          description:
            "Set the date in the input, and changes the calendar visibility (hide)."
        },
        {
          name: "handleSingleCalendarDateChange",
          docblock:
            "Handles the `handleDateChange` action from the Calendar component when in single mode. If the `showActions` prop\nis set to false then the date is immediately applied and the Calendar closed, otherwise the Calendar remains open.\n\n@param {Date} date - Date value received from the Calendar component.\n@param {boolean} closeCalendar - if it should close the date picker.\n@memberOf HvDatePicker",
          modifiers: [],
          params: [
            {
              name: "date",
              description: "Date value received from the Calendar component.",
              type: {
                name: "Date"
              },
              optional: false
            },
            {
              name: "closeCalendar",
              description: "if it should close the date picker.",
              type: {
                name: "boolean"
              },
              optional: false
            }
          ],
          returns: null,
          description:
            "Handles the `handleDateChange` action from the Calendar component when in single mode. If the `showActions` prop\nis set to false then the date is immediately applied and the Calendar closed, otherwise the Calendar remains open."
        },
        {
          name: "setRangeDate",
          docblock:
            "Set the date in the input, and changes the calendar visibility (hide).\n\n@param {Date} startDate - Start date value that was selected.\n@param {Date} endDate - End date value that was selected.\n@memberOf HvDatePicker",
          modifiers: [],
          params: [
            {
              name: "startDate",
              description: "Start date value that was selected.",
              type: {
                name: "Date"
              },
              optional: false
            },
            {
              name: "endDate",
              description: "End date value that was selected.",
              type: {
                name: "Date"
              },
              optional: false
            }
          ],
          returns: null,
          description:
            "Set the date in the input, and changes the calendar visibility (hide)."
        },
        {
          name: "handleRangeCalendarDateStartChange",
          docblock:
            "Handles the `handleDateChange` action from the Calendar component associated to the Start date when in range mode.\n\n@param {Date} date - Date value received from the Calendar component.\n@memberOf HvDatePicker",
          modifiers: [],
          params: [
            {
              name: "date",
              description: "Date value received from the Calendar component.",
              type: {
                name: "Date"
              },
              optional: false
            }
          ],
          returns: null,
          description:
            "Handles the `handleDateChange` action from the Calendar component associated to the Start date when in range mode."
        },
        {
          name: "handleRangeCalendarDateEndChange",
          docblock:
            "Handles the `handleDateChange` action from the Calendar component associated to the end date when in range mode.\n\n@param {Date} date - Date value received from the Calendar component.\n@memberOf HvDatePicker",
          modifiers: [],
          params: [
            {
              name: "date",
              description: "Date value received from the Calendar component.",
              type: {
                name: "Date"
              },
              optional: false
            }
          ],
          returns: null,
          description:
            "Handles the `handleDateChange` action from the Calendar component associated to the end date when in range mode."
        },
        {
          name: "renderLabel",
          docblock: "Renders the Label element.\n\n@memberOf HvDatePicker",
          modifiers: [],
          params: [],
          returns: null,
          description: "Renders the Label element."
        },
        {
          name: "renderActions",
          docblock:
            "Renders the container for the action elements.\n\n@memberOf HvDatePicker",
          modifiers: [],
          params: [],
          returns: null,
          description: "Renders the container for the action elements."
        },
        {
          name: "renderSingleCalendar",
          docblock: "Renders one calendar component.\n\n@memberOf Calendar",
          modifiers: [],
          params: [],
          returns: null,
          description: "Renders one calendar component."
        },
        {
          name: "renderRangeCalendars",
          docblock:
            "Renders two calendar for range mode.\n\n@memberOf Calendar",
          modifiers: [],
          params: [],
          returns: null,
          description: "Renders two calendar for range mode."
        },
        {
          name: "renderInput",
          docblock: "Renders the input.\n\n@memberOf Calendar",
          modifiers: [],
          params: [],
          returns: null,
          description: "Renders the input."
        },
        {
          name: "renderPopper",
          docblock:
            "Renders the Popper component with the calendars inside.\n\n@memberOf HvDatePicker",
          modifiers: [],
          params: [],
          returns: null,
          description: "Renders the Popper component with the calendars inside."
        }
      ],
      props: {
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node.",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class name to be applied."
        },
        labels: {
          type: {
            name: "shape",
            value: {
              applyLabel: {
                name: "string",
                description: "Apply button label.",
                required: false
              },
              cancelLabel: {
                name: "string",
                description: "Cancel button label.",
                required: false
              },
              title: {
                name: "string",
                description: "Text above the input/dropdown.",
                required: false
              },
              rangeStart: {
                name: "string",
                description: "Start date label.",
                required: false
              },
              rangeEnd: {
                name: "string",
                description: "End date label.",
                required: false
              },
              placeholder: {
                name: "string",
                description: "Text inside the input/dropdown",
                required: false
              }
            }
          },
          required: false,
          description: "An object containing all the labels for the datepicker."
        },
        classes: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied to the input/calendar box."
        },
        value: {
          type: {
            name: "string"
          },
          required: false,
          description:
            "The initial value of the input when in single calendar mode.",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        startValue: {
          type: {
            name: "string"
          },
          required: false,
          description:
            "The initial value for the start date when in range mode.",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        endValue: {
          type: {
            name: "string"
          },
          required: false,
          description: "The initial value for the end date when in range mode.",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        rangeMode: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Flag informing if the the component should be in range mode or in single mode.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        horizontalPlacement: {
          type: {
            name: "enum",
            value: [
              {
                value: '"left"',
                computed: false
              },
              {
                value: '"right"',
                computed: false
              }
            ]
          },
          required: false,
          description:
            "The placement where the calendar should be placed according to the input. Options are `left` or `right`.\nNote this prop only affects the calendar when in `rangeMode`.",
          defaultValue: {
            value: '"left"',
            computed: false
          }
        },
        locale: {
          type: {
            name: "string"
          },
          required: false,
          description:
            "The calendar locale. If undefined, it uses calendar default",
          defaultValue: {
            value: "DEFAULT_LOCALE",
            computed: true
          }
        },
        showActions: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Controls if actions buttons are visible at the calendar.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        onChange: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "Callback function to be triggered when the input value is changed",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        theme: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: true,
          description: "The theme object provided by the withStyles component."
        },
        disablePortal: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Disable the portal behavior. The children stay within it's parent DOM hierarchy.",
          defaultValue: {
            value: "true",
            computed: false
          }
        },
        escapeWithReference: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Sets if the calendar container should follow the date picker input out of the screen or stay visible.",
          defaultValue: {
            value: "true",
            computed: false
          }
        }
      }
    }
  },
  {
    name: "DropDownMenu",
    doc: {
      description:
        "A drop-down menu is a graphical control element, similar to a list box, that allows the user to choose one value from a list.",
      displayName: "DropDownMenu",
      methods: [],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the root of the component.",
                required: false
              },
              popper: {
                name: "string",
                description: "Styles applied to the popper.",
                required: false
              },
              icon: {
                name: "string",
                description: "Styles applied to the icon.",
                required: false
              },
              iconSelected: {
                name: "string",
                description: "Styles applied to the icon when selected.",
                required: false
              },
              menuList: {
                name: "string",
                description: "Styles applied to the list.",
                required: false
              },
              inputExtensionOpen: {
                name: "string",
                description: "Styles applied to the extension of the button.",
                required: false
              },
              inputExtensionOpenShadow: {
                name: "string",
                description: "Styles applied to the extension shadow.",
                required: false
              },
              inputExtensionFloatRight: {
                name: "string",
                description:
                  "Styles applied to the extension to go right when open down.",
                required: false
              },
              inputExtensionFloatLeft: {
                name: "string",
                description:
                  "Styles applied to the extension to go right when open up.",
                required: false
              },
              inputExtensionLeftPosition: {
                name: "string",
                description:
                  "Styles applied to the extension to go left when open up.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied."
        },
        icon: {
          type: {
            name: "element"
          },
          required: false,
          description: "Icon."
        },
        dataList: {
          type: {
            name: "arrayOf",
            value: {
              name: "shape",
              value: {
                label: {
                  name: "string",
                  required: true
                },
                selected: {
                  name: "bool",
                  required: false
                },
                disabled: {
                  name: "bool",
                  required: false
                },
                iconCallback: {
                  name: "func",
                  required: false
                },
                showNavIcon: {
                  name: "bool",
                  required: false
                }
              }
            }
          },
          required: true,
          description:
            "A list containing the elements to be rendered.\n\n- label: The label of the element to be rendered.\n- selected: The selection state of the element.\n- disabled: The disabled state of the element.\n- iconCallback: The icon node to be rendered on the left.\n- showNavIcon: If true renders the navigation icon on the right."
        },
        placement: {
          type: {
            name: "enum",
            value: [
              {
                value: '"left"',
                computed: false
              },
              {
                value: '"right"',
                computed: false
              }
            ]
          },
          required: false,
          description: "Placement of the dropdown.",
          defaultValue: {
            value: '"right"',
            computed: false
          }
        },
        disablePortal: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Disable the portal behavior. The children stay within it's parent DOM hierarchy.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        onToggleOpen: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "Function executed on toggle of the dropdown. Should receive the open status."
        },
        onClick: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "Function executed in each onClick. Should received the clicked element."
        },
        keepOpened: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Keep the Dropdown Menu opened after clicking one option",
          defaultValue: {
            value: "true",
            computed: false
          }
        },
        disabled: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Defines if the component is disabled.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        expanded: {
          type: {
            name: "bool"
          },
          required: false,
          description: "If true it should be displayed open.",
          defaultValue: {
            value: "false",
            computed: false
          }
        }
      }
    }
  },
  {
    name: "Dropdown",
    doc: {
      description:
        "A drop-down list is a graphical control element, similar to a list box, that allows the user to choose one value from a list.",
      displayName: "HvDropdown",
      methods: [
        {
          name: "handleToggle",
          docblock:
            "Opens and closes the dropdown.\n\n@param {Object} event - the event produced by the click action.\n@returns {undefined}\n@memberof Dropdown",
          modifiers: [],
          params: [
            {
              name: "event",
              description: "the event produced by the click action.",
              type: {
                name: "Object"
              },
              optional: false
            }
          ],
          returns: {
            description: null,
            type: null
          },
          description: "Opens and closes the dropdown."
        },
        {
          name: "handleSelection",
          docblock:
            "Applies the selected values to the state\n\n@param {Array} selection - An array containing the selected values.\n@param {Boolean} commitChanges - If `true` the selection if finally committed the dropdown header text should reflect the new selection\n@param {Boolean} toggle -If `true` the dropdown should toggle it's current state\n@param {Boolean} notifyChanges -If `true` the dropdown will call onChange.\n@param {Event} event - mouseUp event.\n@memberof Dropdown",
          modifiers: [],
          params: [
            {
              name: "selection",
              description: "An array containing the selected values.",
              type: {
                name: "Array"
              },
              optional: false
            },
            {
              name: "commitChanges",
              description:
                "If `true` the selection if finally committed the dropdown header text should reflect the new selection",
              type: {
                name: "Boolean"
              },
              optional: false
            },
            {
              name: "toggle",
              description:
                "-If `true` the dropdown should toggle it's current state",
              type: {
                name: "Boolean"
              },
              optional: false
            },
            {
              name: "notifyChanges",
              description: "-If `true` the dropdown will call onChange.",
              type: {
                name: "Boolean"
              },
              optional: false
            },
            {
              name: "event",
              description: "mouseUp event.",
              type: {
                name: "Event"
              },
              optional: false
            }
          ],
          returns: null,
          description: "Applies the selected values to the state"
        },
        {
          name: "renderLabel",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null
        },
        {
          name: "renderHeader",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "selectionLabelId",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "renderList",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null
        }
      ],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied.",
          defaultValue: {
            value: '""',
            computed: false
          }
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node.",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the component root class.",
                required: false
              },
              rootOpen: {
                name: "string",
                description: "Styles applied to the component when is open.",
                required: false
              },
              rootDisabled: {
                name: "string",
                description: "Styles applied to the component when is disable.",
                required: false
              },
              label: {
                name: "string",
                description: "Styles applied to the label.",
                required: false
              },
              header: {
                name: "string",
                description: "Styles applied to the header.",
                required: false
              },
              selection: {
                name: "string",
                description: "Styles applied to the selection",
                required: false
              },
              arrow: {
                name: "string",
                description: "Styles applied to the arrow",
                required: false
              },
              headerDisabled: {
                name: "string",
                description: "Styles applied when the header is disable.",
                required: false
              },
              icon: {
                name: "string",
                description: "Styles applied to the icon.",
                required: false
              },
              truncate: {
                name: "string",
                description: "Styles applied for truncating the list elements.",
                required: false
              },
              selectionDisabled: {
                name: "string",
                description: "Styles applied when the selection is disabled.",
                required: false
              },
              list: {
                name: "string",
                description: "Styles applied when the selection is disabled.",
                required: false
              },
              rootList: {
                name: "string",
                description: "Styles applied when the selection is disabled.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the component styles applied."
        },
        values: {
          type: {
            name: "arrayOf",
            value: {
              name: "shape",
              value: {
                id: {
                  name: "string",
                  required: false
                },
                label: {
                  name: "string",
                  required: true
                },
                selected: {
                  name: "bool",
                  required: false
                }
              }
            }
          },
          required: false,
          description: "The list to be rendered by the dropdown.",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        multiSelect: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If ´true´ the dropdown is multiselect, if ´false´ the dropdown is single select.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        showSearch: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If ´true´ the dropdown is rendered with a search bar, if ´false´ there won't be a search bar.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        disabled: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If ´true´ the dropdown is disabled unable to be interacted, if ´false´ it is enabled.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        expanded: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If ´true´ the dropdown starts opened if ´false´ it starts closed.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        onChange: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "A function to be executed whenever a item is selected in the dropdown, the function receives the selected item(s).",
          defaultValue: {
            value: "() {}",
            computed: false
          }
        },
        notifyChangesOnFirstRender: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If 'true' the dropdown will notify on the first render.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        labels: {
          type: {
            name: "shape",
            value: {
              title: {
                name: "string",
                description: "Title for the dropdown.",
                required: false
              },
              select: {
                name: "string",
                description: "The default when there are no options available.",
                required: false
              },
              selectAll: {
                name: "string",
                description: "Label used for the All checkbox action.",
                required: false
              },
              cancelLabel: {
                name: "string",
                description: "Cancel button label.",
                required: false
              },
              applyLabel: {
                name: "string",
                description: "Apply button label.",
                required: false
              },
              multiSelectionAction: {
                name: "string",
                description:
                  "The label used preceding the multiselection count.",
                required: false
              },
              multiSelectionConjunction: {
                name: "string",
                description:
                  "The label used in the middle of the multiselection count.",
                required: false
              }
            }
          },
          required: false,
          description: "An object containing all the labels for the dropdown.",
          defaultValue: {
            value: "{}",
            computed: false
          }
        },
        selectDefault: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If ´true´ and none element selected,\nsingle select has default (first) label selected.",
          defaultValue: {
            value: "true",
            computed: false
          }
        },
        hasTooltips: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If ´true´ the dropdown will show tooltips when user mouseenter text in list",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        disablePortal: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Disable the portal behavior.\nThe children stay within it's parent DOM hierarchy.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        singleSelectionToggle: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If ´true´, selection can be toggled when single selection.",
          defaultValue: {
            value: "true",
            computed: false
          }
        },
        placement: {
          type: {
            name: "enum",
            value: [
              {
                value: '"left"',
                computed: false
              },
              {
                value: '"right"',
                computed: false
              }
            ]
          },
          required: false,
          description: "Placement of the dropdown.",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        popperProps: {
          type: {
            name: "shape",
            value: "PropTypes.shape()",
            computed: true
          },
          required: false,
          description:
            "An object containing props to be wired to the popper component.",
          defaultValue: {
            value: "{}",
            computed: false
          }
        }
      }
    }
  },
  {
    name: "EmptyState",
    doc: {
      description: "",
      displayName: "EmptyState",
      methods: [],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the component root class.",
                required: false
              },
              container: {
                name: "string",
                description: "Styles applied to the component container class.",
                required: false
              },
              containerMessageOnly: {
                name: "string",
                description:
                  "Styles applied to the component container class, when there is no title or action.",
                required: false
              },
              iconContainer: {
                name: "string",
                description: "Styles applied to the icon container class.",
                required: false
              },
              textContainer: {
                name: "string",
                description: "Styles applied to the text container class.",
                required: false
              },
              titleContainer: {
                name: "string",
                description: "Styles applied to the title container class.",
                required: false
              },
              messageContainer: {
                name: "string",
                description: "Styles applied to the message container class.",
                required: false
              },
              actionContainer: {
                name: "string",
                description:
                  "Styles applied to the action message container class.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied to the empty state component."
        },
        title: {
          type: {
            name: "node"
          },
          required: false,
          description: "The title to be shown."
        },
        message: {
          type: {
            name: "node"
          },
          required: true,
          description: "The message to be shown."
        },
        action: {
          type: {
            name: "node"
          },
          required: false,
          description: "The action message to be shown."
        },
        icon: {
          type: {
            name: "element"
          },
          required: true,
          description: "Icon to be presented."
        }
      }
    }
  },
  {
    name: "FileUploader",
    doc: {
      description: "",
      displayName: "FileUploader",
      methods: [],
      props: {
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node."
        },
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        labels: {
          type: {
            name: "shape",
            value: {
              acceptedFiles: {
                name: "string",
                required: false
              },
              progressConjunction: {
                name: "string",
                required: false
              },
              dropzone: {
                name: "string",
                description: "DropZone area label.",
                required: false
              },
              sizeWarning: {
                name: "string",
                description: "Size file warning label.",
                required: false
              },
              drag: {
                name: "string",
                description: "Size file warning label.",
                required: false
              },
              selectFiles: {
                name: "string",
                description: "Size file warning label.",
                required: false
              },
              dropFiles: {
                name: "string",
                description: "Theming sheet used to style components",
                required: false
              },
              fileSizeError: {
                name: "string",
                description:
                  "Message to display when file size is greater than allowed",
                required: false
              },
              fileTypeError: {
                name: "string",
                description:
                  "Message to display when file type is greater than allowed",
                required: false
              },
              removeFileButtonLabel: {
                name: "string",
                description:
                  "Value of aria-label to apply to remove file button in filelist",
                required: false
              }
            }
          },
          required: false,
          description:
            "An object containing all the labels.\n\n- progressConjunction: The label used in the middle of the progress message."
        },
        fileList: {
          type: {
            name: "arrayOf",
            value: {
              name: "shape",
              value: {
                name: {
                  name: "string",
                  description: "The file name.",
                  required: false
                },
                size: {
                  name: "number",
                  description: "The file size in bytes.",
                  required: false
                },
                progress: {
                  name: "number",
                  description: "Upload progress in bytes.",
                  required: false
                },
                status: {
                  name: "enum",
                  value: [
                    {
                      value: '"progress"',
                      computed: false
                    },
                    {
                      value: '"success"',
                      computed: false
                    },
                    {
                      value: '"fail"',
                      computed: false
                    }
                  ],
                  description: "Upload status.",
                  required: false
                }
              }
            }
          },
          required: true,
          description: "The files to upload."
        },
        multiple: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Whether the DropZone should accept multiple files at once.",
          defaultValue: {
            value: "true",
            computed: false
          }
        },
        disabled: {
          type: {
            name: "bool"
          },
          required: false,
          description: "If the input is disabled or not",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        maxFileSize: {
          type: {
            name: "number"
          },
          required: false,
          description: "Max upload size",
          defaultValue: {
            value: "Infinity",
            computed: true
          }
        },
        acceptedFiles: {
          type: {
            name: "arrayOf",
            value: {
              name: "string"
            }
          },
          required: false,
          description: "Files extensions accepted for upload.",
          defaultValue: {
            value: "[]",
            computed: false
          }
        },
        onFilesAdded: {
          type: {
            name: "func"
          },
          required: false,
          description: "Callback fired when files are added."
        },
        onFileRemoved: {
          type: {
            name: "func"
          },
          required: false,
          description: "Callback fired when file is removed from list."
        }
      }
    }
  },
  {
    name: "Focus",
    doc: {
      description: "",
      displayName: "Focus",
      methods: [],
      props: {
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the root.",
                required: false
              },
              selected: {
                name: "string",
                description: "Styles applied when component is selected.",
                required: false
              },
              disabled: {
                name: "string",
                description: "Styles applied when component is disabled.",
                required: false
              },
              externalReference: {
                name: "string",
                description: "Styles applied to external reference.",
                required: false
              },
              falseFocus: {
                name: "string",
                description: "Styles applied when using the false focus.",
                required: false
              },
              focusDisabled: {
                name: "string",
                description: "Styles applied when focus disabled.",
                required: false
              },
              focusGridDisabled: {
                name: "string",
                required: false
              },
              focused: {
                name: "string",
                description: "Styles applied when focus active.",
                required: false
              },
              focus: {
                name: "string",
                description:
                  "Styles applied when focus customization is passed.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the component styles applied."
        },
        rootRef: {
          type: {
            name: "union",
            value: [
              {
                name: "func"
              },
              {
                name: "shape",
                value: {
                  current: {
                    name: "any",
                    required: false
                  }
                }
              }
            ]
          },
          required: false,
          description:
            "The reference to the root element to hold all Focus' context."
        },
        configuration: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description: "Extra configuration for the child element."
        },
        selected: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Whether the focus is selected."
        },
        disabled: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Whether the focus is disabled."
        },
        children: {
          type: {
            name: "node"
          },
          required: true,
          description: "Child node to set the focus."
        },
        strategy: {
          type: {
            name: "enum",
            value: [
              {
                value: '"listbox"',
                computed: false
              },
              {
                value: '"menu"',
                computed: false
              },
              {
                value: '"card"',
                computed: false
              },
              {
                value: '"grid"',
                computed: false
              }
            ]
          },
          required: false,
          description: "Focus and navigation strategy to be used."
        },
        focusOnClick: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Show focus when click element."
        },
        focusDisabled: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Show focus when click element."
        },
        disabledClass: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Indicates that the disabled class should be applied."
        },
        useArrows: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Use up/ down keyboard arrows to control focus."
        },
        useFalseFocus: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Uses an absolute positioned div as a focus."
        },
        filterClass: {
          type: {
            name: "string"
          },
          required: false,
          description: "Narrows the results of the focus to only theses class"
        },
        navigationJump: {
          type: {
            name: "number"
          },
          required: false,
          description:
            "How much the navigation will skip when using the arrows."
        }
      }
    }
  },
  {
    name: "Footer",
    doc: {
      description:
        "A Footer is a way of providing extra information at the end of a page.",
      displayName: "HvFooter",
      methods: [],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the component root class.",
                required: false
              },
              name: {
                name: "string",
                description: "Styles applied to name label on the left.",
                required: false
              },
              rightContainer: {
                name: "string",
                description:
                  "Styles applied to right container, with copyright and links.",
                required: false
              },
              copyright: {
                name: "string",
                description: "Styles applied to copyright label on the right.",
                required: false
              },
              links: {
                name: "string",
                description: "Styles applied to the links node on the right",
                required: false
              },
              separator: {
                name: "string",
                description:
                  "Styles applied to the separator between copyright and links",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied."
        },
        name: {
          type: {
            name: "node"
          },
          required: false,
          description: ""
        },
        copyright: {
          type: {
            name: "node"
          },
          required: false,
          description: ""
        },
        links: {
          type: {
            name: "node"
          },
          required: false,
          description: ""
        }
      }
    }
  },
  {
    name: "Grid",
    doc: {
      description:
        "The grid creates visual consistency between layouts while allowing flexibility\nacross a wide variety of designs. This component is based in a 12-column grid layout.\n\nIt is is based in the [Material UI Grid](https://material-ui.com/components/grid/#grid).\n\nThe definitions were set following the Design System directives:\n\n| Breakpoint | Width (in px) | Gutters (in px) | Number of columns |\n| ---------- | ------------- | --------------- | ----------------- |\n| xs         | [0-600[       | 15              | 4                 |\n| sm         | [600-960[     | 15              | 8                 |\n| md         | [960-1270[    | 30              | 12                |\n| lg         | [1270-1920[   | 30              | 12                |\n| xl         | [1920-...[    | 30              | 12                |",
      displayName: "HvGrid",
      methods: [],
      props: {
        alignContent: {
          type: {
            name: "enum",
            value: [
              {
                value: '"stretch"',
                computed: false
              },
              {
                value: '"center"',
                computed: false
              },
              {
                value: '"flex-start"',
                computed: false
              },
              {
                value: '"flex-end"',
                computed: false
              },
              {
                value: '"space-between"',
                computed: false
              },
              {
                value: '"space-around"',
                computed: false
              }
            ]
          },
          required: false,
          description:
            "Defines the `align-content` style property.\nIt's applied for all screen sizes."
        },
        alignItems: {
          type: {
            name: "enum",
            value: [
              {
                value: '"flex-start"',
                computed: false
              },
              {
                value: '"center"',
                computed: false
              },
              {
                value: '"flex-end"',
                computed: false
              },
              {
                value: '"stretch"',
                computed: false
              },
              {
                value: '"baseline"',
                computed: false
              }
            ]
          },
          required: false,
          description:
            "Defines the `align-items` style property.\nIt's applied for all screen sizes."
        },
        children: {
          type: {
            name: "node"
          },
          required: false,
          description: "The content of the component."
        },
        classes: {
          type: {
            name: "object"
          },
          required: true,
          description:
            "Override or extend the styles applied to the component.\nSee [CSS API](#css) below for more details."
        },
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "@ignore"
        },
        component: {
          type: {
            name: "elementType"
          },
          required: false,
          description:
            "The component used for the root node.\nEither a string to use a DOM element or a component."
        },
        container: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If `true`, the component will have the flex *container* behavior.\nYou should be wrapping *items* with a *container*."
        },
        direction: {
          type: {
            name: "enum",
            value: [
              {
                value: '"row"',
                computed: false
              },
              {
                value: '"row-reverse"',
                computed: false
              },
              {
                value: '"column"',
                computed: false
              },
              {
                value: '"column-reverse"',
                computed: false
              }
            ]
          },
          required: false,
          description:
            "Defines the `flex-direction` style property.\nIt is applied for all screen sizes."
        },
        item: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If `true`, the component will have the flex *item* behavior.\nYou should be wrapping *items* with a *container*."
        },
        justify: {
          type: {
            name: "enum",
            value: [
              {
                value: '"flex-start"',
                computed: false
              },
              {
                value: '"center"',
                computed: false
              },
              {
                value: '"flex-end"',
                computed: false
              },
              {
                value: '"space-between"',
                computed: false
              },
              {
                value: '"space-around"',
                computed: false
              },
              {
                value: '"space-evenly"',
                computed: false
              }
            ]
          },
          required: false,
          description:
            "Defines the `justify-content` style property.\nIt is applied for all screen sizes."
        },
        lg: {
          type: {
            name: "enum",
            value: [
              {
                value: "false",
                computed: false
              },
              {
                value: '"auto"',
                computed: false
              },
              {
                value: "true",
                computed: false
              },
              {
                value: "1",
                computed: false
              },
              {
                value: "2",
                computed: false
              },
              {
                value: "3",
                computed: false
              },
              {
                value: "4",
                computed: false
              },
              {
                value: "5",
                computed: false
              },
              {
                value: "6",
                computed: false
              },
              {
                value: "7",
                computed: false
              },
              {
                value: "8",
                computed: false
              },
              {
                value: "9",
                computed: false
              },
              {
                value: "10",
                computed: false
              },
              {
                value: "11",
                computed: false
              },
              {
                value: "12",
                computed: false
              }
            ]
          },
          required: false,
          description:
            "Defines the number of grids the component is going to use.\nIt's applied for the `lg` breakpoint and wider screens if not overridden."
        },
        md: {
          type: {
            name: "enum",
            value: [
              {
                value: "false",
                computed: false
              },
              {
                value: '"auto"',
                computed: false
              },
              {
                value: "true",
                computed: false
              },
              {
                value: "1",
                computed: false
              },
              {
                value: "2",
                computed: false
              },
              {
                value: "3",
                computed: false
              },
              {
                value: "4",
                computed: false
              },
              {
                value: "5",
                computed: false
              },
              {
                value: "6",
                computed: false
              },
              {
                value: "7",
                computed: false
              },
              {
                value: "8",
                computed: false
              },
              {
                value: "9",
                computed: false
              },
              {
                value: "10",
                computed: false
              },
              {
                value: "11",
                computed: false
              },
              {
                value: "12",
                computed: false
              }
            ]
          },
          required: false,
          description:
            "Defines the number of grids the component is going to use.\nIt's applied for the `md` breakpoint and wider screens if not overridden."
        },
        sm: {
          type: {
            name: "enum",
            value: [
              {
                value: "false",
                computed: false
              },
              {
                value: '"auto"',
                computed: false
              },
              {
                value: "true",
                computed: false
              },
              {
                value: "1",
                computed: false
              },
              {
                value: "2",
                computed: false
              },
              {
                value: "3",
                computed: false
              },
              {
                value: "4",
                computed: false
              },
              {
                value: "5",
                computed: false
              },
              {
                value: "6",
                computed: false
              },
              {
                value: "7",
                computed: false
              },
              {
                value: "8",
                computed: false
              },
              {
                value: "9",
                computed: false
              },
              {
                value: "10",
                computed: false
              },
              {
                value: "11",
                computed: false
              },
              {
                value: "12",
                computed: false
              }
            ]
          },
          required: false,
          description:
            "Defines the number of grids the component is going to use.\nIt's applied for the `sm` breakpoint and wider screens if not overridden."
        },
        spacing: {
          type: {
            name: "enum",
            value: [
              {
                value: '"xs"',
                computed: false
              },
              {
                value: '"sm"',
                computed: false
              },
              {
                value: '"md"',
                computed: false
              },
              {
                value: '"lg"',
                computed: false
              },
              {
                value: '"xl"',
                computed: false
              },
              {
                value: '"auto"',
                computed: false
              },
              {
                value: "0",
                computed: false
              },
              {
                value: "1",
                computed: false
              },
              {
                value: "2",
                computed: false
              },
              {
                value: "3",
                computed: false
              },
              {
                value: "4",
                computed: false
              },
              {
                value: "5",
                computed: false
              },
              {
                value: "6",
                computed: false
              },
              {
                value: "7",
                computed: false
              },
              {
                value: "8",
                computed: false
              },
              {
                value: "9",
                computed: false
              },
              {
                value: "10",
                computed: false
              }
            ]
          },
          required: false,
          description:
            "Defines the space between the type item component. It can only be used on a type container component.\nBased in the 7.5px factor defined in the theme, it allows the definition of this factor based on the factor\n(number between 0 and 10), breakpoint or auto.",
          defaultValue: {
            value: '"auto"',
            computed: false
          }
        },
        wrap: {
          type: {
            name: "enum",
            value: [
              {
                value: '"nowrap"',
                computed: false
              },
              {
                value: '"wrap"',
                computed: false
              },
              {
                value: '"wrap-reverse"',
                computed: false
              }
            ]
          },
          required: false,
          description:
            "Defines the `flex-wrap` style property.\nIt's applied for all screen sizes."
        },
        xl: {
          type: {
            name: "enum",
            value: [
              {
                value: "false",
                computed: false
              },
              {
                value: '"auto"',
                computed: false
              },
              {
                value: "true",
                computed: false
              },
              {
                value: "1",
                computed: false
              },
              {
                value: "2",
                computed: false
              },
              {
                value: "3",
                computed: false
              },
              {
                value: "4",
                computed: false
              },
              {
                value: "5",
                computed: false
              },
              {
                value: "6",
                computed: false
              },
              {
                value: "7",
                computed: false
              },
              {
                value: "8",
                computed: false
              },
              {
                value: "9",
                computed: false
              },
              {
                value: "10",
                computed: false
              },
              {
                value: "11",
                computed: false
              },
              {
                value: "12",
                computed: false
              }
            ]
          },
          required: false,
          description:
            "Defines the number of grids the component is going to use.\nIt's applied for the `xl` breakpoint and wider screens."
        },
        xs: {
          type: {
            name: "enum",
            value: [
              {
                value: "false",
                computed: false
              },
              {
                value: '"auto"',
                computed: false
              },
              {
                value: "true",
                computed: false
              },
              {
                value: "1",
                computed: false
              },
              {
                value: "2",
                computed: false
              },
              {
                value: "3",
                computed: false
              },
              {
                value: "4",
                computed: false
              },
              {
                value: "5",
                computed: false
              },
              {
                value: "6",
                computed: false
              },
              {
                value: "7",
                computed: false
              },
              {
                value: "8",
                computed: false
              },
              {
                value: "9",
                computed: false
              },
              {
                value: "10",
                computed: false
              },
              {
                value: "11",
                computed: false
              },
              {
                value: "12",
                computed: false
              }
            ]
          },
          required: false,
          description:
            "Defines the number of grids the component is going to use.\nIt's applied for all the screen sizes with the lowest priority."
        },
        zeroMinWidth: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If `true`, it sets `min-width: 0` on the item.\nRefer to the limitations section of the documentation to better understand the use case."
        }
      }
    }
  },
  {
    name: "Header",
    doc: {
      description:
        "The header should be informative and provide the most important information about the digital product so that users could scan it in split seconds.\n\nOur implementation of the Header is divided in:\n<ul>\n<li>Brand</li>\n<li>Navigation</li>\n<li>Actions</li>\n</ul>",
      displayName: "HvHeader",
      methods: [],
      props: {
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the component root class.",
                required: false
              },
              header: {
                name: "string",
                description: "Styles applied to the component header class.",
                required: false
              },
              backgroundColor: {
                name: "string",
                description:
                  "Styles applied to the component background color.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied."
        },
        position: {
          type: {
            name: "enum",
            value: [
              {
                value: '"static"',
                computed: false
              },
              {
                value: '"relative"',
                computed: false
              },
              {
                value: '"fixed"',
                computed: false
              },
              {
                value: '"absolute"',
                computed: false
              },
              {
                value: '"sticky"',
                computed: false
              }
            ]
          },
          required: false,
          description: "Position of the component.",
          defaultValue: {
            value: '"fixed"',
            computed: false
          }
        },
        children: {
          type: {
            name: "node"
          },
          required: true,
          description: "Children to be rendered."
        }
      }
    }
  },
  {
    name: "Input",
    doc: {
      description:
        "An input is a graphicl control element that allows the user to write text.",
      displayName: "HvInput",
      methods: [
        {
          name: "manageInputValueState",
          docblock:
            "Updates the states while the input is being entered.\n\n@param {String} value - the inputted value.\n@param {*} warningText - the error text below the input.",
          modifiers: [],
          params: [
            {
              name: "value",
              description: "the inputted value.",
              type: {
                name: "String"
              },
              optional: false
            },
            {
              name: "warningText",
              description: "the error text below the input.",
              type: {
                name: "mixed"
              },
              optional: false
            }
          ],
          returns: null,
          description: "Updates the states while the input is being entered."
        },
        {
          name: "focusInput",
          docblock:
            "Looks for the node that represent the input inside the material tree and focus it.",
          modifiers: [],
          params: [],
          returns: null,
          description:
            "Looks for the node that represent the input inside the material tree and focus it."
        },
        {
          name: "handleClear",
          docblock:
            "Clears the input value from the state and refocus the input.\n\nNote: given than the input component from material doesn't offer any api to focus\nthis timeout with a node focus was used to solve the problem\nbecause the reference to the input is lost when the component is updated.",
          modifiers: [],
          params: [],
          returns: null,
          description:
            "Clears the input value from the state and refocus the input.\n\nNote: given than the input component from material doesn't offer any api to focus\nthis timeout with a node focus was used to solve the problem\nbecause the reference to the input is lost when the component is updated."
        },
        {
          name: "suggestionClearHandler",
          docblock: "clears the suggestion array.",
          modifiers: [],
          params: [],
          returns: null,
          description: "clears the suggestion array."
        },
        {
          name: "suggestionHandler",
          docblock: "fills of the suggestion array.",
          modifiers: [],
          params: [
            {
              name: "value"
            }
          ],
          returns: null,
          description: "fills of the suggestion array."
        },
        {
          name: "suggestionSelectedHandler",
          docblock:
            "Executes the user callback adds the selection to the state and clears the suggestions.",
          modifiers: [],
          params: [
            {
              name: "event"
            },
            {
              name: "item"
            }
          ],
          returns: null,
          description:
            "Executes the user callback adds the selection to the state and clears the suggestions."
        },
        {
          name: "onChangeHandler",
          docblock:
            "Updates the state while is being inputted, also executes the user onChange\nallowing the customization of the input if required.\n\n@param {Object} event - The event provided by the material ui input",
          modifiers: [],
          params: [
            {
              name: "event",
              description: "The event provided by the material ui input",
              type: {
                name: "Object"
              },
              optional: false
            }
          ],
          returns: null,
          description:
            "Updates the state while is being inputted, also executes the user onChange\nallowing the customization of the input if required."
        },
        {
          name: "onInputBlurHandler",
          docblock:
            "Validates the input updating the state and modifying the info text, also executes\nthe user provided onBlur passing the current validation status and value.\n\n@returns {undefined}",
          modifiers: [],
          params: [],
          returns: {
            description: null,
            type: null
          },
          description:
            "Validates the input updating the state and modifying the info text, also executes\nthe user provided onBlur passing the current validation status and value."
        },
        {
          name: "onFocusHandler",
          docblock:
            "Updates the state putting again the value from the state because the input value is\nnot automatically manage, it also executes the onFocus function from the user passing the value",
          modifiers: [],
          params: [],
          returns: null,
          description:
            "Updates the state putting again the value from the state because the input value is\nnot automatically manage, it also executes the onFocus function from the user passing the value"
        },
        {
          name: "onKeyDownHandler",
          docblock:
            "Focus the suggestion list when the arrow down is pressed.\n\n@param {Object} event - The event provided by the material ui input",
          modifiers: [],
          params: [
            {
              name: "event",
              description: "The event provided by the material ui input",
              type: {
                name: "Object"
              },
              optional: false
            }
          ],
          returns: null,
          description:
            "Focus the suggestion list when the arrow down is pressed."
        },
        {
          name: "onContainerBlurHandler",
          docblock:
            "Clears the suggestion list on blur.\n\n@param {Object} event - The event provided by the material ui input.",
          modifiers: [],
          params: [
            {
              name: "event",
              description: "The event provided by the material ui input.",
              type: {
                name: "Object"
              },
              optional: false
            }
          ],
          returns: null,
          description: "Clears the suggestion list on blur."
        },
        {
          name: "getInputAdornment",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "inputId",
              type: null
            },
            {
              name: "classes",
              type: null
            },
            {
              name: "showValidationIcon",
              type: null
            },
            {
              name: "stateValidationState",
              type: null
            },
            {
              name: "showClear",
              type: null
            },
            {
              name: "clearButtonLabel",
              type: null
            },
            {
              name: "customFixedIcon",
              type: null
            }
          ],
          returns: null
        }
      ],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied.",
          defaultValue: {
            value: '""',
            computed: false
          }
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node.",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description:
                  "Styles applied to the root container of the input.",
                required: false
              },
              inputRoot: {
                name: "string",
                description:
                  "Styles applied to input root which is comprising of everything but the labels and descriptions.",
                required: false
              },
              inputRootDisabled: {
                name: "string",
                description:
                  "Styles applied to input root when it is disabled.",
                required: false
              },
              inputRootInvalid: {
                name: "string",
                description: "Styles applied to input root when it is invalid.",
                required: false
              },
              inputRootFocused: {
                name: "string",
                description: "Styles applied to input root when it is focused.",
                required: false
              },
              input: {
                name: "string",
                description: "Styles applied to input html element.",
                required: false
              },
              inputDisabled: {
                name: "string",
                description:
                  "Styles applied to input html element when it is disabled.",
                required: false
              },
              suggestionsContainer: {
                name: "string",
                description:
                  "Styles applied to the container of the suggestions list.",
                required: false
              },
              suggestionList: {
                name: "string",
                description: "Styles applied to the suggestions list.",
                required: false
              },
              multiLine: {
                name: "string",
                description:
                  "Styles applied to input html element when it is multiline mode.",
                required: false
              },
              label: {
                name: "string",
                description: "Styles applied to the label element.",
                required: false
              },
              labelDisabled: {
                name: "string",
                description:
                  "Styles applied to the label element when it is disabled.",
                required: false
              },
              labelContainer: {
                name: "string",
                description:
                  "Styles applied to the container of the labels elements.",
                required: false
              },
              infoIconContainer: {
                name: "string",
                description:
                  "Styles applied to the icon information container.",
                required: false
              },
              infoText: {
                name: "string",
                description: "Styles applied to the icon information text.",
                required: false
              },
              text: {
                name: "string",
                description: "Styles applied to the description.",
                required: false
              },
              textInfo: {
                name: "string",
                description:
                  "Styles applied to the description when it is showing an information.",
                required: false
              },
              textWarning: {
                name: "string",
                description:
                  "Styles applied to the description when it is showing a warning.",
                required: false
              },
              showText: {
                name: "string",
                description: "Styles applied when the text should be shown.",
                required: false
              },
              icon: {
                name: "string",
                description: "Styles applied to the input adornment icons.",
                required: false
              },
              iconClear: {
                name: "string",
                description:
                  "Styles applied to the icon used to clean the input.",
                required: false
              },
              "@global": {
                name: "string",
                description: "IE11 specific styling.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the component styles applied."
        },
        labels: {
          type: {
            name: "shape",
            value: {
              inputLabel: {
                name: "string",
                description: "The label on top of the input.",
                required: false
              },
              placeholder: {
                name: "string",
                description: "The placeholder value of the input.",
                required: false
              },
              infoText: {
                name: "string",
                description:
                  "The default value of the info text below the input.",
                required: false
              },
              warningText: {
                name: "string",
                description: "The value when a validation fails.",
                required: false
              },
              maxCharQuantityWarningText: {
                name: "string",
                description:
                  "The message that appears when there are too many characters.",
                required: false
              },
              minCharQuantityWarningText: {
                name: "string",
                description:
                  "The message that appears when there are too few characters.",
                required: false
              },
              requiredWarningText: {
                name: "string",
                description:
                  "The message that appears when the input is empty and required.",
                required: false
              },
              clearButtonLabel: {
                name: "string",
                description: "The label of the clear button.",
                required: false
              }
            }
          },
          required: false,
          description:
            "An Object containing the various texts associated with the input."
        },
        inputProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description: "Attributes applied to the input element.",
          defaultValue: {
            value: "{}",
            computed: false
          }
        },
        inputRef: {
          type: {
            name: "shape",
            value: {
              current: {
                name: "any",
                required: false
              }
            }
          },
          required: false,
          description: "Allows passing a ref to the underlying input",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        disabled: {
          type: {
            name: "bool"
          },
          required: false,
          description: "If ´true´ the input is disabled.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        isRequired: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If ´true´ the input value must be filled on blur or else the validation fails.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        password: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If ´true´ the input is of type password hiding the value.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        onChange: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The function that will be executed onChange, allows modification of the input,\nit receives the value. If a new value should be presented it must returned it.",
          defaultValue: {
            value: "(event, value) => value",
            computed: false
          }
        },
        onBlur: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The function that will be executed onBlur, allows checking the validation state,\nit receives the value and the validation state (´empty´, ´filled´, ´invalid´, ´valid´).",
          defaultValue: {
            value: "() => {}",
            computed: false
          }
        },
        onFocus: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The function that will be executed onBlur, allows checking the value state,\nit receives the value.",
          defaultValue: {
            value: "() => {}",
            computed: false
          }
        },
        onKeyDown: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The function that will be executed onKeyDown, allows checking the value state,\nit receives the event and value.",
          defaultValue: {
            value: "() => {}",
            computed: false
          }
        },
        suggestionListCallback: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The function that will be executed to received an array of objects that has a label and id to create list of suggestion",
          defaultValue: {
            value: "() => {}",
            computed: false
          }
        },
        suggestionSelectedCallback: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The function that will be executed after selecting a value in the suggestion list",
          defaultValue: {
            value: "() => {}",
            computed: false
          }
        },
        showInfo: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If `true` information label is shown, `false` otherwise.",
          defaultValue: {
            value: "true",
            computed: false
          }
        },
        validation: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The custom validation function, it receives the value and must return\neither ´true´ for valid or ´false´ for invalid, default validations would only\noccur if this function is null or undefined",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        value: {
          type: {
            name: "string"
          },
          required: false,
          description: "The value of the input, when controlled.",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        initialValue: {
          type: {
            name: "string"
          },
          required: false,
          description: "The initial value of the input, when uncontrolled.",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        autoFocus: {
          type: {
            name: "bool"
          },
          required: false,
          description: "If `true` it should autofocus.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        validationState: {
          type: {
            name: "enum",
            value: [
              {
                value: '"empty"',
                computed: false
              },
              {
                value: '"filled"',
                computed: false
              },
              {
                value: '"invalid"',
                computed: false
              },
              {
                value: '"valid"',
                computed: false
              }
            ]
          },
          required: false,
          description:
            "The initial state of the input.\nnote: Is recommended you use the provided validationStates object to set this value.",
          defaultValue: {
            value: "validationStates.empty",
            computed: true
          }
        },
        infoIcon: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Show info icon with info label.infoText.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        validationIconVisible: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If `true` the validation icon is visible, `false` otherwise",
          defaultValue: {
            value: "true",
            computed: false
          }
        },
        disableClear: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If `true` the clear button is disabled if `false` is enable",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        validationIconPosition: {
          type: {
            name: "enum",
            value: [
              {
                value: '"left"',
                computed: false
              },
              {
                value: '"right"',
                computed: false
              }
            ]
          },
          required: false,
          description:
            "The icon position of the input. It is recommended to use the provided validationIconPosition object to set this value.",
          defaultValue: {
            value: '"right"',
            computed: false
          }
        },
        customFixedIcon: {
          type: {
            name: "node"
          },
          required: false,
          description: "a custom icon to be added into the input.",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        maxCharQuantity: {
          type: {
            name: "number"
          },
          required: false,
          description:
            "The maximum allowed length of the characters, if this value is null no check\nwill be performed.",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        minCharQuantity: {
          type: {
            name: "number"
          },
          required: false,
          description:
            "The minimum allowed length of the characters, if this value is null no check\nwill be perform.",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        validationType: {
          type: {
            name: "enum",
            value: [
              {
                value: '"none"',
                computed: false
              },
              {
                value: '"number"',
                computed: false
              },
              {
                value: '"email"',
                computed: false
              }
            ]
          },
          required: false,
          description:
            "Which type of default validation should the input perform. It is recommended to use the provided ValidationTypes object to set this value.",
          defaultValue: {
            value: '"none"',
            computed: false
          }
        },
        externalWarningTextOverride: {
          type: {
            name: "string"
          },
          required: false,
          description:
            "Overrides any validation with a specific error/warning message to set in the warningText slot.",
          defaultValue: {
            value: "null",
            computed: false
          }
        }
      }
    }
  },
  {
    name: "Kpi",
    doc: {
      description: "",
      displayName: "HvKpi",
      methods: [],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the component root class.",
                required: false
              },
              visualIndicatorContainer: {
                name: "string",
                description:
                  "Styles applied to the component visual indicator.",
                required: false
              },
              comparisons: {
                name: "string",
                description: "Styles applied to the component comparison.",
                required: false
              },
              comparisonContainer: {
                name: "string",
                description:
                  "Styles applied to the component comparison container.",
                required: false
              },
              comparisonComposition: {
                name: "string",
                description:
                  "Styles applied to the component comparison composition wrapper.",
                required: false
              },
              indicatorsContainer: {
                name: "string",
                description: "Styles applied to the component indicators.",
                required: false
              },
              indicatorText: {
                name: "string",
                description: "Styles applied to the component indicators text.",
                required: false
              },
              indicatorUnit: {
                name: "string",
                description: "Styles applied to the component indicators unit.",
                required: false
              },
              spacingToTheRight: {
                name: "string",
                description:
                  "Styles applied to the component comparison container right spacing.",
                required: false
              },
              trendLine: {
                name: "string",
                description: "Styles applied to the component trend line.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the component styles applied."
        },
        trendIndicator: {
          type: {
            name: "node"
          },
          required: false,
          description:
            "An Element that will be rendered to the left of the kpi indicator text."
        },
        visualIndicator: {
          type: {
            name: "node"
          },
          required: false,
          description:
            "An Element that will be rendered to the left of the kpi indicator text."
        },
        visualComparison: {
          type: {
            name: "node"
          },
          required: false,
          description:
            "An Element that will be rendered below the kpi indicator text."
        },
        labels: {
          type: {
            name: "shape",
            value: {
              title: {
                name: "string",
                description: "The text at the top of the kpi.",
                required: false
              },
              indicator: {
                name: "string",
                description: "The text in the middle of the kpi.",
                required: false
              },
              unit: {
                name: "string",
                description: "The text to the right of the indicator.",
                required: false
              },
              comparisonIndicatorInfo: {
                name: "string",
                description: "the text to the right of the visual comparison.",
                required: false
              }
            }
          },
          required: false,
          description:
            "The object that contains the different labels inside the kpi."
        },
        indicatorTextVariant: {
          type: {
            name: "enum",
            value: [
              {
                value: '"5xlTitle"',
                computed: false
              },
              {
                value: '"xxlTitle"',
                computed: false
              },
              {
                value: '"lTitle"',
                computed: false
              },
              {
                value: '"sTitle"',
                computed: false
              }
            ]
          },
          required: false,
          description:
            "The typography variant used in the main text indicator of the KPI"
        },
        indicatorUnitTextVariant: {
          type: {
            name: "enum",
            value: [
              {
                value: '"sTitle"',
                computed: false
              },
              {
                value: '"sText"',
                computed: false
              },
              {
                value: '"infoText"',
                computed: false
              }
            ]
          },
          required: false,
          description:
            "The typography variant used in the main text indicator of the KPI"
        }
      }
    }
  },
  {
    name: "Linechart",
    doc: {
      description:
        "A line chart or line plot or line graph is a type of chart which displays information as a series of data points\ncalled 'markers' connected by straight line segments. It is a basic type of chart common in many fields.\n\nOur implementation uses as base Plotly. If you have a specific case\nthat we don't cover directly, the Plotly [documentation](https://plotly.com/javascript/) is a good starting point.",
      displayName: "Linechart",
      methods: [],
      props: {
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "An Id passed on to the component"
        },
        classes: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "A Jss Object used to override or extend the styles applied."
        },
        title: {
          type: {
            name: "string"
          },
          required: false,
          description: "Title of the chart."
        },
        subtitle: {
          type: {
            name: "string"
          },
          required: false,
          description: "Subtitle of the chart."
        },
        data: {
          type: {
            name: "arrayOf",
            value: {
              name: "instanceOf",
              value: "Object"
            }
          },
          required: true,
          description:
            "Plotly data object (see https://plot.ly/javascript/reference/)."
        },
        layout: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "Plotly layout object (see https://plot.ly/javascript/reference/#layout)."
        },
        config: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "Plotly config object (see https://plot.ly/javascript/configuration-options/)."
        },
        tooltipType: {
          type: {
            name: "enum",
            value: [
              {
                value: '"single"',
                computed: false
              },
              {
                value: '"multiple"',
                computed: false
              }
            ]
          },
          required: false,
          description: "Defines if should use a single or multiline tooltip.",
          defaultValue: {
            value: '"multiple"',
            computed: false
          }
        },
        type: {
          type: {
            name: "enum",
            value: [
              {
                value: '"line"',
                computed: false
              },
              {
                value: '"area"',
                computed: false
              },
              {
                value: '"stack"',
                computed: false
              }
            ]
          },
          required: false,
          description: "Sets the type of graph.",
          defaultValue: {
            value: '"line"',
            computed: false
          }
        },
        xAxisTitle: {
          type: {
            name: "string"
          },
          required: false,
          description: "Defines the title of the X axis."
        },
        yAxisTitle: {
          type: {
            name: "string"
          },
          required: false,
          description: "Defines the title of the Y axis."
        },
        rangeSlider: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Defines it should present a range slider.",
          defaultValue: {
            value: "false",
            computed: false
          }
        }
      }
    }
  },
  {
    name: "Link",
    doc: {
      description: "",
      displayName: "HvLink",
      methods: [],
      props: {
        classes: {
          type: {
            name: "shape",
            value: {
              a: {
                name: "string",
                description: "Styles applied to the component.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied."
        },
        children: {
          type: {
            name: "node"
          },
          required: true,
          description: "Children."
        },
        route: {
          type: {
            name: "string"
          },
          required: true,
          description: "Path route."
        },
        onClick: {
          type: {
            name: "func"
          },
          required: false,
          description: "OnClick function."
        },
        tabIndex: {
          type: {
            name: "number"
          },
          required: false,
          description: "TabIndex."
        },
        data: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description: "Data to be returned in the onClick function."
        },
        Component: {
          type: {
            name: "elementType"
          },
          required: false,
          description:
            "The component used for the link node.\nEither a string to use a DOM element or a component."
        }
      }
    }
  },
  {
    name: "List",
    doc: {
      description: "Component used to show a set of related data to the user.",
      displayName: "List",
      methods: [
        {
          name: "handleSelect",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "evt",
              type: null
            },
            {
              name: "item",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "handleSelectAll",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null
        },
        {
          name: "renderSelectAll",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null
        },
        {
          name: "renderListItem",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "item",
              type: null
            },
            {
              name: "i",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "renderMultiSelectItem",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "item",
              type: null
            },
            {
              name: "itemId",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "renderSingleSelectItem",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "item",
              type: null
            },
            {
              name: "itemId",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "renderItemText",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "item",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "renderText",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "item",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "renderNavIcon",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null
        },
        {
          name: "renderLeftIcon",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "item",
              type: null
            }
          ],
          returns: null
        }
      ],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the component root class.",
                required: false
              },
              list: {
                name: "string",
                description: "Styles applied to the list element.",
                required: false
              },
              listItem: {
                name: "string",
                description: "Styles applied to the list item.",
                required: false
              },
              condensed: {
                name: "string",
                description: "Styles applied to the list item when condensed.",
                required: false
              },
              disabled: {
                name: "string",
                description: "Styles applied to the list item when disabled.",
                required: false
              },
              selector: {
                name: "string",
                description:
                  "Styles applied to the list item selector, when it is enabled.",
                required: false
              },
              selectorContainer: {
                name: "string",
                description:
                  "Styles applied to the list item selector container.",
                required: false
              },
              selected: {
                name: "string",
                description: "Styles applied to the selected list item.",
                required: false
              },
              selectAll: {
                name: "string",
                description:
                  "Styles applied to the select all option when multiselect.",
                required: false
              },
              textDisabled: {
                name: "string",
                description: "Style applied to the text of a disabled item.",
                required: false
              },
              label: {
                name: "string",
                description: "Style applied to the label of the checkbox.",
                required: false
              },
              box: {
                name: "string",
                description: "Style applied to the icon box.",
                required: false
              },
              labelIconLeftPadding: {
                name: "string",
                description:
                  "Styles applied to the list item icon left padding",
                required: false
              },
              noIconLeftPadding: {
                name: "string",
                description:
                  "Styles applied to the list item padding when no left icon",
                required: false
              },
              truncate: {
                name: "string",
                description:
                  "Styles applied when the list item text when truncate.",
                required: false
              },
              icon: {
                name: "string",
                description: "Styles applied to the icon of the selector.",
                required: false
              },
              focus: {
                name: "string",
                description: "Styles applied when focus .",
                required: false
              },
              link: {
                name: "string",
                description: "Styles applied to the link.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the component styles applied."
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "The id of the root element",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        values: {
          type: {
            name: "arrayOf",
            value: {
              name: "shape",
              value: {
                id: {
                  name: "string",
                  required: false
                },
                label: {
                  name: "string",
                  required: true
                },
                selected: {
                  name: "bool",
                  required: false
                },
                disabled: {
                  name: "bool",
                  required: false
                },
                isHidden: {
                  name: "bool",
                  required: false
                },
                iconCallback: {
                  name: "func",
                  required: false
                },
                showNavIcon: {
                  name: "bool",
                  required: false
                },
                path: {
                  name: "string",
                  required: false
                },
                params: {
                  name: "instanceOf",
                  value: "Object",
                  required: false
                }
              }
            }
          },
          required: true,
          description:
            "A list containing the elements to be rendered.\n\n- id: The id of the item.\n- label: The label of the element to be rendered.\n- selected: The selection state of the element.\n- disabled: The disabled state of the element.\n- isHidden: Is item visible.\n- iconCallback: The icon.\n- showNavIcon: If true renders the navigation icon on the right.\n- path: The path to navigate to."
        },
        multiSelect: {
          type: {
            name: "bool"
          },
          required: false,
          description: "If true renders a multi select list.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        showSelectAll: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If true renders select all option for multi selection lists with selectors.\nnote: It will only be rendered if multiSelect and useSelector props are set to true.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        labels: {
          type: {
            name: "shape",
            value: {
              selectAll: {
                name: "string",
                description: "The label used for the All checkbox action.",
                required: false
              },
              selectionConjunction: {
                name: "string",
                description:
                  "The label used in the middle of the multiselection count.",
                required: false
              }
            }
          },
          required: false,
          description: "An object containing all the labels for the dropdown.",
          defaultValue: {
            value: '{\n  selectAll: "All",\n  selectionConjunction: "of"\n}',
            computed: false
          }
        },
        useSelector: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If true renders list items with radio or checkbox selectors.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        onChange: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "Call back fired when list item is selected. Returns selection state.",
          defaultValue: {
            value: "() {}",
            computed: false
          }
        },
        onClick: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "Call back fired when list item is selected. Returns selected item.",
          defaultValue: {
            value: "() {}",
            computed: false
          }
        },
        selectable: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If ´true´ the list items will show the selection state.",
          defaultValue: {
            value: "true",
            computed: false
          }
        },
        selectDefault: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If ´true´ and none element selected,\nsingle select has default (first) label selected.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        singleSelectionToggle: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If ´true´, selection can be toggled when single selection.",
          defaultValue: {
            value: "true",
            computed: false
          }
        },
        condensed: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If ´true´ the list will be rendered without vertical spacing.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        hasTooltips: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If ´true´ the dropdown will show tooltips when user mouseenter text in list",
          defaultValue: {
            value: "false",
            computed: false
          }
        }
      }
    }
  },
  {
    name: "Loading",
    doc: {
      description:
        "The Loading component as two forms of working:\n- As a normal component inline when no children is passed;\n- As a HOC when a children is passed",
      displayName: "Loading",
      methods: [],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Style applied to the root of the component",
                required: false
              },
              barContainer: {
                name: "string",
                description: "Style applied to the container.",
                required: false
              },
              loadingBar: {
                name: "string",
                description: "Style applied to the loading bar.",
                required: false
              },
              loadingText: {
                name: "string",
                description: "Style applied to the text.",
                required: false
              },
              overlay: {
                name: "string",
                description: "Style applied to the overlay",
                required: false
              },
              blur: {
                name: "string",
                description: "Style to display overlay.",
                required: false
              }
            }
          },
          required: true,
          description: "Styles applied to the Drawer Paper element."
        },
        small: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Indicates if the component should be render in a small size.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        text: {
          type: {
            name: "string"
          },
          required: false,
          description: "The text to be displayed."
        },
        isActive: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Activates the loading visualization.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        color: {
          type: {
            name: "string"
          },
          required: false,
          description: "Color applied to the bars."
        },
        children: {
          type: {
            name: "node"
          },
          required: false,
          description: "Children"
        }
      }
    }
  },
  {
    name: "Login",
    doc: {
      description: "Main container for the Login component.",
      displayName: "HvLogin",
      methods: [
        {
          name: "switchForms",
          docblock:
            "Function to switch the status inRecoveryMode. This status is used to determine which form\nshould be render (Login or Recover).",
          modifiers: [],
          params: [],
          returns: null,
          description:
            "Function to switch the status inRecoveryMode. This status is used to determine which form\nshould be render (Login or Recover)."
        }
      ],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied.",
          defaultValue: {
            value: '""',
            computed: false
          }
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node.",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the component root class.",
                required: false
              },
              container: {
                name: "string",
                description: "Styles applied to the component container class.",
                required: false
              },
              rightContainer: {
                name: "string",
                description: "Styles applied to the right container.",
                required: false
              },
              panelPosition: {
                name: "string",
                description: "Styles applied to the grid.",
                required: false
              }
            }
          },
          required: true,
          description: "the classes object to be applied into the root object."
        },
        formClasses: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the component root class.",
                required: false
              }
            }
          },
          required: false,
          description: "the classes object to be applied into the inner form.",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        login: {
          type: {
            name: "func"
          },
          required: true,
          description: "the function invoked for the log in"
        },
        recovery: {
          type: {
            name: "func"
          },
          required: false,
          description: "the function invoked for the recovery",
          defaultValue: {
            value: "() => {}",
            computed: false
          }
        },
        backgroundImage: {
          type: {
            name: "string"
          },
          required: false,
          description: "the url for the background image",
          defaultValue: {
            value: '""',
            computed: false
          }
        },
        backgroundImageSize: {
          type: {
            name: "string"
          },
          required: false,
          description: "Sizing for background image",
          defaultValue: {
            value: '"100%"',
            computed: false
          }
        },
        logo: {
          type: {
            name: "string"
          },
          required: false,
          description: "the url for the logo in the welcome message.",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        titleComponent: {
          type: {
            name: "element"
          },
          required: false,
          description: "a component to replace the welcome message",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        allowRecover: {
          type: {
            name: "bool"
          },
          required: false,
          description: "the component should have the recovery capability",
          defaultValue: {
            value: "true",
            computed: false
          }
        },
        allowRememberMe: {
          type: {
            name: "bool"
          },
          required: false,
          description: "the component should have the remember me capability",
          defaultValue: {
            value: "true",
            computed: false
          }
        },
        okRecoveryIcon: {
          type: {
            name: "element"
          },
          required: false,
          description:
            "Icon to be presented when the recovery occurs successfully.",
          defaultValue: {
            value: '<Success semantic="sema1" />',
            computed: false
          }
        },
        errorLoginIcon: {
          type: {
            name: "element"
          },
          required: false,
          description:
            "Icon to be presented when an error occurs in the login.",
          defaultValue: {
            value: '<Fail semantic="sema4" />',
            computed: false
          }
        },
        labels: {
          type: {
            name: "shape",
            value: {
              titleText: {
                name: "string",
                description: "The welcome message.",
                required: false
              },
              recoveryTitle: {
                name: "string",
                description: "Recovery title.",
                required: false
              },
              messageToRecover: {
                name: "string",
                description: "Message to recover",
                required: false
              },
              messageAfterRecover: {
                name: "string",
                description: "Message shown after recover.",
                required: false
              },
              recoveryInputLabel: {
                name: "string",
                description: "Recovery input label.",
                required: false
              },
              recoveryPlaceholder: {
                name: "string",
                description: "Recovery placeholder.",
                required: false
              },
              recoveryErrorMessage: {
                name: "string",
                description: "Message shown when an error occurs.",
                required: false
              },
              userNameInputLabel: {
                name: "string",
                description: "Input user name label.",
                required: false
              },
              userNamePlaceHolder: {
                name: "string",
                description: "Input user name placeholder.",
                required: false
              },
              passwordInputLabel: {
                name: "string",
                description: "Password label.",
                required: false
              },
              passwordPlaceHolder: {
                name: "string",
                description: "Password placeholder.",
                required: false
              },
              rememberMeLabel: {
                name: "string",
                description: "Remember me label.",
                required: false
              },
              loginButtonMessage: {
                name: "string",
                description: "Login Button message.",
                required: false
              },
              loginButtonLabel: {
                name: "string",
                description: "Login button label.",
                required: false
              },
              forgotYourCredentialMessage: {
                name: "string",
                description: "Forgot your credential message",
                required: false
              },
              emailLabel: {
                name: "string",
                description: "Email Input Label.",
                required: true
              },
              emailPlaceholder: {
                name: "string",
                description: "Email Input Placeholder.",
                required: true
              },
              cancelButton: {
                name: "string",
                description: "Cancel button label.",
                required: true
              },
              recoverButton: {
                name: "string",
                description: "Recover button label.",
                required: true
              },
              recoveringMessage: {
                name: "string",
                description:
                  "Message presented while recovering the credentials.",
                required: true
              },
              incorrectCredentialsMessage: {
                name: "string",
                description:
                  "Message presented when an error occurs recovering the credentials.",
                required: false
              }
            }
          },
          required: false,
          description: "An object containing all the labels for the login."
        },
        customMessage: {
          type: {
            name: "shape",
            value: {
              text: {
                name: "string",
                required: false
              }
            }
          },
          required: false,
          description:
            "A custom message to be shown in the error area.\nWill be overridden by any error messages.",
          defaultValue: {
            value: "{}",
            computed: false
          }
        },
        formProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description: "Additional props for form element",
          defaultValue: {
            value: "{}",
            computed: false
          }
        }
      }
    }
  },
  {
    name: "LoginContainer",
    doc: {
      description: "Container layout for the login form.",
      displayName: "LoginContainer",
      methods: [],
      props: {
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node."
        },
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to root.",
                required: false
              },
              formContainer: {
                name: "string",
                description: "Styles applied to the form container.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied."
        },
        children: {
          type: {
            name: "node"
          },
          required: true,
          description: "The form to be rendered."
        },
        customBackground: {
          type: {
            name: "string"
          },
          required: false,
          description: "The path for the custom background image."
        }
      }
    }
  },
  {
    name: "Modal",
    doc: {
      description:
        "The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, etc.\nIt is created by the composition of ModalTitle, ModalContent and ModalActions, passed as child elements.",
      displayName: "HvModal",
      methods: [],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Style applied to the root of the component.",
                required: false
              },
              background: {
                name: "string",
                description:
                  "Style applied to the background (outside) of the component.",
                required: false
              },
              paper: {
                name: "string",
                description: "Style applied to the component (root).",
                required: false
              },
              closeButton: {
                name: "string",
                description: "Style applied to the close button.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied."
        },
        children: {
          type: {
            name: "node"
          },
          required: true,
          description: "Components of the modal."
        },
        open: {
          type: {
            name: "bool"
          },
          required: true,
          description: "Current state of the modal."
        },
        onClose: {
          type: {
            name: "func"
          },
          required: true,
          description: "Function executed on close."
        },
        firstFocusable: {
          type: {
            name: "string"
          },
          required: false,
          description: "Element id that should be focus when the modal opens."
        },
        buttonTitle: {
          type: {
            name: "string"
          },
          required: false,
          description: "Title for the button close.",
          defaultValue: {
            value: '"Close"',
            computed: false
          }
        }
      }
    }
  },
  {
    name: "MultiButton",
    doc: {
      description: "",
      displayName: "MultiButton",
      methods: [],
      props: {
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Identifier"
        },
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the multibutton root class.",
                required: false
              },
              vertical: {
                name: "string",
                description:
                  "Styles applied to the multibutton when it's vertical.",
                required: false
              },
              labelText: {
                name: "string",
                description: "Styles applied to the button label.",
                required: false
              },
              button: {
                name: "string",
                description: "Styles applied to the each button.",
                required: false
              },
              icon: {
                name: "string",
                description: "Styles applied to the each button's icon.",
                required: false
              },
              isSelected: {
                name: "string",
                description: "Styles applied to the button when it's selected.",
                required: false
              },
              isUnselected: {
                name: "string",
                description:
                  "Styles applied to the button when it's not selected.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied."
        },
        vertical: {
          type: {
            name: "bool"
          },
          required: false,
          description: "If the multibutton is to be displayed vertically.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        multi: {
          type: {
            name: "bool"
          },
          required: false,
          description: "If the multibutton is multi selectable.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        type: {
          type: {
            name: "enum",
            value: [
              {
                value: '"text"',
                computed: false
              },
              {
                value: '"icon"',
                computed: false
              },
              {
                value: '"mixed"',
                computed: false
              }
            ]
          },
          required: true,
          description:
            'Type of button display.\n - Accepted values:\n   --"label": displays just a text label,\n   --"icon": displays just an icon,\n   --"mixed": displays both a label and an icon'
        },
        buttons: {
          type: {
            name: "arrayOf",
            value: {
              name: "shape",
              value: {
                id: {
                  name: "string",
                  description: "the button id.",
                  required: true
                },
                value: {
                  name: "string",
                  description: "the button label.",
                  required: false
                },
                icon: {
                  name: "node",
                  description: "icon in button.",
                  required: false
                },
                selected: {
                  name: "bool",
                  description: "If the button is selected.",
                  required: false
                },
                enforced: {
                  name: "bool",
                  description: "Specify if item can be toggled or not.",
                  required: false
                }
              }
            }
          },
          required: true,
          description: "Buttons definitions"
        },
        onChange: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "Callback function to be triggered when the input value is changed"
        },
        minSelection: {
          type: {
            name: "number"
          },
          required: false,
          description: "Specify minimum number of selections in component",
          defaultValue: {
            value: "0",
            computed: false
          }
        },
        maxSelection: {
          type: {
            name: "number"
          },
          required: false,
          description: "Specify maximum number of selections in component",
          defaultValue: {
            value: "Infinity",
            computed: true
          }
        }
      }
    }
  },
  {
    name: "Pagination",
    doc: {
      description: "",
      displayName: "Pagination",
      methods: [],
      props: {
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the component root class.",
                required: false
              },
              pageSizeOptions: {
                name: "string",
                description:
                  "Styles applied to the page size selector container.",
                required: false
              },
              pageSizeOptionsSelect: {
                name: "string",
                description:
                  "Styles applied to the page size selector dropdown element.",
                required: false
              },
              pageNavigator: {
                name: "string",
                description: "Styles applied to the page navigation container.",
                required: false
              },
              pageInfo: {
                name: "string",
                description:
                  "Styles applied to the central page information container.",
                required: false
              },
              pageJump: {
                name: "string",
                description:
                  "Styles applied to the page selector input container.",
                required: false
              },
              pageSizeInput: {
                name: "string",
                description:
                  "Styles passed down to the page selector Input component as `input`.",
                required: false
              },
              pageSizeInputRoot: {
                name: "string",
                description:
                  "Styles passed down to the page selector Input component as `inputRoot` .",
                required: false
              },
              pageSizeInputContainer: {
                name: "string",
                description:
                  "Styles passed down to the page selector Input component as `container`.",
                required: false
              },
              iconContainer: {
                name: "string",
                description:
                  "Styles applied to each navigation `IconButton` icon container.",
                required: false
              },
              icon: {
                name: "string",
                description: "Styles applied to each navigation icon.",
                required: false
              },
              selectDownIcon: {
                name: "string",
                description: "Styles applied to the page size dropdown icon.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A JSS Object used to override or extend the styles applied."
        },
        pages: {
          type: {
            name: "number"
          },
          required: false,
          description: "The number of pages the component has.",
          defaultValue: {
            value: "1",
            computed: false
          }
        },
        page: {
          type: {
            name: "number"
          },
          required: false,
          description: "The currently selected page (0-indexed).",
          defaultValue: {
            value: "0",
            computed: false
          }
        },
        showPageSizeOptions: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Controls whether the left page size mechanism should be visible.",
          defaultValue: {
            value: "true",
            computed: false
          }
        },
        pageSizeOptions: {
          type: {
            name: "arrayOf",
            value: {
              name: "number"
            }
          },
          required: false,
          description: "The array of possible page sizes for the dropdown.",
          defaultValue: {
            value: "[5, 10, 20, 25, 50, 100]",
            computed: false
          }
        },
        pageSize: {
          type: {
            name: "number"
          },
          required: false,
          description: "The currently selected page size.",
          defaultValue: {
            value: "1",
            computed: false
          }
        },
        showPageJump: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Controls whether the central page changing mechanism should be visible.",
          defaultValue: {
            value: "true",
            computed: false
          }
        },
        canPrevious: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Controls whether the previous/first page buttons are enabled.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        canNext: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Controls whether the next/last page buttons are enabled.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        onPageChange: {
          type: {
            name: "func"
          },
          required: false,
          description: "Function called when the page changes."
        },
        onPageSizeChange: {
          type: {
            name: "func"
          },
          required: false,
          description: "Function called when the page size changes."
        },
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node."
        },
        labels: {
          type: {
            name: "shape",
            value: {
              pageSizePrev: {
                name: "string",
                description: "The show label.",
                required: false
              },
              pageSizeEntryName: {
                name: "string",
                description: "Indicate the units of the page size selection.",
                required: false
              },
              pageSizeSelectorDescription: {
                name: "string",
                description:
                  "Used for the aria-label of the selection of number of unit.s",
                required: false
              },
              pagesSeparator: {
                name: "string",
                description: "Separator of current page and total pages.",
                required: false
              },
              paginationFirstPageTitle: {
                name: "string",
                description: "Title of button `firstPage`.",
                required: false
              },
              paginationPreviousPageTitle: {
                name: "string",
                description: "Title of button `previousPage`.",
                required: false
              },
              paginationNextPageTitle: {
                name: "string",
                description: "Title of button `nextPage`.",
                required: false
              },
              paginationLastPageTitle: {
                name: "string",
                description: "Title of button `lastPage`.",
                required: false
              },
              paginationInputLabel: {
                name: "string",
                description: "Aria-label passed to the page input.",
                required: false
              }
            }
          },
          required: false,
          description: "An object containing all the labels for the component."
        },
        showPageProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description: "Other props to show page component."
        },
        navigationProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description: "Other props to pagination component."
        },
        currentPageInputProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "Extra properties passed to the input component representing the current pages."
        }
      }
    }
  },
  {
    name: "Provider",
    doc: {
      description: "",
      displayName: "HvProvider",
      methods: [],
      props: {
        children: {
          type: {
            name: "node"
          },
          required: true,
          description: "Your component tree."
        },
        theme: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "The UI-Kit theme object to be wrapped by the MUI theme.",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        uiKitTheme: {
          type: {
            name: "enum",
            value: [
              {
                value: '"dawn"',
                computed: false
              },
              {
                value: '"wicked"',
                computed: false
              }
            ]
          },
          required: false,
          description: "Which of design system default themes to use.",
          defaultValue: {
            value: '"dawn"',
            computed: false
          }
        },
        changeTheme: {
          type: {
            name: "func"
          },
          required: false,
          description: "Which of design system default themes to use.",
          defaultValue: {
            value: "() => {}",
            computed: false
          }
        }
      }
    }
  },
  {
    name: "SearchBox",
    doc: {
      description: "",
      displayName: "HvSearchBox",
      methods: [],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to searchbox root.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied to the search box."
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node."
        },
        labels: {
          type: {
            name: "shape",
            value: {
              inputLabel: {
                name: "string",
                description: "Label on top of the searchbox.",
                required: false
              },
              placeholder: {
                name: "string",
                description: "Placeholder value.",
                required: false
              }
            }
          },
          required: false,
          description:
            "An Object containing the various text associated with the searchbox."
        },
        value: {
          type: {
            name: "string"
          },
          required: false,
          description: "The initial value of the searchbox"
        },
        onChange: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The function that will be executed when the searchbox changes,\nit receives the searchbox value"
        },
        suggestionListCallback: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The function that will be executed to received an array of objects that has a label and id to create list of suggestion"
        },
        suggestionSelectedCallback: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The function that will be executed after selecting a value in the suggestion list"
        },
        onBlur: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The function that will be executed onBlur, allows checking the validation state,\nit receives the value and the validation state (´empty´, ´filled´, ´invalid´, ´valid´)."
        },
        onFocus: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The function that will be executed onFocus, allows checking the value state,\nit receives the value."
        },
        onKeyDown: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The function that will be executed onKeyDown, allows checking the value state,\nit receives the value."
        },
        onSubmit: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The function that will be executed on Enter, allows checking the value state,\nit receives the value or event+value. On evocation we check for the number\nof arguments associated with the function. Note that in the future rather\nthan accepting a value as argument, this will change to an event as argument"
        },
        autoFocus: {
          type: {
            name: "bool"
          },
          required: false,
          description: "If `true` it should autofocus."
        },
        disabled: {
          type: {
            name: "bool"
          },
          required: false,
          description: "If ´true´ the searchBox is disabled."
        },
        initialValue: {
          type: {
            name: "string"
          },
          required: false,
          description: "The initial value of the searchBox."
        },
        ariaLabel: {
          type: {
            name: "string"
          },
          required: false,
          description: "Arial Label."
        }
      }
    }
  },
  {
    name: "Snackbar",
    doc: {
      description:
        "A Snackbar provides a brief messages about app processes.\nIt is dismissed automatically after an interval.",
      displayName: "HvSnackbar",
      methods: [],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              anchorOriginTopRight: {
                name: "string",
                description:
                  "Styles applied to the component when define as top right.",
                required: false
              },
              anchorOriginTopLeft: {
                name: "string",
                description:
                  "Styles applied to the component when define as top left.",
                required: false
              },
              anchorOriginTopCenter: {
                name: "string",
                description:
                  "Styles applied to the component when define as top center.",
                required: false
              },
              anchorOriginBottomCenter: {
                name: "string",
                description:
                  "Styles applied to the component when define as bottom center.",
                required: false
              },
              anchorOriginBottomLeft: {
                name: "string",
                description:
                  "Styles applied to the component when define as bottom left.",
                required: false
              },
              anchorOriginBottomRight: {
                name: "string",
                description:
                  "Styles applied to the component when define as bottom right.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the component styles."
        },
        open: {
          type: {
            name: "bool"
          },
          required: false,
          description: "If true, Snackbar is open.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        onClose: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "Callback fired when the component requests to be closed. Typically onClose is used to set state in the parent component, which is used to control the Snackbar open prop. The reason parameter can optionally be used to control the response to onClose, for example ignoring clickaway."
        },
        label: {
          type: {
            name: "string"
          },
          required: false,
          description: "The message to display.",
          defaultValue: {
            value: '""',
            computed: false
          }
        },
        anchorOrigin: {
          type: {
            name: "shape",
            value: {
              vertical: {
                name: "string",
                required: false
              },
              horizontal: {
                name: "string",
                required: false
              }
            }
          },
          required: false,
          description:
            'The anchor of the Snackbar. vertical: "top", "bottom" | horizontal: "left","center","right. It defines where the snackbar will end his animation',
          defaultValue: {
            value: '{ vertical: "top", horizontal: "right" }',
            computed: false
          }
        },
        autoHideDuration: {
          type: {
            name: "number"
          },
          required: false,
          description:
            "The number of milliseconds to wait before automatically calling the onClose function. onClose should then set the state of the open prop to hide the Snackbar",
          defaultValue: {
            value: "5000",
            computed: false
          }
        },
        variant: {
          type: {
            name: "enum",
            value: [
              {
                value: '"default"',
                computed: false
              },
              {
                value: '"success"',
                computed: false
              },
              {
                value: '"error"',
                computed: false
              }
            ]
          },
          required: false,
          description: "Variant of the snackbar.",
          defaultValue: {
            value: '"default"',
            computed: false
          }
        },
        customIcon: {
          type: {
            name: "node"
          },
          required: false,
          description: "Custom icon to replace the variant default.",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        showIcon: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Controls if the associated icon to the variant should be shown.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        action: {
          type: {
            name: "union",
            value: [
              {
                name: "node"
              },
              {
                name: "shape",
                value: {
                  id: {
                    name: "string",
                    required: true
                  },
                  label: {
                    name: "string",
                    required: true
                  },
                  icon: {
                    name: "func",
                    required: false
                  },
                  disabled: {
                    name: "bool",
                    required: false
                  }
                }
              }
            ]
          },
          required: false,
          description: "Action to display.",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        actionCallback: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The callback function ran when an action is triggered, receiving ´action´ as param"
        },
        transitionDuration: {
          type: {
            name: "number"
          },
          required: false,
          description: "Duration of transition in milliseconds.",
          defaultValue: {
            value: "300",
            computed: false
          }
        },
        transitionDirection: {
          type: {
            name: "enum",
            value: [
              {
                value: '"up"',
                computed: false
              },
              {
                value: '"down"',
                computed: false
              },
              {
                value: '"left"',
                computed: false
              },
              {
                value: '"right"',
                computed: false
              }
            ]
          },
          required: false,
          description: "Direction of slide transition.",
          defaultValue: {
            value: '"left"',
            computed: false
          }
        },
        offset: {
          type: {
            name: "number"
          },
          required: false,
          description: "Custom offset from top/bottom of the page, in px.",
          defaultValue: {
            value: "60",
            computed: false
          }
        },
        snackbarContentProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description: "Others applied to the content of the snackbar."
        }
      }
    }
  },
  {
    name: "Switch",
    doc: {
      description:
        "A Switch is a mechanism that allows user toggle between 2 options.",
      displayName: "HvSwitch",
      methods: [],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the root element.",
                required: false
              },
              switch: {
                name: "string",
                description:
                  "Styles applied to the internal Switch component's root class.",
                required: false
              },
              switchBase: {
                name: "string",
                description:
                  "Styles applied to the internal SwitchBase component's root class.",
                required: false
              },
              disabledLabel: {
                name: "string",
                description:
                  "Styles applied to the labels when they are disabled.",
                required: false
              },
              labelSelected: {
                name: "string",
                description:
                  "Styles applied to the labels when they are selected.",
                required: false
              },
              labelDeselected: {
                name: "string",
                description:
                  "Styles applied to the labels when they are disabled.",
                required: false
              },
              checkedIcon: {
                name: "string",
                description: "Styles applied to the checked icon.",
                required: false
              },
              checked: {
                name: "string",
                description:
                  "Pseudo-class applied to the internal SwitchBase component's checked class.",
                required: false
              },
              track: {
                name: "string",
                description: "Styles applied to the track element.",
                required: false
              },
              thumb: {
                name: "string",
                description:
                  "Styles used to create the thumb passed to the internal SwitchBase component icon prop.",
                required: false
              },
              disabled: {
                name: "string",
                description:
                  "Styles applied to the internal SwitchBase component's disabled class.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied to the Switch Component."
        },
        checked: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Denotes selection state of switch component."
        },
        disabled: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Denotes if component is active or not."
        },
        onChange: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "Callback function to be triggered when the input value is changed"
        },
        labels: {
          type: {
            name: "shape",
            value: {
              left: {
                name: "string",
                description: "Label placed at the left of the switch.",
                required: false
              },
              right: {
                name: "string",
                description: "Label placed at the right of the switch.",
                required: false
              }
            }
          },
          required: false,
          description:
            "An Object containing the various text associated with the switch."
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "The ID associated with the switch component."
        },
        value: {
          type: {
            name: "string"
          },
          required: false,
          description: "Value assigned to the Switch Component."
        },
        showLabels: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Determine if labels should be displayed alongside component"
        },
        displayIconChecked: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Determine if custom icon in button should be displayed"
        }
      }
    }
  },
  {
    name: "Tab",
    doc: {
      description: "",
      displayName: "HvTab",
      methods: [],
      props: {
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Identifier."
        },
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the root element.",
                required: false
              },
              labelContainer: {
                name: "string",
                description:
                  "Styles applied to the label container element if `label` is provided.",
                required: false
              },
              selected: {
                name: "string",
                description:
                  "Styles applied to the root element if `selected={true}` (controlled by the Tabs component).",
                required: false
              },
              disabled: {
                name: "string",
                description:
                  "Styles applied to the root element if `disabled={true}` (controlled by the Tabs component).",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the component styles."
        },
        disabled: {
          type: {
            name: "bool"
          },
          required: false,
          description: "If `true`, the tab will be disabled.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        icon: {
          type: {
            name: "node"
          },
          required: false,
          description: "The icon element.",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        label: {
          type: {
            name: "node"
          },
          required: false,
          description: "The label element.",
          defaultValue: {
            value: "null",
            computed: false
          }
        }
      }
    }
  },
  {
    name: "Table",
    doc: {
      description:
        "Table component. This component offers:\n- A standard table;\n- Table with expander;\n- Table with checkbox.\n\nThe type is defined by the existence of the properties:\n - subElementTemplate: Creates a table with expander;\n - idForCheckbox: Creates a table with checkboxes;\n - None: Creates a simple table.\n\n  Just one of this properties should be set (or none) has it isn't possible to have a table with\n  expander and checkbox simultaneously.",
      displayName: "HvTable",
      methods: [],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        uniqClassName: {
          type: {
            name: "string"
          },
          required: false,
          description: "Unique class name used to identify the fixed table"
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the component root.",
                required: false
              },
              thead: {
                name: "string",
                description: "Styles applied to the component thead.",
                required: false
              },
              tr: {
                name: "string",
                description: "Styles applied to the component tr.",
                required: false
              },
              rtSortIcon: {
                name: "string",
                description: "Styles applied to the component sort icon.",
                required: false
              },
              sortedIconShown: {
                name: "string",
                description:
                  "Styles applied to the component when the sort icon is shown.",
                required: false
              },
              sortedIconHidden: {
                name: "string",
                description:
                  "Styles applied to the component when the sort icon is hidden.",
                required: false
              },
              pointer: {
                name: "string",
                description: "Styles applied to the component pointer.",
                required: false
              },
              subtitle: {
                name: "string",
                description: "Styles applied to the component subtitle.",
                required: false
              },
              title: {
                name: "string",
                description: "Styles applied to the component title.",
                required: false
              },
              link: {
                name: "string",
                description:
                  "Styles applied to the component when type is link.",
                required: false
              },
              subComponentContainer: {
                name: "string",
                description: "Styles applied to the component expander.",
                required: false
              },
              iconContainer: {
                name: "string",
                description:
                  "Styles applied to the component icon in the columns.",
                required: false
              },
              firstWithNumeric: {
                name: "string",
                description: "Styles applied to the component columns.",
                required: false
              },
              theadTh: {
                name: "string",
                description:
                  "Styles applied to the component table header row.",
                required: false
              },
              tbody: {
                name: "string",
                description: "Styles applied to the component table body.",
                required: false
              },
              tBodyEmpty: {
                name: "string",
                description:
                  "Styles applied to the component table body when empty.",
                required: false
              },
              td: {
                name: "string",
                description: "Styles applied to the component table cell.",
                required: false
              },
              tableContainer: {
                name: "string",
                description: "Styles applied to the component table container.",
                required: false
              },
              checkBox: {
                name: "string",
                description: "Styles applied to the component checkbox.",
                required: false
              },
              checkBoxRow: {
                name: "string",
                description: "Styles applied to the component checkbox row.",
                required: false
              },
              checkBoxText: {
                name: "string",
                description: "Styles applied to the component checkbox text.",
                required: false
              },
              trGroups: {
                name: "string",
                description:
                  "Styles applied to the component table header groups.",
                required: false
              },
              table: {
                name: "string",
                description: "Styles applied to the component table.",
                required: false
              }
            }
          },
          required: true,
          description: "the classes object to be applied into the root object."
        },
        labels: {
          type: {
            name: "shape",
            value: {
              titleText: {
                name: "string",
                description:
                  "The title that identifies the title, rendered outside of the table.",
                required: false
              },
              subtitleText: {
                name: "string",
                description:
                  "The subtitle that identifies the title, rendered outside of the table.",
                required: false
              }
            }
          },
          required: false,
          description: "The labels inside the table."
        },
        paginationLabels: {
          type: {
            name: "shape",
            value: {
              pageSizePrev: {
                name: "string",
                description: "Show label.",
                required: false
              },
              pageSizeEntryName: {
                name: "string",
                description:
                  "Indication of the units of the page size selection.",
                required: false
              },
              pageSizeSelectorDescription: {
                name: "string",
                description:
                  "Used for the aria-label of the selection of number of unit.",
                required: false
              },
              pagesSeparator: {
                name: "string",
                description: "Separator of current page and total pages.",
                required: false
              },
              paginationFirstPageTitle: {
                name: "string",
                description: "Title of button `firstPage`.",
                required: false
              },
              paginationPreviousPageTitle: {
                name: "string",
                description: "Title of button `previousPage`.",
                required: false
              },
              paginationNextPageTitle: {
                name: "string",
                description: "Title of button `nextPage`.",
                required: false
              },
              paginationLastPageTitle: {
                name: "string",
                description: "Pagination title of button `lastPage`.",
                required: false
              },
              paginationInputLabel: {
                name: "string",
                description: "Aria-label passed to the page input.",
                required: false
              }
            }
          },
          required: false,
          description: "Labels for the pagination."
        },
        columns: {
          type: {
            name: "arrayOf",
            value: {
              name: "shape",
              value: {
                headerText: {
                  name: "string",
                  required: false
                },
                accessor: {
                  name: "union",
                  value: [
                    {
                      name: "string"
                    },
                    {
                      name: "func"
                    }
                  ],
                  required: false
                },
                format: {
                  name: "func",
                  required: false
                },
                cellType: {
                  name: "string",
                  required: false
                },
                style: {
                  name: "instanceOf",
                  value: "Object",
                  required: false
                },
                fixed: {
                  name: "string",
                  required: false
                },
                Cell: {
                  name: "instanceOf",
                  value: "Object",
                  required: false
                },
                sortable: {
                  name: "bool",
                  required: false
                },
                width: {
                  name: "union",
                  value: [
                    {
                      name: "string"
                    },
                    {
                      name: "number"
                    }
                  ],
                  required: false
                }
              }
            }
          },
          required: true,
          description:
            'The column definition to apply to the table. Please check https://react-table.js.org/#/story/readme for more info\n   Use the property "cellType" to define the different types of cell. Available values: "number" , "alpha-numeric" and "link.\n   If the type is "link", in data use the structure {displayText: {text to display} ,url: {url} }.'
        },
        data: {
          type: {
            name: "arrayOf",
            value: {
              name: "object"
            }
          },
          required: true,
          description:
            "Array with the data elements to show.\nIt can also define the checkBoxProps property to pass extra props to the row checkbox selector."
        },
        dataSize: {
          type: {
            name: "number"
          },
          required: false,
          description: "Number of data entries for server side pagination"
        },
        showPagination: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Boolean to show or hide the pagination controls"
        },
        onPageChange: {
          type: {
            name: "func"
          },
          required: false,
          description: "Callback to notify when the page changes"
        },
        showPageSize: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Boolean to show or hide the page size control"
        },
        pageSize: {
          type: {
            name: "number"
          },
          required: false,
          description: "Numeric value to control the page size selected"
        },
        page: {
          type: {
            name: "number"
          },
          required: false,
          description:
            "Specify the current page number when using a server side pagination"
        },
        onPageSizeChange: {
          type: {
            name: "func"
          },
          required: false,
          description: "Callback to notify when the page size changes"
        },
        paginationServerSide: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Boolean to enable or disable the server side pagination mechanism"
        },
        pages: {
          type: {
            name: "number"
          },
          required: false,
          description:
            "Numeric value to control the number of pages. Useful when Server side pagination data is enabled"
        },
        onFetchData: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "Callback with receives the page info and should fetch the data to show on the table"
        },
        sortable: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Boolean to enable or disable the sort mechanism"
        },
        defaultSorted: {
          type: {
            name: "instanceOf",
            value: "Array"
          },
          required: false,
          description:
            "An object describing what column is sorted by default on the table"
        },
        subElementTemplate: {
          type: {
            name: "func"
          },
          required: false,
          description: "Element to be shown in the expander."
        },
        idForCheckbox: {
          type: {
            name: "string"
          },
          required: false,
          description:
            "Property to be uses as unique row identifier. One of the fields of the data."
        },
        getTrProps: {
          type: {
            name: "func"
          },
          required: false,
          description: "Function to overwrite the existed getTrProps"
        },
        onSelection: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "Callback which receives the checked state of all items in the list"
        },
        selections: {
          type: {
            name: "arrayOf",
            value: {
              name: "any"
            }
          },
          required: false,
          description: "Ids of preselected items in the list"
        },
        secondaryActions: {
          type: {
            name: "arrayOf",
            value: {
              name: "shape",
              value: {
                label: {
                  name: "string",
                  required: false
                },
                action: {
                  name: "func",
                  required: false
                }
              }
            }
          },
          required: false,
          description:
            "Secondary actions listed in menu dropdown. Label is displayed and action is executed on click."
        },
        actions: {
          type: {
            name: "union",
            value: [
              {
                name: "node"
              },
              {
                name: "arrayOf",
                value: {
                  name: "shape",
                  value: {
                    id: {
                      name: "string",
                      required: true
                    },
                    label: {
                      name: "string",
                      required: false
                    },
                    iconCallback: {
                      name: "func",
                      required: false
                    },
                    disabled: {
                      name: "bool",
                      required: false
                    }
                  }
                }
              }
            ]
          },
          required: false,
          description:
            "The renderable content inside the BulkActions right actions slot,\nor an Array of actions `{ id, label, icon, disabled, ... }`"
        },
        actionsDisabled: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Whether actions should be all disabled"
        },
        actionsCallback: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The callback function ran when an action is triggered, receiving `action` as param"
        },
        maxVisibleActions: {
          type: {
            name: "number"
          },
          required: false,
          description:
            "The number of maximum visible actions before they're collapsed into a `DropDownMenu`."
        },
        column: {
          type: {
            name: "shape",
            value: {
              id: {
                name: "string",
                required: false
              },
              sortable: {
                name: "bool",
                required: false
              }
            }
          },
          required: false,
          description: ""
        },
        allCheckBoxProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description:
            "Extra properties passed to the select all checkbox props."
        },
        dropdownMenuProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description: "Extra properties passed to the dropdown menu."
        },
        getTableProps: {
          type: {
            name: "func"
          },
          required: false,
          description: ""
        },
        tableProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description: ""
        },
        rowCount: {
          type: {
            name: "number"
          },
          required: false,
          description:
            "Number of rows available in table to display in aria-rowcount"
        },
        noDataComponent: {
          type: {
            name: "node"
          },
          required: false,
          description: "Component to be shown when no data is displayed."
        }
      }
    }
  },
  {
    name: "Tabs",
    doc: {
      description:
        "Tab is a graphical control element that allows multiple documents or panels to be contained within a single window,\nusing tabs as a navigational widget for switching between sets of documents.",
      displayName: "HvTabs",
      methods: [],
      props: {
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Identifier."
        },
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        children: {
          type: {
            name: "node"
          },
          required: false,
          description: "The content of the component."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the root element.",
                required: false
              },
              flexContainer: {
                name: "string",
                description: "Styles applied to the flex container element.",
                required: false
              },
              indicator: {
                name: "string",
                description: "Styles applied to the `TabIndicator` component.",
                required: false
              },
              scroller: {
                name: "string",
                description: "Styles applied to the `TabIndicator` component.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the component styles."
        },
        onChange: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "Callback fired when the value changes.\n\n@param {object} event The event source of the callback\n@param {number} value We default to the index of the child"
        },
        value: {
          type: {
            name: "any"
          },
          required: false,
          description:
            "The value of the currently selected Tab. If you don't want any selected Tab, you can set this property to `false`."
        }
      }
    }
  },
  {
    name: "TextArea",
    doc: {
      description:
        "A text area component wrapping the input box, it allows the input of paragraph of text.\nalongside this it can provide a validation for the max character quantity",
      displayName: "HvTextArea",
      methods: [
        {
          name: "isOverflow",
          docblock: null,
          modifiers: [],
          params: [
            {
              name: "value",
              type: null
            }
          ],
          returns: null
        },
        {
          name: "limitValue",
          docblock:
            "Limit the string to the maxCharQuantity length.\n\n@param value - string to evaluate\n@returns {string|*} - string according the limit",
          modifiers: [],
          params: [
            {
              name: "value",
              description: "string to evaluate",
              type: null,
              optional: false
            }
          ],
          returns: {
            description: "string according the limit",
            type: {
              name: "union",
              elements: [
                {
                  name: "string"
                },
                {
                  name: "mixed"
                }
              ]
            }
          },
          description: "Limit the string to the maxCharQuantity length."
        },
        {
          name: "isScrolledDown",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null
        },
        {
          name: "scrollDown",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null
        },
        {
          name: "addScrollListener",
          docblock: null,
          modifiers: [],
          params: [],
          returns: null
        },
        {
          name: "onChangeHandler",
          docblock:
            "Updates the length of the string while is being inputted, also executes the user onChange\nallowing the customization of the input if required.\n\n@param {String} value - The value provided by the HvInput",
          modifiers: [],
          params: [
            {
              name: "event"
            },
            {
              name: "value",
              description: "The value provided by the HvInput",
              type: {
                name: "String"
              },
              optional: false
            }
          ],
          returns: null,
          description:
            "Updates the length of the string while is being inputted, also executes the user onChange\nallowing the customization of the input if required."
        }
      ],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied.",
          defaultValue: {
            value: '""',
            computed: false
          }
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node.",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        classes: {
          type: {
            name: "shape",
            value: {
              input: {
                name: "string",
                description: "Style applied on the text area input box.",
                required: false
              },
              resize: {
                name: "string",
                description:
                  "Style applied when resizable is `true`. Can be used to set max/min width.",
                required: false
              },
              inputRoot: {
                name: "string",
                description:
                  "Styles applied to input root which is comprising of everything but the labels and descriptions.",
                required: false
              },
              inputRootDisabled: {
                name: "string",
                description:
                  "Styles applied to input root when it is disabled.",
                required: false
              },
              inputRootFocused: {
                name: "string",
                description: "Styles applied to input root when it is focused.",
                required: false
              },
              defaultWith: {
                name: "string",
                description:
                  "Style applied defining the width when resizable is `false`.",
                required: false
              },
              characterCounter: {
                name: "string",
                description: "Style applied on the character counter.",
                required: false
              },
              disabled: {
                name: "string",
                description:
                  "Style applied to the character counter when it is disabled.",
                required: false
              },
              invalid: {
                name: "string",
                description:
                  "Style applied to the character counter when it the `maxCharQuantity` is reach.",
                required: false
              },
              container: {
                name: "string",
                description: "Style applied to the input container.",
                required: false
              },
              root: {
                name: "string",
                description:
                  "Style applied container of the text area component.",
                required: false
              }
            }
          },
          required: true,
          description: "Styles applied to the Drawer Paper element."
        },
        labels: {
          type: {
            name: "shape",
            value: {
              inputLabel: {
                name: "string",
                description: "The label on top of the input.",
                required: false
              },
              placeholder: {
                name: "string",
                description: "The placeholder value of the input.",
                required: false
              },
              infoText: {
                name: "string",
                description:
                  "The default value of the info text below the input.",
                required: false
              },
              warningText: {
                name: "string",
                description: "The value when a validation fails.",
                required: false
              },
              maxCharQuantityWarningText: {
                name: "string",
                description:
                  "The message that appears when there are too many characters.",
                required: false
              },
              minCharQuantityWarningText: {
                name: "string",
                description:
                  "The message that appears when there are too few characters.",
                required: false
              },
              requiredWarningText: {
                name: "string",
                description:
                  "The message that appears when the input is empty and required.",
                required: false
              },
              startCount: {
                name: "string",
                description: "Text before the current char counter.",
                required: false
              },
              middleCount: {
                name: "string",
                description:
                  "Text between the current char counter and max value.",
                required: false
              },
              endCount: {
                name: "string",
                description: "Text after the max value.",
                required: false
              }
            }
          },
          required: false,
          description:
            "An Object containing the various text associated with the input."
        },
        maxCharQuantity: {
          type: {
            name: "number"
          },
          required: false,
          description:
            "The maximum allowed length of the characters, if this value is null or undefined no check\nwill be performed.",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        rows: {
          type: {
            name: "number"
          },
          required: false,
          description: "The number of rows of the text area",
          defaultValue: {
            value: "1",
            computed: false
          }
        },
        value: {
          type: {
            name: "string"
          },
          required: false,
          description:
            "The input value to be set. If used it is the responsibility of the caller to maintain the state.",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        initialValue: {
          type: {
            name: "string"
          },
          required: false,
          description: "The initial value of the input.",
          defaultValue: {
            value: "undefined",
            computed: true
          }
        },
        onChange: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "The function that will be executed onChange, allows modification of the input,\nit receives the value. If a new value should be presented it must returned it.",
          defaultValue: {
            value: "(event, value) => value",
            computed: false
          }
        },
        disabled: {
          type: {
            name: "bool"
          },
          required: false,
          description: "If ´true´ the text area is disabled.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        resizable: {
          type: {
            name: "bool"
          },
          required: false,
          description: "If ´true´ the component is resizable.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        autoScroll: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Auto-scroll: automatically scroll to the end on value changes.\nWill stop if the user scrolls up and resume if scrolled to the bottom.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        blockMax: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "If true it isn't possible to pass the `maxCharQuantity`",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        countCharProps: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description: "Props passed to the char count.",
          defaultValue: {
            value: "{}",
            computed: false
          }
        }
      }
    }
  },
  {
    name: "ToggleButton",
    doc: {
      description:
        "A toggle button is a mechanism that allows users to change between 2 options.",
      displayName: "ToggleButton",
      methods: [],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Style applied to the root.",
                required: false
              },
              icon: {
                name: "string",
                description: "Style applied to the icon.",
                required: false
              },
              disabled: {
                name: "string",
                description: "Style applied when disabled.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied to the component."
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node."
        },
        selected: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Defines if the button is selected.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        notSelectedIcon: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: true,
          description: "Icon for when not selected."
        },
        selectedIcon: {
          type: {
            name: "instanceOf",
            value: "Object"
          },
          required: false,
          description: "Icon for when selected.",
          defaultValue: {
            value: "null",
            computed: false
          }
        },
        labels: {
          type: {
            name: "shape",
            value: {
              selectedTitle: {
                name: "string",
                description: "Description for selected.",
                required: false
              },
              notSelectedTitle: {
                name: "string",
                description: "Description for not selected.",
                required: false
              }
            }
          },
          required: false,
          description: ""
        },
        onClick: {
          type: {
            name: "func"
          },
          required: false,
          description: "Function called when icon is clicked."
        },
        animated: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Defines if it is a animated SVG.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        disabled: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Denotes if component is active or not.",
          defaultValue: {
            value: "false",
            computed: false
          }
        }
      }
    }
  },
  {
    name: "Tooltip",
    doc: {
      description:
        "Tooltips display informative text when users hover over, focus on, or tap an element.",
      displayName: "HvTooltip",
      methods: [],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the tooltip root class.",
                required: false
              },
              tooltip: {
                name: "string",
                description:
                  "Styles applied to the tooltip class when it is single",
                required: false
              },
              tooltipMulti: {
                name: "string",
                description:
                  "Styles applied to the tooltip class when it is multi",
                required: false
              },
              popper: {
                name: "string",
                description: "Styles applied to the popper component",
                required: false
              },
              title: {
                name: "string",
                description: "Styles applied to the title.",
                required: false
              },
              valuesContainer: {
                name: "string",
                description: "Styles applied to the values container.",
                required: false
              },
              values: {
                name: "string",
                description: "Styles applied to the values.",
                required: false
              },
              color: {
                name: "string",
                description: "Styles applied to the color.",
                required: false
              },
              separatorColor: {
                name: "string",
                description:
                  "Styles applied to the separator between color and title.",
                required: false
              },
              separator: {
                name: "string",
                description: "Styles applied to the separator.",
                required: false
              },
              valueWrapper: {
                name: "string",
                description: "Styles applied to the values wrapper.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied."
        },
        tooltipData: {
          type: {
            name: "custom",
            raw: "deprecatedPropType(PropTypes.node)"
          },
          required: false,
          description: "Values to display in tooltip.\n@deprecated"
        },
        open: {
          type: {
            name: "bool"
          },
          required: false,
          description: "If true, the tooltip is shown."
        },
        placement: {
          type: {
            name: "node"
          },
          required: false,
          description: "Tooltip placement.",
          defaultValue: {
            value: '"top"',
            computed: false
          }
        },
        enterDelay: {
          type: {
            name: "number"
          },
          required: false,
          description:
            "The number of milliseconds to wait before showing the tooltip.\nThis property won't impact the enter touch delay (enterTouchDelay).",
          defaultValue: {
            value: "300",
            computed: false
          }
        },
        title: {
          type: {
            name: "node"
          },
          required: true,
          description:
            "Tooltip title. Zero-length titles string are never displayed."
        },
        TransitionComponent: {
          type: {
            name: "any"
          },
          required: false,
          description: "The component used for the transition",
          defaultValue: {
            value: "Fade",
            computed: true
          }
        },
        TransitionProps: {
          type: {
            name: "object"
          },
          required: false,
          description: "Properties applied to the Transition element.",
          defaultValue: {
            value: "{ timeout: 400 }",
            computed: false
          }
        },
        useSingle: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Defines if should use a single or multiline tooltip.",
          defaultValue: {
            value: "true",
            computed: false
          }
        },
        children: {
          type: {
            name: "node"
          },
          required: true,
          description: "Node to apply the tooltip."
        }
      }
    }
  },
  {
    name: "Typography",
    doc: {
      description: "",
      displayName: "HvTypography",
      methods: [],
      props: {
        children: {
          type: {
            name: "node"
          },
          required: true,
          description: "The text to be set."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the component root element",
                required: false
              },
              "3xlTitle": {
                name: "string",
                description: "Styles applied to the 3xlTitle variant",
                required: false
              },
              "4xlTitle": {
                name: "string",
                description: "Styles applied to the 4xlTitle variant",
                required: false
              },
              "5xlTitle": {
                name: "string",
                description: "Styles applied to the 5xlTitle variant.",
                required: false
              },
              disabledButtonText: {
                name: "string",
                description: "Styles applied to the disabledButtonText variant",
                required: false
              },
              disabledText: {
                name: "string",
                description: "Styles applied to the disabledText variant",
                required: false
              },
              highlightText: {
                name: "string",
                description: "Styles applied to the highlightText variant",
                required: false
              },
              infoText: {
                name: "string",
                description: "Styles applied to the infoText variant",
                required: false
              },
              inlineLink: {
                name: "string",
                description: "Styles applied to the inlineLink variant",
                required: false
              },
              labelText: {
                name: "string",
                description: "Styles applied to the labelText variant",
                required: false
              },
              lTitle: {
                name: "string",
                description: "Styles applied to the lTitle variant",
                required: false
              },
              mTitle: {
                name: "string",
                description: "Styles applied to the mTitle variant",
                required: false
              },
              normalText: {
                name: "string",
                description: "Styles applied to the normalText variant",
                required: false
              },
              placeholderText: {
                name: "string",
                description: "Styles applied to the placeholderText variant",
                required: false
              },
              selectedNavText: {
                name: "string",
                description: "Styles applied to the selectedNavText variant",
                required: false
              },
              sLink: {
                name: "string",
                description: "Styles applied to the sLink variant",
                required: false
              },
              sText: {
                name: "string",
                description: "Styles applied to the sText variant",
                required: false
              },
              sTitle: {
                name: "string",
                description: "Styles applied to the sTitle variant",
                required: false
              },
              vizText: {
                name: "string",
                description: "Styles applied to the vizText variant",
                required: false
              },
              xlTitle: {
                name: "string",
                description: "Styles applied to the xlTitle variant",
                required: false
              },
              xsTitle: {
                name: "string",
                description: "Styles applied to the xsTitle variant",
                required: false
              },
              xxlTitle: {
                name: "string",
                description: "Styles applied to the xxlTitle variant",
                required: false
              }
            }
          },
          required: false,
          description:
            "Override or extend the styles applied to the component.\nSee CSS API tab for more details."
        },
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "@ignore"
        },
        component: {
          type: {
            name: "elementType"
          },
          required: false,
          description:
            "The component used for the root node.\nEither a string to use a DOM element or a component.\nBy default, it maps the variant to a good default headline component."
        },
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node."
        },
        paragraph: {
          type: {
            name: "bool"
          },
          required: false,
          description: "If `true`, the text will have a bottom margin."
        },
        variant: {
          type: {
            name: "enum",
            value: [
              {
                value: '"3xlTitle"',
                computed: false
              },
              {
                value: '"4xlTitle"',
                computed: false
              },
              {
                value: '"5xlTitle"',
                computed: false
              },
              {
                value: '"disabledButtonText"',
                computed: false
              },
              {
                value: '"disabledText"',
                computed: false
              },
              {
                value: '"highlightText"',
                computed: false
              },
              {
                value: '"infoText"',
                computed: false
              },
              {
                value: '"inlineLink"',
                computed: false
              },
              {
                value: '"labelText"',
                computed: false
              },
              {
                value: '"lTitle"',
                computed: false
              },
              {
                value: '"mTitle"',
                computed: false
              },
              {
                value: '"normalText"',
                computed: false
              },
              {
                value: '"placeholderText"',
                computed: false
              },
              {
                value: '"selectedNavText"',
                computed: false
              },
              {
                value: '"selectedText"',
                computed: false
              },
              {
                value: '"sLink"',
                computed: false
              },
              {
                value: '"sText"',
                computed: false
              },
              {
                value: '"sTitle"',
                computed: false
              },
              {
                value: '"vizText"',
                computed: false
              },
              {
                value: '"xlTitle"',
                computed: false
              },
              {
                value: '"xsTitle"',
                computed: false
              },
              {
                value: '"xxlTitle"',
                computed: false
              },
              {
                value: '"xxsTitle"',
                computed: false
              }
            ]
          },
          required: false,
          description: "The selected typography."
        }
      }
    }
  },
  {
    name: "UserPreferences",
    doc: {
      description:
        "User preferences are a group of configurable settings that can be customized for a particular user.\n\nOur implementation of the user preferences is divided in:\n<ul>\n<li>Actions - container for actions</li>\n<li>Action - action button</li>\n<li>Options - container for options</li>\n<li>Group - creates a division between different sets of option, with the possibility of setting a label</li>\n<li>Label - Label typography.</li>\n<li>Option - Option button</li>\n</ul>\nTo build the user preferences a composition of these elements should be used.",
      displayName: "HvUserPreferences",
      methods: [],
      props: {
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Styles applied to the component root class.",
                required: false
              },
              fixed: {
                name: "string",
                description: "Styles applied when position is fixed.",
                required: false
              },
              relative: {
                name: "string",
                description: "Styles applied when position is relative.",
                required: false
              },
              absolute: {
                name: "string",
                description: "Styles applied when position is absolute.",
                required: false
              },
              static: {
                name: "string",
                description: "Styles applied when position is static.",
                required: false
              },
              container: {
                name: "string",
                description: "Styles applied to the container.",
                required: false
              },
              contentContainer: {
                name: "string",
                description: "Styles applied to the inside of the container.",
                required: false
              },
              userInfo: {
                name: "string",
                description: "Styles applied to the user information.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied."
        },
        isOpen: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Defines if the user preferences is shown.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        position: {
          type: {
            name: "enum",
            value: [
              {
                value: '"static"',
                computed: false
              },
              {
                value: '"relative"',
                computed: false
              },
              {
                value: '"fixed"',
                computed: false
              },
              {
                value: '"absolute"',
                computed: false
              }
            ]
          },
          required: false,
          description: "Position of the component.",
          defaultValue: {
            value: '"static"',
            computed: false
          }
        },
        children: {
          type: {
            name: "node"
          },
          required: true,
          description: "Children component."
        },
        toggleOpenCallback: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "Callback when the navigation toggles between open and close."
        },
        closeOnExit: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Defines if the content pane should close when losing focus / clicking outside.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        userInfo: {
          type: {
            name: "shape",
            value: {
              label1: {
                name: "string",
                required: false
              },
              label2: {
                name: "string",
                required: false
              }
            }
          },
          required: false,
          description: "User information."
        }
      }
    }
  },
  {
    name: "VerticalNavigation",
    doc: {
      description:
        "It is recommended to use vertical navigation when your application requires global navigation that is displayed on the left.\nWhile vertical navigation menus generally consume more space than their horizontal counterparts, they have become more popular as desktop monitors move to wide-screen formats.\n\nOur implementation of the vertical navigation is divided in:\n<ul>\n<li>Navigation</li>\n<li>Actions</li>\n<li>Action</li>\n</ul>\nTo build the vertical navigation a composition of these elements should be used.",
      displayName: "VerticalNavigation",
      methods: [],
      props: {
        id: {
          type: {
            name: "string"
          },
          required: false,
          description: "Id to be applied to the root node."
        },
        className: {
          type: {
            name: "string"
          },
          required: false,
          description: "Class names to be applied."
        },
        classes: {
          type: {
            name: "shape",
            value: {
              root: {
                name: "string",
                description: "Style applied to the root of the component.",
                required: false
              },
              noCollapsable: {
                name: "string",
                description:
                  "Style applied to the root of the component when it not collapsable.",
                required: false
              }
            }
          },
          required: true,
          description:
            "A Jss Object used to override or extend the styles applied to the component."
        },
        isCollapsable: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Sets if the navigation should have a button to hide itself.",
          defaultValue: {
            value: "false",
            computed: false
          }
        },
        children: {
          type: {
            name: "node"
          },
          required: false,
          description: "The content inside the actions container."
        },
        isOpen: {
          type: {
            name: "bool"
          },
          required: false,
          description: "Is the navigation open."
        },
        toggleOpenCallback: {
          type: {
            name: "func"
          },
          required: false,
          description:
            "Callback when the navigation toggles between open and close."
        },
        position: {
          type: {
            name: "enum",
            value: [
              {
                value: '"static"',
                computed: false
              },
              {
                value: '"relative"',
                computed: false
              },
              {
                value: '"fixed"',
                computed: false
              },
              {
                value: '"absolute"',
                computed: false
              }
            ]
          },
          required: false,
          description: "Position of the component.",
          defaultValue: {
            value: '"static"',
            computed: false
          }
        },
        closeOnExit: {
          type: {
            name: "bool"
          },
          required: false,
          description:
            "Defines if the navigation should close when losing focus / clicking outside.",
          defaultValue: {
            value: "false",
            computed: false
          }
        }
      }
    }
  }
];

export { getComponents };
