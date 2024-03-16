"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [874],
  {
    10874: function (e, t, i) {
      i.r(t),
        i.d(t, {
          __N_SSP: function () {
            return tq;
          },
          default: function () {
            return tK;
          },
        });
      var n,
        r,
        o,
        a,
        l,
        s,
        c,
        d,
        u = i(89691),
        p = i(39827),
        m = i(25660),
        h = i(88128),
        f = i(73017),
        g = i(33925),
        x = i(16244),
        v = i(49508),
        b = i(5572),
        y = i(10518),
        j = i(91530),
        w = i.n(j),
        P = i(70079),
        N = i(21389),
        k = i(35250);
      let T = N.Z.a(s || (s = (0, f.Z)(["bold underline"]))),
        z = N.Z.textarea(
          c ||
            (c = (0, f.Z)([
              "w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32",
            ]))
        ),
        O =
          (((n = {})[(n.None = 0)] = "None"),
          (n[(n.AppealAvailable = 1)] = "AppealAvailable"),
          (n[(n.AppealSent = 2)] = "AppealSent"),
          n),
        C =
          (((r = {})[(r.None = 0)] = "None"),
          (r[(r.PublishBlocked = 1)] = "PublishBlocked"),
          (r[(r.RemovedFromMarketplace = 2)] = "RemovedFromMarketplace"),
          (r[(r.RemovedFromPublic = 3)] = "RemovedFromPublic"),
          (r[(r.RemovedFromPrivate = 4)] = "RemovedFromPrivate"),
          (r[(r.Recategorized = 5)] = "Recategorized"),
          r);
      var _ =
        (((o = _ || {})[(o.Initial = 0)] = "Initial"),
        (o[(o.AppealForm = 1)] = "AppealForm"),
        (o[(o.SubmittedConfirmation = 2)] = "SubmittedConfirmation"),
        o);
      function I(e) {
        let {
            gizmoId: t,
            sharingRecipient: i,
            categories: n,
            moderationType: r,
            sharingTargets: o,
            appealAvailable: a,
            onClose: l,
            onAppealSubmitted: s,
          } = e,
          { 0: c, 1: d } = (0, P.useState)(""),
          { 0: u, 1: p } = (0, P.useState)(_.Initial),
          m = async () => {
            await v.U.postGizmoAppeal(t, c, i, n),
              p(_.SubmittedConfirmation),
              null == s || s();
          };
        switch (u) {
          case _.Initial:
            return (0, k.jsx)(x.Z, {
              title: (function (e) {
                switch (e) {
                  case C.PublishBlocked:
                    return "Your changes couldn’t be published";
                  case C.RemovedFromMarketplace:
                    return "Your GPT has been removed from the marketplace";
                  case C.RemovedFromPublic:
                    return "Your GPT has been removed from public view";
                  case C.Recategorized:
                    return "Your GPT has been recategorized";
                }
              })(r),
              isOpen: !0,
              onClose: l,
              showCloseButton: !0,
              primaryButton: (0, k.jsx)(g.ZP.Button, {
                title: "Continue",
                color: "primary",
                onClick: l,
              }),
              secondaryButton: a
                ? (0, k.jsx)(g.ZP.Button, {
                    title: "Appeal",
                    onClick: () => p(_.AppealForm),
                  })
                : void 0,
              type: "warning",
              children: (0, k.jsx)("div", {
                className: "flex flex-col gap-2 text-sm",
                children: (function (e, t, i) {
                  var n;
                  let r = null == t ? void 0 : t.find((t) => t.recipient === e),
                    o = null == r ? void 0 : r.moderated_fields,
                    a =
                      null !== (n = null == o ? void 0 : o.length) &&
                      void 0 !== n
                        ? n
                        : 0;
                  return (0, k.jsxs)(k.Fragment, {
                    children: [
                      (0, k.jsxs)("p", {
                        children: [
                          (function (e) {
                            switch (e) {
                              case b.Zz.Private:
                              case b.Zz.Workspace:
                                return (0, k.jsxs)(k.Fragment, {
                                  children: [
                                    "Your GPT can’t be updated because it violates our",
                                    " ",
                                    (0, k.jsx)(T, {
                                      target: "_blank",
                                      href: "https://openai.com/policies/usage-policies",
                                      rel: "noreferrer",
                                      children: "Usage Policies",
                                    }),
                                    ".",
                                  ],
                                });
                              case b.Zz.Link:
                                return (0, k.jsxs)(k.Fragment, {
                                  children: [
                                    "Your GPT can’t be shared publicly because it violates our",
                                    " ",
                                    (0, k.jsx)(T, {
                                      target: "_blank",
                                      href: "https://openai.com/policies/usage-policies",
                                      rel: "noreferrer",
                                      children: "Usage Policies",
                                    }),
                                    ".",
                                  ],
                                });
                              case b.Zz.Marketplace:
                                return (0, k.jsxs)(k.Fragment, {
                                  children: [
                                    "Your GPT can’t appear in the Explore GPTs page because it violates our",
                                    " ",
                                    (0, k.jsx)(T, {
                                      target: "_blank",
                                      href: "https://openai.com/policies/usage-policies",
                                      rel: "noreferrer",
                                      children: "Usage Policies",
                                    }),
                                    ".",
                                  ],
                                });
                            }
                          })(e),
                          " ",
                          a > 1
                            ? "See below for the specific issues:"
                            : 1 == a
                            ? "See below for the specific issue:"
                            : "",
                        ],
                      }),
                      a > 0 &&
                        (null == o
                          ? void 0
                          : o.map((e) =>
                              (0, k.jsxs)(k.Fragment, {
                                children: [
                                  (0, k.jsx)("p", {
                                    className: "font-bold",
                                    children: (function (e) {
                                      switch (e) {
                                        case "profile_picture":
                                          return "Profile Picture";
                                        case "gizmo_name":
                                          return "Name";
                                        case "gizmo_description":
                                          return "Description";
                                        case "gizmo_instructions":
                                          return "Instructions";
                                        case "gizmo_welcome_message":
                                          return "Welcome Message";
                                        case "custom_actions":
                                          return "Custom Actions";
                                        case "conversation_starter":
                                          return "Conversation Starter";
                                        case "file":
                                          return "File";
                                        default:
                                          return;
                                      }
                                    })(e.name),
                                  }),
                                  (0, k.jsx)("ul", {
                                    className: "list-disc pl-5",
                                    children: e.reasons.map((e) =>
                                      (0, k.jsxs)(
                                        "li",
                                        {
                                          children: [
                                            e.description,
                                            " ",
                                            e.link
                                              ? (0, k.jsx)(T, {
                                                  href: e.link,
                                                  target: "_blank",
                                                  rel: "noreferrer",
                                                  children: "Learn more",
                                                })
                                              : "",
                                          ],
                                        },
                                        e.description
                                      )
                                    ),
                                  }),
                                ],
                              })
                            )),
                      i &&
                        (0, k.jsx)("p", {
                          children:
                            "Alternatively you may appeal this decision and we will get back to you as soon as possible. Or you can publish to “Only me” and use this GPT privately.",
                        }),
                    ],
                  });
                })(i, o, a),
              }),
            });
          case _.AppealForm:
            return (0, k.jsx)(x.Z, {
              title: "Appeal",
              isOpen: !0,
              onClose: l,
              showCloseButton: !0,
              shouldIgnoreClickOutside: !0,
              primaryButton: (0, k.jsx)(g.ZP.Button, {
                title: "Submit",
                color: "primary",
                onClick: m,
                disabled: 0 === c.trim().length,
              }),
              secondaryButton: (0, k.jsx)(g.ZP.Button, {
                title: "Back",
                onClick: () => p(_.Initial),
              }),
              type: "warning",
              children: (0, k.jsxs)("div", {
                className: "flex flex-col gap-2 text-sm",
                children: [
                  (0, k.jsx)("p", {
                    children:
                      "Please provide a reason for why you believe this GPT doesn’t violate our policies and should be published",
                  }),
                  (0, k.jsx)(z, {
                    value: c,
                    onChange: (e) => d(e.target.value),
                  }),
                ],
              }),
            });
          case _.SubmittedConfirmation:
            return (0, k.jsx)(k.Fragment, {});
        }
      }
      function S(e) {
        let { onClose: t } = e;
        return (0, k.jsx)(x.Z, {
          title: "Appeal submitted",
          isOpen: !0,
          onClose: t,
          showCloseButton: !0,
          primaryButton: (0, k.jsx)(g.ZP.Button, {
            title: "Close",
            color: "primary",
            onClick: t,
          }),
          type: "success",
          children: (0, k.jsx)("div", {
            className: "flex flex-col gap-2 text-sm",
            children: (0, k.jsx)("div", {
              children:
                "Your appeal has been submitted. We will get back to you as soon as possible.",
            }),
          }),
        });
      }
      function G(e) {
        let { gizmoId: t, onClose: i } = e,
          { data: n } = (0, u.b9)(t, !0),
          r = async () => {
            await v.U.postGizmoCancelAppeal(t);
          };
        return (0, k.jsx)(x.Z, {
          isOpen: !0,
          onClose: w(),
          primaryButton: (0, k.jsx)(g.ZP.Button, {
            title: "Cancel appeal",
            color: "primary",
            onClick: () => {
              r(), null == i || i();
            },
          }),
          type: "warning",
          children: (0, k.jsxs)("div", {
            className: "flex flex-col gap-2 text-sm",
            children: [
              (0, k.jsx)("h2", {
                className: "text-lg font-semibold",
                children: "Reviewing your appeal",
              }),
              (0, k.jsxs)("p", {
                children: [
                  "During the review you can continue using “",
                  null == n ? void 0 : n.gizmo.display.name,
                  "” as your private GPT, but won’t be able to update it or share it with others.",
                ],
              }),
            ],
          }),
        });
      }
      function M(e) {
        let { appealState: t, onAppealClose: i, onAppealSubmitted: n } = e,
          { value: r } = (0, y.sB)(y.tz.GizmoAppeals),
          { 0: o, 1: a } = (0, P.useState)(!1);
        return o
          ? (0, k.jsx)(S, {
              onClose: () => {
                a(!1), null == n || n();
              },
            })
          : (0, k.jsxs)(k.Fragment, {
              children: [
                (null == t ? void 0 : t.showModal) == O.AppealSent &&
                  (0, k.jsx)(G, { gizmoId: t.gizmoId, onClose: i }),
                (null == t ? void 0 : t.showModal) == O.AppealAvailable &&
                  (0, k.jsx)(I, {
                    gizmoId: t.gizmoId,
                    sharingRecipient: t.sharingRecipient,
                    categories: t.categories,
                    moderationType: t.moderationType,
                    sharingTargets: t.sharingTargets,
                    appealAvailable: r,
                    onClose: () => (null == i ? void 0 : i()),
                    onAppealSubmitted: () => a(!0),
                  }),
              ],
            });
      }
      var E = i(8402),
        A = i(28373),
        Z = i(99715),
        L = i(61236),
        D = i(61888),
        U = i(1454),
        R = i(84692);
      let V = (e) => {
          let { gizmoId: t, limit: i, cursor: n } = e;
          return (0, L.a)({
            queryFn: async () => v.U.listVersions({ gizmoId: t }),
            queryKey: [
              "gizmo",
              "versions",
              { gizmoId: t, limit: i, cursor: n },
            ],
          });
        },
        F = (0, P.memo)(function (e) {
          let { gizmoId: t } = e,
            { value: i } = (0, y.sB)(y.tz.GizmoVersionHistory);
          return t && i ? (0, k.jsx)(B, { gizmoId: t }) : null;
        });
      function B(e) {
        let { gizmoId: t } = e,
          { 0: i, 1: n } = (0, P.useState)(!1),
          { data: r } = V({ gizmoId: t }),
          o = () => {
            n(!i);
          };
        return (0, k.jsxs)(k.Fragment, {
          children: [
            (0, k.jsxs)("div", {
              className:
                "flex flex-row items-center space-x-2 hover:cursor-pointer",
              onClick: o,
              children: [
                (0, k.jsx)(U.TCC, { className: "icon-sm" }),
                (0, k.jsx)("span", {
                  children: (0, k.jsx)(R.Z, {
                    id: "gizmoVersionHistory.buttonLabel",
                    defaultMessage: "History",
                  }),
                }),
              ],
            }),
            (0, k.jsx)("div", {
              className: "fixed inset-0 z-10 overflow-hidden ".concat(
                i ? "" : "hidden"
              ),
              children: (0, k.jsx)("div", {
                className: "absolute inset-0 z-20 overflow-hidden",
                children: (0, k.jsx)("section", {
                  className: "absolute inset-y-0 left-0 flex max-w-fit",
                  children: (0, k.jsx)("div", {
                    className: "relative w-screen max-w-xs",
                    children: (0, k.jsxs)("div", {
                      className:
                        "flex h-full flex-col overflow-y-scroll bg-token-sidebar-surface-primary py-6 shadow-xl",
                      children: [
                        (0, k.jsx)("header", {
                          className: "px-4 sm:px-6",
                          children: (0, k.jsxs)("div", {
                            className:
                              "flex items-start justify-between space-x-3",
                            children: [
                              (0, k.jsx)("h2", {
                                className: "text-lg font-medium leading-7",
                                children: (0, k.jsx)(R.Z, {
                                  id: "gizmoVersionHistory.sidebarTitle",
                                  defaultMessage: "Version History",
                                }),
                              }),
                              (0, k.jsx)("div", {
                                className: "flex h-7 items-center",
                                children: (0, k.jsx)("button", {
                                  onClick: o,
                                  className:
                                    "transition duration-150 ease-in-out",
                                  children: (0, k.jsx)(U.iYc, {
                                    className: "icon-md",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, k.jsx)("div", {
                          className: "relative flex-1 px-4 py-6 sm:px-6",
                          children:
                            null == r
                              ? void 0
                              : r.items.map((e, t) =>
                                  (0, k.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "flex flex-row items-center justify-between rounded-lg p-2",
                                      children: [
                                        (0, k.jsx)("span", {
                                          className:
                                            "hover:cursor-pointer hover:bg-token-sidebar-surface-tertiary",
                                          children: new Date(
                                            e.updated_at
                                          ).toLocaleTimeString(void 0, {
                                            hour: "numeric",
                                            minute: "numeric",
                                          }),
                                        }),
                                        (0, k.jsx)(q, {}),
                                      ],
                                    },
                                    t
                                  )
                                ),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }
      function q() {
        return (0, k.jsx)(k.Fragment, {
          children: (0, k.jsxs)(Z.fC, {
            children: [
              (0, k.jsx)(Z.xz, {
                asChild: !0,
                children: (0, k.jsx)("button", {
                  color: "neutral",
                  className:
                    "rounded-lg px-3 py-2 text-token-text-primary duration-100 ease-in active:scale-[0.9]",
                  children: (0, k.jsx)(E.Yr, { className: "icon-md" }),
                }),
              }),
              (0, k.jsx)(Z.Uv, {
                children: (0, k.jsx)(Z.VY, {
                  className:
                    "popover z-40 min-w-[180px] max-w-xs rounded-lg border border-token-border-light shadow-lg",
                  side: "bottom",
                  align: "start",
                  children: (0, k.jsxs)(A.UA, {
                    disabled: !1,
                    onClick: D.noop,
                    children: [
                      (0, k.jsx)(E.Nt, { className: "icon-md" }),
                      (0, k.jsx)(R.Z, {
                        id: "gizmoVersionHistory.revertLabel",
                        defaultMessage: "Revert to this version",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var K = i(42005),
        W = i(65455),
        Y = i(24668),
        H = i(9417),
        J = i(99784),
        X = i(78e3),
        Q = i(30640),
        $ = i(84126),
        ee = i(39496),
        et = i(51533),
        ei = i(91128),
        en = i(53197),
        er = i(39352),
        eo = i(81622),
        ea = i(19841),
        el = i(12366),
        es = i.n(el),
        ec = i(9063),
        ed = i(99424),
        eu = i(22433),
        ep = i(7557),
        em = i(1703),
        eh = i(36607),
        ef = i(24077),
        eg = i(68498);
      function ex(e) {
        let { onSelectExample: t } = e,
          i = (0, ec.Z)(),
          n = (0, P.useRef)(null);
        return (0, k.jsxs)("select", {
          onChange: (e) => {
            "label" !== e.target.value &&
              (t(eb[parseInt(e.target.value)].spec),
              (n.current.value = "label"));
          },
          className:
            "h-8 rounded-lg border border-token-border-medium bg-transparent px-2 py-0 text-sm",
          ref: n,
          children: [
            (0, k.jsx)("option", {
              value: "label",
              children: i.formatMessage(ev.examples),
            }),
            eb.map((e, t) =>
              (0, k.jsx)(
                "option",
                { value: t, children: i.formatMessage(e.displayName) },
                t
              )
            ),
          ],
        });
      }
      let ev = (0, eg.vU)({
          examples: {
            id: "gizmo.actions.examples",
            defaultMessage: "Examples",
          },
          weatherExampleTitle: {
            id: "gizmo.actions.weatherExampleTitle",
            defaultMessage: "Weather (JSON)",
          },
          petStoreExampleTitle: {
            id: "gizmo.actions.petStoreExampleTitle",
            defaultMessage: "Pet Store (YAML)",
          },
          blankExampleTitle: {
            id: "gizmo.actions.blankExampleTitle",
            defaultMessage: "Blank Template",
          },
        }),
        eb = [
          {
            displayName: ev.weatherExampleTitle,
            spec: JSON.stringify(
              {
                openapi: "3.1.0",
                info: {
                  title: "Get weather data",
                  description: "Retrieves current weather data for a location.",
                  version: "v1.0.0",
                },
                servers: [{ url: "https://weather.example.com" }],
                paths: {
                  "/location": {
                    get: {
                      description: "Get temperature for a specific location",
                      operationId: "GetCurrentWeather",
                      parameters: [
                        {
                          name: "location",
                          in: "query",
                          description:
                            "The city and state to retrieve the weather for",
                          required: !0,
                          schema: { type: "string" },
                        },
                      ],
                      deprecated: !1,
                    },
                  },
                },
                components: { schemas: {} },
              },
              null,
              2
            ),
          },
          {
            displayName: ev.petStoreExampleTitle,
            spec: '# Taken from https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore.yaml\n\nopenapi: "3.0.0"\ninfo:\n  version: 1.0.0\n  title: Swagger Petstore\n  license:\n    name: MIT\nservers:\n  - url: https://petstore.swagger.io/v1\npaths:\n  /pets:\n    get:\n      summary: List all pets\n      operationId: listPets\n      tags:\n        - pets\n      parameters:\n        - name: limit\n          in: query\n          description: How many items to return at one time (max 100)\n          required: false\n          schema:\n            type: integer\n            maximum: 100\n            format: int32\n      responses:\n        \'200\':\n          description: A paged array of pets\n          headers:\n            x-next:\n              description: A link to the next page of responses\n              schema:\n                type: string\n          content:\n            application/json:    \n              schema:\n                $ref: "#/components/schemas/Pets"\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\n    post:\n      summary: Create a pet\n      operationId: createPets\n      tags:\n        - pets\n      responses:\n        \'201\':\n          description: Null response\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\n  /pets/{petId}:\n    get:\n      summary: Info for a specific pet\n      operationId: showPetById\n      tags:\n        - pets\n      parameters:\n        - name: petId\n          in: path\n          required: true\n          description: The id of the pet to retrieve\n          schema:\n            type: string\n      responses:\n        \'200\':\n          description: Expected response to a valid request\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Pet"\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\ncomponents:\n  schemas:\n    Pet:\n      type: object\n      required:\n        - id\n        - name\n      properties:\n        id:\n          type: integer\n          format: int64\n        name:\n          type: string\n        tag:\n          type: string\n    Pets:\n      type: array\n      maxItems: 100\n      items:\n        $ref: "#/components/schemas/Pet"\n    Error:\n      type: object\n      required:\n        - code\n        - message\n      properties:\n        code:\n          type: integer\n          format: int32\n        message:\n          type: string',
          },
          {
            displayName: ev.blankExampleTitle,
            spec: JSON.stringify(
              {
                openapi: "3.1.0",
                info: {
                  title: "Untitled",
                  description: "Your OpenAPI specification",
                  version: "v1.0.0",
                },
                servers: [{ url: "" }],
                paths: {},
                components: { schemas: {} },
              },
              null,
              2
            ),
          },
        ];
      var ey = i(21958),
        ej = i(27581),
        ew = i(23340);
      function eP(e) {
        let { clientThreadId: t } = e,
          i = (0, J.oq)(t),
          n = (0, ew.Bv)(t),
          r = (0, J.U0)(t, i),
          o = [...Array(r).keys()].map((e) =>
            (0, k.jsx)(
              ej.Z,
              {
                isFinalTurn: e === r - 1,
                turnIndex: e,
                clientThreadId: t,
                conversationLeafId: i,
                onChangeItemInView: D.noop,
                onChangeRating: D.noop,
                onRequestMoreCompletions: D.noop,
                onRequestCompletion: D.noop,
                currentModelId: null != n ? n : "",
              },
              e
            )
          );
        return (0, k.jsx)(k.Fragment, { children: o });
      }
      function eN(e) {
        let { clientThreadIds: t } = e;
        return (0, k.jsx)(k.Fragment, {
          children: t.map((e) => (0, k.jsx)(eP, { clientThreadId: e }, e)),
        });
      }
      var ek = i(50709),
        eT = i(50484),
        ez = i(61161),
        eO = i(78623),
        eC = i(18405),
        e_ = i(4579),
        eI = i(8869),
        eS = i(45534),
        eG = i(48799),
        eM = i(91225),
        eE = i(83737),
        eA = i(8844),
        eZ = i(33782),
        eL = i(37345),
        eD = i(22824);
      function eU() {
        return (0, k.jsxs)("div", {
          className: "flex items-center",
          children: [
            (0, k.jsx)("div", {
              className: "border-token-border-secondary flex-grow border-b",
            }),
            (0, k.jsxs)("div", {
              className:
                "flex flex-shrink-0 items-center gap-2 px-2 py-6 text-sm text-token-text-tertiary",
              children: [(0, k.jsx)(U.V7f, {}), "GPT updated"],
            }),
            (0, k.jsx)("div", {
              className: "border-token-border-secondary flex-grow border-b",
            }),
          ],
        });
      }
      let eR = (((a = {}).TestGizmoAction = "test_gizmo_action"), a),
        eV = new eI.V(),
        eF = P.memo(function (e) {
          var t;
          let { gizmoEditorData: i, isSavingDraft: n, showTitle: r = !0 } = e,
            { 0: o, 1: a } = (0, P.useState)(() => (0, J.OX)()),
            { 0: l, 1: s } = (0, P.useState)([]);
          (0, P.useEffect)(() => {
            s((e) => (e[e.length - 1] === o ? e : [...e, o]));
          }, [o]);
          let c = l.slice(0, -1);
          (0, J.ax)(o, { kind: eu.OL.GizmoTest, gizmo_id: i.id }),
            (0, P.useEffect)(() => {
              J.tQ.updateConversationMode(o, {
                kind: eu.OL.GizmoTest,
                gizmo_id: i.id,
              });
            }, [o, i.id]);
          let d = (0, J.UL)(o),
            u =
              null === (t = i.files) || void 0 === t
                ? void 0
                : t.map((e) => e.file_id).join();
          (0, P.useEffect)(() => {
            null != J.tQ.getServerThreadId(o) && a((0, J.OX)());
          }, [i.id, i.instructions, i.tools, u, o]),
            (0, P.useEffect)(() => {
              (0, J.Zz)(o) &&
                J.iN.hasThread(o) &&
                d.lastModelUsed !== ew.mx &&
                J.tQ.updateInitialThreadDataForNewThread(o, ew.mx, []);
            }, [o, d, i]);
          let p = (0, eC.tN)((e) => e.activeSidebar),
            m = (0, P.useMemo)(
              () => ({ gizmoEditorData: i, mode: "test" }),
              [i]
            ),
            { 0: h, 1: f } = (0, P.useState)(0),
            g = () => {
              f((e) => e - 360);
            },
            x = i.id,
            v = (function (e) {
              var t;
              let i =
                  null === (t = (0, Y.t)()) || void 0 === t
                    ? void 0
                    : t.isFree(),
                n = (0, eZ.Z)(e, void 0, D.noop, []);
              return (0, P.useCallback)(
                async (t, r, o) => {
                  let a = J.tQ.getThreadCurrentLeafId(e),
                    l = (0, eA.Z)();
                  J.tQ.updateTree(e, (e) => {
                    e.addNodeToEnd(a, {
                      id: l,
                      children: [],
                      parentId: a,
                      message: {
                        id: l,
                        author: { role: eu.uU.User },
                        content: {
                          content_type: eu.PX.Text,
                          parts: [
                            "Call the "
                              .concat(r, " API with the ")
                              .concat(o, " operation"),
                          ],
                        },
                        recipient: "all",
                        metadata: {
                          jit_plugin_data: {
                            from_client: {
                              type: "test",
                              operation: o,
                              tool_name: (0, ez.VN)(r),
                            },
                          },
                        },
                      },
                    });
                  });
                  let s = {
                      conversationMode: { kind: eu.OL.GizmoTest, gizmo_id: t },
                    },
                    c = await (0, eG.r)(i, (0, Y.N$)(), eu.OL.GizmoTest),
                    d = await eS.ZP.getEnforcementToken(c),
                    u = await eM.Z.getEnforcementToken(c);
                  n({
                    model: ew.mx,
                    completionType: eu.Os.Next,
                    parentNodeId: l,
                    metadata: {},
                    focusOnNewCompletion: !0,
                    arkoseToken: d,
                    turnstileToken: u,
                    preflightTime: 0,
                    completionMetadata: s,
                  });
                },
                [e, n, i]
              );
            })(o);
          return (
            (0, P.useEffect)(
              () =>
                (0, e_.LW)(eV, {
                  test_gizmo_action: (e) => {
                    let { rootDomain: t, operationName: i } = e;
                    x && v(x, t, i);
                  },
                }),
              [v, x]
            ),
            (0, k.jsx)(eL.D.Provider, {
              value: m,
              children: (0, k.jsxs)("div", {
                className: (0, ea.default)(
                  "flex h-full w-full",
                  n && "cursor-wait opacity-80 transition"
                ),
                children: [
                  (0, k.jsxs)("div", {
                    className: "flex grow flex-col",
                    children: [
                      (0, k.jsx)("div", {
                        className: "relative mb-2 flex-shrink-0",
                        children: (0, k.jsx)("div", {
                          className: "flex justify-center py-1",
                          children:
                            r &&
                            (0, k.jsxs)("div", {
                              className:
                                "group flex items-center gap-2 text-lg font-medium",
                              children: [
                                (0, k.jsx)("div", { className: "icon-md" }),
                                (0, k.jsxs)("button", {
                                  onClick: () => {
                                    g(), s([]), a((0, J.OX)());
                                  },
                                  className: "flex items-center gap-2",
                                  children: [
                                    "Preview",
                                    (0, k.jsx)(eE.E.div, {
                                      className: "text-token-text-primary",
                                      animate: { rotate: h },
                                      transition: { duration: 0.3 },
                                      children: (0, k.jsx)(E.u8, {
                                        className:
                                          "icon-md invisible group-hover:visible",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        }),
                      }),
                      (0, k.jsx)("div", {
                        className: (0, ea.default)(
                          "relative grow overflow-auto px-2",
                          n && "pointer-events-none"
                        ),
                        children: (0, k.jsx)(ek.Z, {
                          clientThreadId: o,
                          hideHeader: !0,
                          renderEmptyState: (0, k.jsxs)("div", {
                            className: "relative h-full w-full",
                            children: [
                              null != c &&
                                c.length > 0 &&
                                (0, k.jsx)("div", {
                                  className: "h-full w-full opacity-20",
                                  children: (0, k.jsxs)(eT.I, {
                                    children: [
                                      (0, k.jsx)(eN, { clientThreadIds: c }),
                                      (0, k.jsx)(eU, {}),
                                    ],
                                  }),
                                }),
                              (0, k.jsx)("div", {
                                className:
                                  "absolute left-0 top-0 h-full w-full",
                                children: (0, k.jsx)(eD.r, {
                                  gizmo: i,
                                  isOwner: !0,
                                  hideOwner: !0,
                                }),
                              }),
                            ],
                          }),
                          prependThreadChildren:
                            c.length > 0 &&
                            (0, k.jsxs)(k.Fragment, {
                              children: [
                                (0, k.jsx)("div", {
                                  className: "opacity-50",
                                  children: (0, k.jsx)(eN, {
                                    clientThreadIds: c,
                                  }),
                                }),
                                (0, k.jsx)(eU, {}),
                              ],
                            }),
                        }),
                      }),
                    ],
                  }),
                  "debug" === p &&
                    (0, k.jsx)(eO.fv, {
                      clientThreadId: o,
                      slideOver: !1,
                      onClose: () => eC.vm.toggleActiveSidebar("debug"),
                      isOpen: !0,
                    }),
                ],
              }),
            })
          );
        });
      function eB(e) {
        let { content: t, button: i, onClick: n } = e;
        return (0, k.jsxs)("div", {
          className:
            "flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",
          onClick: n,
          children: [
            (0, k.jsx)("div", { className: "h-9 grow px-3 py-2", children: t }),
            (0, k.jsx)("div", { className: "w-px bg-token-border-medium" }),
            i,
          ],
        });
      }
      let eq = ["oauth_client_id", "oauth_client_secret"],
        eK = ["api_key"];
      function eW(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function eY(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eW(Object(i), !0).forEach(function (t) {
                (0, p.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : eW(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      let eH = "".concat(
        "/g/g-TYEliDU6A-actionsgpt"
      );
      function eJ(e) {
        let { children: t } = e;
        return (0, k.jsx)("label", {
          className: "mb-1 block text-sm font-medium",
          children: t,
        });
      }
      function eX(e) {
        var t, i, n, r, o, a, l, s, c, d, u, p, m, h;
        let { jitPluginTool: f, onUpdateTool: g, onClose: v } = e,
          { 0: b, 1: y } = (0, P.useState)({
            apiKeyValue: "",
            oauthClientIdValue: "",
            oauthClientSecretValue: "",
            oauthAuthUrlValue:
              null !==
                (t =
                  null == f ||
                  null === (i = f.metadata) ||
                  void 0 === i ||
                  null === (i = i.auth) ||
                  void 0 === i
                    ? void 0
                    : i.client_url) && void 0 !== t
                ? t
                : "",
            oauthTokenUrlValue:
              null !==
                (n =
                  null == f ||
                  null === (r = f.metadata) ||
                  void 0 === r ||
                  null === (r = r.auth) ||
                  void 0 === r
                    ? void 0
                    : r.authorization_url) && void 0 !== n
                ? n
                : "",
            oauthScopeValue:
              null !==
                (o =
                  null == f ||
                  null === (a = f.metadata) ||
                  void 0 === a ||
                  null === (a = a.auth) ||
                  void 0 === a
                    ? void 0
                    : a.scope) && void 0 !== o
                ? o
                : "",
            authTypeValue:
              null !==
                (l =
                  null == f ||
                  null === (s = f.metadata) ||
                  void 0 === s ||
                  null === (s = s.auth) ||
                  void 0 === s
                    ? void 0
                    : s.type) && void 0 !== l
                ? l
                : eu.Jv.None,
            httpAuthTypeValue:
              null !==
                (c =
                  null == f ||
                  null === (d = f.metadata) ||
                  void 0 === d ||
                  null === (d = d.auth) ||
                  void 0 === d
                    ? void 0
                    : d.authorization_type) && void 0 !== c
                ? c
                : "basic",
            customHeaderValue:
              null !==
                (u =
                  null == f ||
                  null === (p = f.metadata) ||
                  void 0 === p ||
                  null === (p = p.auth) ||
                  void 0 === p
                    ? void 0
                    : p.custom_auth_header) && void 0 !== u
                ? u
                : "",
            tokenExchangeMethodValue:
              null !==
                (m =
                  null == f ||
                  null === (h = f.metadata) ||
                  void 0 === h ||
                  null === (h = h.auth) ||
                  void 0 === h
                    ? void 0
                    : h.token_exchange_method) && void 0 !== m
                ? m
                : "default_post",
          });
        function j(e) {
          y((t) => eY(eY({}, t), e));
        }
        return (0, k.jsxs)(x.Z, {
          type: "success",
          isOpen: !0,
          title: "Authentication",
          primaryButton: (0, k.jsx)(ep.z, {
            color: "dark",
            onClick: () => {
              g(
                b.authTypeValue === eu.Jv.None
                  ? { type: eu.Jv.None }
                  : b.authTypeValue === eu.Jv.OAuth
                  ? {
                      type: eu.Jv.OAuth,
                      client_url: b.oauthAuthUrlValue,
                      authorization_url: b.oauthTokenUrlValue,
                      authorization_content_type:
                        "application/x-www-form-urlencoded",
                      scope: b.oauthScopeValue,
                      token_exchange_method: b.tokenExchangeMethodValue,
                      oauth_client_id: b.oauthClientIdValue,
                      oauth_client_secret: b.oauthClientSecretValue,
                    }
                  : {
                      type: eu.Jv.ServiceHTTP,
                      authorization_type: b.httpAuthTypeValue,
                      custom_auth_header: b.customHeaderValue,
                      api_key: b.apiKeyValue,
                    }
              ),
                v();
            },
            children: "Save",
          }),
          secondaryButton: (0, k.jsx)(ep.z, {
            color: "neutral",
            onClick: v,
            children: "Cancel",
          }),
          onClose: v,
          children: [
            (0, k.jsxs)("div", {
              className: "mb-4",
              children: [
                (0, k.jsx)(eJ, { children: "Authentication Type" }),
                (0, k.jsxs)(ef.Z.Root, {
                  onValueChange: (e) => {
                    j({ authTypeValue: e });
                  },
                  value: b.authTypeValue,
                  className: "flex gap-4",
                  children: [
                    (0, k.jsx)(A.Xb, { label: "None", value: eu.Jv.None }),
                    (0, k.jsx)(A.Xb, {
                      label: "API Key",
                      value: eu.Jv.ServiceHTTP,
                    }),
                    (0, k.jsx)(A.Xb, { label: "OAuth", value: eu.Jv.OAuth }),
                  ],
                }),
              ],
            }),
            "service_http" === b.authTypeValue
              ? (0, k.jsxs)(k.Fragment, {
                  children: [
                    (0, k.jsx)(eJ, { children: "API Key" }),
                    (0, k.jsx)(ey.yt, {
                      placeholder: "<HIDDEN>",
                      type: "password",
                      value: b.apiKeyValue,
                      onChange: (e) => {
                        j({ apiKeyValue: e.target.value });
                      },
                      className: "mb-2",
                    }),
                    (0, k.jsx)(eJ, { children: "Auth Type" }),
                    (0, k.jsxs)(ef.Z.Root, {
                      className: "mb-2 flex gap-6 overflow-hidden rounded-lg",
                      value: b.httpAuthTypeValue,
                      required: !0,
                      onValueChange: (e) => {
                        j({ httpAuthTypeValue: e });
                      },
                      children: [
                        (0, k.jsx)(A.Xb, { value: "basic", label: "Basic" }),
                        (0, k.jsx)(A.Xb, { value: "bearer", label: "Bearer" }),
                        (0, k.jsx)(A.Xb, { value: "custom", label: "Custom" }),
                      ],
                    }),
                    "custom" === b.httpAuthTypeValue &&
                      (0, k.jsxs)("div", {
                        className: "mt-2",
                        children: [
                          (0, k.jsx)(eJ, { children: "Custom Header Name" }),
                          (0, k.jsx)(ey.yt, {
                            value: b.customHeaderValue,
                            onChange: (e) => {
                              j({ customHeaderValue: e.target.value });
                            },
                            className: "mb-2",
                            placeholder: "X-Api-Key",
                          }),
                        ],
                      }),
                  ],
                })
              : "oauth" === b.authTypeValue
              ? (0, k.jsxs)(k.Fragment, {
                  children: [
                    (0, k.jsx)(eJ, { children: "Client ID" }),
                    (0, k.jsx)(ey.yt, {
                      placeholder: "<HIDDEN>",
                      type: "password",
                      value: b.oauthClientIdValue,
                      onChange: (e) => {
                        j({ oauthClientIdValue: e.target.value });
                      },
                      className: "mb-2",
                    }),
                    (0, k.jsx)(eJ, { children: "Client Secret" }),
                    (0, k.jsx)(ey.yt, {
                      placeholder: "<HIDDEN>",
                      type: "password",
                      value: b.oauthClientSecretValue,
                      onChange: (e) => {
                        j({ oauthClientSecretValue: e.target.value });
                      },
                      className: "mb-2",
                    }),
                    (0, k.jsx)(eJ, { children: "Authorization URL" }),
                    (0, k.jsx)(ey.yt, {
                      value: b.oauthAuthUrlValue,
                      onChange: (e) => {
                        j({ oauthAuthUrlValue: e.target.value });
                      },
                      className: "mb-2",
                    }),
                    (0, k.jsx)(eJ, { children: "Token URL" }),
                    (0, k.jsx)(ey.yt, {
                      value: b.oauthTokenUrlValue,
                      onChange: (e) => {
                        j({ oauthTokenUrlValue: e.target.value });
                      },
                      className: "mb-2",
                    }),
                    (0, k.jsx)(eJ, { children: "Scope" }),
                    (0, k.jsx)(ey.yt, {
                      value: b.oauthScopeValue,
                      onChange: (e) => {
                        j({ oauthScopeValue: e.target.value });
                      },
                      className: "mb-2",
                    }),
                    (0, k.jsx)(eJ, { children: "Token Exchange Method" }),
                    (0, k.jsxs)(ef.Z.Root, {
                      value: b.tokenExchangeMethodValue,
                      required: !0,
                      onValueChange: (e) => {
                        j({ tokenExchangeMethodValue: e });
                      },
                      children: [
                        (0, k.jsx)(A.Xb, {
                          value: "default_post",
                          label: "Default (POST request)",
                        }),
                        (0, k.jsx)(A.Xb, {
                          value: "basic_auth_header",
                          label: "Basic authorization header",
                        }),
                      ],
                    }),
                  ],
                })
              : null,
          ],
        });
      }
      function eQ(e) {
        let { onImport: t, onClose: i } = e,
          { 0: n, 1: r } = (0, P.useState)(""),
          { 0: o, 1: a } = (0, P.useState)(!1);
        async function l() {
          var e;
          let r;
          try {
            r = new URL(n);
          } catch {
            return;
          }
          if (null !== (e = r) && void 0 !== e && e.hostname) {
            a(!0);
            try {
              let e = await v.U.fetchOpenAPISpec(n);
              t(e.content), i();
            } finally {
              a(!1);
            }
          }
        }
        return (0, k.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [
            (0, k.jsx)("input", {
              name: "url",
              value: n,
              onChange: (e) => {
                r(e.target.value);
              },
              placeholder: "https://...",
              className:
                "h-8 rounded border border-token-border-light px-2 text-sm",
              autoFocus: !0,
            }),
            (0, k.jsx)(A.cY, {
              color: "dark",
              loading: o,
              onClick: l,
              children: "Import",
            }),
            (0, k.jsx)(A.cY, {
              color: "neutral",
              onClick: i,
              children: "Cancel",
            }),
          ],
        });
      }
      function e$(e) {
        let { rootDomain: t, operations: i } = e;
        return null == i || 0 === i.length
          ? (0, k.jsx)("div", {
              className: "text-sm text-token-text-tertiary",
              children: "Operations in your schema will show here.",
            })
          : (0, k.jsx)("table", {
              className: "w-full text-sm",
              children: (0, k.jsxs)("tbody", {
                children: [
                  (0, k.jsxs)("tr", {
                    className:
                      "border-b border-token-border-light text-left text-xs text-token-text-tertiary",
                    children: [
                      (0, k.jsx)("th", {
                        className: "py-1 font-normal",
                        children: "Name",
                      }),
                      (0, k.jsx)("th", {
                        className: "py-1 font-normal",
                        children: "Method",
                      }),
                      (0, k.jsx)("th", {
                        className: "py-1 font-normal",
                        children: "Path",
                      }),
                      (0, k.jsx)("th", { className: "py-1 font-normal" }),
                    ],
                  }),
                  i.map((e) =>
                    (0, k.jsxs)(
                      "tr",
                      {
                        className: "border-b border-token-border-light",
                        children: [
                          (0, k.jsx)("td", {
                            className: "py-2",
                            children: e.operationName,
                          }),
                          (0, k.jsx)("td", {
                            className: "py-2 uppercase",
                            children: e.method,
                          }),
                          (0, k.jsx)("td", {
                            className: "py-2",
                            children: e.path,
                          }),
                          (0, k.jsx)("td", {
                            className: "py-2",
                            children: (0, k.jsx)(A.cY, {
                              color: "neutral",
                              onClick: () => {
                                t &&
                                  eV.publish({
                                    kind: eR.TestGizmoAction,
                                    rootDomain: t,
                                    operationName: e.operationName,
                                  });
                              },
                              children: "Test",
                            }),
                          }),
                        ],
                      },
                      e.operationName
                    )
                  ),
                ],
              }),
            });
      }
      function e0(e) {
        let { validationResponse: t } = e;
        return (0, k.jsxs)("div", {
          children: [
            (0, k.jsx)(ey.lX, { label: "Available actions" }),
            (0, k.jsx)(e$, {
              rootDomain: t.success ? t.spec.root_domain : void 0,
              operations: t.success ? t.spec.operations : void 0,
            }),
          ],
        });
      }
      function e1(e) {
        var t, i, n, r, o, a, l;
        let {
            currentlyEditingActionDomain: s,
            gizmoEditorData: c,
            updateGizmo: d,
            onClose: u,
          } = e,
          { 0: p, 1: h } = (0, P.useState)(s),
          f = (0, P.useRef)(p);
        (0, P.useEffect)(() => {
          f.current = p;
        }, [p]);
        let g =
            null == c || null === (t = c.tools) || void 0 === t
              ? void 0
              : t.find(
                  (e) => e.type === m.qK.JIT_PLUGIN && e.metadata.domain === p
                ),
          { 0: x } = (0, P.useState)(() => null == g),
          b =
            null !==
              (i =
                null == g || null === (n = g.metadata) || void 0 === n
                  ? void 0
                  : n.raw_spec) && void 0 !== i
              ? i
              : "",
          { 0: y, 1: j } = (0, P.useState)(!1),
          { 0: w, 1: N } = (0, P.useState)(!1);
        function T(e) {
          d((t) =>
            eY(
              eY({}, t),
              {},
              {
                tools: g
                  ? t.tools.map((t) =>
                      t.type === m.qK.JIT_PLUGIN && t.metadata.domain === p
                        ? eY(
                            eY({}, t),
                            {},
                            {
                              metadata: eY(
                                eY(eY({}, t.metadata), e),
                                {},
                                { json_schema: void 0 }
                              ),
                            }
                          )
                        : t
                    )
                  : [
                      ...t.tools,
                      {
                        type: m.qK.JIT_PLUGIN,
                        metadata: eY(
                          eY(
                            {
                              raw_spec: "",
                              domain: null != p ? p : "Unknown domain",
                              action_id: "",
                            },
                            e
                          ),
                          {},
                          { json_schema: void 0 }
                        ),
                      },
                    ],
              }
            )
          );
        }
        let { 0: z, 1: O } = (0, P.useState)(),
          { 0: C } = (0, P.useState)(() =>
            (0, D.debounce)(async function (e) {
              let t = await v.U.validateOpenAPISpec(e);
              O(t);
              let i = t.success ? t.spec.root_domain : void 0;
              if (i) {
                if (i !== f.current) {
                  var n;
                  if (
                    null == c || null === (n = c.tools) || void 0 === n
                      ? void 0
                      : n.find(
                          (e) =>
                            e.type === m.qK.JIT_PLUGIN &&
                            e.metadata.domain === i
                        )
                  ) {
                    O({
                      success: !1,
                      errors: [
                        "Action sets cannot have duplicate domains - ".concat(
                          i,
                          " already exists on another action"
                        ),
                      ],
                    });
                    return;
                  }
                }
                d((e) =>
                  eY(
                    eY({}, e),
                    {},
                    {
                      tools: e.tools.map((e) =>
                        e.type === m.qK.JIT_PLUGIN &&
                        e.metadata.domain === f.current
                          ? eY(
                              eY({}, e),
                              {},
                              {
                                metadata: eY(
                                  eY({}, e.metadata),
                                  {},
                                  { domain: i }
                                ),
                              }
                            )
                          : e
                      ),
                    }
                  )
                ),
                  h(i);
              }
              if (t.success && t.known_auth && t.known_privacy_policy && g) {
                let e = eY({ type: eu.Jv.OAuth }, t.known_auth);
                (0, D.isEqual)(g.metadata.auth, e) ||
                  T({ auth: eY({ type: eu.Jv.OAuth }, t.known_auth) }),
                  g.metadata.privacy_policy_url !== t.known_privacy_policy &&
                    T({ privacy_policy_url: t.known_privacy_policy });
              }
            }, 1e3)
          ),
          _ = null != z ? (z.success ? z.warnings : z.errors) : void 0;
        (0, P.useEffect)(() => {
          "" === b ? (O(void 0), C.cancel()) : C(b);
        }, [C, b]);
        let I = (e) => {
          try {
            T({ raw_spec: JSON.stringify(JSON.parse(e), null, 2) });
          } catch {
            try {
              T({
                raw_spec: em.ZP.stringify(em.ZP.parse(e), {
                  lineWidth: 120,
                  indent: 2,
                }),
              });
            } catch {}
          }
        };
        return (0, k.jsxs)("div", {
          className: "h-full overflow-auto px-4 pb-12 text-sm",
          children: [
            (0, k.jsxs)("div", {
              className:
                "relative flex flex-col items-center px-16 py-6 text-center",
              children: [
                (0, k.jsx)("div", {
                  className: "absolute left-0 top-6",
                  children: (0, k.jsx)(ep.z, {
                    color: "neutral",
                    onClick: u,
                    children: (0, k.jsx)(E.L7, { className: "icon-md" }),
                  }),
                }),
                null != g &&
                  (0, k.jsx)("div", {
                    className: "absolute right-0 top-6",
                    children: (0, k.jsx)(ep.z, {
                      color: "neutral",
                      onClick: () => {
                        window.confirm(
                          "Are you sure you want to delete this action?"
                        ) &&
                          (d((e) =>
                            eY(
                              eY({}, e),
                              {},
                              {
                                tools: e.tools.filter(
                                  (e) =>
                                    e.type !== m.qK.JIT_PLUGIN ||
                                    e.metadata.domain !== p
                                ),
                              }
                            )
                          ),
                          u());
                      },
                      className: "text-red-500",
                      children: (0, k.jsx)(E.a_, { className: "icon-md" }),
                    }),
                  }),
                (0, k.jsx)("div", {
                  className: "text-xl font-medium",
                  children: x ? "Add actions" : "Edit actions",
                }),
                (0, k.jsx)("div", {
                  className: "text-sm text-token-text-tertiary",
                  children:
                    "Let your GPT retrieve information or take actions outside of ChatGPT.",
                }),
                (0, k.jsx)("div", {
                  className: "text-sm text-token-text-tertiary",
                  children: (0, k.jsx)("a", {
                    href: "https://help.openai.com/en/articles/8554397-creating-a-gpt",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "font-medium",
                    children: "Learn more.",
                  }),
                }),
              ],
            }),
            (0, k.jsxs)(ey.hj, {
              className: "relative",
              children: [
                (0, k.jsx)(ey.lX, { label: "Authentication" }),
                (0, k.jsx)(eB, {
                  onClick: () => {
                    j(!0);
                  },
                  content: (function (e) {
                    switch (e) {
                      case eu.Jv.None:
                        return "None";
                      case eu.Jv.OAuth:
                        return "OAuth";
                      case eu.Jv.ServiceHTTP:
                        return "API Key";
                    }
                  })(
                    null !==
                      (r =
                        null == g ||
                        null === (o = g.metadata) ||
                        void 0 === o ||
                        null === (o = o.auth) ||
                        void 0 === o
                          ? void 0
                          : o.type) && void 0 !== r
                      ? r
                      : eu.Jv.None
                  ),
                  button: (0, k.jsx)("button", {
                    color: "neutral",
                    className: "flex items-center gap-2 px-3",
                    children: (0, k.jsx)(E.RR, { className: "icon-sm" }),
                  }),
                }),
                y &&
                  (0, k.jsx)(eX, {
                    jitPluginTool: g,
                    onUpdateTool: (e) => {
                      switch (e.type) {
                        case eu.Jv.None:
                          T({ auth: { type: eu.Jv.None } });
                          break;
                        case eu.Jv.OAuth: {
                          let { oauth_client_id: t, oauth_client_secret: i } =
                            e;
                          T({
                            auth: (0, ed.Z)(e, eq),
                            oauth_client_id: t,
                            oauth_client_secret: i,
                          });
                          break;
                        }
                        case eu.Jv.ServiceHTTP: {
                          let { api_key: t } = e;
                          T({ auth: (0, ed.Z)(e, eK), api_key: t });
                        }
                      }
                    },
                    onClose: () => {
                      j(!1);
                    },
                  }),
              ],
            }),
            (0, k.jsxs)("div", {
              children: [
                (0, k.jsxs)("div", {
                  className: "mb-1 flex h-8 items-center justify-between",
                  children: [
                    (0, k.jsx)("label", {
                      className: "font-medium text-token-text-primary",
                      children: "Schema",
                    }),
                    (0, k.jsx)("div", {
                      className: "flex items-center",
                      children: w
                        ? (0, k.jsx)(eQ, {
                            onImport: (e) => {
                              I(e);
                            },
                            onClose: () => {
                              N(!1);
                            },
                          })
                        : (0, k.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, k.jsx)(A.cY, {
                                color: "neutral",
                                onClick: () => {
                                  N(!0);
                                },
                                children: "Import from URL",
                              }),
                              (0, k.jsx)(ex, {
                                onSelectExample: (e) => {
                                  T({ raw_spec: e });
                                },
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
                (0, k.jsxs)("div", {
                  className:
                    "mb-8 overflow-hidden rounded-lg border border-token-border-light",
                  children: [
                    (0, k.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, k.jsx)("textarea", {
                          value: b,
                          onChange: (e) => {
                            T({ raw_spec: e.target.value });
                          },
                          spellCheck: !1,
                          placeholder: "Enter your OpenAPI schema here",
                          className:
                            "block h-96 w-full border-none bg-transparent p-2 font-mono text-xs text-token-text-primary",
                        }),
                        (0, k.jsx)("div", {
                          className: "absolute bottom-2 right-2 flex gap-2",
                          children:
                            "" !== b
                              ? (0, k.jsx)(A.cY, {
                                  onClick: () => {
                                    I(b);
                                  },
                                  children: "Format",
                                })
                              : (0, k.jsxs)(A.cY, {
                                  as: "a",
                                  to: eH,
                                  openNewTab: !0,
                                  children: [
                                    (0, k.jsx)(R.Z, {
                                      id: "gizmo.actions.actionsGptHelp",
                                      defaultMessage:
                                        "Get help from ActionsGPT",
                                    }),
                                    (0, k.jsx)(E.fe, { className: "icon-md" }),
                                  ],
                                }),
                        }),
                      ],
                    }),
                    null != _ &&
                      (null == _ ? void 0 : _.length) > 0 &&
                      (0, k.jsx)("div", {
                        className:
                          "border-t border-token-border-light p-2 text-red-500",
                        children: _.map((e, t) =>
                          (0, k.jsx)("div", { children: e }, t)
                        ),
                      }),
                  ],
                }),
              ],
            }),
            null != z && (0, k.jsx)(e0, { validationResponse: z }),
            (0, k.jsxs)("div", {
              className: "mt-4",
              children: [
                (0, k.jsx)(ey.lX, {
                  label: "Privacy policy",
                  description:
                    "Privacy policy is required for all public GPTs.",
                }),
                (0, k.jsx)(eh.Z, {
                  name: "privacyPolicyUrl",
                  value:
                    null !==
                      (a =
                        null == g || null === (l = g.metadata) || void 0 === l
                          ? void 0
                          : l.privacy_policy_url) && void 0 !== a
                      ? a
                      : "",
                  placeholder: "https://api.example-weather-app.com/privacy",
                  onChange: (e) => {
                    T({ privacy_policy_url: e.target.value });
                  },
                }),
              ],
            }),
          ],
        });
      }
      var e2 = i(43383),
        e3 = i(82245),
        e4 = i(22189),
        e8 = i(5667),
        e5 = i(74908),
        e7 = i(68832),
        e9 = i(93031),
        e6 = i(47559);
      function te(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function tt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? te(Object(i), !0).forEach(function (t) {
                (0, p.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : te(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      function ti(e) {
        window.history.length > 1 ? e.back() : e.push((0, ee.L7)());
      }
      function tn(e) {
        var t, i, n;
        let {
            gizmo: r,
            publishedGizmo: o,
            promoteGizmo: a,
            appealGizmo: l,
            setStep: s,
            showActionsModal: c,
          } = e,
          { 0: d, 1: p } = (0, P.useState)(!1),
          h = (0, X.ec)(X.F_.isBusinessWorkspace),
          f = (0, ec.Z)(),
          { 0: g, 1: x } = (0, P.useState)(
            (0, u.Sg)(r)
              ? h
                ? b.Zz.Workspace
                : b.Zz.Marketplace
              : r.sharingRecipient
          ),
          j = (0, P.useMemo)(
            () =>
              (null == o ? void 0 : o.gizmo.sharing_targets) == null ||
              o.gizmo.sharing_targets.some(
                (e) => e.recipient === g && e.allowed
              ),
            [null == o ? void 0 : o.gizmo.sharing_targets, g]
          ),
          { data: w, isLoading: N } = (0, u.WL)(),
          { 0: T, 1: z } = (0, P.useState)(
            null != o && o.gizmo.display.categories.length > 0
              ? o.gizmo.display.categories[0]
              : void 0
          );
        (0, P.useEffect)(() => {
          z(null == o ? void 0 : o.gizmo.display.categories[0]);
        }, [null == o ? void 0 : o.gizmo.display.categories]);
        let { 0: O, 1: C } = (0, P.useState)(void 0),
          _ = (0, P.useRef)(
            (0, D.throttle)((e, t) => v.U.generateCategory(e, t), 1e3)
          ),
          I =
            null != w && w.is_verified
              ? void 0
              : f.formatMessage(th.displayNameRequiredHint);
        g !== b.Zz.Marketplace || null == I || N || x(b.Zz.Link);
        let S =
            h &&
            !(
              null !== (t = r.sharingTargets) &&
              void 0 !== t &&
              t.some((e) => e.recipient === b.Zz.Link)
            ),
          G = (0, e9.bw)(r, g, T),
          M = G.includes(e9.hs.MissingPublicActionPrivacyPolicyURL),
          Z = r.tools.find(
            (e) => e.type === m.qK.JIT_PLUGIN && !e.metadata.privacy_policy_url
          ),
          L = (0, X.ec)((e) => e.currentWorkspace),
          U = (0, Y.hz)(),
          V = (0, u.Z1)();
        (0, P.useEffect)(() => {
          if (!(null != U && U.includes(H.L0.GizmoStore))) {
            z("other");
            return;
          }
          let e = !0;
          return (
            (async () => {
              try {
                if (null != T) return;
                let t = await _.current(r.name, r.instructions);
                e && null == T && (t ? z(t.id) : C(!0));
              } catch (t) {
                e && null == T && C(!0);
              }
            })(),
            () => {
              e = !1;
            }
          );
        }, [r.instructions, r.name, U, T]);
        let F = null == U ? void 0 : U.includes(H.L0.GizmoStore),
          { value: B } = (0, y.sB)(y.tz.GizmoAppeals);
        return (0, k.jsxs)("div", {
          children: [
            (0, k.jsx)("div", {
              className: "mb-2 text-sm font-medium text-token-text-tertiary",
              children: (0, k.jsx)(R.Z, tt({}, th.publishTo)),
            }),
            (0, k.jsxs)("div", {
              className: "flex flex-col gap-3 text-sm",
              children: [
                (0, k.jsxs)(et.fC, {
                  value: g,
                  onValueChange: (e) => x(e),
                  className: "space-y-2",
                  children: [
                    r.sharingTargets &&
                      r.sharingTargets.map((e, t) =>
                        (0, k.jsx)(
                          A.Xb,
                          {
                            value: e.recipient,
                            disabled:
                              e.recipient === b.Zz.Marketplace && null != I,
                            tooltipText:
                              e.recipient === b.Zz.Marketplace
                                ? (null != I ? I : F)
                                  ? f.formatMessage(
                                      th.publicSharingHintStoreEnabled
                                    )
                                  : f.formatMessage(th.publicSharingHint)
                                : void 0,
                            label: (0, ez.MI)(e.recipient, L, f),
                          },
                          t
                        )
                      ),
                    S &&
                      (0, k.jsxs)(k.Fragment, {
                        children: [
                          (0, k.jsx)(A.Xb, {
                            value: b.Zz.Link,
                            disabled: !0,
                            tooltipText: f.formatMessage(
                              th.workspaceDisabledHint
                            ),
                            label: (0, ez.MI)(b.Zz.Link, L, f),
                          }),
                          (0, k.jsx)(A.Xb, {
                            value: b.Zz.Marketplace,
                            disabled: !0,
                            tooltipText: f.formatMessage(
                              th.workspaceDisabledHint
                            ),
                            label: (0, ez.MI)(b.Zz.Marketplace, L, f),
                          }),
                        ],
                      }),
                  ],
                }),
                M &&
                  (0, k.jsx)("div", {
                    className: "text-xs text-red-500",
                    children: (0, k.jsx)(
                      R.Z,
                      tt(
                        tt({}, th.actionNeedsPrivacyPolicyURL),
                        {},
                        {
                          values: {
                            fixlink: (e) =>
                              (0, k.jsx)("button", {
                                onClick: () => {
                                  c(null == Z ? void 0 : Z.metadata.action_id);
                                },
                                className: "underline",
                                children: e,
                              }),
                          },
                        }
                      )
                    ),
                  }),
                g !== b.Zz.Private &&
                  (0, k.jsx)(e6.QT, {
                    gizmoAvatar: r.profilePictureUrl,
                    gizmoName: r.name,
                    canEdit: !0,
                  }),
                g === b.Zz.Marketplace &&
                  (null == U ? void 0 : U.includes(H.L0.GizmoStore)) &&
                  (O
                    ? (0, k.jsx)("div", {
                        className: "text-xs text-red-500",
                        children: (0, k.jsx)(R.Z, tt({}, th.categoryError)),
                      })
                    : (0, k.jsxs)(k.Fragment, {
                        children: [
                          (0, k.jsxs)("div", {
                            className:
                              "flex items-center justify-between text-sm font-medium text-token-text-tertiary",
                            children: [
                              (0, k.jsx)(R.Z, tt({}, th.categoryLabel)),
                              (0, k.jsx)(e7.u, {
                                label: (0, k.jsx)("span", {
                                  className: "w-36 text-xs",
                                  children: (0, k.jsx)(
                                    R.Z,
                                    tt({}, th.categoryLabelTooltip)
                                  ),
                                }),
                                side: "top",
                                children: (0, k.jsx)(E.VX, {
                                  className: "icon-sm",
                                }),
                              }),
                            ],
                          }),
                          (0, k.jsx)(tp, {
                            category: null != T ? T : "",
                            categories:
                              null !==
                                (i =
                                  null === (n = V.data) || void 0 === n
                                    ? void 0
                                    : n.categories) && void 0 !== i
                                ? i
                                : [],
                            setCategory: z,
                          }),
                        ],
                      })),
                j
                  ? (0, k.jsx)(A.cY, {
                      color: "primary",
                      disabled: G.length > 0,
                      loading: d,
                      onClick: async () => {
                        try {
                          p(!0);
                          let e = await a(g, T);
                          if (null == e) return;
                          1 === e.gizmo.live_version
                            ? es().push((0, u.m_)(e))
                            : s({ type: "published", publishedGizmo: e });
                        } finally {
                          p(!1);
                        }
                      },
                      className: "w-full",
                      children: (0, k.jsx)(R.Z, tt({}, th.privacyConfirm)),
                    })
                  : B
                  ? (0, k.jsxs)(k.Fragment, {
                      children: [
                        (0, k.jsx)("div", {
                          className:
                            "flex items-center justify-between text-sm text-token-text-secondary",
                          children: (0, k.jsx)(
                            R.Z,
                            tt({}, th.appealNeededLabel)
                          ),
                        }),
                        (0, k.jsx)(A.cY, {
                          color: "primary",
                          onClick: async () => {
                            await l(g, T);
                          },
                          className: "w-full",
                          children: (0, k.jsx)(R.Z, tt({}, th.appealButton)),
                        }),
                      ],
                    })
                  : (0, k.jsx)("div", {
                      className:
                        "flex items-center justify-between text-sm text-token-text-secondary",
                      children: (0, k.jsx)(R.Z, tt({}, th.recipientBlocked)),
                    }),
              ],
            }),
          ],
        });
      }
      function tr(e) {
        return "".concat((0, u.m_)(e));
      }
      function to(e) {
        let { publishedGizmo: t } = e,
          i = tr(t);
        return (0, k.jsxs)("div", {
          className: "flex flex-col gap-2",
          children: [
            (0, k.jsx)("div", {
              className: "font-medium",
              children: (0, k.jsx)(R.Z, tt({}, th.publishedTitle)),
            }),
            (0, k.jsxs)("div", {
              className:
                "flex gap-1 rounded bg-token-main-surface-secondary px-2 py-1",
              children: [
                (0, k.jsx)("div", {
                  className: "text-ellipsis break-all line-clamp-1",
                  children: i,
                }),
                (0, k.jsx)("button", {
                  onClick: () => {
                    (0, e5.v)(tr(t));
                  },
                  className:
                    "text-token-text-secondary transition hover:text-token-text-primary",
                  children: (0, k.jsx)(E.dS, { className: "icon-sm" }),
                }),
              ],
            }),
            (0, k.jsx)(A.cY, {
              color: "primary",
              as: "link",
              to: i,
              className: "w-full",
              children: (0, k.jsx)(R.Z, tt({}, th.viewGPT)),
            }),
          ],
        });
      }
      function ta(e) {
        let {
            gizmo: t,
            publishedGizmo: i,
            promoteGizmo: n,
            appealGizmo: r,
            showActionsModal: o,
          } = e,
          { 0: a, 1: l } = (0, P.useState)({ type: "privacy" });
        return (0, k.jsx)("div", {
          className:
            "w-60 rounded-lg border border-token-border-medium bg-token-main-surface-primary p-4 text-sm",
          children:
            "privacy" === a.type
              ? (0, k.jsx)(tn, {
                  gizmo: t,
                  publishedGizmo: i,
                  promoteGizmo: n,
                  appealGizmo: r,
                  setStep: l,
                  showActionsModal: o,
                })
              : (0, k.jsx)(to, { publishedGizmo: a.publishedGizmo }),
        });
      }
      function tl(e) {
        var t;
        let {
            gizmo: i,
            publishedGizmo: n,
            isLoading: r,
            isUploadingProfilePic: o,
            isGeneratingProfilePic: a,
            promoteGizmo: l,
            appealGizmo: s,
            hasUnpublishedChanges: c,
            showActionsModal: d,
          } = e,
          p = null != i ? (0, e9.bw)(i) : [],
          m = (0, ec.Z)();
        (null == i || r) && p.push(e9.hs.Loading),
          o && p.push(e9.hs.UploadingProfilePic),
          a && p.push(e9.hs.GeneratingProfilePic);
        let h = (0, u.Sg)(i);
        return (0, k.jsxs)(e4.fC, {
          modal: !0,
          children: [
            (0, k.jsx)(e4.xz, {
              asChild: !0,
              children: (0, k.jsx)(A.cY, {
                color: "primary",
                className: "cursor-pointer whitespace-nowrap",
                disabled: void 0 === i.id,
                tooltip: p.length > 0 ? p.map(e9.sw).join("\n") : void 0,
                children: (0, k.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    c && !h
                      ? m.formatMessage(th.publishChanges)
                      : m.formatMessage(th.save),
                    (0, k.jsx)(E.ud, {}),
                  ],
                }),
              }),
            }),
            (0, k.jsx)(e4.h_, {
              children: (0, k.jsx)(e4.VY, {
                side: "bottom",
                align: "end",
                sideOffset: 8,
                children: (0, k.jsx)(ta, {
                  gizmo: i,
                  publishedGizmo: n,
                  promoteGizmo: l,
                  appealGizmo: s,
                  showActionsModal: d,
                }),
              }),
            }),
          ],
        });
      }
      function ts(e) {
        let { gizmoEditorData: t, publishedGizmo: i, revertDraft: n } = e,
          r = (0, ec.Z)(),
          { 0: o, 1: a } = (0, P.useState)(!1),
          l = (0, Y.hz)();
        return (null != l && l.includes("debug")) ||
          (null == t ? void 0 : t.id) != null
          ? (0, k.jsxs)(k.Fragment, {
              children: [
                (0, k.jsxs)(Z.fC, {
                  children: [
                    (0, k.jsx)(Z.xz, {
                      asChild: !0,
                      children: (0, k.jsx)(A.cY, {
                        children: (0, k.jsx)(E.Yr, { className: "icon-md" }),
                      }),
                    }),
                    (0, k.jsx)(Z.Uv, {
                      children: (0, k.jsxs)(Z.VY, {
                        className:
                          "popover min-w-[180px] max-w-xs rounded-lg border border-token-border-light bg-token-main-surface-primary shadow-lg",
                        side: "top",
                        align: "end",
                        sideOffset: 6,
                        children: [
                          null != i &&
                            (0, k.jsxs)(A.UA, {
                              onClick: () => {
                                (0, e5.v)(tr(i));
                              },
                              children: [
                                (0, k.jsx)(E.HN, { className: "icon-md" }),
                                (0, k.jsx)(R.Z, tt({}, th.copyLink)),
                              ],
                            }),
                          null != n &&
                            (0, k.jsxs)(A.UA, {
                              onClick: () => {
                                window.confirm(
                                  r.formatMessage(th.revertConfirm)
                                ) && n();
                              },
                              children: [
                                (0, k.jsx)(E.Nt, { className: "icon-md" }),
                                (0, k.jsx)(R.Z, tt({}, th.revertMenuItem)),
                              ],
                            }),
                          (null == l ? void 0 : l.includes("debug")) &&
                            (0, k.jsxs)(A.UA, {
                              onClick: () => {
                                eC.vm.toggleActiveSidebar("debug");
                              },
                              children: [
                                (0, k.jsx)(E.WP, { className: "icon-md" }),
                                "Debug (Internal only)",
                              ],
                            }),
                          (null == t ? void 0 : t.id) != null &&
                            (0, k.jsxs)(A.UA, {
                              color: "danger",
                              onClick: () => {
                                a(!0);
                              },
                              children: [
                                (0, k.jsx)(E.a_, { className: "icon-md" }),
                                (0, k.jsx)(R.Z, tt({}, th.deleteGPT)),
                              ],
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                o &&
                  (0, k.jsx)(e3.b, {
                    gizmoId: t.id,
                    onSuccess: () => ti(es()),
                    onClose: () => {
                      a(!1);
                    },
                  }),
              ],
            })
          : null;
      }
      let tc = N.Z.div(d || (d = (0, f.Z)(["flex items-center gap-1"])));
      function td(e) {
        let { gizmoEditorData: t } = e,
          i = (0, X.ec)((e) => {
            var t;
            return null === (t = e.currentWorkspace) || void 0 === t
              ? void 0
              : t.name;
          });
        switch (t.sharingRecipient) {
          case b.Zz.Private:
            return (0, k.jsxs)(tc, {
              children: [
                (0, k.jsx)(E.LX, { className: "icon-xs" }),
                (0, k.jsx)(R.Z, tt({}, th.onlyMe)),
              ],
            });
          case b.Zz.Link:
            return (0, k.jsxs)(tc, {
              children: [
                (0, k.jsx)(E.HN, { className: "icon-xs" }),
                (0, k.jsx)(R.Z, tt({}, th.anyoneWithLink)),
              ],
            });
          case b.Zz.Workspace:
            return (0, k.jsxs)(tc, {
              children: [(0, k.jsx)(E.oq, { className: "icon-xs" }), i],
            });
          case b.Zz.Marketplace:
            return (0, k.jsxs)(tc, {
              children: [
                (0, k.jsx)(E.hk, { className: "icon-xs" }),
                (0, k.jsx)(R.Z, tt({}, th.public)),
              ],
            });
        }
        return (0, k.jsx)("div", {});
      }
      function tu(e) {
        let { gizmoEditorData: t } = e;
        return (0, k.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [
            null != t.profilePictureUrl
              ? (0, k.jsx)(e2.Z, {
                  isFirstParty: !1,
                  src: t.profilePictureUrl,
                  className: "h-8 w-8",
                })
              : (0, k.jsx)("div", {
                  className:
                    "h-8 w-8 rounded-full border-2 border-dashed border-token-border-medium",
                }),
            (0, k.jsxs)("div", {
              children: [
                (0, k.jsx)("div", {
                  className: "text-sm font-medium",
                  children: t.name || (0, k.jsx)(R.Z, tt({}, th.newGPT)),
                }),
                (0, k.jsx)("div", {
                  className: "text-xs text-token-text-secondary",
                  children: (0, u.Sg)(t)
                    ? (0, k.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          (0, k.jsx)("div", {
                            className:
                              "h-1.5 w-1.5 rounded-full bg-token-text-tertiary",
                          }),
                          (0, k.jsx)(R.Z, tt({}, th.draft)),
                        ],
                      })
                    : (0, k.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          (0, k.jsx)("div", {
                            className:
                              "h-1.5 w-1.5 rounded-full bg-brand-green",
                          }),
                          (0, k.jsx)(R.Z, tt({}, th.published)),
                          " \xb7 ",
                          (0, k.jsx)(td, { gizmoEditorData: t }),
                        ],
                      }),
                }),
              ],
            }),
          ],
        });
      }
      function tp(e) {
        let { category: t, categories: i, setCategory: n } = e;
        return (0, k.jsxs)(e8.fC, {
          value: t,
          onValueChange: (e) => n(e),
          children: [
            (0, k.jsx)(e8.xz, {
              className:
                "flex justify-between rounded-xl bg-gray-50 p-3 font-medium dark:bg-gray-900",
              children: t
                ? (0, k.jsxs)(k.Fragment, {
                    children: [
                      (0, k.jsx)(e8.B4, {}),
                      (0, k.jsx)(e8.JO, { children: (0, k.jsx)(E.ud, {}) }),
                    ],
                  })
                : (0, k.jsx)("div", {
                    className: "flex w-full justify-center",
                    children: (0, k.jsx)(K.Z, {}),
                  }),
            }),
            (0, k.jsx)(e8.h_, {
              children: (0, k.jsx)(e8.VY, {
                className:
                  "h-64 w-[var(--radix-select-trigger-width)] rounded-xl border bg-token-main-surface-primary p-1 py-2 dark:border-gray-600",
                position: "popper",
                sideOffset: 2,
                children: (0, k.jsx)("div", {
                  className: "overflow-y-auto",
                  children: i.map((e) =>
                    (0, k.jsxs)(
                      e8.ck,
                      {
                        className:
                          "flex w-full cursor-pointer justify-between rounded-lg p-2 pl-4 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700",
                        value: e.id,
                        children: [
                          (0, k.jsx)(e8.eT, { children: e.title }),
                          (0, k.jsx)(e8.wU, {
                            className: "text-green-600",
                            children: (0, k.jsx)(E.oS, {}),
                          }),
                        ],
                      },
                      e.id
                    )
                  ),
                }),
              }),
            }),
          ],
        });
      }
      function tm(e) {
        let {
          gizmoEditorData: t,
          isLoading: i,
          isUploadingProfilePic: n,
          isGeneratingProfilePic: r,
          publishedGizmo: o,
          promoteGizmo: a,
          appealGizmo: l,
          revertDraft: s,
          draftMessage: c,
          className: d,
          hasUnpublishedChanges: u,
          showActionsModal: p,
        } = e;
        return (0, k.jsxs)("div", {
          className: (0, ea.default)(
            "relative flex h-14 w-full items-center justify-between gap-2 border-b border-token-border-medium px-3",
            d
          ),
          children: [
            (0, k.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, k.jsx)("a", {
                  className: "cursor-pointer text-token-text-primary",
                  onClick: () => ti(es()),
                  children: (0, k.jsx)(E.L7, { className: "icon-lg" }),
                }),
                (0, k.jsx)(tu, { gizmoEditorData: t }),
              ],
            }),
            (0, k.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                c,
                (0, k.jsx)(ts, {
                  gizmoEditorData: t,
                  publishedGizmo: o,
                  revertDraft: s,
                }),
                (0, k.jsx)(tl, {
                  gizmo: t,
                  publishedGizmo: o,
                  isLoading: i,
                  isUploadingProfilePic: n,
                  isGeneratingProfilePic: r,
                  promoteGizmo: a,
                  appealGizmo: l,
                  hasUnpublishedChanges: u,
                  showActionsModal: p,
                }),
              ],
            }),
          ],
        });
      }
      let th = (0, eg.vU)({
        privacyConfirm: {
          id: "gizmo.confirmPublish",
          defaultMessage: "Confirm",
        },
        recipientBlocked: {
          id: "gizmo.recipientBlocked",
          defaultMessage:
            "Because this GPT violates our policies, you will have to submit an appeal for it to be sharable.",
        },
        appealNeededLabel: {
          id: "gizmo.appealNeededLabel",
          defaultMessage:
            "Because this GPT previously may have violated our policies, you will have to submit an appeal to make it available at this level.",
        },
        appealButton: { id: "gizmo.appealButton", defaultMessage: "Appeal" },
        workspaceDisabledHint: {
          id: "gizmo.workspaceDisabledHint",
          defaultMessage:
            "Your workspace administrator has disabled this setting",
        },
        publicSharingHint: {
          id: "gizmo.publicSharingHint",
          defaultMessage: "This GPT may appear in the GPT Store (coming soon)",
        },
        publicSharingHintStoreEnabled: {
          id: "gizmo.publicSharingHintStoreEnabled",
          defaultMessage: "Your GPT will appear in the Explore GPTs page",
        },
        displayNameRequiredHint: {
          id: "gizmo.displayNameRequiredHint",
          defaultMessage:
            "To publish your GPTs to the Explore GPTs page, set up your builder profile.",
        },
        save: { id: "gizmo.save", defaultMessage: "Save" },
        publishChanges: {
          id: "gizmo.publishChanges",
          defaultMessage: "Update",
        },
        deleteGPT: { id: "gizmo.delete", defaultMessage: "Delete GPT" },
        actionNeedsPrivacyPolicyURL: {
          id: "gizmo.actionNeedsPrivacyPolicyURL",
          defaultMessage:
            "Public actions require valid privacy policy URLs. Click <fixlink>here</fixlink> to update.",
        },
        publishTo: { id: "gizmo.publishTo", defaultMessage: "Publish to" },
        publishedTitle: {
          id: "gizmo.publishedTitle",
          defaultMessage: "Published!",
        },
        viewGPT: { id: "gizmo.viewGPT", defaultMessage: "View GPT" },
        revertMenuItem: {
          id: "gizmo.revertMenuItem",
          defaultMessage: "Revert...",
        },
        onlyMe: { id: "gizmo.onlyMe", defaultMessage: "Only me" },
        anyoneWithLink: {
          id: "gizmo.anyoneWithLink",
          defaultMessage: "Anyone with a link",
        },
        public: { id: "gizmo.public", defaultMessage: "Everyone" },
        newGPT: { id: "gizmo.newGPT", defaultMessage: "New GPT" },
        draft: { id: "gizmo.draft", defaultMessage: "Draft" },
        published: { id: "gizmo.published", defaultMessage: "Published" },
        revertConfirm: {
          id: "gizmo.revertConfirm",
          defaultMessage:
            "Are you sure you want to revert to the last saved version?",
        },
        copyLink: { id: "gizmo.copyLink", defaultMessage: "Copy link" },
        categoryLabel: {
          id: "gizmo.categoryLabel",
          defaultMessage: "Category",
        },
        categoryLabelTooltip: {
          id: "gizmo.categoryLabelTooltip",
          defaultMessage:
            "Your GPT may appear in this category on the Explore page",
        },
        categoryError: {
          id: "gizmo.categoryError",
          defaultMessage: "Error generating category",
        },
      });
      function tf(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function tg(e) {
        let { upsertDraftError: t } = e,
          i = (function (e, t) {
            let i = e.response,
              n = (0, Q.Ot)(e);
            if (!Array.isArray(i)) return n;
            let r = (0, D.compact)(
              i.map((e) => {
                if ("value_error.any_str.max_length" === e.type)
                  switch (e.loc[1]) {
                    case "display":
                      switch (e.loc[2]) {
                        case "name":
                          return t.formatMessage(ey.sY.nameTooLong, {
                            length: e.ctx.limit_value,
                          });
                        case "description":
                          return t.formatMessage(ey.sY.descriptionTooLong, {
                            length: e.ctx.limit_value,
                          });
                      }
                      break;
                    case "instructions":
                      return t.formatMessage(ey.sY.instructionsTooLong, {
                        length: e.ctx.limit_value,
                      });
                  }
                if ("string" == typeof e.msg) return e.msg;
              })
            );
            return r.length > 0 ? r.join("\n") : n;
          })(t, (0, ec.Z)());
        return (0, k.jsxs)("div", {
          className: "flex items-center gap-2 text-red-500",
          children: [
            (0, k.jsx)("div", {
              children: (0, k.jsx)(
                R.Z,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? tf(Object(i), !0).forEach(function (t) {
                          (0, p.Z)(e, t, i[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(i)
                        )
                      : tf(Object(i)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(i, t)
                          );
                        });
                  }
                  return e;
                })({}, tv.errorSavingDraft)
              ),
            }),
            null != i &&
              (0, k.jsx)(e7.u, {
                label: i,
                children: (0, k.jsx)(U.H33, { className: "icon-sm" }),
              }),
          ],
        });
      }
      function tx(e) {
        let {
          isSavingDraft: t,
          hasUnpublishedChanges: i,
          upsertDraftError: n,
          className: r,
        } = e;
        return n instanceof Q.Q0
          ? (0, k.jsx)(tg, { upsertDraftError: n })
          : i
          ? (0, k.jsxs)("div", {
              className: (0, ea.default)("flex items-center gap-2", r),
              children: [
                (0, k.jsx)("span", {
                  className: "text-token-text-secondary",
                  children: "Unpublished changes",
                }),
                (0, k.jsx)("div", {
                  className: "w-4 text-token-text-tertiary",
                  children: t && (0, k.jsx)(K.Z, {}),
                }),
              ],
            })
          : null;
      }
      let tv = (0, eg.vU)({
        errorSavingDraft: {
          id: "gizmo.errorSavingDraft",
          defaultMessage: "Error saving draft",
        },
      });
      var tb = i(87106),
        ty = i(13038),
        tj = i(45072);
      function tw(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function tP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tw(Object(i), !0).forEach(function (t) {
                (0, p.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : tw(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      async function tN(e) {
        let t;
        for (let i of e)
          if (
            "gizmo_editor.generate_profile_pic" === i.author.name &&
            "multimodal_text" === i.content.content_type
          )
            for (let e of i.content.parts)
              "object" == typeof e && "asset_pointer" in e && (t = e);
        if (null != t) {
          let e = (0, tb.Iy)(t.asset_pointer),
            i = await ty.Z.getFileDownloadLink(e);
          if (i.status === m.KF.Success)
            return { id: e, permalink: i.download_url };
        }
      }
      async function tk(e, t, i) {
        var n, r;
        let o = (function (e, t) {
            let i = J.tQ.getThreadCurrentLeafId(e),
              n = J.tQ.getTree(e),
              r = [],
              o = n.getNodeByIdOrMessageId(i);
            for (; null != o && (null == t || o.id !== t); )
              r.unshift(o.message),
                (o =
                  "" !== o.parentId
                    ? n.getNodeByIdOrMessageId(o.parentId)
                    : void 0);
            return r;
          })(t, i),
          a = o
            .filter((e) => "gizmo_editor.update_behavior" === e.recipient)
            .flatMap((e) =>
              "text" === e.content.content_type
                ? e.content.parts
                : "code" === e.content.content_type
                ? [e.content.text]
                : []
            )
            .map((e) => JSON.parse(e))
            .reduce((e, t) => tP(tP({}, e), t), {}),
          l = await tN(o);
        if ((0, D.isEmpty)(a) && null == l) return;
        let {
          name: s,
          context: c,
          description: d,
          profile_pic_file_id: u,
          prompt_starters: p,
        } = a;
        if (null != u)
          try {
            let t = await ty.Z.getFileDownloadLink(u, e.id);
            t.status === m.KF.Success &&
              (l = { id: u, permalink: t.download_url });
          } catch (e) {
            console.error(
              "Error while retrieving profile pic in update: ".concat(e)
            ),
              W.m.warning(
                "Something went wrong updating your GPT's profile picture.",
                { duration: 3 }
              );
          }
        let h = {
          name: "string" == typeof s ? s : void 0,
          description: "string" == typeof d ? d : void 0,
          instructions: "string" == typeof c ? c : void 0,
          promptStarters: Array.isArray(p) ? p : void 0,
          profilePictureId: null === (n = l) || void 0 === n ? void 0 : n.id,
          profilePictureUrl:
            null === (r = l) || void 0 === r ? void 0 : r.permalink,
        };
        return (0, D.pickBy)(h, (e) => null != e);
      }
      function tT(e, t, i, n) {
        var r, o, a, l, s, c, d, u, p, m, h;
        let f = i.current,
          g = n.current;
        if ((0, D.isEqual)(f, g)) return;
        let x = {};
        f.name !== (null == g ? void 0 : g.name) && (x.name = f.name),
          (null !== (r = f.description) && void 0 !== r ? r : "") !==
            (null !== (o = null == g ? void 0 : g.description) && void 0 !== o
              ? o
              : "") &&
            (x.description =
              null !== (m = f.description) && void 0 !== m ? m : ""),
          f.instructions !==
            (null !== (a = null == g ? void 0 : g.instructions) && void 0 !== a
              ? a
              : "") &&
            (x.context =
              null !== (h = f.instructions) && void 0 !== h ? h : "");
        let v = new Set(
            null !==
              (l =
                null == g || null === (s = g.files) || void 0 === s
                  ? void 0
                  : s.map((e) => e.file_id)) && void 0 !== l
              ? l
              : []
          ),
          b = new Set(
            null !==
              (c =
                null === (d = f.files) || void 0 === d
                  ? void 0
                  : d.map((e) => e.file_id)) && void 0 !== c
              ? c
              : []
          ),
          y = (null !== (u = f.files) && void 0 !== u ? u : []).filter(
            (e) => !v.has(e.file_id)
          ),
          j = (
            null !== (p = null == g ? void 0 : g.files) && void 0 !== p ? p : []
          ).filter((e) => !b.has(e.file_id));
        if ((0, D.isEmpty)(x) && 0 === y.length && 0 === j.length) return;
        let w = [];
        if (!(0, D.isEmpty)(x)) {
          let e =
            "Explicitly update the GPT's behavior to the following exact fields:\n\n    ".concat(
              JSON.stringify(x, null, 2),
              '\n\n    "Do not call update_behavior yet. Instead, use these updated fields as the GPT\'s current behavior, and in the next call to update_behavior, incorporate these changes."\n    '
            );
          w.push(tj.Cv.getTextAsMessage(e, eu.uU.System));
        }
        j.length > 0 &&
          w.push(
            tj.Cv.getTextAsMessage(
              "The user has removed the following files from the GPT. You can no longer reference these files: ".concat(
                j.map((e) => e.file_id).join(", ")
              ),
              eu.uU.System
            )
          ),
          y.length > 0 &&
            w.push(
              tj.Cv.getTextAsMessage(
                "The user is adding these files to the GPT. The GPT may reference these files. The file IDs are: ".concat(
                  y.map((e) => e.file_id).join(", ")
                ),
                eu.uU.System,
                {
                  attachments: y.map((e) => ({
                    id: e.file_id,
                    name: e.name,
                    size: e.size,
                  })),
                }
              )
            ),
          w.length > 0 &&
            J.tQ.updateTree(e, (e) => {
              let i = e.getNodeByIdOrMessageId(t).parentId;
              for (let n of w) {
                let r = (0, eA.Z)();
                e.insertNodeBefore(t, {
                  id: r,
                  children: [],
                  parentId: i,
                  message: n,
                  metadata: { isClientCreatedSystemMessage: !0 },
                }),
                  (i = r);
              }
            });
      }
      var tz = i(21643),
        tO = i(47934);
      function tC(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function t_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tC(Object(i), !0).forEach(function (t) {
                (0, p.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : tC(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      let tI = P.memo(function (e) {
        let {
            gizmoEditorData: t,
            updateGizmo: i,
            clientThreadId: n,
            completionCallbackResponse: r,
            gizmoEditorDataRef: o,
            magicMakerBehaviorOverrides: a,
            magicMakerConversationGizmoEditorDataRef: l,
            requireGizmoId: s,
          } = e,
          c = (0, P.useMemo)(
            () => ({
              gizmoEditorData: t,
              gizmoId: t.id,
              mode: "magic",
              behaviorOverrides: a,
              getGizmoId: s,
            }),
            [s, t, a]
          ),
          d = (0, tO.gF)((e) =>
            e.files.filter((e) => e.status === tz.X.Ready && null != e.gizmoId)
          ),
          u = (0, P.useCallback)(
            (e, t) => {
              !(function (e, t, i) {
                if (0 === i.length) return;
                let n = (0, eA.Z)(),
                  r =
                    "The user is uploading files in their next message. If you need to reference these in calls to update_behavior, you will use the following File ID(s), in order: ".concat(
                      i.map((e) => '"'.concat(e.fileId, '"')).join(", ")
                    );
                J.tQ.updateTree(e, (e) => {
                  let i = e.getNodeByIdOrMessageId(t).parentId;
                  e.insertNodeBefore(t, {
                    id: n,
                    children: [],
                    parentId: i,
                    message: tj.Cv.getTextAsMessage(r, eu.uU.System),
                    metadata: { isClientCreatedSystemMessage: !0 },
                  });
                });
              })(e, t, d),
                tT(e, t, o, l),
                (function (e, t) {
                  let i =
                      "Remember, you should be calling either update_behavior or generate_profile_pic after most messages from the user. Your personality should be neutral and separate from the GPT you are creating.",
                    n = J.tQ.getThreadCurrentLeafId(e),
                    r = J.tQ.getTree(e),
                    o = r.getNodeByIdOrMessageId(n);
                  for (; null != o && o.message.author.role !== eu.uU.User; ) {
                    if (
                      "text" === o.message.content.content_type &&
                      o.message.content.parts[0] === i
                    )
                      return;
                    o =
                      "" !== o.parentId
                        ? r.getNodeByIdOrMessageId(o.parentId)
                        : void 0;
                  }
                  J.tQ.updateTree(e, (e) => {
                    let n = e.getNodeByIdOrMessageId(t).parentId;
                    e.insertNodeBefore(t, {
                      id: (0, eA.Z)(),
                      children: [],
                      parentId: n,
                      message: tj.Cv.getTextAsMessage(i, eu.uU.System, {
                        exclude_after_next_user_message: !0,
                      }),
                      metadata: { isClientCreatedSystemMessage: !0 },
                    });
                  });
                })(e, t),
                i((e) => {
                  var t;
                  return t_(
                    t_({}, e),
                    {},
                    {
                      files: [
                        ...(null !== (t = e.files) && void 0 !== t ? t : []),
                        ...(0, D.compact)(
                          d.map((e) => {
                            var t;
                            return (
                              null != e.fileId && {
                                file_id: e.fileId,
                                name: e.file.name,
                                size: e.file.size,
                                type: e.file.type,
                                last_modified: e.file.lastModified,
                                file_size_tokens:
                                  null === (t = e.fileSpec) || void 0 === t
                                    ? void 0
                                    : t.fileTokenSize,
                              }
                            );
                          })
                        ),
                      ],
                    }
                  );
                }),
                (l.current = (0, D.cloneDeep)(o.current));
            },
            [o, l, d, i]
          ),
          p = (0, eC.tN)((e) => e.activeSidebar);
        return (0,
        k.jsx)(eL.D.Provider, { value: c, children: (0, k.jsxs)("div", { className: "relative flex h-full grow overflow-auto", children: [(0, k.jsx)("div", { className: "grow", children: (0, k.jsx)(ek.Z, { clientThreadId: n, onCompletionFinished: r, preRequestCompletion: u, hideHeader: !0, prependThreadChildren: (0, k.jsx)("div", { className: "h-8" }) }) }), "debug" === p && (0, k.jsx)(eO.fv, { clientThreadId: n, slideOver: !1, onClose: () => eC.vm.toggleActiveSidebar("debug"), isOpen: !0 })] }) });
      });
      function tS(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function tG(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tS(Object(i), !0).forEach(function (t) {
                (0, p.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : tS(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      var tM =
        (((l = tM || {}).MAGIC_MAKER = "magic"),
        (l.ADVANCED = "advanced"),
        (l.PREVIEW = "preview"),
        l);
      function tE(e) {
        let { value: t, label: i } = e;
        return (0, k.jsx)(et.ck, {
          value: t,
          className:
            "text-md w-1/3 flex-grow rounded-lg border-token-border-light p-1.5 font-medium text-token-text-tertiary transition hover:text-token-text-primary radix-state-checked:border radix-state-checked:bg-token-main-surface-primary radix-state-checked:text-token-text-primary radix-state-checked:shadow-[0_0_2px_rgba(0,0,0,.03)] md:w-1/2",
          children: i,
        });
      }
      function tA(e) {
        let { className: t, editorTab: i, setEditorTab: n } = e;
        return (0, k.jsxs)(et.fC, {
          className: (0, ea.default)(
            "flex w-full overflow-hidden rounded-xl bg-token-main-surface-secondary p-1.5 md:w-1/2",
            t
          ),
          value: i,
          onValueChange: (e) => {
            n(e);
          },
          children: [
            (0, k.jsx)(tE, { value: tM.MAGIC_MAKER, label: "Create" }),
            (0, k.jsx)(tE, { value: tM.ADVANCED, label: "Configure" }),
            (0, k.jsx)("div", {
              className: "flex w-1/3 md:hidden",
              children: (0, k.jsx)(tE, { value: tM.PREVIEW, label: "Preview" }),
            }),
          ],
        });
      }
      let tZ = {
          id: void 0,
          instructions: "",
          name: "",
          description: "",
          profilePictureId: void 0,
          profilePictureUrl: void 0,
          promptStarters: [],
          tools: [{ type: m.qK.DALLE }],
          files: [],
          trainingDisabled: !1,
          liveVersion: 0,
        },
        tL = tG(
          tG({}, tZ),
          {},
          { tools: [...tZ.tools, { type: m.qK.BROWSER }] }
        );
      function tD(e) {
        var t, i, n, r, o, a;
        return {
          id: e.gizmo.id,
          instructions: e.gizmo.instructions,
          name: e.gizmo.display.name,
          description:
            null !== (t = e.gizmo.display.description) && void 0 !== t ? t : "",
          profilePictureId:
            null !== (i = e.gizmo.display.profile_pic_id) && void 0 !== i
              ? i
              : void 0,
          profilePictureUrl:
            null !== (n = e.gizmo.display.profile_picture_url) && void 0 !== n
              ? n
              : void 0,
          promptStarters:
            null !== (r = e.gizmo.display.prompt_starters) && void 0 !== r
              ? r
              : [],
          tools: e.tools,
          files: e.files,
          trainingDisabled:
            null !== (o = e.gizmo.training_disabled) && void 0 !== o && o,
          sharingRecipient: e.gizmo.share_recipient,
          sharingTargets: e.gizmo.sharing_targets,
          liveVersion:
            null !== (a = e.gizmo.live_version) && void 0 !== a ? a : 0,
        };
      }
      let tU = (e) => {
        let { gizmo: t, onNewGizmoId: i } = e,
          n = (0, h.C)(H.L0.BrowseAvailable),
          r = (0, ec.Z)(),
          o = (0, P.useRef)(null != t ? tD(t) : n ? tL : tZ),
          a = (0, P.useRef)(t),
          l = (0, P.useRef)(o.current),
          { 0: s, 1: c } = (0, P.useState)(() => o.current),
          { 0: d, 1: p } = (0, P.useState)(() => (0, J.OX)()),
          { 0: f } = (0, P.useState)(() => ({
            context_message: (function (e) {
              var t, i, n;
              let r = new Set();
              for (let t of e.tools) r.add(t.type);
              let o = null !== (t = e.name) && void 0 !== t ? t : "",
                a = null !== (i = e.description) && void 0 !== i ? i : "",
                l = null !== (n = e.instructions) && void 0 !== n ? n : "",
                s = Array.from(r).join(","),
                c = "" === o && "" === a && "" === l,
                d = null != e.profilePictureUrl;
              return c
                ? "The GPT you are about to has the following abilities: ".concat(
                    s,
                    "."
                  )
                : "This is the GPT's current set of fields:\n\nname: "
                    .concat(o, "\n\ndescription: ")
                    .concat(a, "\n\ncontext: ")
                    .concat(l, "\n\nabilities: ")
                    .concat(s, "\n\n")
                    .concat(
                      d
                        ? "The GPT has a profile picture."
                        : "This GPT does not have a profile picture. You must generate a profile picture when you next update your behavior.",
                      "\n"
                    );
            })(o.current),
            model_slug: "unused",
            enabled_tools: [
              { tool_id: null != t ? "gizmo_editor" : "gizmo_creator" },
            ],
          }));
        !(function (e, t, i) {
          (0, J.ax)(e, {
            kind: eu.OL.GizmoMagicCreate,
            gizmo_id: t.id,
            behavior_overrides: i,
          }),
            (0, P.useEffect)(() => {
              J.tQ.updateConversationMode(e, {
                kind: eu.OL.GizmoMagicCreate,
                gizmo_id: t.id,
                behavior_overrides: i,
              });
            }, [e, t.id, i]);
          let { 0: n } = (0, P.useState)(() => {
            let e = null == t.id,
              i =
                null != t.id &&
                "" !== t.name &&
                null != t.description &&
                "" !== t.instructions &&
                null != t.profilePictureUrl;
            return e
              ? 'Hi! I\'ll help you build a new GPT. You can say something like, "make a creative who helps generate visuals for new products" or "make a software engineer who helps format my code."\n\nWhat would you like to make?'
              : i
              ? "Welcome back! Is there anything ".concat(
                  t.name,
                  " should be doing better? Anything you'd like to change?"
                )
              : "You're back! Let's continue where we left off...";
          });
          (0, P.useEffect)(() => {
            let t = J.tQ.getTree(e);
            if (
              t.findNode((e) => {
                var t;
                return (
                  e.message.author.role === eu.uU.User ||
                  (null === (t = e.metadata) || void 0 === t
                    ? void 0
                    : t.isClientCreatedSystemMessage) === !0
                );
              }) ||
              (J.tQ.deleteNodesByFilter(e, (e) => {
                var t;
                return (
                  (null === (t = e.metadata) || void 0 === t
                    ? void 0
                    : t.isPlaceholderTemplateAssistantWelcomeMessage) === !0
                );
              }),
              null == n || 0 === n.length)
            )
              return;
            let i = J.tQ.getThreadCurrentLeafId(e);
            if (!t.hasNodeOrMessageId(i)) return;
            let r = (0, eA.Z)();
            J.tQ.updateTree(e, (e) => {
              e.addNode(r, n, i, eu.uU.Assistant, {
                isPlaceholderTemplateAssistantWelcomeMessage: !0,
              });
            }),
              J.tQ.setThreadCurrentLeafId(e, r);
          }, [e, n]);
          let r = (0, J.UL)(e);
          (0, P.useEffect)(() => {
            (0, J.Zz)(e) &&
              J.iN.hasThread(e) &&
              r.lastModelUsed !== ew.Mw &&
              J.tQ.updateInitialThreadDataForNewThread(e, ew.Mw, []);
          }, [e, r, r.lastModelUsed]);
        })(d, l.current, f);
        let { data: g } = (0, u.kg)(o.current.id),
          x = (0, u.N_)(),
          { isPending: v, error: y } = x,
          j = (0, u.ZJ)(),
          w = (0, P.useMemo)(() => {
            var e, t, i, n, r, o;
            return (
              null != g &&
              (!(
                s.name === g.gizmo.display.name &&
                s.description === g.gizmo.display.description &&
                s.instructions === g.gizmo.instructions &&
                ((r = s.tools),
                (o = g.tools),
                r.length === o.length &&
                  r.every((e) => o.some((t) => t.type === e.type))) &&
                (0, D.isEqual)(
                  null !==
                    (e =
                      null === (t = s.files) || void 0 === t
                        ? void 0
                        : t.map((e) => e.file_id)) && void 0 !== e
                    ? e
                    : [],
                  null !==
                    (i =
                      null === (n = g.files) || void 0 === n
                        ? void 0
                        : n.map((e) => e.file_id)) && void 0 !== i
                    ? i
                    : []
                )
              ) ||
                s.profilePictureUrl != g.gizmo.display.profile_picture_url ||
                s.profilePictureId != g.gizmo.display.profile_pic_id)
            );
          }, [s, g]),
          N = async () => {
            let e = o.current;
            try {
              let t = await x.mutateAsync({ editorData: e, gizmoId: e.id });
              if (((a.current = t), null == o.current.id)) {
                let e = t.gizmo.id;
                (o.current = tG(
                  tG({}, o.current),
                  {},
                  { id: e, sharingTargets: t.gizmo.sharing_targets }
                )),
                  c(o.current),
                  null == i || i(e);
              }
              for (let e of t.tools.filter((e) => e.type === m.qK.JIT_PLUGIN)) {
                let t = o.current.tools.find(
                  (t) =>
                    t.type === m.qK.JIT_PLUGIN &&
                    t.metadata.domain === e.metadata.domain
                );
                t &&
                  t.metadata.action_id !== e.metadata.action_id &&
                  ((t.metadata.action_id = e.metadata.action_id), c(o.current));
              }
              return t;
            } catch (i) {
              var t;
              let e =
                null !== (t = (0, Q.Ot)(i)) && void 0 !== t
                  ? t
                  : r.formatMessage(tv.errorSavingDraft);
              throw (W.m.warning(e, { duration: 2 }), i);
            }
          },
          T = (0, P.useRef)(),
          z = async () =>
            null != o.current.id
              ? o.current.id
              : (null == T.current &&
                  (T.current = N()
                    .then((e) => e.gizmo.id)
                    .catch((e) => {
                      throw ((T.current = void 0), e);
                    })),
                T.current),
          { 0: _ } = (0, P.useState)(() =>
            (0, D.debounce)(() => N(), 2e3, { trailing: !0 })
          );
        function I(e) {
          let t =
            "function" == typeof e ? e(o.current) : (0, e9.x$)(o.current, e);
          (0, D.isEqual)(t, o.current) || ((o.current = t), c(o.current), _());
        }
        let S = (0, P.useRef)(),
          G = async (e) => {
            if (null == e) {
              $(!1);
              return;
            }
            try {
              let t = await tk(o.current, e, S.current);
              null != t && (I(t), (l.current = (0, D.cloneDeep)(o.current)));
            } catch (e) {
              console.error(e),
                W.m.warning("Something went wrong generating your GPT", {
                  duration: 3,
                });
            } finally {
              (S.current = J.tQ.getThreadCurrentLeafId(e)), $(!1);
            }
          },
          E = (function (e, t, i) {
            var n;
            J.tQ.initThread(e, {
              kind: eu.OL.GizmoMagicCreate,
              gizmo_id: void 0,
              behavior_overrides: i,
            });
            let r = (0, eZ.Z)(e, void 0, t, []),
              o = (0, Y.hz)(),
              a =
                null === (n = (0, Y.t)()) || void 0 === n ? void 0 : n.isFree();
            return async (t, n, l) => {
              if (0 === l.length) return;
              let s = J.tQ.getThreadCurrentLeafId(e);
              for (let t of l) {
                let i = (0, eA.Z)();
                J.tQ.updateTree(e, (e) => {
                  e.addNodeToEnd(s, {
                    id: i,
                    children: [],
                    parentId: s,
                    message: tj.Cv.getTextAsMessage(t, eu.uU.System),
                    metadata: { isClientCreatedSystemMessage: !0 },
                  });
                }),
                  J.tQ.setThreadCurrentLeafId(e, i),
                  (s = i);
              }
              let c = s;
              tT(e, c, t, n);
              let d = {
                  conversationMode: {
                    kind: eu.OL.GizmoMagicCreate,
                    gizmo_id: t.current.id,
                    behavior_overrides: i,
                  },
                },
                u = await (0, eG.r)(a, o, eu.OL.GizmoMagicCreate),
                p = await eS.ZP.getEnforcementToken(u),
                m = await eM.Z.getEnforcementToken(u);
              r({
                model: ew.Mw,
                completionType: eu.Os.Next,
                parentNodeId: c,
                metadata: {},
                focusOnNewCompletion: !0,
                arkoseToken: p,
                turnstileToken: m,
                preflightTime: 0,
                completionMetadata: d,
              });
            };
          })(d, G, f),
          { 0: A, 1: Z } = (0, P.useState)(void 0);
        (0, P.useEffect)(() => {
          Z(
            (function (e) {
              var t;
              if (!e) return;
              let i =
                  (null === (t = e.gizmo.appeal_info) || void 0 === t
                    ? void 0
                    : t.state.kind) === "appeal_sent",
                n = (function (e) {
                  let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [],
                    i = new Set(
                      t.filter((e) => e.allowed).map((e) => e.recipient)
                    );
                  if (!e || i.has(e)) return C.None;
                  let n = i.has(b.Zz.Private) || i.has(b.Zz.Workspace),
                    r = i.has(b.Zz.Link) || i.has(b.Zz.Marketplace);
                  return e === b.Zz.Marketplace && r
                    ? C.RemovedFromMarketplace
                    : !r && n
                    ? C.RemovedFromPublic
                    : C.RemovedFromPrivate;
                })(e.gizmo.share_recipient, e.gizmo.sharing_targets);
              return {
                sharingRecipient: e.gizmo.share_recipient,
                categories: e.gizmo.categories,
                gizmoId: e.gizmo.id,
                moderationType: n,
                sharingTargets: e.gizmo.sharing_targets,
                showModal: i
                  ? O.AppealSent
                  : n !== C.None
                  ? O.AppealAvailable
                  : O.None,
              };
            })(t)
          );
        }, [null == t ? void 0 : t.gizmo.id]);
        let L = async (e, t) => {
            let i = (0, e9.bw)(o.current, e, t);
            if (i.length > 0) {
              W.m.warning(
                "Could not save GPT:\n\n".concat(
                  i.map((e) => "- ".concat((0, e9.sw)(e))).join("\n")
                ),
                { duration: 3 }
              );
              return;
            }
            let n = await N(),
              r = n.gizmo.id;
            try {
              return (
                ei.A.logEvent(en.M.promoteGizmo, {
                  gizmo_id: n.gizmo.id,
                  sharing_recipient: e,
                  editor_tab: R,
                }),
                await j.mutateAsync(
                  {
                    gizmoId: n.gizmo.id,
                    data: {
                      sharingRecipient: e,
                      categories: null == t ? void 0 : [t],
                    },
                  },
                  {
                    onSuccess(e) {
                      eo.E.setQueryData((0, u.Vw)(r).queryKey, e),
                        eo.E.invalidateQueries({ queryKey: ["gizmos"] }),
                        eo.E.invalidateQueries({
                          queryKey: ["gizmo", { gizmoId: r }],
                        }),
                        eo.E.invalidateQueries({
                          queryKey: [
                            "gizmo",
                            "userActionSettings",
                            { gizmoId: r },
                          ],
                        });
                    },
                  }
                )
              );
            } catch (t) {
              t instanceof b.DC
                ? Z({
                    gizmoId: r,
                    sharingRecipient: e,
                    moderationType: C.PublishBlocked,
                    sharingTargets: t.response.sharing_targets,
                    showModal: O.AppealAvailable,
                  })
                : (console.error(t),
                  W.m.warning("Error saving GPT", { duration: 2 }));
            }
          },
          U = x.isPending || j.isPending,
          { 0: R, 1: V } = (0, P.useState)(() => {
            let e = er.m.getItem(er.F.GizmoEditorTab);
            return Object.values(tM).includes(e) ? e : tM.MAGIC_MAKER;
          }),
          { width: B } = (function () {
            let { 0: e, 1: t } = (0, P.useState)({ width: null, height: null });
            return (
              (0, P.useLayoutEffect)(() => {
                let e = () => {
                  t({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  e(),
                  window.addEventListener("resize", e),
                  () => {
                    window.removeEventListener("resize", e);
                  }
                );
              }, []),
              e
            );
          })();
        (0, P.useEffect)(() => {
          null != B && B >= 768 && R === tM.PREVIEW && V(tM.MAGIC_MAKER);
        }, [B, R]);
        let { 0: q, 1: K } = (0, P.useState)(!1),
          { 0: X, 1: $ } = (0, P.useState)(!1),
          { 0: ee, 1: et } = (0, P.useState)(void 0);
        return (0, k.jsxs)("div", {
          className: "flex h-screen w-full flex-col items-center",
          children: [
            (0, k.jsx)(tm, {
              gizmoEditorData: s,
              isLoading: U,
              hasUnpublishedChanges: w,
              isUploadingProfilePic: q,
              isGeneratingProfilePic: X,
              publishedGizmo: g,
              promoteGizmo: async (e, t) => {
                let i = await L(e, t);
                return (
                  (o.current = tG(
                    tG({}, o.current),
                    {},
                    { sharingRecipient: e }
                  )),
                  c(o.current),
                  er.m.setItem(er.F.GizmoEditorTab, R),
                  i
                );
              },
              appealGizmo: async (e, t) => {
                null != A &&
                  Z(
                    tG(
                      tG({}, A),
                      {},
                      {
                        sharingRecipient: e,
                        categories: null == t ? void 0 : [t],
                        showModal: O.AppealAvailable,
                      }
                    )
                  );
              },
              revertDraft:
                null != g && w
                  ? () => {
                      let e = eo.E.getQueryData(
                        (0, u.Vw)(o.current.id).queryKey
                      );
                      if (null != e) {
                        let t = tD(e);
                        (o.current = t), c(t), N();
                      }
                    }
                  : void 0,
              draftMessage: (0, k.jsx)(tx, {
                hasUnpublishedChanges: w,
                isSavingDraft: v,
                upsertDraftError: y,
                className: "text-sm",
              }),
              showActionsModal: (e) => {
                et(e);
              },
              className: "flex-shrink-0",
            }),
            A &&
              (0, k.jsx)(M, {
                appealState: A,
                onAppealClose: () =>
                  Z(tG(tG({}, A), {}, { showModal: O.None })),
                onAppealSubmitted: () =>
                  Z(tG(tG({}, A), {}, { showModal: O.AppealSent })),
              }),
            (0, k.jsxs)("div", {
              className: "relative flex w-full grow overflow-hidden",
              children: [
                (0, k.jsx)("div", {
                  className: "flex w-full justify-center md:w-1/2",
                  children: (0, k.jsx)("div", {
                    className: "h-full grow overflow-hidden",
                    children:
                      void 0 !== ee
                        ? (0, k.jsx)(e1, {
                            currentlyEditingActionDomain: ee,
                            gizmoEditorData: s,
                            updateGizmo: I,
                            onClose: () => {
                              et(void 0);
                            },
                          })
                        : (0, k.jsxs)("div", {
                            className: "flex h-full flex-col px-2 pt-2",
                            children: [
                              (0, k.jsxs)("div", {
                                className:
                                  "flex w-full flex-row justify-center",
                                children: [
                                  (0, k.jsx)("div", {
                                    className:
                                      "absolute left-0 m-auto ml-4 mt-3 font-medium",
                                    children: (0, k.jsx)(F, {
                                      gizmoId: null == t ? void 0 : t.gizmo.id,
                                    }),
                                  }),
                                  (0, k.jsx)(tA, {
                                    editorTab: R,
                                    setEditorTab: V,
                                    className: "mb-2 flex-shrink-0 self-center",
                                  }),
                                ],
                              }),
                              (0, k.jsx)("div", {
                                className: "grow overflow-hidden",
                                children:
                                  R === tM.MAGIC_MAKER
                                    ? (0, k.jsx)("div", {
                                        className: "h-full w-full pb-5",
                                        children: (0, k.jsx)(
                                          tI,
                                          {
                                            gizmoEditorData: s,
                                            updateGizmo: I,
                                            completionCallbackResponse: G,
                                            clientThreadId: d,
                                            gizmoEditorDataRef: o,
                                            magicMakerBehaviorOverrides: f,
                                            magicMakerConversationGizmoEditorDataRef:
                                              l,
                                            requireGizmoId: z,
                                          },
                                          d
                                        ),
                                      })
                                    : R === tM.ADVANCED
                                    ? (0, k.jsx)(ey.cK, {
                                        gizmoEditorData: s,
                                        updateGizmo: I,
                                        generateProfilePic: () => {
                                          $(!0),
                                            E(o, l, [
                                              "Generate a new profile picture for this GPT using gizmo_editor generate_profile_pic. Do not prompt the user for any clarification. Do not send extra text outside of the tool function call. DO NOT CALL update_behavior or otherwise update GPT behavior in your response.",
                                            ]);
                                        },
                                        setIsUploadingProfilePic: K,
                                        isGeneratingProfilePic: X,
                                        setIsGeneratingProfilePic: $,
                                        requireGizmoId: z,
                                        onShowActionsEditor: (e) => {
                                          et(e);
                                        },
                                      })
                                    : (0, k.jsx)(eF, {
                                        gizmoEditorData: s,
                                        isSavingDraft: v,
                                        showTitle: !1,
                                      }),
                              }),
                            ],
                          }),
                  }),
                }),
                (0, k.jsx)("div", {
                  className: (0, ea.default)(
                    "hidden w-1/2 justify-center border-l border-token-border-medium bg-token-main-surface-secondary pt-4",
                    R !== tM.PREVIEW && "md:flex"
                  ),
                  children: (0, k.jsx)("div", {
                    className: "flex-grow pb-5",
                    children: (0, k.jsx)("div", {
                      className: "h-full",
                      children: (0, k.jsx)(eF, {
                        gizmoEditorData: s,
                        isSavingDraft: v,
                      }),
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      };
      function tR(e) {
        let { businessWorkspaceId: t, gizmoId: i } = e,
          { data: n } = (0, u.b9)(i, !0),
          r = (0, X.ec)(X.F_.accountUserId),
          o = (0, X.aF)(),
          a = null == o ? void 0 : o.id,
          l = null != n && null != r && null != a && (0, ez.k1)(n, r, a, t);
        return null != n && l ? (0, k.jsx)(tU, { gizmo: n }) : null;
      }
      function tV(e) {
        let { onNewGizmoId: t } = e;
        return (0, k.jsx)(tU, { gizmo: void 0, onNewGizmoId: t });
      }
      function tF(e) {
        let { gizmoId: t, remixSourceId: i } = e,
          n = (0, el.useRouter)(),
          r = (0, Y.t)(),
          o = (0, X.ec)(X.F_.businessWorkspaceId),
          a = (0, P.useRef)(void 0),
          l = t;
        return (
          null != t && a.current === t && (l = void 0),
          (0, $.yx)({
            resetThreadAction: () => {
              n.push("/");
            },
          }),
          (0, k.jsx)("div", {
            children:
              null != r && r.data
                ? (0, k.jsx)("div", {
                    children:
                      void 0 != l
                        ? (0, k.jsx)(
                            tR,
                            { businessWorkspaceId: o, gizmoId: l },
                            l
                          )
                        : (0, k.jsx)(tV, {
                            remixSourceId: i,
                            onNewGizmoId: (e) => {
                              (a.current = e),
                                window.history.replaceState(
                                  window.history.state,
                                  "",
                                  (0, ee.AA)(e)
                                );
                            },
                          }),
                  })
                : (0, k.jsx)("div", {
                    className: "flex min-h-screen items-center justify-center",
                    children: (0, k.jsx)(K.Z, {}),
                  }),
          })
        );
      }
      var tB = i(19892),
        tq = !0;
      function tK() {
        var e;
        let t = (0, Y.t)();
        (e = null == t || t.canCreateGizmos()),
          (0, P.useEffect)(() => {
            e ||
              es().replace((0, tB.M5)(tB.LT.NO_ACCESS), void 0, {
                shallow: !0,
              });
          }, [e]);
        let i = (0, el.useRouter)(),
          n = i.query.slug,
          r = n ? (0, u.CR)(n) : void 0,
          { remixFrom: o } = i.query,
          a = null == t ? void 0 : t.isFree();
        return ((0, P.useEffect)(() => {
          (0, eG.r)(a, null == t ? void 0 : t.features).then((e) => {
            eS.ZP.initializeAndGatherData(e);
          });
        }, [a, null == t ? void 0 : t.features]),
        (0, P.useEffect)(() => {
          null == t || t.canCreateGizmos() || i.push("/");
        }, [t, i]),
        null != t && t.canCreateGizmos())
          ? (0, k.jsx)(tF, { gizmoId: r, remixSourceId: o })
          : null;
      }
    },
    21958: function (e, t, i) {
      i.d(t, {
        yt: function () {
          return ef;
        },
        lX: function () {
          return ej;
        },
        hj: function () {
          return ex;
        },
        B1: function () {
          return ev;
        },
        cK: function () {
          return ek;
        },
        rv: function () {
          return ey;
        },
        sY: function () {
          return ez;
        },
      });
      var n,
        r,
        o,
        a,
        l = i(39827),
        s = i(73017),
        c = i(25660),
        d = i(65897),
        u = i(88128),
        p = i(68832),
        m = i(37493),
        h = i(99715),
        f = i(70079),
        g = i(76483),
        x = i(1454),
        v = i(9063),
        b = i(47483),
        y = i(42005),
        j = i(5278),
        w = i(28144),
        P = i(41098),
        N = i(21643),
        k = i(82429),
        T = i(87106),
        z = i(43383),
        O = i(28373),
        C = i(35250);
      function _(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _(Object(i), !0).forEach(function (t) {
                (0, l.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : _(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      function S() {
        return (0, C.jsx)("div", {
          className:
            "relative flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-token-border-medium",
          children: (0, C.jsx)(y.Z, { className: "h-1/4 w-1/4" }),
        });
      }
      function G(e) {
        let {
            gizmoEditorData: t,
            onFileChange: i,
            generateProfilePic: n,
            isGeneratingProfilePic: r,
            setIsGeneratingProfilePic: o,
          } = e,
          a = (0, v.Z)(),
          { 0: l, 1: s } = (0, f.useState)(void 0),
          d = (0, f.useRef)(i);
        async function u(e) {
          if (e.length > 0) {
            o(!1);
            let t = await (0, T.WI)(e[0], 512),
              i = (0, k.W7)(t);
            s({
              tempId: i,
              file: t,
              status: N.X.Uploading,
              progress: 1,
              fileId: null,
              cdnUrl: null,
            }),
              d.current("uploading"),
              (0, k.lU)(i, t, a, c.Ei.ProfilePicture, {
                onFileCreated(e, t, i) {
                  s((n) =>
                    "initial" !== n &&
                    (null == n ? void 0 : n.tempId) === e &&
                    n.status === N.X.Uploading
                      ? I(I({}, n), {}, { progress: 10, fileId: t, cdnUrl: i })
                      : n
                  );
                },
                onFileUploadProgress(e, t) {
                  s((i) =>
                    "initial" !== i &&
                    (null == i ? void 0 : i.tempId) === e &&
                    i.status === N.X.Uploading
                      ? I(I({}, i), {}, { progress: t })
                      : i
                  );
                },
                onFileUploaded(e, t, i) {
                  s((t) =>
                    "initial" !== t && (null == t ? void 0 : t.tempId) === e
                      ? (d.current(t),
                        I(
                          I({}, t),
                          {},
                          {
                            status: N.X.Ready,
                            progress: 100,
                            fileSpec: I(
                              {
                                name: t.file.name,
                                id: t.fileId,
                                size: t.file.size,
                              },
                              null != i ? i : {}
                            ),
                          }
                        ))
                      : t
                  );
                },
                onError(e) {
                  s((t) => {
                    if (
                      "initial" !== t &&
                      (null == t ? void 0 : t.tempId) === e
                    ) {
                      d.current(void 0);
                      return;
                    }
                    return t;
                  });
                },
              });
          }
        }
        (0, f.useEffect)(() => {
          d.current = i;
        });
        let { open: p, getInputProps: m } = (0, g.uI)(
          I(
            {
              disabled: !1,
              noClick: !0,
              onDropAccepted: u,
              onDropRejected: (e) => (0, j.UJ)(e, a, N.A.ProfilePicture),
              multiple: !0,
              maxSize: P.xC,
            },
            (0, T.Z8)(T.KL)
          )
        );
        return (0, C.jsxs)("div", {
          className: "flex w-full items-center justify-center gap-4",
          children: [
            (0, C.jsxs)(h.fC, {
              children: [
                (0, C.jsx)(h.xz, {
                  className: "h-20 w-20",
                  children: r
                    ? (0, C.jsx)(S, {})
                    : null != l && "initial" != l && l.status != N.X.Ready
                    ? (0, C.jsxs)("div", {
                        className:
                          "relative h-full w-full overflow-hidden rounded-full",
                        children: [
                          (0, C.jsx)(w.l, { file: l.file }),
                          l.status === N.X.Uploading && l.progress < 90
                            ? (0, C.jsx)("div", {
                                className:
                                  "absolute inset-0 flex items-center justify-center bg-black/5 text-white",
                                children: (0, C.jsx)(b.Z, {
                                  percentage: l.progress,
                                  className: "h-6 w-6",
                                }),
                              })
                            : null,
                        ],
                      })
                    : (null == t ? void 0 : t.profilePictureUrl) != null &&
                      (null == t ? void 0 : t.profilePictureUrl) !== ""
                    ? (0, C.jsx)(z.Z, {
                        isFirstParty: !1,
                        src: t.profilePictureUrl,
                      })
                    : (0, C.jsx)("div", {
                        className:
                          "flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-token-border-medium",
                        children: (0, C.jsx)(x.OvN, { className: "text-4xl" }),
                      }),
                }),
                (0, C.jsx)(h.Uv, {
                  children: (0, C.jsxs)(h.VY, {
                    className:
                      "flex min-w-[100px] max-w-xs flex-col rounded-xl border border-gray-400 bg-token-main-surface-primary shadow-lg dark:border-gray-700",
                    sideOffset: 7,
                    children: [
                      (0, C.jsx)(O.UA, {
                        onClick: p,
                        children: "Upload Photo",
                      }),
                      (0, C.jsx)(O.UA, {
                        onClick: n,
                        children: "Use DALL\xb7E",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, C.jsx)("input", I({}, m())),
          ],
        });
      }
      var M = i(8402),
        E = i(7557);
      function A(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(i), !0).forEach(function (t) {
                (0, l.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : A(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      function L(e) {
        var t, i, n;
        let { gizmoEditorData: r, updateGizmo: o } = e,
          a =
            null == r || null === (t = r.tools) || void 0 === t
              ? void 0
              : t.find((e) => e.type === c.qK.INTENT),
          { 0: l, 1: s } = (0, f.useState)(
            null !== (i = null == a ? void 0 : a.settings.intents) &&
              void 0 !== i
              ? i
              : ""
          ),
          { 0: d, 1: u } = (0, f.useState)(
            null !== (n = null == a ? void 0 : a.settings.intent_hook) &&
              void 0 !== n
              ? n
              : ""
          ),
          { 0: p, 1: m } = (0, f.useState)(!1),
          h = (0, v.Z)(),
          g = () => {
            o((e) =>
              Z(
                Z({}, e),
                {},
                {
                  tools: a
                    ? e.tools.map((e) =>
                        e.type === c.qK.INTENT
                          ? Z(
                              Z({}, e),
                              {},
                              {
                                settings: Z(
                                  Z({}, e.settings),
                                  {},
                                  { intents: l, intent_hook: d }
                                ),
                              }
                            )
                          : e
                      )
                    : [
                        ...e.tools,
                        {
                          type: c.qK.INTENT,
                          settings: { intents: l, intent_hook: d },
                        },
                      ],
                }
              )
            ),
              m(!1);
          };
        return (0, C.jsxs)(ex, {
          children: [
            (0, C.jsx)(ej, {
              label: "GPT Script",
              description: h.formatMessage({
                id: "gizmo.gptScriptExplanation",
                defaultMessage: "Code and Intents to save GPT state",
              }),
            }),
            p &&
              (0, C.jsxs)("div", {
                className: "mb-4",
                children: [
                  (0, C.jsx)(ej, { label: "Intent Hook" }),
                  (0, C.jsx)(ev, {
                    value: d,
                    rows: 20,
                    onChange: (e) => u(e.target.value),
                    placeholder:
                      'def f(input):\nreturn {\n  "instructions": str(input.intent),\n  "conversation_state": input.conversation_state,\n  "user_state": input.user_state,\n  "pinned": {},\n}',
                    className:
                      "h-50 mb-4 block w-full resize-none rounded-md border border-gray-300 p-2 font-mono text-xs shadow-sm focus:border-blue-500 focus:ring-blue-500",
                    spellCheck: "false",
                  }),
                  (0, C.jsx)(ej, { label: "Intents" }),
                  (0, C.jsx)(ev, {
                    value: l,
                    rows: 20,
                    onChange: (e) => s(e.target.value),
                    placeholder: "Enter Intent",
                    className: "h-50 mb-4",
                  }),
                  (0, C.jsx)(E.z, {
                    color: "dark",
                    onClick: () => {
                      g();
                    },
                    children: "Update",
                  }),
                ],
              }),
            !p &&
              (0, C.jsx)(O.cY, {
                onClick: () => m(!0),
                children: d ? "Update Script" : "Add Script",
              }),
          ],
        });
      }
      var D = i(65455),
        U = i(23340),
        R = i(13038),
        V = i(9417),
        F = i(78e3),
        B = i(10518),
        q = i(24343),
        K = i(83737),
        W = i(61888),
        Y = i(84261),
        H = i.n(Y),
        J = i(7137),
        X = i(84692),
        Q = i(68498),
        $ = i(21389),
        ee = i(91128),
        et = i(53197);
      function ei(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function en(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ei(Object(i), !0).forEach(function (t) {
                (0, l.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : ei(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      function er(e) {
        var t;
        let {
            gizmoEditorData: i,
            requireGizmoId: n,
            currentModelConfig: r,
            updateGizmo: o,
          } = e,
          a = (0, v.Z)(),
          { 0: l, 1: s } = (0, f.useState)(0),
          d = (0, f.useRef)(new Map()),
          u = (0, T.Zp)(r, void 0),
          p = async (e) => {
            ee.A.logEvent(et.M.uploadFile, {
              client: "web",
              eventSource: "mouse",
              intent: "gizmo",
            });
            let t = await n();
            e.length > 0 &&
              (await Promise.all(
                e.map((e) => {
                  let i = (0, k.W7)(e);
                  d.current.set(i, {
                    tempId: i,
                    gizmoId: t,
                    file: e,
                    status: N.X.Uploading,
                    progress: 1,
                    fileId: null,
                    cdnUrl: null,
                  }),
                    (0, k.cT)(
                      (0, k.W7)(e),
                      e,
                      a,
                      { kind: c.Ei.Gizmo, gizmoId: t },
                      {
                        onFileUploaded: (e, t, i, n) => {
                          let r = d.current.get(e);
                          null != r &&
                            null != r.fileId &&
                            (o((e) => {
                              var t;
                              return en(
                                en({}, e),
                                {},
                                {
                                  files: [
                                    ...(null !== (t = e.files) && void 0 !== t
                                      ? t
                                      : []),
                                    {
                                      file_id: r.fileId,
                                      name: r.file.name,
                                      size: r.file.size,
                                      type: r.file.type,
                                      last_modified: r.file.lastModified,
                                      file_size_tokens:
                                        null == n ? void 0 : n.fileTokenSize,
                                    },
                                  ],
                                }
                              );
                            }),
                            d.current.delete(e),
                            s((e) => e + 1));
                        },
                        onFileCreated: (i, n, r) => {
                          d.current.set(
                            i,
                            en(
                              en(
                                {
                                  tempId: i,
                                  gizmoId: t,
                                  file: e,
                                  status: N.X.Uploading,
                                  progress: 1,
                                },
                                d.current.get(i)
                              ),
                              {},
                              { fileId: n, cdnUrl: r }
                            )
                          ),
                            s((e) => e + 1);
                        },
                        onFileUploadProgress: (e, t) => {
                          let i = d.current.get(e);
                          (null == i ? void 0 : i.status) === N.X.Uploading &&
                            d.current.set(
                              e,
                              en(en({}, i), {}, { progress: t })
                            ),
                            s((e) => e + 1);
                        },
                        onError: (e) => {
                          d.current.delete(e);
                        },
                      },
                      {
                        usesRetrievalIndex:
                          null != r &&
                          (0, T._0)(r, e.type, e.name) === c.Cd.Retrieval,
                      }
                    );
                })
              ));
          },
          { getInputProps: m, open: h } = (0, g.uI)(
            en(
              {
                disabled: !1,
                noClick: !0,
                onDropAccepted: p,
                multiple: !0,
                maxSize: P.xC,
                maxFiles: 10,
              },
              (0, T.Z8)(u)
            )
          ),
          x =
            null !== (t = null == i ? void 0 : i.files) && void 0 !== t
              ? t
              : [];
        function b(e) {
          return (0, C.jsx)(
            w.Z,
            {
              onRemoveFileClick: () => {
                d.current.delete(e.tempId), s((e) => e + 1);
              },
              file: e.file,
              loadingPercentage:
                e.status === N.X.Uploading ? e.progress : void 0,
            },
            e.tempId
          );
        }
        function y(e) {
          return (0, C.jsx)(
            w.Z,
            {
              file: e.name,
              fileId: e.file_id,
              onRemoveFileClick: () =>
                o((t) => {
                  var i;
                  return en(
                    en({}, t),
                    {},
                    {
                      files:
                        null == t || null === (i = t.files) || void 0 === i
                          ? void 0
                          : i.filter((t) => t.file_id !== e.file_id),
                    }
                  );
                }),
              gizmoId: null == i ? void 0 : i.id,
            },
            e.file_id
          );
        }
        let j = Array.from(d.current.values()).filter((e) =>
            x.every((t) => t.file_id !== e.fileId)
          ),
          [z, _] = (0, W.partition)(
            j,
            (e) =>
              null != r &&
              (0, T._0)(r, e.file.type, e.file.name) === c.Cd.CodeInterpreter
          ),
          [I, S] = (0, W.partition)(
            x,
            (e) =>
              null != r &&
              null != e.type &&
              (0, T._0)(r, e.type, e.name) === c.Cd.CodeInterpreter
          ),
          G = (0, f.useRef)(I.length);
        return (
          (0, f.useEffect)(() => {
            I.length > G.current &&
              o((e) => {
                var t, i;
                return null !== (t = e.tools) &&
                  void 0 !== t &&
                  t.some((e) => e.type === c.qK.PYTHON)
                  ? e
                  : en(
                      en({}, e),
                      {},
                      {
                        tools: [
                          ...(null !== (i = e.tools) && void 0 !== i ? i : []),
                          { type: c.qK.PYTHON },
                        ],
                      }
                    );
              }),
              (G.current = I.length);
          }, [I.length]),
          (0, C.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [
              (0, C.jsx)("div", {
                className: "rounded-lg text-token-text-tertiary",
                children: (0, C.jsx)(X.Z, en({}, eo.knowledgeWarning)),
              }),
              _.length > 0 || S.length > 0
                ? (0, C.jsxs)("div", {
                    className: "flex flex-wrap gap-2",
                    children: [_.map(b), S.map(y)],
                  })
                : null,
              z.length > 0 || I.length > 0
                ? (0, C.jsxs)("div", {
                    children: [
                      (0, C.jsx)("div", {
                        className: "mb-2 text-xs text-token-text-tertiary",
                        children:
                          "The following files are only available for Code Interpreter:",
                      }),
                      (0, C.jsxs)("div", {
                        className: "flex flex-wrap gap-2",
                        children: [z.map(b), I.map(y)],
                      }),
                    ],
                  })
                : null,
              (0, C.jsx)("div", {
                children: (0, C.jsxs)(O.cY, {
                  onClick: h,
                  children: [(0, C.jsx)("input", en({}, m())), "Upload files"],
                }),
              }),
            ],
          })
        );
      }
      let eo = (0, Q.vU)({
        knowledgeWarning: {
          id: "gizmo.knowledgeWarning",
          defaultMessage:
            "If you upload files under Knowledge, conversations with your GPT may include file contents. Files can be downloaded when Code Interpreter is enabled",
        },
      });
      var ea = i(16244);
      function el(e) {
        let { placeholder: t, text: i, onChange: n, onClose: r } = e;
        return (0, C.jsx)(ea.Z, {
          className: "!max-h-[100vh] !max-w-[80vw]",
          type: "success",
          isOpen: !0,
          onClose: r,
          primaryButton: (0, C.jsx)(O.cY, { onClick: r, children: "Close" }),
          children: (0, C.jsx)("textarea", {
            className:
              "h-[70vh] w-full resize-none rounded-lg bg-token-main-surface-primary dark:border-gray-700",
            value: i,
            onChange: (e) => {
              n(e.target.value);
            },
            placeholder: t,
          }),
        });
      }
      function es(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function ec(e) {
        let {
            label: t,
            toolType: i,
            enabledTools: n,
            onEnabledToolsChange: r,
            disabled: o,
            disabledTooltip: a,
          } = e,
          l = (e) => n.some((t) => t.type === e),
          s = (0, C.jsx)(O.f8, {
            labelClassName: "w-full cursor-pointer",
            id: i,
            label: t,
            checked: !o && l(i),
            disabled: o,
            onChange: () => {
              l(i) ? r(n.filter((e) => e.type !== i)) : r([...n, { type: i }]);
            },
          });
        return null != a
          ? (0, C.jsx)("div", {
              className: "opacity-70",
              children: (0, C.jsx)(p.u, { side: "top", label: a, children: s }),
            })
          : s;
      }
      function ed(e) {
        let { enabledTools: t, onEnabledToolsChange: i } = e,
          n = (0, u.C)(V.L0.BrowseAvailable),
          { value: r } = (0, B.sB)(B.tz.GizmoMemory),
          o = (0, v.Z)();
        return (0, C.jsxs)("div", {
          className: "flex flex-col items-start gap-2",
          children: [
            (0, C.jsx)(ec, {
              label: "Web Browsing",
              toolType: c.qK.BROWSER,
              enabledTools: t,
              onEnabledToolsChange: i,
              disabled: !n,
              disabledTooltip: n
                ? void 0
                : (0, C.jsx)(
                    X.Z,
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? es(Object(i), !0).forEach(function (t) {
                              (0, l.Z)(e, t, i[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(i)
                            )
                          : es(Object(i)).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(i, t)
                              );
                            });
                      }
                      return e;
                    })({}, eu.disabledBrowsingToolTip)
                  ),
            }),
            (0, C.jsx)(ec, {
              label: "DALL\xb7E Image Generation",
              toolType: c.qK.DALLE,
              enabledTools: t,
              onEnabledToolsChange: i,
            }),
            (0, C.jsx)(ec, {
              label: (0, C.jsxs)("div", {
                className: "flex items-center",
                children: [
                  "Code Interpreter",
                  (0, C.jsx)(ey, {
                    description: o.formatMessage(eu.codeInterpreterTooltip),
                  }),
                ],
              }),
              toolType: c.qK.PYTHON,
              enabledTools: t,
              onEnabledToolsChange: i,
            }),
            r &&
              (0, C.jsx)(ec, {
                label: (0, C.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    "Memory",
                    (0, C.jsx)(ey, {
                      description: o.formatMessage(eu.memoryTooltip),
                    }),
                  ],
                }),
                toolType: c.qK.MEMORY,
                enabledTools: t,
                onEnabledToolsChange: i,
              }),
          ],
        });
      }
      let eu = (0, Q.vU)({
        disabledBrowsingToolTip: {
          defaultMessage:
            "Web browsing is disabled for your workspace. Contact your admin to enable it.",
          id: "GizmoEditorModelPicker.disabledBrowsingToolTip",
        },
        codeInterpreterTooltip: {
          id: "GizmoEditorModelPicker.codeInterpreterTooltip",
          defaultMessage:
            "Allow this GPT to run code. When enabled, this GPT can analyze data, work with files you’ve uploaded, do math, and more.",
        },
        memoryTooltip: {
          id: "GizmoEditorModelPicker.memoryTooltip",
          defaultMessage:
            "Allow this GPT to pick up on users details and preferences to tailor its responses to them. When enabled, users will need to have memory on to use this GPT.",
        },
      });
      var ep = i(93031);
      function em(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function eh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? em(Object(i), !0).forEach(function (t) {
                (0, l.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : em(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      let ef = $.Z.input(
          n ||
            (n = (0, s.Z)([
              "w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 border focus:ring-blue-400 border-token-border-medium h-9 bg-token-main-surface-primary",
            ]))
        ),
        eg = $.Z.div(r || (r = (0, s.Z)(["text-sm text-red-500"]))),
        ex = $.Z.div(o || (o = (0, s.Z)(["mb-6"]))),
        ev = $.Z.textarea(
          a ||
            (a = (0, s.Z)([
              "w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32",
            ]))
        );
      function eb() {
        return (0, C.jsx)("div", {
          className:
            "ml-2 flex h-3.5 w-3.5 cursor-default items-center justify-center rounded-full border border-token-border-medium text-[0.5rem] font-medium leading-none text-token-text-tertiary",
          children: "?",
        });
      }
      function ey(e) {
        let { description: t } = e;
        return (0, C.jsx)(p.u, {
          wide: !0,
          label: t,
          delayDuration: 0,
          children: (0, C.jsx)(eb, {}),
        });
      }
      function ej(e) {
        let { label: t, description: i, collapsed: n, onClick: r } = e,
          o = (0, C.jsx)("label", {
            className: "block font-medium text-token-text-primary",
            children: t,
          });
        return (0, C.jsxs)("div", {
          className: "mb-1.5 flex items-center",
          onClick: r,
          children: [
            void 0 !== n && (n ? (0, C.jsx)(J.H_v, {}) : (0, C.jsx)(J.iUH, {})),
            i
              ? (0, C.jsx)(p.u, {
                  label: i,
                  sideOffset: 4,
                  side: "top",
                  delayDuration: 0,
                  children: o,
                })
              : (0, C.jsx)(C.Fragment, { children: o }),
          ],
        });
      }
      function ew(e) {
        let { children: t, collapsed: i, initial: n } = e;
        return (0, C.jsx)(q.M, {
          initial: n,
          children:
            !i &&
            (0, C.jsx)(K.E.div, {
              initial: "collapsed",
              animate: "open",
              exit: "collapsed",
              variants: {
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              },
              children: t,
            }),
        });
      }
      function eP(e) {
        var t;
        let { actionTool: i, onShowActionsEditor: n, isDisabled: r } = e,
          o =
            "metadata" in i
              ? null === (t = i.metadata) || void 0 === t
                ? void 0
                : t.domain
              : void 0;
        return (0, C.jsxs)("div", {
          className:
            "flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",
          onClick: n,
          children: [
            (0, C.jsx)("div", {
              className: "h-9 grow px-3 py-2",
              children:
                null != o
                  ? o
                  : (0, C.jsx)("span", {
                      className: "text-red-500",
                      children: "Invalid action",
                    }),
            }),
            (0, C.jsx)("div", { className: "w-px bg-token-border-medium" }),
            (0, C.jsx)("button", {
              disabled: r,
              className:
                "flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none",
              children: (0, C.jsx)(M.RR, { className: "icon-sm" }),
            }),
          ],
        });
      }
      function eN(e) {
        var t, i, n;
        let { gizmo: r, onShowActionsEditor: o, isDisabled: a } = e,
          l = (0, v.Z)(),
          s = (0, C.jsxs)("div", {
            className: "space-y-1",
            children: [
              null == r || null === (t = r.tools) || void 0 === t
                ? void 0
                : t.map((e, t) => {
                    var i;
                    return e.type !== c.qK.JIT_PLUGIN
                      ? null
                      : (0, C.jsxs)(
                          "div",
                          {
                            children: [
                              (0, C.jsx)(eP, {
                                isDisabled: a,
                                actionTool: e,
                                onShowActionsEditor: () => o(e.metadata.domain),
                              }),
                              (null === (i = e.metadata.auth) || void 0 === i
                                ? void 0
                                : i.type) === "oauth" &&
                                (0, C.jsx)(d.Z, {
                                  label: "Callback URL",
                                  value: ""
                                    .concat("/aip/")
                                    .concat(
                                      e.metadata.action_id,
                                      "/oauth/callback"
                                    ),
                                  onCopied: () => {
                                    D.m.success("Copied to clipboard", {
                                      duration: 3,
                                    });
                                  },
                                }),
                            ],
                          },
                          t
                        );
                  }),
              (null !==
                (i =
                  null == r || null === (n = r.tools) || void 0 === n
                    ? void 0
                    : n.filter((e) => e.type === c.qK.JIT_PLUGIN)) &&
              void 0 !== i
                ? i
                : []
              ).length >= m.L5
                ? (0, C.jsx)("div", {
                    children: l.formatMessage(ez.maxActionsReached, {
                      number: m.L5,
                    }),
                  })
                : (0, C.jsx)(O.cY, {
                    disabled: a,
                    onClick: () => {
                      o("Unknown domain");
                    },
                    className: "mt-2",
                    children: (0, C.jsx)(X.Z, eh({}, ez.createActionLabel)),
                  }),
            ],
          });
        return a
          ? (0, C.jsx)(p.u, {
              side: "top",
              label: l.formatMessage(ez.disabledCustomActionsTooltip),
              children: s,
            })
          : s;
      }
      function ek(e) {
        var t, i, n, r, o, a, l, s;
        let {
            gizmoEditorData: d,
            updateGizmo: p,
            generateProfilePic: h,
            setIsUploadingProfilePic: g,
            isGeneratingProfilePic: x,
            setIsGeneratingProfilePic: b,
            requireGizmoId: y,
            onShowActionsEditor: j,
          } = e,
          w = (0, U.B9)(),
          P = U.mx,
          N =
            null !== (t = null == d ? void 0 : d.tools) && void 0 !== t
              ? t
              : [],
          k = P ? w[P] : void 0,
          { 0: T, 1: z } = (0, f.useState)(!1),
          { 0: _, 1: I } = (0, f.useState)(!0),
          S =
            null !== (i = null == d ? void 0 : d.promptStarters) && void 0 !== i
              ? i
              : [],
          E = [...S, ...(S.length < 12 ? [""] : [])],
          A = (0, ep.bw)(d),
          Z = (0, F.ec)(F.F_.isBusinessWorkspace),
          D = (0, u.C)(V.L0.WorkspaceGPTCustomActions),
          q = (0, v.Z)(),
          { value: K } = (0, B.sB)(B.tz.GizmoContacts),
          { value: Y } = (0, B.sB)(B.tz.GizmoIntents);
        return (0, C.jsxs)("div", {
          className:
            "flex h-full grow flex-col overflow-y-auto px-2 pt-6 text-sm",
          children: [
            (0, C.jsxs)("div", {
              className: "grow",
              children: [
                (0, C.jsxs)(ex, {
                  children: [
                    (0, C.jsx)(G, {
                      gizmoEditorData: d,
                      generateProfilePic: h,
                      isGeneratingProfilePic: x,
                      setIsGeneratingProfilePic: b,
                      onFileChange: async (e) => {
                        if (
                          null != e &&
                          "uploading" !== e &&
                          null != e.fileId
                        ) {
                          let t = await R.Z.getFileDownloadLink(e.fileId);
                          t.status === c.KF.Success &&
                            p({
                              profilePictureId:
                                null != e.fileId ? e.fileId : void 0,
                              profilePictureUrl: t.download_url,
                            });
                        } else
                          p({
                            profilePictureId: void 0,
                            profilePictureUrl: void 0,
                          });
                        g("uploading" === e);
                      },
                    }),
                    (0, C.jsx)(ej, {
                      label: "Name",
                      description: "The name of your GPT",
                    }),
                    (0, C.jsx)(ef, {
                      type: "text",
                      placeholder: "Name your GPT",
                      value:
                        null !== (n = null == d ? void 0 : d.name) &&
                        void 0 !== n
                          ? n
                          : "",
                      onChange: (e) => {
                        p({ name: e.target.value });
                      },
                      onBlurCapture: () =>
                        p((e) => eh(eh({}, e), {}, { name: e.name.trim() })),
                    }),
                    A.includes(ep.hs.GizmoNameTooLong)
                      ? (0, C.jsx)(eg, {
                          className: "mt-1",
                          children: (0, C.jsx)(
                            X.Z,
                            eh(
                              eh({}, ez.nameTooLong),
                              {},
                              { values: { length: m.aI } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, C.jsxs)(ex, {
                  className: "mt-4",
                  children: [
                    (0, C.jsx)(ej, {
                      label: "Description",
                      description: "Short description of what this GPT does",
                    }),
                    (0, C.jsx)(ef, {
                      type: "text",
                      placeholder:
                        "Add a short description about what this GPT does",
                      value:
                        null !== (r = null == d ? void 0 : d.description) &&
                        void 0 !== r
                          ? r
                          : "",
                      onChange: (e) => p({ description: e.target.value }),
                      onBlurCapture: () =>
                        p((e) => {
                          var t, i;
                          return eh(
                            eh({}, e),
                            {},
                            {
                              description:
                                null !==
                                  (t =
                                    null === (i = e.description) || void 0 === i
                                      ? void 0
                                      : i.trim()) && void 0 !== t
                                  ? t
                                  : "",
                            }
                          );
                        }),
                    }),
                    A.includes(ep.hs.GizmoDescriptionTooLong)
                      ? (0, C.jsx)(eg, {
                          className: "mt-1",
                          children: (0, C.jsx)(
                            X.Z,
                            eh(
                              eh({}, ez.descriptionTooLong),
                              {},
                              { values: { length: m.P_ } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, C.jsxs)(ex, {
                  children: [
                    (0, C.jsx)(ej, {
                      label: "Instructions",
                      description:
                        "What does this GPT do? How does it behave? What should it avoid doing?",
                    }),
                    (0, C.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, C.jsx)(ev, {
                          className: "resize-none",
                          rows: 8,
                          value: null == d ? void 0 : d.instructions,
                          onChange: (e) => p({ instructions: e.target.value }),
                          onBlurCapture: () =>
                            p((e) =>
                              eh(
                                eh({}, e),
                                {},
                                { instructions: e.instructions.trim() }
                              )
                            ),
                          placeholder:
                            "What does this GPT do? How does it behave? What should it avoid doing?",
                        }),
                        (0, C.jsx)("button", {
                          className:
                            "absolute bottom-3 right-2 text-token-text-tertiary",
                          onClick: () => z(!0),
                          children: (0, C.jsx)(M.j5, { className: "icon-sm" }),
                        }),
                      ],
                    }),
                    A.includes(ep.hs.GizmoInstructionsTooLong)
                      ? (0, C.jsx)(eg, {
                          className: "mt-1",
                          children: (0, C.jsx)(
                            X.Z,
                            eh(
                              eh({}, ez.instructionsTooLong),
                              {},
                              { values: { length: m.vi } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, C.jsxs)(ex, {
                  children: [
                    (0, C.jsx)(ej, {
                      label: "Conversation starters",
                      description:
                        "Examples for the user to start the conversation",
                    }),
                    (0, C.jsx)("div", {
                      className: "flex flex-col gap-1",
                      children: E.map((e, t) =>
                        (0, C.jsxs)(
                          "div",
                          {
                            className: "flex items-center",
                            children: [
                              (0, C.jsx)(ef, {
                                className: "rounded-r-none",
                                value: e,
                                type: "text",
                                onChange: (e) => {
                                  let i = e.target.value;
                                  p((e) => {
                                    var n;
                                    return eh(
                                      eh({}, e),
                                      {},
                                      {
                                        promptStarters: (0, W.compact)(
                                          t >=
                                            (null !== (n = S.length) &&
                                            void 0 !== n
                                              ? n
                                              : 0)
                                            ? [...(null != S ? S : []), i]
                                            : S.map((e, n) => {
                                                if (n === t) {
                                                  if ("" === i) return;
                                                  return i;
                                                }
                                                return e;
                                              })
                                        ),
                                      }
                                    );
                                  });
                                },
                              }),
                              (0, C.jsx)("button", {
                                className:
                                  "flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none border border-l-0 border-token-border-medium",
                                onClick: () =>
                                  p((e) =>
                                    eh(
                                      eh({}, e),
                                      {},
                                      {
                                        promptStarters: S.filter(
                                          (e, i) => i !== t
                                        ),
                                      }
                                    )
                                  ),
                                children: (0, C.jsx)(M.v7, {
                                  className: "icon-sm",
                                }),
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
                (0, C.jsxs)(ex, {
                  children: [
                    (0, C.jsx)(ej, {
                      label: "Knowledge",
                      description: q.formatMessage(ez.knowledgeExplanation),
                    }),
                    (0, C.jsx)(er, {
                      gizmoEditorData: d,
                      requireGizmoId: y,
                      currentModelConfig: k,
                      updateGizmo: p,
                    }),
                  ],
                }),
                (0, C.jsxs)(ex, {
                  children: [
                    (0, C.jsx)(ej, {
                      label: "Capabilities",
                      description: "Functionality this GPT can use",
                    }),
                    (0, C.jsx)(ed, {
                      enabledTools: N,
                      onEnabledToolsChange: (e) => p({ tools: e }),
                    }),
                  ],
                }),
                (0, C.jsxs)(ex, {
                  children: [
                    (0, C.jsx)(ej, {
                      label: "Actions",
                      description: "APIs this GPT can use",
                    }),
                    (0, C.jsx)(eN, {
                      isDisabled: !!(Z && !D),
                      gizmo: d,
                      onShowActionsEditor: j,
                    }),
                  ],
                }),
                !Z &&
                  ((null !==
                    (a =
                      null === (l = d.files) || void 0 === l
                        ? void 0
                        : l.length) && void 0 !== a
                    ? a
                    : 0) > 0 ||
                    (null == d || null === (s = d.tools) || void 0 === s
                      ? void 0
                      : s.some((e) => e.type === c.qK.JIT_PLUGIN))) &&
                  (0, C.jsxs)(ex, {
                    children: [
                      (0, C.jsx)(ej, {
                        label: "Additional Settings",
                        collapsed: !!_,
                        onClick: () => {
                          I((e) => !e);
                        },
                      }),
                      (0, C.jsx)(ew, {
                        collapsed: _,
                        initial: !1,
                        children: (0, C.jsx)(O.f8, {
                          className: "mx-3 my-1",
                          labelClassName: "w-full cursor-pointer",
                          label:
                            "Use conversation data in your GPT to improve our models",
                          id: "improve-chatgpt",
                          checked: !d.trainingDisabled,
                          onChange: () => {
                            p({ trainingDisabled: !d.trainingDisabled });
                          },
                        }),
                      }),
                    ],
                  }),
                K && (0, C.jsx)(eT, { gizmoEditorData: d, updateGizmo: p }),
                Y && (0, C.jsx)(L, { gizmoEditorData: d, updateGizmo: p }),
              ],
            }),
            T &&
              (0, C.jsx)(el, {
                text: null !== (o = d.instructions) && void 0 !== o ? o : "",
                onChange: (e) => {
                  p({ instructions: e });
                },
                onClose: () => z(!1),
                placeholder:
                  "What does this GPT do? How does it behave? What should it avoid doing?",
              }),
          ],
        });
      }
      let eT = H()(
          () =>
            i
              .e(8682)
              .then(i.bind(i, 43459))
              .then((e) => e.GizmoContactsEditor),
          { loadableGenerated: { webpack: () => [43459] } }
        ),
        ez = (0, Q.vU)({
          nameTooLong: {
            id: "gizmo.nameTooLong",
            defaultMessage:
              "GPT names cannot be longer than {length} characters.",
          },
          knowledgeExplanation: {
            id: "gizmo.knowledgeExplanation",
            defaultMessage: "Additional files for this GPT to reference.",
          },
          descriptionTooLong: {
            id: "gizmo.descriptionTooLong",
            defaultMessage:
              "GPT descriptions cannot be longer than {length} characters.",
          },
          instructionsTooLong: {
            id: "gizmo.instructionsTooLong",
            defaultMessage:
              "GPT instructions cannot be longer than {length} characters.",
          },
          disabledCustomActionsTooltip: {
            id: "gizmo.disabledCustomActionsTooltip",
            defaultMessage:
              "Custom actions are disabled for your workspace. Contact your admin to enable them.",
          },
          createActionLabel: {
            id: "gizmo.createActionLabel",
            defaultMessage: "Create new action",
          },
          maxActionsReached: {
            id: "gizmo.maxActionsReached",
            defaultMessage: "GPTs can have a maximum of {number} actions",
          },
        });
    },
    93031: function (e, t, i) {
      i.d(t, {
        bw: function () {
          return h;
        },
        hs: function () {
          return p;
        },
        sw: function () {
          return m;
        },
        x$: function () {
          return u;
        },
      });
      var n,
        r = i(39827),
        o = i(25660),
        a = i(5572),
        l = i(44183),
        s = i(37493);
      function c(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(i), !0).forEach(function (t) {
                (0, r.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : c(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      function u(e, t) {
        return null == t
          ? e
          : ((t = (function e(t) {
              return "object" == typeof t && null != t
                ? Array.isArray(t)
                  ? t.map(e)
                  : Object.fromEntries(
                      Object.entries(t).map((t) => {
                        let [i, n] = t;
                        return [i, e(n)];
                      })
                    )
                : null === t
                ? void 0
                : t;
            })(t)),
            d(d({}, e), t));
      }
      let p =
        (((n = {})[(n.Loading = 0)] = "Loading"),
        (n[(n.UploadingProfilePic = 1)] = "UploadingProfilePic"),
        (n[(n.GeneratingProfilePic = 2)] = "GeneratingProfilePic"),
        (n[(n.GizmoNameTooLong = 3)] = "GizmoNameTooLong"),
        (n[(n.GizmoDescriptionTooLong = 4)] = "GizmoDescriptionTooLong"),
        (n[(n.GizmoInstructionsTooLong = 5)] = "GizmoInstructionsTooLong"),
        (n[(n.NameEmpty = 6)] = "NameEmpty"),
        (n[(n.MissingPublicActionPrivacyPolicyURL = 7)] =
          "MissingPublicActionPrivacyPolicyURL"),
        (n[(n.MissingCategory = 8)] = "MissingCategory"),
        n);
      function m(e) {
        switch (e) {
          case p.Loading:
            return "Loading";
          case p.UploadingProfilePic:
            return "Uploading profile picture";
          case p.GeneratingProfilePic:
            return "Generating profile picture";
          case p.GizmoNameTooLong:
            return "GPT name too long";
          case p.GizmoDescriptionTooLong:
            return "GPT description too long";
          case p.GizmoInstructionsTooLong:
            return "GPT instructions too long";
          case p.NameEmpty:
            return "GPT name cannot be empty";
          case p.MissingPublicActionPrivacyPolicyURL:
            return "Public actions require valid privacy policy URLs";
          case p.MissingCategory:
            return "Public GPTs must have a category";
          default:
            return (0, l.Z)(e), "";
        }
      }
      function h(e, t, i) {
        var n, r, l, c, d, u;
        let m = e.name.length > s.aI,
          h =
            (null !==
              (n =
                null === (r = e.description) || void 0 === r
                  ? void 0
                  : r.length) && void 0 !== n
              ? n
              : 0) > s.P_,
          f =
            (null !==
              (l =
                null === (c = e.instructions) || void 0 === c
                  ? void 0
                  : c.length) && void 0 !== l
              ? l
              : 0) > s.vi,
          g = [];
        if (
          ((null == e ? void 0 : e.name) === "" && g.push(p.NameEmpty),
          m && g.push(p.GizmoNameTooLong),
          h && g.push(p.GizmoDescriptionTooLong),
          f && g.push(p.GizmoInstructionsTooLong),
          null != t && [a.Zz.Link, a.Zz.Marketplace].includes(t))
        )
          for (let t of null === (d = e.tools) || void 0 === d
            ? void 0
            : d.filter((e) => e.type === o.qK.JIT_PLUGIN)) {
            let e =
              null === (u = t.metadata) || void 0 === u
                ? void 0
                : u.privacy_policy_url;
            if (
              null == e ||
              !(function (e) {
                try {
                  return new URL(e), !0;
                } catch (e) {
                  return !1;
                }
              })(e)
            ) {
              g.push(p.MissingPublicActionPrivacyPolicyURL);
              break;
            }
          }
        return (
          t === a.Zz.Marketplace && null == i && g.push(p.MissingCategory), g
        );
      }
    },
  },
]);
//# sourceMappingURL=874-63d62bafaf8b1efd.js.map
