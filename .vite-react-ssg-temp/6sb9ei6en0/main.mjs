var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { ViteReactSSG } from "vite-react-ssg/single-page";
import * as React from "react";
import React__default, { Component, useState, useEffect, useCallback, useRef } from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X, Cross, Menu, Sparkles, BookOpen, ChevronRight, Target, Star, Heart, Users, Trophy, ClipboardList, UserCheck, Gift, Quote, Clock, CheckCircle, Shield, Instagram, Youtube, Mail, ArrowRight, TrendingUp, FileText, Download, ChevronDown, ArrowLeft, Crown, Flame, Calendar, Scroll, Share2, RotateCcw, Church, HandHeart, Loader2, ChevronLeft, Sun, MapPin, Cloud, Wind, HeartPulse, ShieldCheck, Send } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";
import { Toaster as Toaster$2, toast as toast$1 } from "sonner";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link, useNavigate, useLocation, useParams, BrowserRouter, Routes, Route } from "react-router-dom";
import fastCompare from "react-fast-compare";
import invariant from "invariant";
import shallowEqual from "shallowequal";
import { Slot } from "@radix-ui/react-slot";
import { jsPDF } from "jspdf";
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t)
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(ToastPrimitives.Root, { ref, className: cn(toastVariants({ variant }), className), ...props });
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Title, { ref, className: cn("text-sm font-semibold", className), ...props }));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Description, { ref, className: cn("text-sm opacity-90", className), ...props }));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster$1() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$2,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-surface group-[.toaster]:text-text group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-text-muted",
          actionButton: "group-[.toast]:bg-button group-[.toast]:text-button-text",
          cancelButton: "group-[.toast]:bg-background-muted group-[.toast]:text-text-muted"
        }
      },
      ...props
    }
  );
};
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
var TAG_NAMES = /* @__PURE__ */ ((TAG_NAMES2) => {
  TAG_NAMES2["BASE"] = "base";
  TAG_NAMES2["BODY"] = "body";
  TAG_NAMES2["HEAD"] = "head";
  TAG_NAMES2["HTML"] = "html";
  TAG_NAMES2["LINK"] = "link";
  TAG_NAMES2["META"] = "meta";
  TAG_NAMES2["NOSCRIPT"] = "noscript";
  TAG_NAMES2["SCRIPT"] = "script";
  TAG_NAMES2["STYLE"] = "style";
  TAG_NAMES2["TITLE"] = "title";
  TAG_NAMES2["FRAGMENT"] = "Symbol(react.fragment)";
  return TAG_NAMES2;
})(TAG_NAMES || {});
var SEO_PRIORITY_TAGS = {
  link: { rel: ["amphtml", "canonical", "alternate"] },
  script: { type: ["application/ld+json"] },
  meta: {
    charset: "",
    name: ["generator", "robots", "description"],
    property: [
      "og:type",
      "og:title",
      "og:url",
      "og:image",
      "og:image:alt",
      "og:description",
      "twitter:url",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:image:alt",
      "twitter:card",
      "twitter:site"
    ]
  }
};
var VALID_TAG_NAMES = Object.values(TAG_NAMES);
var REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HTML_TAG_MAP = Object.entries(REACT_TAG_MAP).reduce(
  (carry, [key, value]) => {
    carry[value] = key;
    return carry;
  },
  {}
);
var HELMET_ATTRIBUTE = "data-rh";
var HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
};
var getInnermostProperty = (propsList, property) => {
  for (let i = propsList.length - 1; i >= 0; i -= 1) {
    const props = propsList[i];
    if (Object.prototype.hasOwnProperty.call(props, property)) {
      return props[property];
    }
  }
  return null;
};
var getTitleFromPropsList = (propsList) => {
  let innermostTitle = getInnermostProperty(
    propsList,
    "title"
    /* TITLE */
  );
  const innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
  if (Array.isArray(innermostTitle)) {
    innermostTitle = innermostTitle.join("");
  }
  if (innermostTemplate && innermostTitle) {
    return innermostTemplate.replace(/%s/g, () => innermostTitle);
  }
  const innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || void 0;
};
var getOnChangeClientState = (propsList) => getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || (() => {
});
var getAttributesFromPropsList = (tagType, propsList) => propsList.filter((props) => typeof props[tagType] !== "undefined").map((props) => props[tagType]).reduce((tagAttrs, current) => ({ ...tagAttrs, ...current }), {});
var getBaseTagFromPropsList = (primaryAttributes, propsList) => propsList.filter((props) => typeof props[
  "base"
  /* BASE */
] !== "undefined").map((props) => props[
  "base"
  /* BASE */
]).reverse().reduce((innermostBaseTag, tag) => {
  if (!innermostBaseTag.length) {
    const keys = Object.keys(tag);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const lowerCaseAttributeKey = attributeKey.toLowerCase();
      if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
        return innermostBaseTag.concat(tag);
      }
    }
  }
  return innermostBaseTag;
}, []);
var warn = (msg) => console && typeof console.warn === "function" && console.warn(msg);
var getTagsFromPropsList = (tagName, primaryAttributes, propsList) => {
  const approvedSeenTags = {};
  return propsList.filter((props) => {
    if (Array.isArray(props[tagName])) {
      return true;
    }
    if (typeof props[tagName] !== "undefined") {
      warn(
        `Helmet: ${tagName} should be of type "Array". Instead found type "${typeof props[tagName]}"`
      );
    }
    return false;
  }).map((props) => props[tagName]).reverse().reduce((approvedTags, instanceTags) => {
    const instanceSeenTags = {};
    instanceTags.filter((tag) => {
      let primaryAttributeKey;
      const keys2 = Object.keys(tag);
      for (let i = 0; i < keys2.length; i += 1) {
        const attributeKey = keys2[i];
        const lowerCaseAttributeKey = attributeKey.toLowerCase();
        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === "rel" && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === "rel" && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        }
        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === "innerHTML" || attributeKey === "cssText" || attributeKey === "itemprop")) {
          primaryAttributeKey = attributeKey;
        }
      }
      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }
      const value = tag[primaryAttributeKey].toLowerCase();
      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }
      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }
      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }
      return false;
    }).reverse().forEach((tag) => approvedTags.push(tag));
    const keys = Object.keys(instanceSeenTags);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const tagUnion = {
        ...approvedSeenTags[attributeKey],
        ...instanceSeenTags[attributeKey]
      };
      approvedSeenTags[attributeKey] = tagUnion;
    }
    return approvedTags;
  }, []).reverse();
};
var getAnyTrueFromPropsList = (propsList, checkedTag) => {
  if (Array.isArray(propsList) && propsList.length) {
    for (let index = 0; index < propsList.length; index += 1) {
      const prop = propsList[index];
      if (prop[checkedTag]) {
        return true;
      }
    }
  }
  return false;
};
var reducePropsToState = (propsList) => ({
  baseTag: getBaseTagFromPropsList([
    "href"
    /* HREF */
  ], propsList),
  bodyAttributes: getAttributesFromPropsList("bodyAttributes", propsList),
  defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
  encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: getAttributesFromPropsList("htmlAttributes", propsList),
  linkTags: getTagsFromPropsList(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    propsList
  ),
  metaTags: getTagsFromPropsList(
    "meta",
    [
      "name",
      "charset",
      "http-equiv",
      "property",
      "itemprop"
      /* ITEM_PROP */
    ],
    propsList
  ),
  noscriptTags: getTagsFromPropsList("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], propsList),
  onChangeClientState: getOnChangeClientState(propsList),
  scriptTags: getTagsFromPropsList(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    propsList
  ),
  styleTags: getTagsFromPropsList("style", [
    "cssText"
    /* CSS_TEXT */
  ], propsList),
  title: getTitleFromPropsList(propsList),
  titleAttributes: getAttributesFromPropsList("titleAttributes", propsList),
  prioritizeSeoTags: getAnyTrueFromPropsList(propsList, HELMET_PROPS.PRIORITIZE_SEO_TAGS)
});
var flattenArray = (possibleArray) => Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
var checkIfPropsMatch = (props, toMatch) => {
  const keys = Object.keys(props);
  for (let i = 0; i < keys.length; i += 1) {
    if (toMatch[keys[i]] && toMatch[keys[i]].includes(props[keys[i]])) {
      return true;
    }
  }
  return false;
};
var prioritizer = (elementsList, propsToMatch) => {
  if (Array.isArray(elementsList)) {
    return elementsList.reduce(
      (acc, elementAttrs) => {
        if (checkIfPropsMatch(elementAttrs, propsToMatch)) {
          acc.priority.push(elementAttrs);
        } else {
          acc.default.push(elementAttrs);
        }
        return acc;
      },
      { priority: [], default: [] }
    );
  }
  return { default: elementsList, priority: [] };
};
var without = (obj, key) => {
  return {
    ...obj,
    [key]: void 0
  };
};
var SELF_CLOSING_TAGS = [
  "noscript",
  "script",
  "style"
  /* STYLE */
];
var encodeSpecialCharacters = (str, encode = true) => {
  if (encode === false) {
    return String(str);
  }
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var generateElementAttributesAsString = (attributes) => Object.keys(attributes).reduce((str, key) => {
  const attr = typeof attributes[key] !== "undefined" ? `${key}="${attributes[key]}"` : `${key}`;
  return str ? `${str} ${attr}` : attr;
}, "");
var generateTitleAsString = (type, title, attributes, encode) => {
  const attributeString = generateElementAttributesAsString(attributes);
  const flattenedTitle = flattenArray(title);
  return attributeString ? `<${type} ${HELMET_ATTRIBUTE}="true" ${attributeString}>${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>` : `<${type} ${HELMET_ATTRIBUTE}="true">${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>`;
};
var generateTagsAsString = (type, tags, encode = true) => tags.reduce((str, t) => {
  const tag = t;
  const attributeHtml = Object.keys(tag).filter(
    (attribute) => !(attribute === "innerHTML" || attribute === "cssText")
  ).reduce((string, attribute) => {
    const attr = typeof tag[attribute] === "undefined" ? attribute : `${attribute}="${encodeSpecialCharacters(tag[attribute], encode)}"`;
    return string ? `${string} ${attr}` : attr;
  }, "");
  const tagContent = tag.innerHTML || tag.cssText || "";
  const isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
  return `${str}<${type} ${HELMET_ATTRIBUTE}="true" ${attributeHtml}${isSelfClosing ? `/>` : `>${tagContent}</${type}>`}`;
}, "");
var convertElementAttributesToReactProps = (attributes, initProps = {}) => Object.keys(attributes).reduce((obj, key) => {
  const mapped = REACT_TAG_MAP[key];
  obj[mapped || key] = attributes[key];
  return obj;
}, initProps);
var generateTitleAsReactComponent = (_type, title, attributes) => {
  const initProps = {
    key: title,
    [HELMET_ATTRIBUTE]: true
  };
  const props = convertElementAttributesToReactProps(attributes, initProps);
  return [React__default.createElement("title", props, title)];
};
var generateTagsAsReactComponent = (type, tags) => tags.map((tag, i) => {
  const mappedTag = {
    key: i,
    [HELMET_ATTRIBUTE]: true
  };
  Object.keys(tag).forEach((attribute) => {
    const mapped = REACT_TAG_MAP[attribute];
    const mappedAttribute = mapped || attribute;
    if (mappedAttribute === "innerHTML" || mappedAttribute === "cssText") {
      const content = tag.innerHTML || tag.cssText;
      mappedTag.dangerouslySetInnerHTML = { __html: content };
    } else {
      mappedTag[mappedAttribute] = tag[attribute];
    }
  });
  return React__default.createElement(type, mappedTag);
});
var getMethodsForTag = (type, tags, encode = true) => {
  switch (type) {
    case "title":
      return {
        toComponent: () => generateTitleAsReactComponent(type, tags.title, tags.titleAttributes),
        toString: () => generateTitleAsString(type, tags.title, tags.titleAttributes, encode)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => convertElementAttributesToReactProps(tags),
        toString: () => generateElementAttributesAsString(tags)
      };
    default:
      return {
        toComponent: () => generateTagsAsReactComponent(type, tags),
        toString: () => generateTagsAsString(type, tags, encode)
      };
  }
};
var getPriorityMethods = ({ metaTags, linkTags, scriptTags, encode }) => {
  const meta = prioritizer(metaTags, SEO_PRIORITY_TAGS.meta);
  const link = prioritizer(linkTags, SEO_PRIORITY_TAGS.link);
  const script = prioritizer(scriptTags, SEO_PRIORITY_TAGS.script);
  const priorityMethods = {
    toComponent: () => [
      ...generateTagsAsReactComponent("meta", meta.priority),
      ...generateTagsAsReactComponent("link", link.priority),
      ...generateTagsAsReactComponent("script", script.priority)
    ],
    toString: () => (
      // generate all the tags as strings and concatenate them
      `${getMethodsForTag("meta", meta.priority, encode)} ${getMethodsForTag(
        "link",
        link.priority,
        encode
      )} ${getMethodsForTag("script", script.priority, encode)}`
    )
  };
  return {
    priorityMethods,
    metaTags: meta.default,
    linkTags: link.default,
    scriptTags: script.default
  };
};
var mapStateOnServer = (props) => {
  const {
    baseTag,
    bodyAttributes,
    encode = true,
    htmlAttributes,
    noscriptTags,
    styleTags,
    title = "",
    titleAttributes,
    prioritizeSeoTags
  } = props;
  let { linkTags, metaTags, scriptTags } = props;
  let priorityMethods = {
    toComponent: () => {
    },
    toString: () => ""
  };
  if (prioritizeSeoTags) {
    ({ priorityMethods, linkTags, metaTags, scriptTags } = getPriorityMethods(props));
  }
  return {
    priority: priorityMethods,
    base: getMethodsForTag("base", baseTag, encode),
    bodyAttributes: getMethodsForTag("bodyAttributes", bodyAttributes, encode),
    htmlAttributes: getMethodsForTag("htmlAttributes", htmlAttributes, encode),
    link: getMethodsForTag("link", linkTags, encode),
    meta: getMethodsForTag("meta", metaTags, encode),
    noscript: getMethodsForTag("noscript", noscriptTags, encode),
    script: getMethodsForTag("script", scriptTags, encode),
    style: getMethodsForTag("style", styleTags, encode),
    title: getMethodsForTag("title", { title, titleAttributes }, encode)
  };
};
var server_default = mapStateOnServer;
var instances = [];
var isDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var HelmetData = class {
  constructor(context, canUseDOM) {
    __publicField(this, "instances", []);
    __publicField(this, "canUseDOM", isDocument);
    __publicField(this, "context");
    __publicField(this, "value", {
      setHelmet: (serverState) => {
        this.context.helmet = serverState;
      },
      helmetInstances: {
        get: () => this.canUseDOM ? instances : this.instances,
        add: (instance) => {
          (this.canUseDOM ? instances : this.instances).push(instance);
        },
        remove: (instance) => {
          const index = (this.canUseDOM ? instances : this.instances).indexOf(instance);
          (this.canUseDOM ? instances : this.instances).splice(index, 1);
        }
      }
    });
    this.context = context;
    this.canUseDOM = canUseDOM || false;
    if (!canUseDOM) {
      context.helmet = server_default({
        baseTag: [],
        bodyAttributes: {},
        encodeSpecialCharacters: true,
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }
  }
};
var defaultValue = {};
var Context = React__default.createContext(defaultValue);
var HelmetProvider = (_a = class extends Component {
  constructor(props) {
    super(props);
    __publicField(this, "helmetData");
    this.helmetData = new HelmetData(this.props.context || {}, _a.canUseDOM);
  }
  render() {
    return /* @__PURE__ */ React__default.createElement(Context.Provider, { value: this.helmetData.value }, this.props.children);
  }
}, __publicField(_a, "canUseDOM", isDocument), _a);
var updateTags = (type, tags) => {
  const headElement = document.head || document.querySelector(
    "head"
    /* HEAD */
  );
  const tagNodes = headElement.querySelectorAll(`${type}[${HELMET_ATTRIBUTE}]`);
  const oldTags = [].slice.call(tagNodes);
  const newTags = [];
  let indexToDelete;
  if (tags && tags.length) {
    tags.forEach((tag) => {
      const newElement = document.createElement(type);
      for (const attribute in tag) {
        if (Object.prototype.hasOwnProperty.call(tag, attribute)) {
          if (attribute === "innerHTML") {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === "cssText") {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            const attr = attribute;
            const value = typeof tag[attr] === "undefined" ? "" : tag[attr];
            newElement.setAttribute(attribute, value);
          }
        }
      }
      newElement.setAttribute(HELMET_ATTRIBUTE, "true");
      if (oldTags.some((existingTag, index) => {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }
  oldTags.forEach((tag) => {
    var _a2;
    return (_a2 = tag.parentNode) == null ? void 0 : _a2.removeChild(tag);
  });
  newTags.forEach((tag) => headElement.appendChild(tag));
  return {
    oldTags,
    newTags
  };
};
var updateAttributes = (tagName, attributes) => {
  const elementTag = document.getElementsByTagName(tagName)[0];
  if (!elementTag) {
    return;
  }
  const helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
  const helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  const attributesToRemove = [...helmetAttributes];
  const attributeKeys = Object.keys(attributes);
  for (const attribute of attributeKeys) {
    const value = attributes[attribute] || "";
    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }
    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }
    const indexToSave = attributesToRemove.indexOf(attribute);
    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }
  for (let i = attributesToRemove.length - 1; i >= 0; i -= 1) {
    elementTag.removeAttribute(attributesToRemove[i]);
  }
  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};
var updateTitle = (title, attributes) => {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }
  updateAttributes("title", attributes);
};
var commitTagChanges = (newState, cb) => {
  const {
    baseTag,
    bodyAttributes,
    htmlAttributes,
    linkTags,
    metaTags,
    noscriptTags,
    onChangeClientState,
    scriptTags,
    styleTags,
    title,
    titleAttributes
  } = newState;
  updateAttributes("body", bodyAttributes);
  updateAttributes("html", htmlAttributes);
  updateTitle(title, titleAttributes);
  const tagUpdates = {
    baseTag: updateTags("base", baseTag),
    linkTags: updateTags("link", linkTags),
    metaTags: updateTags("meta", metaTags),
    noscriptTags: updateTags("noscript", noscriptTags),
    scriptTags: updateTags("script", scriptTags),
    styleTags: updateTags("style", styleTags)
  };
  const addedTags = {};
  const removedTags = {};
  Object.keys(tagUpdates).forEach((tagType) => {
    const { newTags, oldTags } = tagUpdates[tagType];
    if (newTags.length) {
      addedTags[tagType] = newTags;
    }
    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  if (cb) {
    cb();
  }
  onChangeClientState(newState, addedTags, removedTags);
};
var _helmetCallback = null;
var handleStateChangeOnClient = (newState) => {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }
  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(() => {
      commitTagChanges(newState, () => {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};
var client_default = handleStateChangeOnClient;
var HelmetDispatcher = class extends Component {
  constructor() {
    super(...arguments);
    __publicField(this, "rendered", false);
  }
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(nextProps, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const { helmetInstances } = this.props.context;
    helmetInstances.remove(this);
    this.emitChange();
  }
  emitChange() {
    const { helmetInstances, setHelmet } = this.props.context;
    let serverState = null;
    const state = reducePropsToState(
      helmetInstances.get().map((instance) => {
        const props = { ...instance.props };
        delete props.context;
        return props;
      })
    );
    if (HelmetProvider.canUseDOM) {
      client_default(state);
    } else if (server_default) {
      serverState = server_default(state);
    }
    setHelmet(serverState);
  }
  // componentWillMount will be deprecated
  // for SSR, initialize on first render
  // constructor is also unsafe in StrictMode
  init() {
    if (this.rendered) {
      return;
    }
    this.rendered = true;
    const { helmetInstances } = this.props.context;
    helmetInstances.add(this);
    this.emitChange();
  }
  render() {
    this.init();
    return null;
  }
};
var Helmet = (_b = class extends Component {
  shouldComponentUpdate(nextProps) {
    return !fastCompare(without(this.props, "helmetData"), without(nextProps, "helmetData"));
  }
  mapNestedChildrenToProps(child, nestedChildren) {
    if (!nestedChildren) {
      return null;
    }
    switch (child.type) {
      case "script":
      case "noscript":
        return {
          innerHTML: nestedChildren
        };
      case "style":
        return {
          cssText: nestedChildren
        };
      default:
        throw new Error(
          `<${child.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
        );
    }
  }
  flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren) {
    return {
      ...arrayTypeChildren,
      [child.type]: [
        ...arrayTypeChildren[child.type] || [],
        {
          ...newChildProps,
          ...this.mapNestedChildrenToProps(child, nestedChildren)
        }
      ]
    };
  }
  mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren) {
    switch (child.type) {
      case "title":
        return {
          ...newProps,
          [child.type]: nestedChildren,
          titleAttributes: { ...newChildProps }
        };
      case "body":
        return {
          ...newProps,
          bodyAttributes: { ...newChildProps }
        };
      case "html":
        return {
          ...newProps,
          htmlAttributes: { ...newChildProps }
        };
      default:
        return {
          ...newProps,
          [child.type]: { ...newChildProps }
        };
    }
  }
  mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
    let newFlattenedProps = { ...newProps };
    Object.keys(arrayTypeChildren).forEach((arrayChildName) => {
      newFlattenedProps = {
        ...newFlattenedProps,
        [arrayChildName]: arrayTypeChildren[arrayChildName]
      };
    });
    return newFlattenedProps;
  }
  warnOnInvalidChildren(child, nestedChildren) {
    invariant(
      VALID_TAG_NAMES.some((name) => child.type === name),
      typeof child.type === "function" ? `You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.` : `Only elements types ${VALID_TAG_NAMES.join(
        ", "
      )} are allowed. Helmet does not support rendering <${child.type}> elements. Refer to our API for more information.`
    );
    invariant(
      !nestedChildren || typeof nestedChildren === "string" || Array.isArray(nestedChildren) && !nestedChildren.some((nestedChild) => typeof nestedChild !== "string"),
      `Helmet expects a string as a child of <${child.type}>. Did you forget to wrap your children in braces? ( <${child.type}>{\`\`}</${child.type}> ) Refer to our API for more information.`
    );
    return true;
  }
  mapChildrenToProps(children, newProps) {
    let arrayTypeChildren = {};
    React__default.Children.forEach(children, (child) => {
      if (!child || !child.props) {
        return;
      }
      const { children: nestedChildren, ...childProps } = child.props;
      const newChildProps = Object.keys(childProps).reduce((obj, key) => {
        obj[HTML_TAG_MAP[key] || key] = childProps[key];
        return obj;
      }, {});
      let { type } = child;
      if (typeof type === "symbol") {
        type = type.toString();
      } else {
        this.warnOnInvalidChildren(child, nestedChildren);
      }
      switch (type) {
        case "Symbol(react.fragment)":
          newProps = this.mapChildrenToProps(nestedChildren, newProps);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          arrayTypeChildren = this.flattenArrayTypeChildren(
            child,
            arrayTypeChildren,
            newChildProps,
            nestedChildren
          );
          break;
        default:
          newProps = this.mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren);
          break;
      }
    });
    return this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
  }
  render() {
    const { children, ...props } = this.props;
    let newProps = { ...props };
    let { helmetData } = props;
    if (children) {
      newProps = this.mapChildrenToProps(children, newProps);
    }
    if (helmetData && !(helmetData instanceof HelmetData)) {
      const data = helmetData;
      helmetData = new HelmetData(data.context, true);
      delete newProps.helmetData;
    }
    return helmetData ? /* @__PURE__ */ React__default.createElement(HelmetDispatcher, { ...newProps, context: helmetData.value }) : /* @__PURE__ */ React__default.createElement(Context.Consumer, null, (context) => /* @__PURE__ */ React__default.createElement(HelmetDispatcher, { ...newProps, context }));
  }
}, __publicField(_b, "defaultProps", {
  defer: true,
  encodeSpecialCharacters: true,
  prioritizeSeoTags: false
}), _b);
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };
  return /* @__PURE__ */ jsx("nav", { className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-4 h-4 text-button-text" }) }),
        /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold text-accent", children: "Guide Catholic" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-8", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scrollToSection("beneficios"),
            className: "text-text-muted hover:text-text transition-colors",
            children: "Benefits"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scrollToSection("como-funciona"),
            className: "text-text-muted hover:text-text transition-colors",
            children: "How It Works"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scrollToSection("depoimentos"),
            className: "text-text-muted hover:text-text transition-colors",
            children: "Testimonials"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/blog",
            className: "text-text-muted hover:text-text transition-colors",
            children: "Blog"
          }
        ),
        /* @__PURE__ */ jsx(Link, { to: "/quiz-intro", children: /* @__PURE__ */ jsx(Button, { className: "bg-gradient-accent hover:opacity-90 text-button-text font-semibold", children: "Take the Quiz" }) })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "md:hidden p-2",
          onClick: () => setIsOpen(!isOpen),
          children: isOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6 text-text" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6 text-text" })
        }
      )
    ] }),
    isOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden py-4 border-t border-border/50 animate-fade-in", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => scrollToSection("beneficios"),
          className: "text-left py-2 text-text-muted hover:text-text transition-colors",
          children: "Benefits"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => scrollToSection("como-funciona"),
          className: "text-left py-2 text-text-muted hover:text-text transition-colors",
          children: "How It Works"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => scrollToSection("depoimentos"),
          className: "text-left py-2 text-text-muted hover:text-text transition-colors",
          children: "Testimonials"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/blog",
          className: "text-left py-2 text-text-muted hover:text-text transition-colors",
          onClick: () => setIsOpen(false),
          children: "Blog"
        }
      ),
      /* @__PURE__ */ jsx(Link, { to: "/quiz-intro", onClick: () => setIsOpen(false), children: /* @__PURE__ */ jsx(Button, { className: "w-full bg-gradient-accent hover:opacity-90 text-button-text font-semibold", children: "Take the Quiz" }) })
    ] }) })
  ] }) });
}
function HeroSection() {
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center justify-center pt-16 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft", style: {
        animationDelay: "1s"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-in", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 text-accent" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-text", children: "Catholic Quiz" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow animate-float", children: /* @__PURE__ */ jsx(Cross, { className: "w-8 h-8 text-accent-foreground" }) }),
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft animate-float", style: {
          animationDelay: "0.5s"
        }, children: /* @__PURE__ */ jsx(BookOpen, { className: "w-8 h-8 text-button-text" }) })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight animate-slide-up", children: [
        "Discover how your",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-accent", children: "faith journey" }),
        " is going"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto animate-slide-up", style: {
        animationDelay: "0.1s"
      }, children: [
        "Take the quiz and receive a complete assessment of your Catholic life. More than ",
        /* @__PURE__ */ jsx("strong", { className: "text-text", children: "10,000 Catholics" }),
        " have already discovered their level of faith practice."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up", style: {
        animationDelay: "0.2s"
      }, children: [
        /* @__PURE__ */ jsx(Link, { to: "/quiz-intro", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "h-14 px-8 bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold text-lg shadow-glow transition-all duration-300 group", children: [
          "Start the Quiz Now",
          /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" })
        ] }) }),
        /* @__PURE__ */ jsx("button", { onClick: () => {
          var _a2;
          return (_a2 = document.getElementById("como-funciona")) == null ? void 0 : _a2.scrollIntoView({
            behavior: "smooth"
          });
        }, className: "text-primary font-medium hover:underline flex items-center gap-2", children: "How does it work?" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-text-muted animate-fade-in", style: {
        animationDelay: "0.4s"
      }, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-500" }),
          /* @__PURE__ */ jsx("span", { children: "Quick and Easy" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("span", { children: "5 minutes" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-primary" }),
          /* @__PURE__ */ jsx("span", { children: "Instant Results" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-emerald-500" }),
          /* @__PURE__ */ jsx("span", { children: "No Registration" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" })
  ] });
}
const benefits = [
  {
    icon: Target,
    title: "Complete Assessment",
    description: "Evaluate your participation in sacramental life, prayer, and devotions of the Catholic Church."
  },
  {
    icon: Star,
    title: "Personalized Classification",
    description: "Discover your practitioner level: from 'Beginning of the Journey' to 'Exemplary Catholic'."
  },
  {
    icon: BookOpen,
    title: "Exclusive Guide",
    description: "Receive a PDF with prayers, devotions, and practical tips to grow in faith."
  },
  {
    icon: Heart,
    title: "Spiritual Reflection",
    description: "30 questions that will make you reflect on your relationship with God and the Church."
  },
  {
    icon: Users,
    title: "Faith Community",
    description: "Join thousands of Catholics seeking to live their faith better."
  },
  {
    icon: Trophy,
    title: "Follow-up",
    description: "Receive exclusive content to continue your spiritual journey."
  }
];
function BenefitsSection() {
  return /* @__PURE__ */ jsx("section", { id: "beneficios", className: "py-20 md:py-32 bg-secondary/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("span", { className: "text-accent font-semibold text-sm uppercase tracking-wider", children: "Why take the quiz?" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-primary mt-3 mb-4", children: "Discover the Benefits" }),
      /* @__PURE__ */ jsx("p", { className: "text-text-muted text-lg", children: "More than a quiz, an opportunity to reflect and grow in your Christian life." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: benefits.map((benefit, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-surface rounded-2xl p-6 border border-border/50 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow", children: /* @__PURE__ */ jsx(benefit.icon, { className: "w-7 h-7 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mb-3", children: benefit.title }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted leading-relaxed", children: benefit.description })
        ]
      },
      index
    )) })
  ] }) });
}
const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Answer 30 Questions",
    description: "Simple questions about your prayer life, Mass attendance, sacraments, and devotions."
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Receive Your Assessment",
    description: "Discover your level of Catholic life based on your honest answers."
  },
  {
    number: "03",
    icon: Gift,
    title: "Download Your Guide",
    description: "Receive an exclusive guide with prayers and tips to strengthen your faith journey."
  }
];
function HowItWorksSection() {
  return /* @__PURE__ */ jsx("section", { id: "como-funciona", className: "py-20 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("span", { className: "text-accent font-semibold text-sm uppercase tracking-wider", children: "Simple and Fast" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-primary mt-3 mb-4", children: "How Does It Work?" }),
      /* @__PURE__ */ jsx("p", { className: "text-text-muted text-lg", children: "In just 5 minutes you'll have a clear view of your spiritual life." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16", children: steps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      index < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-14 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "relative bg-surface rounded-2xl p-8 border border-border/50 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 bg-button text-button-text px-4 py-1 rounded-full text-sm font-bold", children: step.number }),
        /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-full bg-secondary mx-auto mb-6 flex items-center justify-center", children: /* @__PURE__ */ jsx(step.icon, { className: "w-10 h-10 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mb-3", children: step.title }),
        /* @__PURE__ */ jsx("p", { className: "text-text-muted", children: step.description })
      ] })
    ] }, index)) }),
    /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsxs(
      Button,
      {
        size: "lg",
        className: "h-14 px-10 bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold text-lg shadow-glow transition-all duration-300 group",
        children: [
          "Start Now",
          /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" })
        ]
      }
    ) }) })
  ] }) });
}
const testimonials = [{
  name: "Sarah Mitchell",
  location: "Austin, TX",
  rating: 5,
  text: "The quiz made me realize I need to pray the rosary daily again. Very edifying!",
  level: "Growing Catholic"
}, {
  name: "Michael Thompson",
  location: "Denver, CO",
  rating: 5,
  text: "Excellent tool for examining our faith life. I highly recommend it!",
  level: "Committed Catholic"
}, {
  name: "Emily Rodriguez",
  location: "Phoenix, AZ",
  rating: 5,
  text: "The guide I received is helping me a lot to organize my prayer life. Gratitude!",
  level: "Exemplary Practicing Catholic"
}, {
  name: "David Anderson",
  location: "Nashville, TN",
  rating: 5,
  text: "I was surprised by the result! It motivated me to participate more in my parish life.",
  level: "Seeking Catholic"
}, {
  name: "Jennifer Martinez",
  location: "Portland, OR",
  rating: 5,
  text: "The questions are very well crafted. They made me reflect deeply on my faith.",
  level: "Committed Catholic"
}, {
  name: "Robert O'Connor",
  location: "Boston, MA",
  rating: 5,
  text: "I shared it with my prayer group. Everyone loved it and is using it to grow in faith!",
  level: "Exemplary Practicing Catholic"
}];
function TestimonialsSection() {
  return /* @__PURE__ */ jsx("section", { id: "depoimentos", className: "py-20 md:py-32 bg-primary text-button-text", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("span", { className: "text-accent font-semibold text-sm uppercase tracking-wider", children: "Testimonials" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold mt-3 mb-4", children: "What Participants Say" }),
      /* @__PURE__ */ jsx("p", { className: "text-button-text/80 text-lg", children: "Thousands of Catholics have already taken the quiz and are growing in faith." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxs("div", { className: "bg-button-text/10 backdrop-blur-sm rounded-2xl p-6 border border-button-text/20", children: [
      /* @__PURE__ */ jsx(Quote, { className: "w-8 h-8 text-accent mb-4" }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-4", children: [...Array(testimonial.rating)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-accent text-accent" }, i)) }),
      /* @__PURE__ */ jsxs("p", { className: "text-button-text/90 mb-6 leading-relaxed", children: [
        '"',
        testimonial.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold", children: testimonial.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-button-text/60", children: testimonial.location })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs bg-accent/20 text-accent px-3 py-1 rounded-full", children: testimonial.level.split(" ").slice(-1) })
      ] })
    ] }, index)) })
  ] }) });
}
function FinalCTASection() {
  return /* @__PURE__ */ jsxs("section", { className: "py-20 md:py-32 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-surface rounded-3xl shadow-soft border border-border/50 p-8 md:p-12 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-full bg-gradient-accent mx-auto mb-8 flex items-center justify-center shadow-glow", children: /* @__PURE__ */ jsx(Cross, { className: "w-10 h-10 text-accent-foreground" }) }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-primary mb-4", children: "Ready to Discover Your Faith Level?" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-text-muted mb-8 max-w-xl mx-auto", children: "Take the quiz now and receive a complete assessment of your Catholic life. It's quick and transformative." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-accent" }),
          /* @__PURE__ */ jsx("span", { children: "Only 5 minutes" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-success" }),
          /* @__PURE__ */ jsx("span", { children: "30 questions" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-primary" }),
          /* @__PURE__ */ jsx("span", { children: "100% secure" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/quiz-intro", children: /* @__PURE__ */ jsxs(
        Button,
        {
          size: "lg",
          className: "h-16 px-12 bg-gradient-accent hover:opacity-90 text-accent-foreground font-bold text-xl shadow-glow transition-all duration-300 group",
          children: [
            "Start the Quiz Now",
            /* @__PURE__ */ jsx(ChevronRight, { className: "w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-sm text-text-muted", children: "Your answers are confidential and will not be shared." })
    ] }) }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-primary text-button-text py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-2xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-button-text/70 max-w-md mb-6", children: "Helping Catholics live their faith more deeply and consciously. Content, prayers, and tools for your spiritual journey." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#",
              className: "w-10 h-10 rounded-full bg-button-text/10 flex items-center justify-center hover:bg-button-text/20 transition-colors",
              children: /* @__PURE__ */ jsx(Instagram, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#",
              className: "w-10 h-10 rounded-full bg-button-text/10 flex items-center justify-center hover:bg-button-text/20 transition-colors",
              children: /* @__PURE__ */ jsx(Youtube, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#",
              className: "w-10 h-10 rounded-full bg-button-text/10 flex items-center justify-center hover:bg-button-text/20 transition-colors",
              children: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4", children: "Quiz" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-button-text/70", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/quiz", className: "hover:text-button-text transition-colors", children: "Take the Quiz" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#como-funciona", className: "hover:text-button-text transition-colors", children: "How It Works" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#depoimentos", className: "hover:text-button-text transition-colors", children: "Testimonials" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-button-text transition-colors", children: "Blog" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4", children: "Legal" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-button-text/70", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/terms/", className: "hover:text-button-text transition-colors", children: "Terms of Use" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/privacy/", className: "hover:text-button-text transition-colors", children: "Privacy Policy" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact/", className: "hover:text-button-text transition-colors", children: "Contact" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-button-text/20 mt-12 pt-8 text-center text-sm text-button-text/60", children: [
      /* @__PURE__ */ jsx("p", { children: "© 2024 Guide Catholic. All rights reserved." }),
      /* @__PURE__ */ jsx("p", { className: "mt-2", children: "Made with ❤️ for the glory of God" })
    ] })
  ] }) });
}
const Index = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Catholic Life Assessment Quiz | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Discover how your Catholic faith journey is going. Take our 30-question assessment and receive a personalized 10-page spiritual growth guide." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "catholic quiz, catholic faith assessment, christian life, sacraments, mass, prayer, rosary, confession, faith test, spiritual assessment, catholic life guide" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Catholic Life Assessment | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Take our 30-question Catholic life assessment and receive a personalized spiritual growth guide tailored to your journey." }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://guidecatholic.com/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Catholic Life Assessment | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Take our 30-question Catholic life assessment and receive a personalized spiritual growth guide." }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Guide Catholic",
        "url": "https://guidecatholic.com",
        "description": "Catholic life assessment and spiritual growth guides",
        "publisher": {
          "@type": "Organization",
          "name": "Guide Catholic",
          "url": "https://guidecatholic.com"
        }
      }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("main", { children: [
        /* @__PURE__ */ jsx(HeroSection, {}),
        /* @__PURE__ */ jsx(BenefitsSection, {}),
        /* @__PURE__ */ jsx(HowItWorksSection, {}),
        /* @__PURE__ */ jsx(TestimonialsSection, {}),
        /* @__PURE__ */ jsx(FinalCTASection, {})
      ] }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
function QuizIntro() {
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    {
      question: "How long does the assessment take?",
      answer: "The assessment takes approximately 10 minutes to complete. You can pause and resume at any time."
    },
    {
      question: "Do I really need to create an account?",
      answer: "No! You can start immediately without any registration. Just answer the questions and get your personalized guide instantly."
    },
    {
      question: "Is the guide really personalized?",
      answer: "Yes! Your guide is customized based on your answers across 5 spiritual areas: Eucharistic Life, Prayer Life, Formation, Devotions, and Christian Witness."
    },
    {
      question: "What's included in the 10-page PDF guide?",
      answer: "Your guide includes: personalized spiritual assessment, recommended prayers, sacramental guidance, daily and weekly action plans, and teachings from the Catholic Church."
    }
  ];
  const miniTestimonials = [
    { name: "Sarah M.", rating: 5, text: "Life-changing assessment!" },
    { name: "Michael T.", rating: 5, text: "Exactly what I needed for my faith journey." },
    { name: "Emily R.", rating: 5, text: "The personalized guide is incredible!" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Take Your Catholic Life Assessment - Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Discover your spiritual strengths and areas for growth with our comprehensive Catholic life assessment. Get your personalized 10-page guide instantly." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/quiz-intro/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 flex items-center justify-between", children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
        /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" })
      ] }),
      /* @__PURE__ */ jsx("main", { className: "relative py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6 animate-pulse", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Catholic Life Assessment" })
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6", children: [
            "Discover Your Path to",
            /* @__PURE__ */ jsx("span", { className: "text-accent block mt-2", children: "Deeper Catholic Faith" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted max-w-2xl mx-auto leading-relaxed mb-8", children: "Take our comprehensive 30-question assessment and receive a personalized 10-page spiritual growth guide tailored to your journey." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "text-lg px-8 py-6 h-auto group mb-6", children: [
            "Start Your Assessment Now",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-6 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 text-accent" }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-text", children: "12,847" }),
                " Catholics assessed"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4 text-accent" }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-text", children: "234" }),
                " today"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-center gap-4 mt-6", children: miniTestimonials.map((testimonial, index) => /* @__PURE__ */ jsxs("div", { className: "bg-surface border border-border rounded-lg px-4 py-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "flex gap-0.5", children: [...Array(testimonial.rating)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-accent text-accent" }, i)) }),
            /* @__PURE__ */ jsxs("span", { className: "text-xs text-text-muted", children: [
              '"',
              testimonial.text,
              '" - ',
              testimonial.name
            ] })
          ] }, index)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-4 py-2 rounded-full text-sm", children: [
            /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "⚡ Start now and get your guide in 10 minutes" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-surface border border-border rounded-2xl p-6 text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Clock, { className: "w-6 h-6 text-accent" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-bold text-text mb-2", children: "10 Minutes" }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-sm", children: "Quick and easy assessment that fits into your busy schedule" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-surface border border-border rounded-2xl p-6 text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(FileText, { className: "w-6 h-6 text-accent" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-bold text-text mb-2", children: "10-Page Guide" }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-sm", children: "Comprehensive personalized guide with prayers, teachings, and practices" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-surface border border-border rounded-2xl p-6 text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-accent" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-bold text-text mb-2", children: "No Account Needed" }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-sm", children: "Start immediately - no registration, no email required" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-3xl p-8 md:p-12 mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx(Download, { className: "w-8 h-8 text-accent" }),
            /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-text", children: "What You'll Receive" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-accent mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-text-muted", children: [
                /* @__PURE__ */ jsx("strong", { className: "text-text", children: "Personalized Assessment:" }),
                " Detailed analysis of your spiritual life across 5 key areas"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-accent mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-text-muted", children: [
                /* @__PURE__ */ jsx("strong", { className: "text-text", children: "10-Page PDF Guide:" }),
                " Complete with prayers, sacraments, devotions, and Church teachings"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-accent mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-text-muted", children: [
                /* @__PURE__ */ jsx("strong", { className: "text-text", children: "Practical Action Plan:" }),
                " Daily and weekly spiritual practices tailored to your level"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-accent mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-text-muted", children: [
                /* @__PURE__ */ jsx("strong", { className: "text-text", children: "Instant Access:" }),
                " Download your guide immediately after completing the assessment"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "text-lg px-8 py-6 h-auto group", children: [
            "Start Your Assessment Now",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" })
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-text-muted mt-4", children: "✓ No Registration  •  ✓ Instant Results" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-surface border border-border rounded-3xl p-8 md:p-12 mb-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-text text-center mb-8", children: "Frequently Asked Questions" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4 max-w-2xl mx-auto", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl overflow-hidden", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setOpenFaq(openFaq === index ? null : index),
                className: "w-full flex items-center justify-between p-4 text-left hover:bg-background-muted transition-colors",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-text", children: faq.question }),
                  /* @__PURE__ */ jsx(
                    ChevronDown,
                    {
                      className: `w-5 h-5 text-accent transition-transform ${openFaq === index ? "rotate-180" : ""}`
                    }
                  )
                ]
              }
            ),
            openFaq === index && /* @__PURE__ */ jsx("div", { className: "px-4 pb-4 text-text-muted", children: faq.answer })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-16 pt-12 border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Based on Catholic Church teachings and the Catechism" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-8 text-sm text-text-muted", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-accent" }),
              /* @__PURE__ */ jsx("span", { children: "30 Questions" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-accent" }),
              /* @__PURE__ */ jsx("span", { children: "5 Spiritual Areas" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-accent" }),
              /* @__PURE__ */ jsx("span", { children: "Personalized Results" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-accent" }),
              /* @__PURE__ */ jsx("span", { children: "Downloadable PDF" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30 rounded-3xl p-8 text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-3", children: "Ready to Transform Your Spiritual Life?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Join thousands of Catholics who have already discovered their personalized path to holiness." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "text-lg px-8 py-6 h-auto group", children: [
            "Begin Your Assessment",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" })
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-text-muted mt-4", children: "⏱️ Takes only 10 minutes • 🎁 Get instant access to your guide" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("footer", { className: "py-8 border-t border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-text-muted", children: "© 2024 Guide Catholic · All rights reserved" }) }) })
    ] })
  ] });
}
function QuizHeader() {
  return /* @__PURE__ */ jsx("header", { className: "text-center py-8 px-4 animate-fade-in", children: /* @__PURE__ */ jsx("h1", { className: "sr-only", children: "Quiz: How is your Catholic life? | Guide Catholic" }) });
}
function ProgressBar({ current, total }) {
  const percentage = current / total * 100;
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md mx-auto px-4 mb-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm text-text-muted mb-2", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "Pergunta ",
        current,
        " de ",
        total
      ] }),
      /* @__PURE__ */ jsxs("span", { children: [
        Math.round(percentage),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "h-2 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "h-full bg-gradient-accent transition-all duration-500 ease-out rounded-full",
        style: { width: `${percentage}%` }
      }
    ) })
  ] });
}
function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer
}) {
  return /* @__PURE__ */ jsx("div", { className: "w-full max-w-lg mx-auto px-4 animate-slide-up", children: /* @__PURE__ */ jsxs("div", { className: "bg-surface rounded-2xl shadow-soft p-6 md:p-8 border border-border/50", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center w-10 h-10 rounded-full bg-gradient-accent text-accent-foreground font-bold text-lg", children: question.id }),
      /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" })
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "font-display text-xl md:text-2xl text-text mb-8 leading-relaxed", children: question.question }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: question.options.map((option, index) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => onSelectAnswer(option.points),
        className: cn(
          "w-full p-4 rounded-xl text-left transition-all duration-300",
          "border-2 hover:shadow-md",
          selectedAnswer === option.points ? "border-accent bg-accent/10 shadow-glow" : "border-border/50 bg-background hover:border-primary/30 hover:bg-secondary/50"
        ),
        children: /* @__PURE__ */ jsx("span", { className: "font-medium text-text", children: option.label })
      },
      index
    )) })
  ] }) });
}
const questions = [
  {
    id: 1,
    question: "How often do you attend Holy Mass?",
    options: [
      { label: "Every Sunday and holy days", points: 3 },
      { label: "Almost every Sunday", points: 2.5 },
      { label: "A few times a month", points: 2 },
      { label: "Rarely, only on special occasions", points: 1 },
      { label: "Never or almost never", points: 0 }
    ]
  },
  {
    id: 2,
    question: "Do you try to arrive early to prepare spiritually before Mass?",
    options: [
      { label: "Always, I like to prepare in prayer", points: 3 },
      { label: "Frequently arrive early", points: 2.5 },
      { label: "Sometimes, when I can", points: 2 },
      { label: "Rarely, I usually arrive just in time", points: 1 },
      { label: "Never, I always arrive late", points: 0 }
    ]
  },
  {
    id: 3,
    question: "Do you actively participate in the liturgy (responses, songs, posture)?",
    options: [
      { label: "Yes, I participate with attention and devotion", points: 3 },
      { label: "Most of the time I participate well", points: 2.5 },
      { label: "Sometimes I get distracted during Mass", points: 2 },
      { label: "I rarely pay full attention", points: 1 },
      { label: "I don't actively participate", points: 0 }
    ]
  },
  {
    id: 4,
    question: "Do you receive Communion frequently when you are in a state of grace?",
    options: [
      { label: "Always when I'm in grace", points: 3 },
      { label: "Frequently receive Communion", points: 2.5 },
      { label: "Sometimes receive Communion", points: 2 },
      { label: "Rarely receive Communion", points: 1 },
      { label: "Never or almost never receive Communion", points: 0 }
    ]
  },
  {
    id: 5,
    question: "Do you attend Mass on holy days of obligation besides Sundays?",
    options: [
      { label: "Always attend on holy days", points: 3 },
      { label: "Most holy days", points: 2.5 },
      { label: "Some holy days", points: 2 },
      { label: "Rarely go on holy days", points: 1 },
      { label: "Don't attend on holy days", points: 0 }
    ]
  },
  {
    id: 6,
    question: "Do you serve or have you served in any Church ministry or pastoral work?",
    options: [
      { label: "Yes, I actively serve in ministry", points: 3 },
      { label: "I have served and plan to return", points: 2.5 },
      { label: "I participate occasionally", points: 2 },
      { label: "Never served, but I'm interested", points: 1 },
      { label: "Never served and not interested", points: 0 }
    ]
  },
  {
    id: 7,
    question: "How often do you make Eucharistic Adoration?",
    options: [
      { label: "Weekly or more", points: 3 },
      { label: "A few times a month", points: 2.5 },
      { label: "Once a month", points: 2 },
      { label: "Rarely, a few times a year", points: 1 },
      { label: "Never made adoration", points: 0 }
    ]
  },
  {
    id: 8,
    question: "Do you pray every day?",
    options: [
      { label: "Yes, I pray several times a day", points: 3 },
      { label: "Yes, I pray at least once a day", points: 2.5 },
      { label: "I pray most days", points: 2 },
      { label: "I pray only some days", points: 1 },
      { label: "Rarely or never pray", points: 0 }
    ]
  },
  {
    id: 9,
    question: "Do you set aside a specific time of day for personal prayer?",
    options: [
      { label: "Yes, I have a fixed prayer time", points: 3 },
      { label: "Most days I have this moment", points: 2.5 },
      { label: "Sometimes I can set aside time", points: 2 },
      { label: "I rarely have specific time", points: 1 },
      { label: "I don't have a reserved moment", points: 0 }
    ]
  },
  {
    id: 10,
    question: "Do you pray the Holy Rosary? How often?",
    options: [
      { label: "Daily", points: 3 },
      { label: "Several times a week", points: 2.5 },
      { label: "Once a week", points: 2 },
      { label: "Rarely, a few times a month", points: 1 },
      { label: "Never or almost never", points: 0 }
    ]
  },
  {
    id: 11,
    question: "Do you pray the Angelus or other traditional Church prayers?",
    options: [
      { label: "Yes, I pray daily", points: 3 },
      { label: "Frequently pray", points: 2.5 },
      { label: "Sometimes pray", points: 2 },
      { label: "Rarely pray", points: 1 },
      { label: "Don't know or never pray", points: 0 }
    ]
  },
  {
    id: 12,
    question: "Do you pray before meals or thank God daily?",
    options: [
      { label: "Always, at all meals", points: 3 },
      { label: "Frequently give thanks", points: 2.5 },
      { label: "Sometimes I remember to give thanks", points: 2 },
      { label: "Rarely do this", points: 1 },
      { label: "Never pray before meals", points: 0 }
    ]
  },
  {
    id: 13,
    question: "Do you usually pray for other people's needs?",
    options: [
      { label: "Yes, I pray daily for others", points: 3 },
      { label: "Frequently pray for others", points: 2.5 },
      { label: "Sometimes, when they ask me", points: 2 },
      { label: "I rarely remember", points: 1 },
      { label: "Never pray for others", points: 0 }
    ]
  },
  {
    id: 14,
    question: "Does prayer help you make important decisions?",
    options: [
      { label: "I always seek God in decisions", points: 3 },
      { label: "Frequently ask for guidance", points: 2.5 },
      { label: "Sometimes turn to prayer", points: 2 },
      { label: "Rarely think of praying", points: 1 },
      { label: "Never relate prayer and decisions", points: 0 }
    ]
  },
  {
    id: 15,
    question: "Do you know the 7 sacraments of the Catholic Church?",
    options: [
      { label: "Yes, I know all of them and their importance", points: 3 },
      { label: "I know most of them", points: 2.5 },
      { label: "I know some", points: 2 },
      { label: "I know very little", points: 1 },
      { label: "I don't know the sacraments", points: 0 }
    ]
  },
  {
    id: 16,
    question: "How often do you go to Confession?",
    options: [
      { label: "Monthly or more", points: 3 },
      { label: "Every 2-3 months", points: 2.5 },
      { label: "A few times a year", points: 2 },
      { label: "Once a year or less", points: 1 },
      { label: "Haven't confessed in years", points: 0 }
    ]
  },
  {
    id: 17,
    question: "Do you read the Catechism or use it to clarify faith questions?",
    options: [
      { label: "Yes, I consult it regularly", points: 3 },
      { label: "Sometimes consult it", points: 2.5 },
      { label: "Rarely, but I've read excerpts", points: 2 },
      { label: "Never read it, but I'm interested", points: 1 },
      { label: "Never read it and don't know it", points: 0 }
    ]
  },
  {
    id: 18,
    question: "Do you participate or have you participated in Bible study/catechesis groups?",
    options: [
      { label: "Yes, I currently participate", points: 3 },
      { label: "I have participated and it was very good", points: 2.5 },
      { label: "Only participated in childhood", points: 2 },
      { label: "Never participated, but I want to", points: 1 },
      { label: "Never participated", points: 0 }
    ]
  },
  {
    id: 19,
    question: "Are you aware of the importance of the Eucharist and Confession for Christian life?",
    options: [
      { label: "Yes, they are central to my faith", points: 3 },
      { label: "I understand their importance well", points: 2.5 },
      { label: "I have a notion of their importance", points: 2 },
      { label: "I understand little about this", points: 1 },
      { label: "I don't understand their importance", points: 0 }
    ]
  },
  {
    id: 20,
    question: "Do you try to avoid serious sins and live in a state of grace?",
    options: [
      { label: "Yes, it's my priority", points: 3 },
      { label: "I frequently make an effort", points: 2.5 },
      { label: "I try, but I have difficulty", points: 2 },
      { label: "I rarely think about it", points: 1 },
      { label: "I don't worry about it", points: 0 }
    ]
  },
  {
    id: 21,
    question: "Do you make novenas? How often?",
    options: [
      { label: "Yes, I frequently make novenas", points: 3 },
      { label: "I make a few novenas a year", points: 2.5 },
      { label: "Sometimes I make them", points: 2 },
      { label: "I rarely make novenas", points: 1 },
      { label: "Never made a novena", points: 0 }
    ]
  },
  {
    id: 22,
    question: "Do you have Marian devotion (to Our Lady)?",
    options: [
      { label: "Yes, I have great devotion", points: 3 },
      { label: "I have moderate devotion", points: 2.5 },
      { label: "I have some devotion", points: 2 },
      { label: "Little devotion", points: 1 },
      { label: "I don't have Marian devotion", points: 0 }
    ]
  },
  {
    id: 23,
    question: "Do you follow the liturgical calendar and its celebrations?",
    options: [
      { label: "Yes, I follow closely", points: 3 },
      { label: "I follow the main feasts", points: 2.5 },
      { label: "I know some dates", points: 2 },
      { label: "I know very little", points: 1 },
      { label: "I don't follow", points: 0 }
    ]
  },
  {
    id: 24,
    question: "Do you have devotion to any saint and ask for their intercession?",
    options: [
      { label: "Yes, I have devotional saints", points: 3 },
      { label: "I have a patron saint", points: 2.5 },
      { label: "Sometimes I ask for intercession", points: 2 },
      { label: "I rarely ask the saints", points: 1 },
      { label: "I don't have devotion to saints", points: 0 }
    ]
  },
  {
    id: 25,
    question: "Do you keep sacramentals at home (holy water, cross, images) and use them with faith?",
    options: [
      { label: "Yes, I have and use them with devotion", points: 3 },
      { label: "I have some and use them sometimes", points: 2.5 },
      { label: "I have them, but use them little", points: 2 },
      { label: "I have few items", points: 1 },
      { label: "I don't have sacramentals at home", points: 0 }
    ]
  },
  {
    id: 26,
    question: "Do you consume Catholic content (homilies, reflections, videos)?",
    options: [
      { label: "Yes, daily", points: 3 },
      { label: "Several times a week", points: 2.5 },
      { label: "Weekly", points: 2 },
      { label: "Rarely", points: 1 },
      { label: "Never consume", points: 0 }
    ]
  },
  {
    id: 27,
    question: "Do you contribute to the community (tithe, donations, volunteering)?",
    options: [
      { label: "Yes, I contribute regularly", points: 3 },
      { label: "I contribute frequently", points: 2.5 },
      { label: "I contribute sometimes", points: 2 },
      { label: "I rarely contribute", points: 1 },
      { label: "I don't contribute", points: 0 }
    ]
  },
  {
    id: 28,
    question: "Do you try to live Christian values at work, family, and relationships?",
    options: [
      { label: "Yes, it's my way of life", points: 3 },
      { label: "I frequently make an effort", points: 2.5 },
      { label: "Sometimes I succeed", points: 2 },
      { label: "I have difficulty with this", points: 1 },
      { label: "I don't think about it daily", points: 0 }
    ]
  },
  {
    id: 29,
    question: "Do you share your faith with other people?",
    options: [
      { label: "Yes, I actively evangelize", points: 3 },
      { label: "I frequently talk about faith", points: 2.5 },
      { label: "Sometimes I share", points: 2 },
      { label: "I rarely talk about faith", points: 1 },
      { label: "I never share my faith", points: 0 }
    ]
  },
  {
    id: 30,
    question: "Do you seek to grow spiritually with study, prayer, and frequent confession?",
    options: [
      { label: "Yes, I constantly seek to grow", points: 3 },
      { label: "I frequently seek to grow", points: 2.5 },
      { label: "Sometimes I dedicate myself to this", points: 2 },
      { label: "I rarely think about it", points: 1 },
      { label: "I don't seek spiritual growth", points: 0 }
    ]
  }
];
const SESSION_KEY = "quiz_session_id";
const ANSWERS_KEY = "quiz_answers";
const SCORE_KEY = "quiz_score";
const useQuizSession = () => {
  const [sessionId, setSessionId] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const storedSessionId = localStorage.getItem(SESSION_KEY);
    if (storedSessionId) {
      setSessionId(storedSessionId);
      loadSession(storedSessionId);
    }
  }, []);
  const loadSession = useCallback(async (id) => {
    try {
      setLoading(true);
      const answers = JSON.parse(localStorage.getItem(ANSWERS_KEY) || "{}");
      const score = localStorage.getItem(SCORE_KEY);
      const sessionData = {
        id,
        answers,
        score: score ? parseFloat(score) : null,
        paid: false,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      setSession(sessionData);
      setError(null);
    } catch (err) {
      console.error("Error loading session:", err);
      setError("Failed to load session");
    } finally {
      setLoading(false);
    }
  }, []);
  const createSession = useCallback(async () => {
    try {
      setLoading(true);
      const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem(SESSION_KEY, newSessionId);
      localStorage.setItem(ANSWERS_KEY, "{}");
      localStorage.removeItem(SCORE_KEY);
      setSessionId(newSessionId);
      await loadSession(newSessionId);
      return newSessionId;
    } catch (err) {
      console.error("Error creating session:", err);
      setError("Failed to create session");
      return null;
    } finally {
      setLoading(false);
    }
  }, [loadSession]);
  const updateAnswers = useCallback(async (answers) => {
    if (!sessionId) return;
    try {
      localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
      if (session) {
        setSession({ ...session, answers });
      }
    } catch (err) {
      console.error("Error updating answers:", err);
      setError("Failed to update answers");
    }
  }, [sessionId, session]);
  const updateScore = useCallback(async (score) => {
    if (!sessionId) return;
    try {
      localStorage.setItem(SCORE_KEY, score.toString());
      if (session) {
        setSession({ ...session, score });
      }
    } catch (err) {
      console.error("Error updating score:", err);
      setError("Failed to update score");
    }
  }, [sessionId, session]);
  const markAsPaid = useCallback(async () => {
    if (!sessionId) return;
    try {
      if (session) {
        setSession({ ...session, paid: true });
      }
    } catch (err) {
      console.error("Error marking as paid:", err);
      setError("Failed to mark as paid");
    }
  }, [sessionId, session]);
  const clearSession = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(ANSWERS_KEY);
    localStorage.removeItem(SCORE_KEY);
    setSessionId(null);
    setSession(null);
  }, []);
  return {
    sessionId,
    session,
    loading,
    error,
    createSession,
    updateAnswers,
    updateScore,
    markAsPaid,
    clearSession
  };
};
const QuizPage = () => {
  const navigate = useNavigate();
  const { sessionId, session, createSession, updateAnswers, clearSession } = useQuizSession();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const initRef = useRef(false);
  useEffect(() => {
    const initSession = async () => {
      if (initRef.current) return;
      initRef.current = true;
      if (!sessionId) {
        createSession();
      } else if (session) {
        if (session.answers && session.answers.length > 0) {
          if (session.completed_at) {
            clearSession();
            createSession();
          } else {
            setAnswers(session.answers);
            setCurrentQuestion(session.answers.length);
          }
        }
      }
    };
    initSession();
  }, [session]);
  const handleSelectAnswer = useCallback(async (points) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = points;
    setAnswers(newAnswers);
    updateAnswers(newAnswers).catch((err) => {
      console.error("Error saving answers:", err);
    });
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        navigate("/result", {
          state: {
            testType: "spiritual_gifts",
            answers: newAnswers,
            score: newAnswers.reduce((a, b) => a + b, 0),
            maxScore: newAnswers.length * 3,
            localMode: true
            // Flag to bypass payment check
          }
        });
      }
    }, 300);
  }, [answers, currentQuestion, navigate, updateAnswers]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen flex flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 z-10", children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "ghost",
          size: "sm",
          onClick: () => navigate("/"),
          className: "text-text-muted hover:text-text",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
            "Back"
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(QuizHeader, {}),
      /* @__PURE__ */ jsxs("main", { className: "flex-1 flex flex-col justify-center py-8", children: [
        /* @__PURE__ */ jsx(ProgressBar, { current: currentQuestion + 1, total: questions.length }),
        /* @__PURE__ */ jsx(
          QuestionCard,
          {
            question: questions[currentQuestion],
            selectedAnswer: answers[currentQuestion] ?? null,
            onSelectAnswer: handleSelectAnswer
          },
          currentQuestion
        )
      ] }),
      /* @__PURE__ */ jsx("footer", { className: "py-6 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-text-muted", children: "© 2024 Guide Catholic · All rights reserved" }) })
    ] })
  ] });
};
const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state;
  useEffect(() => {
    if (locationState == null ? void 0 : locationState.localMode) {
      navigate("/result", {
        state: locationState,
        replace: true
      });
    } else {
      navigate("/quiz", { replace: true });
    }
  }, [locationState, navigate]);
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: /* @__PURE__ */ jsx("p", { className: "text-text-muted", children: "Redirecting..." }) });
};
const generateCatholicGuidePDF = ({ userName, score, levelTitle }) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  const firstName = userName.split(" ")[0];
  const centerText = (text, y2, size = 12) => {
    doc.setFontSize(size);
    const textWidth = doc.getTextWidth(text);
    doc.text(text, (pageWidth - textWidth) / 2, y2);
  };
  const addParagraph = (text, startY, fontSize = 11) => {
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, contentWidth);
    doc.text(lines, margin, startY);
    return startY + lines.length * (fontSize * 0.4);
  };
  const addTitle = (text, y2) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(12, 75, 148);
    centerText(text, y2, 16);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal");
  };
  const addSubtitle = (text, y2) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(212, 160, 23);
    doc.text(text, margin, y2);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal");
    return y2 + 8;
  };
  const addPageNumber = (pageNum) => {
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128);
    centerText(`- ${pageNum} -`, pageHeight - 25, 10);
    doc.setTextColor(0, 0, 0);
  };
  const addFooter = () => {
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    centerText("Catholic Life Guide | Guide Catholic", pageHeight - 15, 8);
    doc.setFontSize(9);
    doc.setTextColor(12, 75, 148);
    centerText("www.guidecatholic.com", pageHeight - 8, 9);
    doc.setTextColor(0, 0, 0);
  };
  doc.setFillColor(12, 75, 148);
  doc.rect(0, 0, pageWidth, 80, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  centerText("COMPLETE GUIDE", 35, 28);
  centerText("TO CATHOLIC LIFE", 50, 24);
  doc.setFont("helvetica", "normal");
  centerText("Prayers, Devotions and Church Teachings", 65, 12);
  doc.setTextColor(0, 0, 0);
  doc.setDrawColor(212, 160, 23);
  doc.setLineWidth(3);
  doc.line(pageWidth / 2, 100, pageWidth / 2, 140);
  doc.line(pageWidth / 2 - 15, 115, pageWidth / 2 + 15, 115);
  doc.setFontSize(14);
  centerText(`Specially prepared for`, 160, 14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(12, 75, 148);
  centerText(userName, 175, 20);
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  centerText(`Quiz Result: ${score}%`, 195, 12);
  centerText(`Level: ${levelTitle}`, 205, 12);
  doc.setFontSize(10);
  doc.setTextColor(128, 128, 128);
  centerText('"Seek first the Kingdom of God"', 230, 11);
  centerText("— Matthew 6:33", 240, 10);
  addFooter();
  addPageNumber(1);
  doc.addPage();
  addTitle("Introduction: The Call to Holiness", 30);
  let y = 50;
  y = addParagraph(`Dear ${firstName},`, y);
  y += 8;
  y = addParagraph(
    "This Guide was prepared with great care to help you on your faith journey. The Catholic Church, founded by Our Lord Jesus Christ, is the repository of the fullness of revealed truth and the means of salvation.",
    y
  );
  y += 10;
  y = addParagraph(
    'The Second Vatican Council reminds us that all the faithful are called to holiness: "All the faithful of whatever state or condition are called to the fullness of Christian life and to the perfection of charity" (Lumen Gentium, 40). This is not a privilege of the few, but the vocation of all the baptized.',
    y
  );
  y += 10;
  y = addParagraph(
    "In this guide you will find: fundamental prayers of the Catholic tradition, explanations about the Sacraments, Marian devotions, practices of piety, and guidance for growing in spiritual life. Everything is based on the Catechism of the Catholic Church and Sacred Tradition.",
    y
  );
  y += 10;
  y = addSubtitle("How to use this Guide", y);
  y = addParagraph(
    "• Set aside a moment of the day for reading and prayer\n• Don't rush - absorb each teaching\n• Practice the prayers daily\n• Seek confession and the Eucharist frequently\n• Ask for the intercession of Our Lady",
    y
  );
  y += 10;
  y = addParagraph(
    `"Prayer is the raising of one's mind and heart to God or the requesting of good things from God" (St. John Damascene). May this guide be an instrument of grace in your life.`,
    y
  );
  addFooter();
  addPageNumber(2);
  doc.addPage();
  addTitle("Fundamental Catholic Prayers", 30);
  y = 45;
  y = addSubtitle("Sign of the Cross", y);
  y = addParagraph(
    "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
    y
  );
  y += 5;
  y = addParagraph(
    "The Sign of the Cross is the first prayer we learn and the distinctive mark of the Christian. By making it, we profess faith in the Holy Trinity and remember the Passion of Christ.",
    y,
    10
  );
  y += 8;
  y = addSubtitle("Our Father", y);
  y = addParagraph(
    "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
    y
  );
  y += 5;
  y = addParagraph(
    `This prayer was taught by Jesus himself to the Apostles. It is called the "Lord's Prayer" and contains all the petitions necessary for our salvation.`,
    y,
    10
  );
  y += 8;
  y = addSubtitle("Hail Mary", y);
  y = addParagraph(
    "Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
    y
  );
  y += 5;
  y = addParagraph(
    "The first part is the greeting of the Archangel Gabriel and St. Elizabeth to Mary. The second is the Church's supplication to the Mother of God.",
    y,
    10
  );
  y += 8;
  y = addSubtitle("Glory Be", y);
  y = addParagraph(
    "Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.",
    y
  );
  y += 8;
  y = addSubtitle("Apostles' Creed", y);
  y = addParagraph(
    "I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.",
    y,
    10
  );
  addFooter();
  addPageNumber(3);
  doc.addPage();
  addTitle("The Seven Sacraments of the Church", 30);
  y = 45;
  y = addParagraph(
    "The Sacraments are sensible and efficacious signs of grace, instituted by Christ and entrusted to the Church. Through them, divine life is communicated to us. There are seven Sacraments:",
    y
  );
  y += 10;
  y = addSubtitle("1. Baptism", y);
  y = addParagraph(
    'Gateway to Christian life. Through Baptism we are freed from original sin, reborn as children of God and become members of the Church. "Whoever believes and is baptized will be saved" (Mk 16:16).',
    y,
    10
  );
  y += 8;
  y = addSubtitle("2. Confirmation", y);
  y = addParagraph(
    "Sacrament that completes Baptism and confers the Holy Spirit in a special way, strengthening us to be witnesses of Christ. We receive the seven gifts of the Holy Spirit.",
    y,
    10
  );
  y += 8;
  y = addSubtitle("3. Eucharist", y);
  y = addParagraph(
    '"Source and summit of all Christian life" (LG 11). In the Eucharist, we receive the very Body and Blood of Christ under the species of bread and wine. It is the Sacrament of Love.',
    y,
    10
  );
  y += 8;
  y = addSubtitle("4. Penance (Confession)", y);
  y = addParagraph(
    `Sacrament of reconciliation with God and with the Church. Through sincere confession and the priest's absolution, our sins are forgiven. "Whose sins you forgive are forgiven" (Jn 20:23).`,
    y,
    10
  );
  y += 8;
  y = addSubtitle("5. Anointing of the Sick", y);
  y = addParagraph(
    "Sacrament that confers special grace to the faithful facing serious illness or old age. It strengthens the soul and can bring healing of the body, if it is God's will.",
    y,
    10
  );
  y += 8;
  y = addSubtitle("6. Holy Orders", y);
  y = addParagraph(
    "Sacrament by which men are ordained bishops, priests or deacons, receiving sacred power to exercise ministry in the name of Christ.",
    y,
    10
  );
  y += 8;
  y = addSubtitle("7. Matrimony", y);
  y = addParagraph(
    'Sacrament that unites man and woman in an indissoluble covenant, making them cooperators with God in the transmission of life. "What God has joined together, let no one separate" (Mt 19:6).',
    y,
    10
  );
  addFooter();
  addPageNumber(4);
  doc.addPage();
  addTitle("Devotion to Our Lady", 30);
  y = 45;
  y = addParagraph(
    'The Virgin Mary occupies a central place in the Catholic faith. She is Mother of God (Theotokos), Mother of the Church and our spiritual Mother. Jesus, from the height of the Cross, entrusted her to us: "Behold, your mother" (Jn 19:27).',
    y
  );
  y += 10;
  y = addSubtitle("The Marian Dogmas", y);
  y = addParagraph(
    "• Divine Motherhood: Mary is truly Mother of God\n• Perpetual Virginity: Mary was virgin before, during and after childbirth\n• Immaculate Conception: Mary was preserved from original sin\n• Assumption: Mary was taken up to Heaven in body and soul",
    y,
    10
  );
  y += 10;
  y = addSubtitle("The Holy Rosary", y);
  y = addParagraph(
    'The Rosary is the prayer most recommended by the Church to honor Our Lady. St. Pio of Pietrelcina said: "The Rosary is the weapon of these times." It consists of meditation on the mysteries of the life of Christ and Mary.',
    y
  );
  y += 8;
  y = addParagraph(
    "JOYFUL MYSTERIES (Monday and Saturday):\n1. The Annunciation\n2. The Visitation\n3. The Nativity\n4. The Presentation\n5. Finding in the Temple",
    y,
    10
  );
  y += 8;
  y = addParagraph(
    "SORROWFUL MYSTERIES (Tuesday and Friday):\n1. The Agony in the Garden\n2. The Scourging at the Pillar\n3. The Crowning with Thorns\n4. The Carrying of the Cross\n5. The Crucifixion",
    y,
    10
  );
  y += 8;
  y = addParagraph(
    "GLORIOUS MYSTERIES (Wednesday and Sunday):\n1. The Resurrection\n2. The Ascension\n3. The Descent of the Holy Spirit\n4. The Assumption of Mary\n5. The Coronation of Mary",
    y,
    10
  );
  y += 8;
  y = addParagraph(
    "LUMINOUS MYSTERIES (Thursday):\n1. The Baptism in the Jordan\n2. The Wedding at Cana\n3. The Proclamation of the Kingdom\n4. The Transfiguration\n5. The Institution of the Eucharist",
    y,
    10
  );
  addFooter();
  addPageNumber(5);
  doc.addPage();
  addTitle("Holy Mass: Source and Summit", 30);
  y = 45;
  y = addParagraph(
    `Holy Mass is the unbloody renewal of Christ's Sacrifice on Calvary. In it, Jesus offers himself to the Father through the hands of the priest for our salvation. The Second Vatican Council teaches that the Eucharist is "source and summit of all Christian life" (Lumen Gentium, 11).`,
    y
  );
  y += 10;
  y = addSubtitle("Structure of the Mass", y);
  y = addParagraph(
    "INTRODUCTORY RITES:\n• Entrance and Greeting\n• Penitential Act\n• Gloria (Sundays and feasts)\n• Collect Prayer",
    y,
    10
  );
  y += 8;
  y = addParagraph(
    "LITURGY OF THE WORD:\n• First Reading (Old Testament)\n• Responsorial Psalm\n• Second Reading (Epistles)\n• Gospel Acclamation (Alleluia)\n• Gospel\n• Homily\n• Profession of Faith (Creed)\n• Prayer of the Faithful",
    y,
    10
  );
  y += 8;
  y = addParagraph(
    "LITURGY OF THE EUCHARIST:\n• Offertory (presentation of gifts)\n• Prayer over the Offerings\n• Preface and Holy\n• Eucharistic Prayer (Consecration)\n• Our Father\n• Sign of Peace\n• Breaking of Bread (Lamb of God)\n• Communion",
    y,
    10
  );
  y += 8;
  y = addParagraph(
    "CONCLUDING RITES:\n• Announcements\n• Final Blessing\n• Dismissal",
    y,
    10
  );
  y += 10;
  y = addSubtitle("Dispositions for Communion", y);
  y = addParagraph(
    "To receive Communion worthily one must:\n• Be in a state of grace (without mortal sin)\n• Observe the Eucharistic fast of 1 hour\n• Have right intention and devotion",
    y,
    10
  );
  y += 8;
  y = addParagraph(
    'St. Pio of Pietrelcina stated: "It would be easier for the earth to exist without the sun than without Holy Mass." Do not fail to participate at least every Sunday and holy days of obligation.',
    y
  );
  addFooter();
  addPageNumber(6);
  doc.addPage();
  addTitle("The Sacrament of Confession", 30);
  y = 45;
  y = addParagraph(
    '"Receive the Holy Spirit. Whose sins you forgive are forgiven" (Jn 20:22-23). Jesus instituted the Sacrament of Confession so that, even after Baptism, we can obtain forgiveness of sins committed.',
    y
  );
  y += 10;
  y = addSubtitle("How to make a good Confession", y);
  y = addParagraph(
    "1. EXAMINATION OF CONSCIENCE: Before confession, examine your conscience in light of the Ten Commandments and the precepts of the Church. Ask the Holy Spirit to enlighten your memory.",
    y,
    10
  );
  y += 6;
  y = addParagraph(
    "2. CONTRITION: Have sincere sorrow for sins committed, not only for fear of punishment, but for having offended God who is infinitely good.",
    y,
    10
  );
  y += 6;
  y = addParagraph(
    "3. FIRM PURPOSE OF AMENDMENT: Have firm intention to sin no more and to avoid occasions of sin.",
    y,
    10
  );
  y += 6;
  y = addParagraph(
    "4. CONFESSION: Declare all mortal sins to the priest, in number, kind and circumstances that change the nature of the sin.",
    y,
    10
  );
  y += 6;
  y = addParagraph(
    "5. PENANCE: Fulfill the penance given by the confessor as reparation for sins.",
    y,
    10
  );
  y += 10;
  y = addSubtitle("Act of Contrition", y);
  y = addParagraph(
    "O my God, I am heartily sorry for having offended You, because You are infinitely good and lovable, and sin displeases You. I firmly resolve, with the help of Your grace, to do penance, to sin no more, and to avoid the occasions of sin. Amen.",
    y
  );
  y += 10;
  y = addSubtitle("The Ten Commandments", y);
  y = addParagraph(
    "1. I am the Lord your God: you shall not have strange gods before me\n2. You shall not take the name of the Lord your God in vain\n3. Remember to keep holy the Lord's Day\n4. Honor your father and your mother\n5. You shall not kill\n6. You shall not commit adultery\n7. You shall not steal\n8. You shall not bear false witness\n9. You shall not covet your neighbor's wife\n10. You shall not covet your neighbor's goods",
    y,
    10
  );
  addFooter();
  addPageNumber(7);
  doc.addPage();
  addTitle("Life of Prayer", 30);
  y = 45;
  y = addParagraph(
    '"Pray without ceasing" (1 Thess 5:17). Prayer is the breathing of the Christian soul. Without prayer, spiritual life withers. St. Teresa of Avila taught that "prayer is a relationship of friendship with God."',
    y
  );
  y += 10;
  y = addSubtitle("Morning Prayer", y);
  y = addParagraph(
    "My God, I adore You and love You with all my heart. I thank You for having created me, made me a Christian and preserved me this night. I offer You the actions of this day; grant that they may all be according to Your holy will and for Your greater glory. Preserve me from sin and all evil. May Your grace be always with me and with all my loved ones. Amen.",
    y
  );
  y += 10;
  y = addSubtitle("Evening Prayer", y);
  y = addParagraph(
    "My God, I thank You for all the benefits I have received from You today. I ask Your forgiveness for the sins I have committed this day. Watch over me during this night and preserve me from all evil. Mary, my Mother, protect me. Holy Angel of the Lord, my zealous guardian, watch over me. Amen.",
    y
  );
  y += 10;
  y = addSubtitle("The Angelus", y);
  y = addParagraph(
    "V. The Angel of the Lord declared unto Mary.\nR. And she conceived of the Holy Spirit. (Hail Mary)\n\nV. Behold the handmaid of the Lord.\nR. Be it done unto me according to thy word. (Hail Mary)\n\nV. And the Word was made Flesh.\nR. And dwelt among us. (Hail Mary)\n\nV. Pray for us, O holy Mother of God.\nR. That we may be made worthy of the promises of Christ.\n\nLet us pray: Pour forth, we beseech You, O Lord, Your grace into our hearts, that we to whom the Incarnation of Christ Your Son was made known by the message of an angel, may by His Passion and Cross be brought to the glory of His Resurrection. Through the same Christ our Lord. Amen.",
    y,
    10
  );
  y += 10;
  y = addSubtitle("Prayer to St. Michael the Archangel", y);
  y = addParagraph(
    "St. Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray, and do thou, O Prince of the heavenly hosts, by the power of God, thrust into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen.",
    y,
    10
  );
  addFooter();
  addPageNumber(8);
  doc.addPage();
  addTitle("The Saints and Intercession", 30);
  y = 45;
  y = addParagraph(
    "The Church is composed of three parts: the Church Militant (us, on earth), the Church Suffering (the souls in Purgatory) and the Church Triumphant (the Saints in Heaven). We are all united in the Mystical Body of Christ.",
    y
  );
  y += 10;
  y = addSubtitle("Why pray to the Saints?", y);
  y = addParagraph(
    "The Saints, being before God, can intercede for us. As the book of Revelation shows, they present our prayers to God (Rev 5:8). We do not worship the Saints - worship is due to God alone - but we venerate them and ask for their intercession.",
    y
  );
  y += 10;
  y = addSubtitle("Some Intercessor Saints", y);
  y = addParagraph(
    "• St. Joseph: Patron of the Universal Church, families and workers\n• St. Anthony: Impossible causes and lost objects\n• St. Rita: Impossible causes\n• St. Jude Thaddeus: Desperate causes\n• St. Therese: Missionaries and the sick\n• Padre Pio: Healing and conversion\n• St. Francis of Assisi: Ecology and animals",
    y,
    10
  );
  y += 10;
  y = addSubtitle("Prayer to St. Joseph", y);
  y = addParagraph(
    "To you, St. Joseph, we come in our tribulation, and having implored the help of your most holy Spouse, we confidently invoke your patronage also. Through that sacred bond of charity which united you to the Immaculate Virgin Mother of God and through the paternal love with which you embraced the Child Jesus, we humbly beg you to look graciously upon the inheritance which Jesus Christ has purchased by his Blood, and with your power and strength to aid us in our necessities.",
    y,
    10
  );
  y += 10;
  y = addSubtitle("Prayer to the Guardian Angel", y);
  y = addParagraph(
    "Angel of God, my guardian dear, to whom God's love commits me here, ever this day be at my side, to light and guard, to rule and guide. Amen.",
    y
  );
  y += 10;
  y = addSubtitle("Prayer for the Souls in Purgatory", y);
  y = addParagraph(
    "Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. Amen.\n\nRemember to pray for the souls in Purgatory, especially for your deceased family members. Charity toward the deceased is a work of great merit.",
    y,
    10
  );
  addFooter();
  addPageNumber(9);
  doc.addPage();
  addTitle("Your Spiritual Life Plan", 30);
  y = 45;
  y = addParagraph(
    `Dear ${firstName}, as you conclude this Guide, I invite you to establish a spiritual life plan. Christian life is not improvised - it requires dedication and constancy. As St. Josemaria Escriva said: "Holiness is doing the things of each day well".`,
    y
  );
  y += 10;
  y = addSubtitle("Daily Routine Proposal", y);
  y = addParagraph(
    "MORNING:\n• Upon waking: Sign of the Cross and offering of the day\n• Morning prayer (5-10 minutes)\n• Spiritual reading or Gospel of the day\n\nTHROUGHOUT THE DAY:\n• Angelus (6am, 12pm, 6pm) or at least at noon\n• Ejaculations (short prayers throughout the day)\n• Quick examination of conscience before lunch\n\nEVENING:\n• Rosary (20 minutes)\n• Examination of conscience\n• Evening prayer and Hail Holy Queen",
    y,
    10
  );
  y += 10;
  y = addSubtitle("Weekly Proposal", y);
  y = addParagraph(
    "• Sunday: Holy Mass (obligatory)\n• At least one Mass during the week\n• Confession: at least monthly, ideally biweekly\n• Adoration of the Blessed Sacrament: at least 1 hour per week\n• Spiritual reading: one book per month",
    y,
    10
  );
  y += 10;
  y = addSubtitle("Personal Commitment", y);
  y = addParagraph(
    `I, ${userName}, commit myself to:

1. Participate in Holy Mass every Sunday
2. Go to Confession at least once a month
3. Pray the Rosary daily
4. Make an examination of conscience every night
5. Grow in knowledge of the Catholic faith`,
    y,
    10
  );
  y += 10;
  doc.setFillColor(12, 75, 148);
  doc.rect(margin, y, contentWidth, 35, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(11);
  const finalQuote = '"Do not be afraid! Open wide the doors to Christ!" — St. John Paul II';
  const quoteLines = doc.splitTextToSize(finalQuote, contentWidth - 10);
  doc.text(quoteLines, margin + 5, y + 15);
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "normal");
  addFooter();
  addPageNumber(10);
  doc.save("Catholic-Life-Guide.pdf");
};
const getAreaScores = (answers) => {
  const eucaristica = answers.slice(0, 7).reduce((sum, p) => sum + (p || 0), 0);
  const eucaristicaMax = 7 * 3;
  const eucaristicaPercent = Math.round(eucaristica / eucaristicaMax * 100);
  const oracao = answers.slice(7, 14).reduce((sum, p) => sum + (p || 0), 0);
  const oracaoMax = 7 * 3;
  const oracaoPercent = Math.round(oracao / oracaoMax * 100);
  const formacao = answers.slice(14, 20).reduce((sum, p) => sum + (p || 0), 0);
  const formacaoMax = 6 * 3;
  const formacaoPercent = Math.round(formacao / formacaoMax * 100);
  const devocoes = answers.slice(20, 26).reduce((sum, p) => sum + (p || 0), 0);
  const devocoesMax = 6 * 3;
  const devocoesPercent = Math.round(devocoes / devocoesMax * 100);
  const testemunho = answers.slice(26, 30).reduce((sum, p) => sum + (p || 0), 0);
  const testemunhoMax = 4 * 3;
  const testemunhoPercent = Math.round(testemunho / testemunhoMax * 100);
  return {
    eucaristica: eucaristicaPercent,
    oracao: oracaoPercent,
    formacao: formacaoPercent,
    devocoes: devocoesPercent,
    testemunho: testemunhoPercent
  };
};
const getDiagnostico = (area, percent, userName) => {
  const firstName = userName.split(" ")[0];
  const diagnosticos = {
    eucaristica: {
      high: `${firstName}, you live the Eucharist as the center of your faith! Holy Mass is truly the "source and summit" of your Christian life, as taught by Vatican Council II. Continue participating with this devotion.`,
      medium: `${firstName}, you have good participation in Eucharistic life, but there's room to grow. Try arriving earlier for Mass, preparing in prayer, and giving thanks after Communion.`,
      low: `${firstName}, the Eucharist is the greatest treasure Jesus left us. "Without the Mass, the earth could not subsist" (St. Pio of Pietrelcina). Seek to participate more actively in Sunday Mass.`
    },
    oracao: {
      high: `${firstName}, you cultivate a beautiful prayer life! As St. Teresa of Avila said: "Prayer is a relationship of friendship with God." Continue in this constant dialogue with the Lord.`,
      medium: `${firstName}, your prayer life is developing. Establish fixed times to pray and include the Holy Rosary in your routine - Our Lady will intercede for you.`,
      low: `${firstName}, prayer is the breathing of the soul. Start with small moments: a Hail Mary upon waking, an Our Father before sleeping. "Pray without ceasing" (1 Thess 5:17).`
    },
    formacao: {
      high: `${firstName}, you seek to know the faith deeply! The Catechism and the Sacraments are pillars of your spiritual life. Continue studying and living the Church's teachings.`,
      medium: `${firstName}, you have good knowledge of doctrine. To grow, read the Catechism of the Catholic Church and seek formation groups in your parish.`,
      low: `${firstName}, knowing the faith is fundamental. "Faith that is not thought through is not a full faith" (St. John Paul II). Start with the Youth Catechism (YouCat) or participate in adult catechesis.`
    },
    devocoes: {
      high: `${firstName}, your devotions demonstrate a deep love for the Church's Tradition! Devotion to Our Lady and the Saints strengthens your faith journey.`,
      medium: `${firstName}, you have good devotional practices. Consider making the Consecration to Our Lady and cultivating devotion to your patron saint.`,
      low: `${firstName}, devotions are precious aids in spiritual life. Start by praying the Rosary daily - "the Rosary is the weapon of these times" (St. Pio of Pietrelcina).`
    },
    testemunho: {
      high: `${firstName}, you are a true apostle! "Go and make disciples" (Mt 28:19). Your witness and generosity build up the Church. Continue being light to the world!`,
      medium: `${firstName}, you live Christian values. Seek opportunities to serve in the community and share your faith with joy and naturalness.`,
      low: `${firstName}, we are called to be "salt of the earth and light of the world." Start by living the Gospel at home and at work - the best witness is the example of life.`
    }
  };
  if (percent >= 70) return diagnosticos[area].high;
  if (percent >= 40) return diagnosticos[area].medium;
  return diagnosticos[area].low;
};
const getRecomendacoes = (areaScores) => {
  const recomendacoes = [];
  if (areaScores.eucaristica < 60) {
    recomendacoes.push("Attend Holy Mass at least every Sunday and, if possible, during the week.");
    recomendacoes.push("Make weekly adoration of the Blessed Sacrament.");
  }
  if (areaScores.oracao < 60) {
    recomendacoes.push("Establish a fixed daily time for personal prayer (morning or evening).");
    recomendacoes.push("Pray the Holy Rosary daily, meditating on the mysteries.");
  }
  if (areaScores.formacao < 60) {
    recomendacoes.push("Go to Confession at least monthly to live in a state of grace.");
    recomendacoes.push("Read the Catechism of the Catholic Church or participate in study groups.");
  }
  if (areaScores.devocoes < 60) {
    recomendacoes.push("Make the Consecration to Our Lady (St. Louis de Montfort method).");
    recomendacoes.push("Cultivate devotion to your patron saint and ask for their intercession.");
  }
  if (areaScores.testemunho < 60) {
    recomendacoes.push("Contribute with tithing and participate in a group or ministry.");
    recomendacoes.push("Share your faith with family and friends through your witness.");
  }
  if (recomendacoes.length === 0) {
    recomendacoes.push("Continue deepening your prayer life with the Liturgy of the Hours.");
    recomendacoes.push("Consider making an annual spiritual retreat to renew your faith.");
    recomendacoes.push("Be a multiplier: help others grow in the Catholic faith.");
  }
  return recomendacoes.slice(0, 5);
};
const getOracoesSugeridas = (score) => {
  if (score >= 75) {
    return [
      "Liturgy of the Hours (Lauds and Vespers)",
      "Daily Lectio Divina",
      "Meditation on the Church Fathers",
      "Novena to the Holy Spirit",
      "Daily Consecration to Our Lady"
    ];
  }
  if (score >= 50) {
    return [
      "Daily Holy Rosary",
      "Angelus Prayer (6am, 12pm, 6pm)",
      "Evening Examination of Conscience",
      "Novenas to the Saints",
      "Family Prayer"
    ];
  }
  return [
    "Our Father, Hail Mary and Glory Be (morning and evening)",
    "Prayer before meals",
    "Holy Rosary (at least on Saturdays)",
    "Visit the Blessed Sacrament when passing by a Church",
    "Guardian Angel Prayer"
  ];
};
const getSantoCitacao = (score) => {
  if (score >= 75) {
    return {
      citacao: "It is not enough to be good, one must be holy. Holiness is not a luxury for the few, it is a duty for all.",
      santo: "St. John Paul II",
      reflexao: "You are on the path to holiness! Keep persevering."
    };
  }
  if (score >= 60) {
    return {
      citacao: "Have patience with all things, but chiefly have patience with yourself. Do not lose courage in considering your own imperfections.",
      santo: "St. Francis de Sales",
      reflexao: "Growing in faith is a process. God is working in you."
    };
  }
  if (score >= 40) {
    return {
      citacao: "You cannot do great things, but you can do small things with great love.",
      santo: "St. Teresa of Calcutta",
      reflexao: "Every small step toward God is a great victory."
    };
  }
  return {
    citacao: "It is never too late to return to God. God's love for you is infinite.",
    santo: "St. Augustine",
    reflexao: "St. Augustine himself had a late conversion and became one of the greatest saints of the Church."
  };
};
const getVersiculoPersonalizado = (score, areaScores) => {
  const weakestArea = Object.entries(areaScores).reduce((a, b) => a[1] < b[1] ? a : b)[0];
  const versiculos = {
    eucaristica: {
      texto: "I am the living bread that came down from heaven. Whoever eats this bread will live forever.",
      referencia: "John 6:51"
    },
    oracao: {
      texto: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
      referencia: "Matthew 7:7"
    },
    formacao: {
      texto: "You will know the truth, and the truth will set you free.",
      referencia: "John 8:32"
    },
    devocoes: {
      texto: "Here is your mother. And from that time on, the disciple took her into his home.",
      referencia: "John 19:27"
    },
    testemunho: {
      texto: "You are the light of the world. A city on a hill cannot be hidden.",
      referencia: "Matthew 5:14"
    }
  };
  return versiculos[weakestArea] || versiculos.oracao;
};
const getPlano7Dias = (areaScores) => {
  const weakestArea = Object.entries(areaScores).reduce((a, b) => a[1] < b[1] ? a : b)[0];
  const planos = {
    eucaristica: [
      { dia: "Sunday", acao: "Attend Holy Mass with special attention", tempo: "1h" },
      { dia: "Monday", acao: "Read about the Eucharist in the Catechism (paragraphs 1322-1419)", tempo: "15min" },
      { dia: "Tuesday", acao: "Make a Spiritual Communion during the day", tempo: "5min" },
      { dia: "Wednesday", acao: "Visit the Blessed Sacrament at the nearest Church", tempo: "15min" },
      { dia: "Thursday", acao: "Attend a weekday Mass (if possible)", tempo: "45min" },
      { dia: "Friday", acao: "Pray before the Tabernacle, giving thanks for the Eucharist", tempo: "10min" },
      { dia: "Saturday", acao: "Prepare for Sunday Mass with examination of conscience", tempo: "10min" }
    ],
    oracao: [
      { dia: "Sunday", acao: "Reserve 15 minutes of silent prayer in the morning", tempo: "15min" },
      { dia: "Monday", acao: "Pray the Rosary meditating on the Joyful Mysteries", tempo: "20min" },
      { dia: "Tuesday", acao: "Pray the Angelus at noon (wherever you are)", tempo: "3min" },
      { dia: "Wednesday", acao: "Read and meditate on a Psalm (suggestion: Psalm 23)", tempo: "10min" },
      { dia: "Thursday", acao: "Pray for your family and friends", tempo: "10min" },
      { dia: "Friday", acao: "Make an examination of conscience before sleeping", tempo: "10min" },
      { dia: "Saturday", acao: "Pray the Rosary meditating on the Glorious Mysteries", tempo: "20min" }
    ],
    formacao: [
      { dia: "Sunday", acao: "Read the Gospel of the day and reflect", tempo: "15min" },
      { dia: "Monday", acao: "Study about the Sacrament of the Eucharist", tempo: "20min" },
      { dia: "Tuesday", acao: "Read about the life of a Saint (suggestion: St. Joseph)", tempo: "15min" },
      { dia: "Wednesday", acao: "Study about the Sacrament of Confession", tempo: "20min" },
      { dia: "Thursday", acao: "Research the history of your parish", tempo: "15min" },
      { dia: "Friday", acao: "Read an encyclical or Church document", tempo: "20min" },
      { dia: "Saturday", acao: "Schedule a confession for next week", tempo: "5min" }
    ],
    devocoes: [
      { dia: "Sunday", acao: "Pray the Rosary with family or alone", tempo: "20min" },
      { dia: "Monday", acao: "Light a candle and pray to Our Lady", tempo: "10min" },
      { dia: "Tuesday", acao: "Research about your patron saint", tempo: "15min" },
      { dia: "Wednesday", acao: "Begin a Novena to a Saint of your devotion", tempo: "10min" },
      { dia: "Thursday", acao: "Use holy water when leaving home, blessing yourself", tempo: "1min" },
      { dia: "Friday", acao: "Pray the Stations of the Cross (even alone)", tempo: "30min" },
      { dia: "Saturday", acao: "Pray the Rosary meditating on the Luminous Mysteries", tempo: "20min" }
    ],
    testemunho: [
      { dia: "Sunday", acao: "Invite someone to go to Mass with you", tempo: "varies" },
      { dia: "Monday", acao: "Do an act of charity (help someone in need)", tempo: "30min" },
      { dia: "Tuesday", acao: "Share a Catholic reflection on social media", tempo: "5min" },
      { dia: "Wednesday", acao: "Forgive someone who hurt you (in prayer)", tempo: "10min" },
      { dia: "Thursday", acao: "Donate something to the Church or to the poor", tempo: "varies" },
      { dia: "Friday", acao: "Practice fasting or abstinence in reparation", tempo: "all day" },
      { dia: "Saturday", acao: "Pray for a family member away from the faith", tempo: "10min" }
    ]
  };
  return planos[weakestArea] || planos.oracao;
};
const getSantoProtetor = (areaScores) => {
  const weakestArea = Object.entries(areaScores).reduce((a, b) => a[1] < b[1] ? a : b)[0];
  const santos = {
    eucaristica: {
      nome: "St. Pio of Pietrelcina",
      titulo: "Apostle of the Eucharist",
      oracao: "St. Pio of Pietrelcina, you who lived each Mass as if it were the first and the last, help me to love the Eucharist as you loved it. Amen."
    },
    oracao: {
      nome: "St. Teresa of Avila",
      titulo: "Doctor of Prayer",
      oracao: "St. Teresa of Avila, master of the interior life, teach me to cultivate friendship with God through prayer. Help me never to abandon this relationship of love. Amen."
    },
    formacao: {
      nome: "St. Thomas Aquinas",
      titulo: "Angelic Doctor",
      oracao: "St. Thomas Aquinas, who united faith and reason in an admirable way, enlighten my mind to know more deeply the doctrine of the Church. Amen."
    },
    devocoes: {
      nome: "St. Louis Marie Grignion de Montfort",
      titulo: "Apostle of Mary",
      oracao: "St. Louis de Montfort, who taught us the way to Jesus through Mary, help me to grow in devotion to the Blessed Virgin. Amen."
    },
    testemunho: {
      nome: "St. Francis of Assisi",
      titulo: "Patron of Peace",
      oracao: "St. Francis of Assisi, who preached the Gospel with your life before words, help me to be a living witness of Christ in the world. Amen."
    }
  };
  return santos[weakestArea] || santos.oracao;
};
const getVirtudes = (score, areaScores) => {
  const virtudes = [];
  if (areaScores.eucaristica < 60) {
    virtudes.push({ nome: "Piety", descricao: "Reverence and love for sacred things" });
  }
  if (areaScores.oracao < 60) {
    virtudes.push({ nome: "Perseverance", descricao: "Constancy in prayer life" });
  }
  if (areaScores.formacao < 60) {
    virtudes.push({ nome: "Prudence", descricao: "Discernment to know God's will" });
  }
  if (areaScores.devocoes < 60) {
    virtudes.push({ nome: "Devotion", descricao: "Readiness to serve God" });
  }
  if (areaScores.testemunho < 60) {
    virtudes.push({ nome: "Charity", descricao: "Love of God and neighbor" });
  }
  if (virtudes.length === 0) {
    virtudes.push(
      { nome: "Humility", descricao: "Recognizing that all good comes from God" },
      { nome: "Fortitude", descricao: "Persevering through tribulations" },
      { nome: "Hope", descricao: "Trust in God's promises" }
    );
  }
  return virtudes.slice(0, 3);
};
function ResultScreen({ score, level, userName, answers, onRestart }) {
  const firstName = userName.split(" ")[0];
  const areaScores = getAreaScores(answers);
  const recomendacoes = getRecomendacoes(areaScores);
  const oracoes = getOracoesSugeridas(score);
  const santoCitacao = getSantoCitacao(score);
  const versiculoPersonalizado = getVersiculoPersonalizado(score, areaScores);
  const plano7Dias = getPlano7Dias(areaScores);
  const santoProtetor = getSantoProtetor(areaScores);
  const virtudes = getVirtudes(score, areaScores);
  const handleDownloadGuide = () => {
    try {
      generateCatholicGuidePDF({
        userName,
        score,
        levelTitle: level.title
      });
      toast$1.success("PDF generated successfully! Check your downloads.");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast$1.error("Error generating PDF. Please try again.");
    }
  };
  const handleShare = async () => {
    const text = `I discovered how my Catholic life is going! Take the quiz too at Guide Catholic and see your result.`;
    const url = "https://guidecatholic.com";
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Guide Catholic - Catholic Life Quiz",
          text,
          url
        });
      } catch {
      }
    } else {
      await navigator.clipboard.writeText(`${text} ${url}`);
      toast$1.success("Link copied to share!");
    }
  };
  const getScoreColor = () => {
    if (score >= 75) return "text-green-600";
    if (score >= 50) return "text-accent";
    return "text-primary";
  };
  const getAreaColor = (percent) => {
    if (percent >= 70) return "bg-green-500";
    if (percent >= 40) return "bg-accent";
    return "bg-primary";
  };
  const areas = [
    { key: "eucaristica", label: "Eucharistic Life", icon: Church, score: areaScores.eucaristica },
    { key: "oracao", label: "Prayer Life", icon: HandHeart, score: areaScores.oracao },
    { key: "formacao", label: "Formation and Sacraments", icon: BookOpen, score: areaScores.formacao },
    { key: "devocoes", label: "Devotions", icon: Heart, score: areaScores.devocoes },
    { key: "testemunho", label: "Christian Witness", icon: Star, score: areaScores.testemunho }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-4xl mx-auto px-4 animate-slide-up", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "text-6xl mb-4", children: level.emoji }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-xl text-muted-foreground mb-2", children: [
          "Congratulations, ",
          firstName,
          "!"
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl md:text-3xl text-primary mb-4", children: level.title }),
        /* @__PURE__ */ jsxs("div", { className: "relative w-36 h-36 mx-auto mb-6", children: [
          /* @__PURE__ */ jsxs("svg", { className: "w-full h-full transform -rotate-90", children: [
            /* @__PURE__ */ jsx(
              "circle",
              {
                cx: "72",
                cy: "72",
                r: "64",
                stroke: "currentColor",
                strokeWidth: "12",
                fill: "none",
                className: "text-secondary"
              }
            ),
            /* @__PURE__ */ jsx(
              "circle",
              {
                cx: "72",
                cy: "72",
                r: "64",
                stroke: "url(#goldGradient)",
                strokeWidth: "12",
                fill: "none",
                strokeDasharray: `${score / 100 * 402} 402`,
                strokeLinecap: "round",
                className: "transition-all duration-1000 ease-out"
              }
            ),
            /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "goldGradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
              /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "hsl(43 82% 46%)" }),
              /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "hsl(38 90% 55%)" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
            /* @__PURE__ */ jsxs("span", { className: `text-4xl font-bold ${getScoreColor()}`, children: [
              score,
              "%"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "score" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground text-lg leading-relaxed max-w-2xl mx-auto", children: level.description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 mb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-secondary/50 rounded-xl p-4 text-center", children: [
          /* @__PURE__ */ jsx(Trophy, { className: "w-6 h-6 text-accent mx-auto mb-2" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Level" }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground text-sm", children: level.title.split(" ").slice(-1) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-secondary/50 rounded-xl p-4 text-center", children: [
          /* @__PURE__ */ jsx(Target, { className: "w-6 h-6 text-primary mx-auto mb-2" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Questions" }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", children: "30/30" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-secondary/50 rounded-xl p-4 text-center", children: [
          /* @__PURE__ */ jsx(BookOpen, { className: "w-6 h-6 text-accent mx-auto mb-2" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Points" }),
          /* @__PURE__ */ jsxs("p", { className: "font-semibold text-foreground", children: [
            Math.round(score * 0.9),
            "/90"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-6 md:p-8 border border-primary/20 mb-6 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 text-6xl text-primary/10", children: /* @__PURE__ */ jsx(Quote, { className: "w-16 h-16" }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsx(Crown, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-primary", children: "Word from a Saint for You" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: santoCitacao.santo })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("blockquote", { className: "text-xl italic text-foreground mb-4 leading-relaxed", children: [
          '"',
          santoCitacao.citacao,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm bg-background/50 rounded-lg p-3", children: [
          "💡 ",
          santoCitacao.reflexao
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center", children: /* @__PURE__ */ jsx(Target, { className: "w-6 h-6 text-accent-foreground" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-primary", children: "Complete Assessment" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Detailed evaluation of your Catholic life" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4 mb-8", children: areas.map((area) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(area.icon, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-foreground", children: area.label })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-sm font-bold text-foreground", children: [
            area.score,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-3 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: `h-full rounded-full transition-all duration-1000 ease-out ${getAreaColor(area.score)}`,
            style: { width: `${area.score}%` }
          }
        ) })
      ] }, area.key)) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: areas.map((area) => /* @__PURE__ */ jsxs("div", { className: "bg-secondary/30 rounded-xl p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsx(area.icon, { className: "w-5 h-5 text-accent" }),
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground", children: area.label })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: getDiagnostico(area.key, area.score, userName) })
      ] }, area.key)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-primary", children: "Your Patron Saint" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Special intercessor for your journey" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 text-center mb-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-20 h-20 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center", children: /* @__PURE__ */ jsx(Users, { className: "w-10 h-10 text-accent" }) }),
        /* @__PURE__ */ jsx("h4", { className: "font-display text-2xl text-primary mb-1", children: santoProtetor.nome }),
        /* @__PURE__ */ jsx("p", { className: "text-accent font-medium", children: santoProtetor.titulo })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-secondary/30 rounded-xl p-4", children: [
        /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-foreground mb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Cross, { className: "w-4 h-4 text-primary" }),
          "Prayer to your Patron Saint"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground italic leading-relaxed", children: santoProtetor.oracao })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Flame, { className: "w-6 h-6 text-accent-foreground" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-primary", children: "Virtues to Develop" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Focus for your spiritual growth" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-4", children: virtudes.map((virtude, index) => /* @__PURE__ */ jsxs("div", { className: "bg-secondary/30 rounded-xl p-4 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 mx-auto mb-3 rounded-full bg-accent/20 flex items-center justify-center", children: /* @__PURE__ */ jsx(Star, { className: "w-6 h-6 text-accent" }) }),
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground mb-1", children: virtude.nome }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: virtude.descricao })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center", children: /* @__PURE__ */ jsx(Calendar, { className: "w-6 h-6 text-white" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h3", { className: "font-display text-xl text-primary", children: [
            "7-Day Plan for ",
            firstName
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Personalized challenge to strengthen your faith" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: plano7Dias.map((dia, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 bg-secondary/30 rounded-xl p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-16 h-16 rounded-xl bg-primary/10 flex flex-col items-center justify-center shrink-0", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground uppercase", children: "Day" }),
          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-primary", children: index + 1 })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: dia.dia }),
            /* @__PURE__ */ jsx("span", { className: "text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full", children: dia.tempo })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: dia.acao })
        ] })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl p-6 md:p-8 border border-accent/30 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Scroll, { className: "w-6 h-6 text-accent-foreground" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-primary", children: "God's Word for You" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Verse to meditate on this week" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-background/50 rounded-xl p-6 text-center", children: [
        /* @__PURE__ */ jsx(Cross, { className: "w-10 h-10 text-primary mx-auto mb-4" }),
        /* @__PURE__ */ jsxs("blockquote", { className: "text-xl italic text-foreground mb-3 leading-relaxed", children: [
          '"',
          versiculoPersonalizado.texto,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("cite", { className: "text-accent font-semibold", children: [
          "— ",
          versiculoPersonalizado.referencia
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-blue-gradient flex items-center justify-center", children: /* @__PURE__ */ jsx(Star, { className: "w-6 h-6 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-primary", children: "Personalized Classification" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Your level on the faith journey" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mb-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-5xl mb-3 block", children: level.emoji }),
        /* @__PURE__ */ jsx("h4", { className: "font-display text-2xl text-primary mb-2", children: level.title }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
          firstName,
          ", you are at this level:"
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2 mb-6", children: [
        { title: "Exemplary Practicing Catholic", min: 90, emoji: "🏆" },
        { title: "Committed Catholic", min: 75, emoji: "⭐" },
        { title: "Growing Catholic", min: 60, emoji: "🌱" },
        { title: "Seeking Catholic", min: 40, emoji: "🔍" },
        { title: "Distant Catholic", min: 20, emoji: "🏠" },
        { title: "Beginning of the Journey", min: 0, emoji: "✨" }
      ].map((lvl) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `flex items-center gap-3 p-3 rounded-lg transition-all ${level.title === lvl.title ? "bg-gold-gradient text-accent-foreground" : "bg-secondary/30 text-muted-foreground"}`,
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-xl", children: lvl.emoji }),
            /* @__PURE__ */ jsx("span", { className: `flex-1 ${level.title === lvl.title ? "font-semibold" : ""}`, children: lvl.title }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm", children: [
              lvl.min,
              "%+"
            ] })
          ]
        },
        lvl.title
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-6 h-6 text-accent-foreground" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h3", { className: "font-display text-xl text-primary", children: [
            "Exclusive Guide for ",
            firstName
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Personalized prayers and recommendations" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-foreground mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5 text-accent" }),
          "Recommendations for your spiritual growth"
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: recomendacoes.map((rec, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 bg-secondary/30 rounded-lg p-3", children: [
          /* @__PURE__ */ jsx("span", { className: "w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0", children: index + 1 }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: rec })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-foreground mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-primary" }),
          "Suggested prayers for your level"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-3", children: oracoes.map((oracao, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-primary/5 rounded-lg p-3", children: [
          /* @__PURE__ */ jsx(Heart, { className: "w-4 h-4 text-accent shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm", children: oracao })
        ] }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-primary via-primary to-accent rounded-2xl p-6 md:p-8 mb-6 text-primary-foreground relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(Download, { className: "w-8 h-8" }) }),
        /* @__PURE__ */ jsx("h4", { className: "font-display text-2xl mb-2", children: "Download the Complete Catholic Life Guide" }),
        /* @__PURE__ */ jsx("p", { className: "text-primary-foreground/80 mb-6 max-w-lg mx-auto", children: "Exclusive 10-page PDF with daily prayers, devotions, Church teachings and much more to deepen your faith." }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            onClick: handleDownloadGuide,
            className: "h-12 sm:h-14 px-6 sm:px-10 bg-white text-primary hover:bg-white/90 font-semibold text-base sm:text-lg shadow-lg transition-all duration-300 w-full sm:w-auto",
            children: [
              /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 mr-2 shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "truncate", children: "Download Guide (PDF)" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mb-6", children: [
      /* @__PURE__ */ jsxs(
        Button,
        {
          onClick: handleShare,
          variant: "outline",
          className: "flex-1 h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
          children: [
            /* @__PURE__ */ jsx(Share2, { className: "w-4 h-4 mr-2" }),
            "Share Result"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Button,
        {
          onClick: onRestart,
          variant: "outline",
          className: "flex-1 h-12 border-border text-foreground hover:bg-secondary",
          children: [
            /* @__PURE__ */ jsx(RotateCcw, { className: "w-4 h-4 mr-2" }),
            "Retake Quiz"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-primary text-primary-foreground rounded-2xl p-6 text-center", children: [
      /* @__PURE__ */ jsx("h4", { className: "font-display text-xl mb-2", children: "Share the Faith with Your Friends!" }),
      /* @__PURE__ */ jsx("p", { className: "text-primary-foreground/80 text-sm mb-4", children: "Help your friends and colleagues discover how their Catholic life is going. Share this quiz and evangelize through your witness!" }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          onClick: handleShare,
          className: "bg-accent text-accent-foreground hover:bg-accent/90",
          children: [
            /* @__PURE__ */ jsx(Share2, { className: "w-4 h-4 mr-2" }),
            "Share Site"
          ]
        }
      )
    ] })
  ] });
}
const ResultadoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState({});
  useEffect(() => {
    const locationState = location.state;
    if ((locationState == null ? void 0 : locationState.localMode) && locationState.score !== void 0) {
      setScore(locationState.score);
      setAnswers(locationState.answers || {});
      setLoading(false);
      return;
    }
    navigate("/quiz", { replace: true });
  }, [location.state, navigate]);
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx(Loader2, { className: "w-8 h-8 animate-spin text-accent mx-auto mb-4" }),
      /* @__PURE__ */ jsx("p", { className: "text-text-muted", children: "Loading your results..." })
    ] }) });
  }
  if (score === null) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Your Catholic Life Assessment Results - Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Discover your personalized Catholic spiritual growth plan based on your assessment results." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/result/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx(QuizHeader, {}),
      /* @__PURE__ */ jsx(
        ResultScreen,
        {
          score,
          answers,
          onRetakeQuiz: () => navigate("/quiz")
        }
      )
    ] })
  ] });
};
const blogPosts = [
  {
    id: 1,
    slug: "how-to-pray-rosary",
    title: "How to Pray the Holy Rosary: Complete Guide for Beginners",
    excerpt: "Learn step by step how to pray the Holy Rosary and strengthen your Marian devotion with this practical and spiritual guide.",
    date: "2026-04-12",
    readTime: "8 min",
    category: "Prayers",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 2,
    slug: "seven-sacraments",
    title: "The 7 Sacraments of the Catholic Church Explained",
    excerpt: "Understand the importance and meaning of each of the seven sacraments instituted by Christ for our salvation.",
    date: "2026-04-12",
    readTime: "12 min",
    category: "Formation",
    icon: BookOpen,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 3,
    slug: "importance-confession",
    title: "The Importance of Confession: Why Confess Regularly?",
    excerpt: "Discover the spiritual benefits of frequent confession and how it transforms our Christian life.",
    date: "2026-04-12",
    readTime: "6 min",
    category: "Sacraments",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 4,
    slug: "patron-saints",
    title: "Patron Saints: How to Choose and Honor Yours",
    excerpt: "Learn about the tradition of patron saints and how they can intercede for you on your faith journey.",
    date: "2026-04-12",
    readTime: "7 min",
    category: "Devotions",
    icon: Users,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 5,
    slug: "fasting-abstinence",
    title: "Fasting and Abstinence: Practices That Strengthen the Soul",
    excerpt: "Learn about the practices of fasting and abstinence in the Catholic Church and how they bring us closer to God.",
    date: "2026-04-12",
    readTime: "5 min",
    category: "Spirituality",
    icon: Flame,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-400"
  },
  {
    id: 6,
    slug: "sunday-mass",
    title: "Sunday Mass: Center of Christian Life",
    excerpt: "Why participation in Sunday Mass is essential for every Catholic and how to make the most of it.",
    date: "2026-04-12",
    readTime: "9 min",
    category: "Liturgy",
    icon: Sun,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-400"
  },
  {
    id: 7,
    slug: "prayer-life",
    title: "Prayer Life: How to Cultivate Intimacy with God",
    excerpt: "Learn how to transform your dialogue with God into a source of life and peace through consistent prayer.",
    date: "2026-04-12",
    readTime: "10 min",
    category: "Prayer",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 8,
    slug: "meaning-mass",
    title: "Understanding the Mass: A Journey Through the Liturgy",
    excerpt: "Discover the deep meaning behind each part of the Mass and how to participate more fully.",
    date: "2026-04-12",
    readTime: "11 min",
    category: "Liturgy",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 9,
    slug: "examination-conscience",
    title: "Examination of Conscience: Daily Practice for Spiritual Growth",
    excerpt: "Learn how to examine your conscience daily and grow in holiness through self-reflection.",
    date: "2026-04-12",
    readTime: "7 min",
    category: "Spirituality",
    icon: BookOpen,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 10,
    slug: "virgin-mary",
    title: "The Virgin Mary: Mother of God and Our Mother",
    excerpt: "Explore the role of Mary in salvation history and how she continues to intercede for us today.",
    date: "2026-04-12",
    readTime: "9 min",
    category: "Devotions",
    icon: Heart,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 11,
    slug: "gifts-holy-spirit",
    title: "The Seven Gifts of the Holy Spirit",
    excerpt: "Understand the seven gifts the Holy Spirit bestows upon us at Confirmation and how to use them.",
    date: "2026-04-12",
    readTime: "8 min",
    category: "Formation",
    icon: Flame,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-400"
  },
  {
    id: 12,
    slug: "lectio-divina",
    title: "Lectio Divina: Praying with Scripture",
    excerpt: "Discover the ancient practice of Lectio Divina and how to pray with the Word of God.",
    date: "2026-04-12",
    readTime: "10 min",
    category: "Prayer",
    icon: BookOpen,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
  {
    id: 13,
    slug: "chastity-modern-world",
    title: "Chastity in the Modern World: Living Purity Today",
    excerpt: "Practical guidance on living the virtue of chastity in contemporary society.",
    date: "2026-04-12",
    readTime: "12 min",
    category: "Christian Life",
    icon: Shield,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 14,
    slug: "social-doctrine",
    title: "Catholic Social Doctrine: Faith in Action",
    excerpt: "Learn about the Church's social teaching and how to apply it in your daily life.",
    date: "2026-04-12",
    readTime: "11 min",
    category: "Formation",
    icon: Users,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
  {
    id: 15,
    slug: "vocational-discernment",
    title: "Vocational Discernment: Finding God's Call",
    excerpt: "Guidance on discerning your vocation and discovering God's plan for your life.",
    date: "2026-04-12",
    readTime: "13 min",
    category: "Vocation",
    icon: MapPin,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 16,
    slug: "eucharist-real-presence",
    title: "The Eucharist: Understanding the Real Presence",
    excerpt: "Explore the Catholic teaching on the Real Presence of Christ in the Eucharist.",
    date: "2026-04-12",
    readTime: "10 min",
    category: "Sacraments",
    icon: Sun,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-400"
  },
  {
    id: 17,
    slug: "eucharistic-adoration",
    title: "Eucharistic Adoration: Time with Jesus",
    excerpt: "Discover the beauty and power of spending time in Eucharistic Adoration.",
    date: "2026-04-12",
    readTime: "8 min",
    category: "Prayer",
    icon: Sun,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 18,
    slug: "what-is-purgatory",
    title: "What is Purgatory? Understanding Catholic Teaching",
    excerpt: "Learn about the Catholic doctrine of Purgatory and its role in our salvation.",
    date: "2026-04-12",
    readTime: "9 min",
    category: "Doctrine",
    icon: Cloud,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 19,
    slug: "how-to-live-lent",
    title: "How to Live Lent: A Season of Conversion",
    excerpt: "Practical tips for making the most of the Lenten season and growing closer to God.",
    date: "2026-04-12",
    readTime: "11 min",
    category: "Liturgy",
    icon: Wind,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-400"
  },
  {
    id: 20,
    slug: "guardian-angels",
    title: "Guardian Angels: Our Heavenly Companions",
    excerpt: "Learn about the role of guardian angels in our lives and how to develop devotion to them.",
    date: "2026-04-12",
    readTime: "7 min",
    category: "Devotions",
    icon: Shield,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 21,
    slug: "meaning-of-crucifix",
    title: "The History and Meaning of the Crucifix",
    excerpt: "Understand why the crucifix is the central symbol of Catholic faith and its importance in our homes.",
    date: "2026-04-12",
    readTime: "6 min",
    category: "Devotions",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 22,
    slug: "jubilee-2025-legacy",
    title: "The Legacy of Jubilee 2025: How to Continue Being a Pilgrim of Hope?",
    excerpt: "The Holy Doors have closed, but the Christian's heart must remain open. Discover how to carry the fruits of the Holy Year into 2026.",
    date: "2026-04-12",
    readTime: "8 min",
    category: "Jubilee 2025",
    icon: Sun,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-400"
  },
  {
    id: 23,
    slug: "plenary-indulgence-guide",
    title: "Plenary Indulgence: Complete Guide for the Final Days of the Jubilee",
    excerpt: "The Church opens its treasures of grace in a special way during the Jubilee. Understand how to receive total remission.",
    date: "2026-04-12",
    readTime: "10 min",
    category: "Formation",
    icon: BookOpen,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 24,
    slug: "church-changes-post-2025",
    title: "What Changes in the Church After the Holy Year of 2025?",
    excerpt: "The closing of the Jubilee is not a period, but a new breath for the mission. Understand the trends and challenges for 2026.",
    date: "2026-04-12",
    readTime: "9 min",
    category: "Current Affairs",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 25,
    slug: "prayers-of-hope-2026",
    title: "Prayers of Hope for Times of Crisis in 2026",
    excerpt: "When strength seems exhausted, prayer is our refuge. Discover powerful prayers to renew your trust in God.",
    date: "2026-04-12",
    readTime: "6 min",
    category: "Prayers",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 26,
    slug: "local-pilgrimage",
    title: "How to Organize a Local Pilgrimage in Your Diocese",
    excerpt: "You don't need to go to Rome to be a pilgrim. Discover how to organize a journey of faith to shrines in your region.",
    date: "2026-04-12",
    readTime: "8 min",
    category: "Devotions",
    icon: MapPin,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
  {
    id: 27,
    slug: "faith-mental-health",
    title: "Faith and Mental Health: How Catholic Spirituality Helps Overcome Anxiety?",
    excerpt: "In a hyperconnected and anxious world, the Catholic tradition offers ancient treasures for the balance of mind and soul.",
    date: "2026-04-12",
    readTime: "12 min",
    category: "Mental Health",
    icon: HeartPulse,
    bgColor: "bg-rose-50",
    iconColor: "text-rose-400"
  }
];
function BlogPage() {
  const { page } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const currentPage = parseInt(page || "1", 10);
  const postsPerPage = 9;
  const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const filteredPosts = selectedCategory === "All" ? sortedPosts : sortedPosts.filter((post) => post.category === selectedCategory);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);
  useEffect(() => {
    if (!page) {
      navigate("/blog/page/1/", { replace: true });
    } else if (currentPage < 1 || currentPage > totalPages) {
      navigate("/blog/page/1/", { replace: true });
    }
  }, [page, currentPage, totalPages, navigate]);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    navigate("/blog/page/1/");
  };
  const handlePageChange = (page2) => {
    navigate(`/blog/page/${page2}/`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Blog - Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Explore articles about Catholic faith, spirituality, sacraments, and Christian living." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: `https://guidecatholic.com/blog/page/${currentPage}/` })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Blog" })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-text mb-4", children: "Guide Catholic Blog" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted max-w-2xl mx-auto", children: "Articles, reflections and teachings to strengthen your faith and deepen your knowledge of Catholic doctrine." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 justify-center mb-12", children: categories.map((category) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleCategoryChange(category),
            className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category ? "bg-accent text-button-text" : "bg-background-muted text-text-muted hover:bg-accent/10"}`,
            children: category
          },
          category
        )) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12", children: currentPosts.map((post) => {
          const Icon = post.icon;
          return /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/blog/${post.slug}/`,
              className: "group bg-surface rounded-3xl overflow-hidden border border-border hover:border-accent transition-all hover:shadow-xl",
              children: [
                /* @__PURE__ */ jsx("div", { className: `${post.bgColor} p-16 flex items-center justify-center`, children: /* @__PURE__ */ jsx(Icon, { className: `w-20 h-20 ${post.iconColor}`, strokeWidth: 1.5 }) }),
                /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-xs text-text-muted mb-4", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-accent font-medium", children: post.category }),
                    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(Calendar, { className: "w-3 h-3" }),
                      new Date(post.date).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                      })
                    ] }),
                    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3" }),
                      post.readTime
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors leading-tight", children: post.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-text-muted text-sm leading-relaxed line-clamp-3", children: post.excerpt })
                ] })
              ]
            },
            post.id
          );
        }) }),
        totalPages > 1 && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handlePageChange(currentPage - 1),
              disabled: currentPage === 1,
              className: `p-2 rounded-lg border transition-colors ${currentPage === 1 ? "border-border text-text-muted cursor-not-allowed opacity-50" : "border-border text-text hover:bg-accent hover:text-button-text hover:border-accent"}`,
              children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: Array.from({ length: totalPages }, (_, i) => i + 1).map((page2) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handlePageChange(page2),
              className: `w-10 h-10 rounded-lg border font-medium transition-colors ${currentPage === page2 ? "bg-accent text-button-text border-accent" : "border-border text-text hover:bg-accent/10 hover:border-accent"}`,
              children: page2
            },
            page2
          )) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handlePageChange(currentPage + 1),
              disabled: currentPage === totalPages,
              className: `p-2 rounded-lg border transition-colors ${currentPage === totalPages ? "border-border text-text-muted cursor-not-allowed opacity-50" : "border-border text-text hover:bg-accent hover:text-button-text hover:border-accent"}`,
              children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5" })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
const allPosts = [
  { id: 1, slug: "how-to-pray-rosary", title: "How to Pray the Holy Rosary: Complete Guide for Beginners", excerpt: "Learn step by step how to pray the Holy Rosary and strengthen your Marian devotion.", category: "Prayers", icon: Heart, bgColor: "bg-rose-100", iconColor: "text-rose-400" },
  { id: 2, slug: "seven-sacraments", title: "The 7 Sacraments of the Catholic Church Explained", excerpt: "Understand the importance and meaning of each of the seven sacraments instituted by Christ.", category: "Formation", icon: BookOpen, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
  { id: 3, slug: "importance-confession", title: "The Importance of Confession: Why Confess Regularly?", excerpt: "Discover the spiritual benefits of frequent confession and how it transforms our Christian life.", category: "Sacraments", icon: Church, bgColor: "bg-violet-100", iconColor: "text-violet-400" },
  { id: 4, slug: "patron-saints", title: "Patron Saints: How to Choose and Honor Yours", excerpt: "Learn about the tradition of patron saints and how they can intercede for you on your faith journey.", category: "Devotions", icon: Users, bgColor: "bg-amber-100", iconColor: "text-amber-400" },
  { id: 5, slug: "fasting-abstinence", title: "Fasting and Abstinence: Practices That Strengthen the Soul", excerpt: "Learn about the practices of fasting and abstinence in the Catholic Church.", category: "Spirituality", icon: Flame, bgColor: "bg-orange-100", iconColor: "text-orange-400" },
  { id: 6, slug: "sunday-mass", title: "Sunday Mass: Center of Christian Life", excerpt: "Why participation in Sunday Mass is essential for every Catholic.", category: "Liturgy", icon: Sun, bgColor: "bg-yellow-100", iconColor: "text-yellow-400" },
  { id: 7, slug: "prayer-life", title: "Prayer Life: How to Cultivate Intimacy with God", excerpt: "Learn how to transform your dialogue with God into a source of life and peace.", category: "Prayer", icon: Heart, bgColor: "bg-rose-100", iconColor: "text-rose-400" },
  { id: 8, slug: "meaning-mass", title: "Understanding the Mass: A Journey Through the Liturgy", excerpt: "Discover the deep meaning behind each part of the Mass.", category: "Liturgy", icon: Church, bgColor: "bg-violet-100", iconColor: "text-violet-400" },
  { id: 9, slug: "examination-conscience", title: "Examination of Conscience: Daily Practice for Spiritual Growth", excerpt: "Learn how to examine your conscience daily and grow in holiness.", category: "Spirituality", icon: BookOpen, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
  { id: 10, slug: "virgin-mary", title: "The Virgin Mary: Mother of God and Our Mother", excerpt: "Explore the role of Mary in salvation history and how she continues to intercede for us.", category: "Devotions", icon: Heart, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
  { id: 11, slug: "gifts-holy-spirit", title: "The Seven Gifts of the Holy Spirit", excerpt: "Understand the seven gifts the Holy Spirit bestows upon us at Confirmation.", category: "Formation", icon: Flame, bgColor: "bg-orange-100", iconColor: "text-orange-400" },
  { id: 12, slug: "lectio-divina", title: "Lectio Divina: Praying with Scripture", excerpt: "Discover the ancient practice of Lectio Divina and how to pray with the Word of God.", category: "Prayer", icon: BookOpen, bgColor: "bg-emerald-100", iconColor: "text-emerald-400" },
  { id: 13, slug: "chastity-modern-world", title: "Chastity in the Modern World: Living Purity Today", excerpt: "Practical guidance on living the virtue of chastity in contemporary society.", category: "Christian Life", icon: Shield, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
  { id: 14, slug: "social-doctrine", title: "Catholic Social Doctrine: Faith in Action", excerpt: "Learn about the Church's social teaching and how to apply it in your daily life.", category: "Formation", icon: Users, bgColor: "bg-emerald-100", iconColor: "text-emerald-400" },
  { id: 15, slug: "vocational-discernment", title: "Vocational Discernment: Finding God's Call", excerpt: "Guidance on discerning your vocation and discovering God's plan for your life.", category: "Vocation", icon: MapPin, bgColor: "bg-violet-100", iconColor: "text-violet-400" },
  { id: 16, slug: "eucharist-real-presence", title: "The Eucharist: Understanding the Real Presence", excerpt: "Explore the Catholic teaching on the Real Presence of Christ in the Eucharist.", category: "Sacraments", icon: Sun, bgColor: "bg-yellow-100", iconColor: "text-yellow-400" },
  { id: 17, slug: "eucharistic-adoration", title: "Eucharistic Adoration: Time with Jesus", excerpt: "Discover the beauty and power of spending time in Eucharistic Adoration.", category: "Prayer", icon: Sun, bgColor: "bg-amber-100", iconColor: "text-amber-400" },
  { id: 18, slug: "what-is-purgatory", title: "What is Purgatory? Understanding Catholic Teaching", excerpt: "Learn about the Catholic doctrine of Purgatory and its role in our salvation.", category: "Doctrine", icon: Cloud, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
  { id: 19, slug: "how-to-live-lent", title: "How to Live Lent: A Season of Conversion", excerpt: "Practical tips for making the most of the Lenten season and growing closer to God.", category: "Liturgy", icon: Flame, bgColor: "bg-purple-100", iconColor: "text-purple-400" },
  { id: 20, slug: "guardian-angels", title: "Guardian Angels: Our Heavenly Companions", excerpt: "Learn about the role of guardian angels in our lives and how to develop devotion to them.", category: "Devotions", icon: Shield, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
  { id: 21, slug: "meaning-of-crucifix", title: "The History and Meaning of the Crucifix", excerpt: "Understand why the crucifix is the central symbol of Catholic faith.", category: "Devotions", icon: Church, bgColor: "bg-violet-100", iconColor: "text-violet-400" },
  { id: 22, slug: "jubilee-2025-legacy", title: "The Legacy of Jubilee 2025: How to Continue Being a Pilgrim of Hope?", excerpt: "Discover how to carry the fruits of the Holy Year into 2026.", category: "Jubilee 2025", icon: Sun, bgColor: "bg-yellow-100", iconColor: "text-yellow-400" },
  { id: 23, slug: "plenary-indulgence-guide", title: "Plenary Indulgence: Complete Guide", excerpt: "Understand how to receive total remission of temporal punishment.", category: "Formation", icon: BookOpen, bgColor: "bg-blue-100", iconColor: "text-blue-400" },
  { id: 24, slug: "church-changes-post-2025", title: "What Changes in the Church After the Holy Year of 2025?", excerpt: "Understand the trends and challenges for the Church in 2026.", category: "Current Affairs", icon: Church, bgColor: "bg-violet-100", iconColor: "text-violet-400" },
  { id: 25, slug: "prayers-of-hope-2026", title: "Prayers of Hope for Times of Crisis in 2026", excerpt: "Discover powerful prayers to renew your trust in God.", category: "Prayers", icon: Heart, bgColor: "bg-rose-100", iconColor: "text-rose-400" },
  { id: 26, slug: "local-pilgrimage", title: "How to Organize a Local Pilgrimage in Your Diocese", excerpt: "Discover how to organize a journey of faith to shrines in your region.", category: "Devotions", icon: MapPin, bgColor: "bg-emerald-100", iconColor: "text-emerald-400" },
  { id: 27, slug: "faith-mental-health", title: "Faith and Mental Health: How Catholic Spirituality Helps Overcome Anxiety", excerpt: "The Catholic tradition offers ancient treasures for the balance of mind and soul.", category: "Mental Health", icon: HeartPulse, bgColor: "bg-rose-50", iconColor: "text-rose-400" }
];
function RelatedArticles({ currentSlug }) {
  const filteredPosts = allPosts.filter((post) => post.slug !== currentSlug);
  const shuffled = [...filteredPosts].sort(() => 0.5 - Math.random());
  const selectedPosts = shuffled.slice(0, 3);
  return /* @__PURE__ */ jsxs("section", { className: "mt-16 pt-16 border-t border-border", children: [
    /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-8", children: "Continue Reading" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: selectedPosts.map((post) => /* @__PURE__ */ jsx(Link, { to: `/blog/${post.slug}/`, className: "group", children: /* @__PURE__ */ jsxs("article", { className: "bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full border border-border/50", children: [
      /* @__PURE__ */ jsx("div", { className: `aspect-video flex items-center justify-center ${post.bgColor}`, children: /* @__PURE__ */ jsx(post.icon, { className: `w-10 h-10 ${post.iconColor} group-hover:scale-110 transition-transform duration-300`, strokeWidth: 1.5 }) }),
      /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 text-xs text-text-muted mb-2", children: /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium", children: post.category }) }),
        /* @__PURE__ */ jsx("h4", { className: "font-display text-base font-semibold text-text mb-2 line-clamp-2 group-hover:text-accent transition-colors", children: post.title }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center text-xs text-accent font-medium", children: [
          "Read article ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3 ml-1" })
        ] })
      ] })
    ] }) }, post.id)) })
  ] });
}
function QuizCTA({
  title = "How is your faith journey?",
  description = "Many Catholics feel they could live their faith more deeply, but don't know where to start. Take our quiz and receive personalized guidance for your spiritual life."
}) {
  return /* @__PURE__ */ jsxs("div", { className: "my-12 p-8 bg-gradient-to-br from-accent/15 via-accent/5 to-primary/10 rounded-2xl border border-accent/20 shadow-sm relative overflow-hidden group", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity", children: /* @__PURE__ */ jsx(Sparkles, { className: "w-24 h-24 text-accent" }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-3", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6 max-w-2xl", children: description }),
      /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-accent hover:bg-accent/90 text-button-text font-bold px-8 shadow-lg shadow-accent/20 transition-all hover:scale-105", children: "Take the Quiz Now" }) })
    ] })
  ] });
}
function BlogFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(schemaData) }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "bg-background-muted/50 border border-border rounded-2xl p-8 my-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-text mb-6", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs("div", { className: "bg-surface border border-border rounded-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setOpenIndex(openIndex === index ? null : index),
            className: "w-full flex items-center justify-between p-4 text-left hover:bg-background-muted/50 transition-colors",
            children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-text pr-4 text-base", children: faq.question }),
              /* @__PURE__ */ jsx(
                ChevronDown,
                {
                  className: `w-5 h-5 text-accent flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`
                }
              )
            ]
          }
        ),
        openIndex === index && /* @__PURE__ */ jsx("div", { className: "px-4 pb-4 text-text-muted leading-relaxed border-t border-border pt-3", children: faq.answer })
      ] }, index)) })
    ] })
  ] });
}
function HowToPrayRosary() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "How to Pray the Holy Rosary: Complete Guide for Beginners | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Learn step by step how to pray the Holy Rosary correctly. Complete guide with mysteries, prayers and meditations to strengthen your Marian devotion." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "how to pray the rosary step by step, complete holy rosary, mysteries of the rosary, catholic rosary, rosary prayer, hail mary" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/how-to-pray-rosary/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "How to Pray the Holy Rosary" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Prayers" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "December 05, 2024"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "8 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "How to Pray the Holy Rosary: Complete Guide for Beginners" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "The Holy Rosary is one of the most powerful and beloved prayers of the Catholic Church. Learn step by step how to pray this Marian devotion and strengthen your spiritual life." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Heart, { className: "w-24 h-24 text-rose-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The Holy Rosary is undoubtedly one of the greatest gifts Heaven has granted to the Church Militant. When the Blessed Virgin Mary appeared to Saint Dominic de Guzmán in the 13th century, she gave him this powerful spiritual weapon to combat heresies and convert sinners. Since then, the Rosary has been the refuge of the afflicted, the hope of the desperate, and the sure path for those seeking intimacy with God through the Immaculate Heart of Mary." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'It is no coincidence that all the saints of recent centuries were fervent devotees of the Rosary. Saint Padre Pio prayed up to 30 rosaries a day. Saint Teresa of Calcutta never separated from her rosary. Saint John Paul II called the Rosary his "favorite prayer." There is something profoundly transformative about this simple prayer, accessible to all, yet capable of elevating the soul to the highest contemplations.' }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "What is the Holy Rosary?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `The Rosary is much more than a repetition of prayers – it is a school of contemplation where we learn to look at Jesus through Mary's eyes. The name "Rosary" comes from the Latin "rosarium," meaning "crown of roses." Each Hail Mary is like a mystical rose we offer to our Heavenly Mother, and she, in turn, transforms them into graces that she pours upon us and upon the entire world.` }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The structure of the Rosary is brilliant in its simplicity: while the lips pronounce the prayers, the mind contemplates the mysteries of Christ's life. It is as if we walk hand in hand with Mary through the most important moments of salvation history – from the Annunciation to the Coronation of the Virgin in Heaven. The complete prayer consists of 20 mysteries divided into four groups: Joyful, Luminous, Sorrowful, and Glorious." }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "Is the Rosary your spiritual weapon?",
              description: "Our Lady gave us the Rosary as a path to Jesus. Take our quiz and discover how to make your Marian prayer more contemplative and effective for your spiritual life."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Mysteries of the Holy Rosary" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Joyful Mysteries (Monday and Saturday)" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-4", children: "The Joyful Mysteries contemplate the joyful events of the incarnation and childhood of Jesus:" }),
          /* @__PURE__ */ jsxs("ol", { className: "list-decimal list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsx("li", { children: "The Annunciation of the Angel Gabriel to Mary" }),
            /* @__PURE__ */ jsx("li", { children: "The Visitation of Mary to Saint Elizabeth" }),
            /* @__PURE__ */ jsx("li", { children: "The Birth of Jesus in Bethlehem" }),
            /* @__PURE__ */ jsx("li", { children: "The Presentation of Jesus in the Temple" }),
            /* @__PURE__ */ jsx("li", { children: "The Finding of Jesus in the Temple at age 12" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Luminous Mysteries (Thursday)" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-4", children: "Instituted by Saint John Paul II in 2002, the Luminous Mysteries illuminate the public life of Jesus:" }),
          /* @__PURE__ */ jsxs("ol", { className: "list-decimal list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsx("li", { children: "The Baptism of Jesus in the Jordan River" }),
            /* @__PURE__ */ jsx("li", { children: "The Wedding at Cana" }),
            /* @__PURE__ */ jsx("li", { children: "The Proclamation of the Kingdom of God" }),
            /* @__PURE__ */ jsx("li", { children: "The Transfiguration of Jesus" }),
            /* @__PURE__ */ jsx("li", { children: "The Institution of the Eucharist" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Sorrowful Mysteries (Tuesday and Friday)" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-4", children: "The Sorrowful Mysteries make us meditate on the Passion and Death of Our Lord:" }),
          /* @__PURE__ */ jsxs("ol", { className: "list-decimal list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsx("li", { children: "The Agony of Jesus in the Garden of Gethsemane" }),
            /* @__PURE__ */ jsx("li", { children: "The Scourging at the Pillar" }),
            /* @__PURE__ */ jsx("li", { children: "The Crowning with Thorns" }),
            /* @__PURE__ */ jsx("li", { children: "Jesus Carries the Cross" }),
            /* @__PURE__ */ jsx("li", { children: "The Crucifixion and Death of Jesus" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Glorious Mysteries (Wednesday and Sunday)" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-4", children: "The Glorious Mysteries celebrate Christ's victory over death:" }),
          /* @__PURE__ */ jsxs("ol", { className: "list-decimal list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsx("li", { children: "The Resurrection of Jesus" }),
            /* @__PURE__ */ jsx("li", { children: "The Ascension of Jesus to Heaven" }),
            /* @__PURE__ */ jsx("li", { children: "The Descent of the Holy Spirit upon the Apostles" }),
            /* @__PURE__ */ jsx("li", { children: "The Assumption of Mary into Heaven" }),
            /* @__PURE__ */ jsx("li", { children: "The Coronation of Mary as Queen of Heaven and Earth" })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Step by Step: How to Pray the Rosary" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "1. Make the Sign of the Cross" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Begin by holding the crucifix of the rosary and making the Sign of the Cross: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen." This gesture places us in the presence of the Holy Trinity and marks the beginning of our prayer.' }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "2. Pray the Apostles' Creed" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Still on the crucifix, pray the Creed, professing your faith in the fundamental articles of Catholic doctrine. This prayer unites us with all Christians who, throughout the centuries, have professed the same faith." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "3. Pray One Our Father, Three Hail Marys, and One Glory Be" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "On the initial beads, pray one Our Father asking for an increase in the theological virtues (faith, hope, and charity), followed by three Hail Marys and one Glory Be to the Father. These prayers prepare our soul for meditation on the mysteries." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "4. Announce and Meditate on Each Mystery" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'For each decade, announce the corresponding mystery and dedicate a few moments to contemplate it. Then, pray one Our Father, ten Hail Marys while meditating on the mystery, and conclude with the Glory Be to the Father and the Fatima Prayer: "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those in most need of Thy mercy."' }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "5. Conclude with the Hail Holy Queen" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "After the five decades, pray the Hail Holy Queen and the final prayers. You can add personal intentions and thank Our Lady for the grace of having prayed the Rosary." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Spiritual Benefits of the Holy Rosary" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Our Lady promised Saint Dominic and Blessed Alan de la Roche fifteen extraordinary promises for those who pray the Rosary with devotion. Among them: special protection from the Virgin Mary, abundant graces, a powerful weapon against hell, flourishing of virtues, God's mercy, and the certainty of not perishing without the sacraments." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Saint Louis Marie Grignion de Montfort, the great apostle of the Rosary, teaches that this prayer is "the most powerful weapon against the devil." When we pray the Rosary, we are not alone – the entire heavenly court joins us. The angels rejoice, demons tremble, and the souls in Purgatory receive relief. It is a prayer that moves Heaven and transforms earth.' }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Tips for Praying with More Devotion" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The secret of the Rosary is not in quantity, but in the quality of prayer. One rosary prayed with love and attention is worth more than many prayed in haste and distraction. Here are some guidelines from spiritual masters:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Choose a quiet place:" }),
              " If possible, pray before an image of Our Lady or the Blessed Sacrament"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Establish a fixed time:" }),
              " Consistency is more important than passing fervor"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Truly meditate:" }),
              " Don't let your mind wander; contemplate each scene as if you were present"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Pray calmly:" }),
              " Better one mystery well prayed than five in a rush"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Use a blessed rosary:" }),
              " Sacramentals help us maintain focus"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Offer intentions:" }),
              " Each decade can be offered for a specific person or need"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Persevere in dryness:" }),
              " When prayer seems arid, that's when it pleases God most"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Family Rosary" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `"The family that prays together stays together" – this phrase by Father Patrick Peyton expresses a truth proven by millions of Catholic homes. The family Rosary is a fortress against the attacks of the modern world. When parents and children kneel together before Mary, invisible bonds of grace are woven, protecting the home from life's storms.` }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Give me an army that prays the Rosary, and I will conquer the world."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Blessed Pope Pius IX" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"We can never thank Our Lady enough for giving us the Rosary."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Saint Padre Pio" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "how-to-pray-rosary" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "How many mysteries does the Holy Rosary have?",
            answer: "The Holy Rosary has 20 mysteries divided into four groups: 5 Joyful Mysteries (Monday and Saturday), 5 Luminous Mysteries (Thursday), 5 Sorrowful Mysteries (Tuesday and Friday), and 5 Glorious Mysteries (Wednesday and Sunday)."
          },
          {
            question: "How long does it take to pray the full Rosary?",
            answer: "Praying one set of 5 mysteries takes approximately 15–20 minutes. The full 20-mystery Rosary takes about 60–80 minutes. Most Catholics pray one set of 5 mysteries per day."
          },
          {
            question: "Do I need a physical rosary to pray?",
            answer: "While a physical rosary helps you keep count and focus, it is not strictly required. You can count the prayers on your fingers or use a rosary app. However, using a blessed rosary is recommended as it is a sacramental."
          },
          {
            question: "Can children pray the Rosary?",
            answer: "Absolutely! The Rosary is suitable for all ages. For young children, start with just one decade (10 Hail Marys) and gradually increase. The family Rosary is one of the most powerful spiritual practices a Catholic household can adopt."
          },
          {
            question: "What are the promises Our Lady made to those who pray the Rosary?",
            answer: "Our Lady promised 15 graces to those who pray the Rosary devoutly, including: special protection from Mary, peace in families, perseverance in virtue, protection from hell, and the grace of final perseverance (dying in a state of grace)."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "Discover How Your Faith Life Is" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and receive a personalized assessment of your Catholic journey." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function SevenSacraments() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "The 7 Sacraments of the Catholic Church Explained | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Understand the importance and meaning of each of the seven sacraments instituted by Christ: Baptism, Eucharist, Confirmation, Confession, Anointing, Holy Orders, and Matrimony." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "what are the 7 sacraments, seven sacraments of the catholic church, baptism eucharist confirmation confession, sacraments explained, what are sacraments" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/seven-sacraments/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "The 7 Sacraments" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Formation" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "December 3, 2024"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "12 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "The 7 Sacraments of the Catholic Church Explained" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "Know the sacred signs instituted by Christ that communicate divine grace and sanctify us at each stage of Christian life." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-24 h-24 text-blue-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The sacraments are efficacious signs of grace, instituted by Christ and entrusted to the Church, by which divine life is dispensed to us. The seven sacraments touch all the stages and all the important moments of Christian life: birth, growth, healing, and mission. Through them, we receive the graces necessary for our sanctification and salvation." }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "Are you living the grace of the sacraments?",
              description: "The sacraments are channels of divine life in our soul. Take our quiz and receive a personalized diagnosis of your sacramental journey and faith."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Sacraments of Christian Initiation" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "1. Baptism: The Door to Christian Life" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Baptism is the foundation of all Christian life and the door that opens access to the other sacraments. Through Baptism, we are freed from original sin and all personal sins, we are reborn as children of God, we become members of Christ, and we are incorporated into the Church. The sacrament imprints an indelible spiritual character on the soul, which is why it can only be received once." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'The matter of Baptism is natural water, and the form is the words: "I baptize you in the name of the Father, and of the Son, and of the Holy Spirit." This sacrament can be administered by any person who has the intention to do what the Church does, in case of urgent necessity. Godparents assume the commitment to help the baptized in their journey of faith.' }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "2. Confirmation: The Sacrament of Christian Maturity" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Confirmation, also called Chrismation, perfects baptismal grace and unites us more firmly to Christ. Through this sacrament, we receive the Holy Spirit in a special way, we are enriched with a particular strength of the Holy Spirit, and we are more strictly obliged to spread and defend the faith by words and deeds, as true witnesses of Christ." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'The essential rite of Confirmation consists in the anointing with sacred chrism on the forehead of the baptized, imposed together with the words: "Be sealed with the Gift of the Holy Spirit." This anointing signifies and imprints the spiritual seal, the character, which is also indelible and marks total belonging to Christ.' }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "3. Eucharist: The Sacrament Par Excellence" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'The Eucharist is "the source and summit of all Christian life." It is Christ Himself who offers Himself in sacrifice and gives Himself as food for eternal life. At Mass, the bread and wine are transubstantiated into the Body and Blood of Christ through the words of consecration pronounced by the priest and the action of the Holy Spirit.' }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Eucharistic communion increases our union with Christ, forgives venial sins, preserves us from future mortal sins, and strengthens the bonds of charity. Catholics must be in a state of grace to receive communion and observe the Eucharistic fast of at least one hour before communion. The Church recommends that the faithful receive the Eucharist every time they participate in Mass." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Sacraments of Healing" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "4. Penance and Reconciliation: The Sacrament of Forgiveness" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Confession, also called the Sacrament of Penance or Reconciliation, offers the baptized the possibility to convert, recover grace, and be reconciled with God after having committed sins. It is the sacrament by which sins committed after Baptism are forgiven by the power of Christ, through the absolution of the priest." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The acts of the penitent are: contrition (sincere repentance), confession (accusation of sins to the priest), and satisfaction (fulfillment of the penance imposed). The priest's absolution forgives sins and reconciles the sinner with God and with the Church. Every faithful person who has reached the age of reason is obliged to faithfully confess their grave sins at least once a year." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "5. Anointing of the Sick: Comfort and Grace in Illness" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The Anointing of the Sick confers on Christians a special grace to face the difficulties proper to the state of serious illness or old age. This sacrament can be received every time a person suffers from serious illness, before a risky operation, or when old age becomes aggravated. It is not intended only for those who are about to die." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The effects of this sacrament include: the union of the sick person with Christ's Passion, comfort, peace and courage, forgiveness of sins (if the sick person could not confess), restoration of health (if convenient for salvation), and preparation for passage to eternal life. The sacrament is administered by the priest with the anointing of blessed oil." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Sacraments at the Service of Communion" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "6. Holy Orders: The Sacrament of Apostolic Ministry" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The Sacrament of Holy Orders is that by which the mission entrusted by Christ to the Apostles continues to be exercised in the Church, until the end of time. It comprises three degrees: the episcopate, the presbyterate, and the diaconate. Bishops receive the fullness of the sacrament of Holy Orders, presbyters (priests) participate in Christ's ministry, and deacons are ordained for service." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The minister of this sacrament is the bishop. Only baptized men can validly receive Holy Orders. The Church confers the sacrament of Holy Orders only on baptized men whose aptitudes for the exercise of ministry have been duly recognized. Priestly celibacy is a sign of total consecration to Christ in the Latin Church." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "7. Matrimony: Sacred and Indissoluble Union" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Matrimony is the covenant by which a man and a woman establish between themselves a communion of the whole of life, ordered by its natural character to the good of the spouses and to the generation and education of offspring. Between the baptized, matrimony was elevated by Christ to the dignity of a sacrament. The spouses themselves are ministers of the sacrament." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The essential properties of matrimony are unity (one man and one woman) and indissolubility (until death separates them). Matrimonial consent must be free, conscious, and given in the presence of witnesses and the sacred minister. Matrimony confers on spouses the grace to love each other with the love with which Christ loved the Church, perfecting their human love, strengthening their indissoluble unity, and sanctifying them on the path to eternal life." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Importance of Sacraments in Christian Life" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'The sacraments are privileged channels of divine grace. They accompany us from birth to death, sanctifying each important moment of our existence. As the Catechism teaches, "the sacraments are necessary for salvation" and "confer the grace they signify." Therefore, every Catholic should seek to live them with faith, devotion, and regularity.' }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"The sacraments are forces that come forth from the Body of Christ, ever living and life-giving."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Catechism of the Catholic Church, 1116" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "seven-sacraments" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "What are the 7 Sacraments of the Catholic Church?",
            answer: "The seven sacraments are: Baptism, Confirmation, Eucharist, Penance (Confession), Anointing of the Sick, Holy Orders, and Matrimony. Each was instituted by Jesus Christ and entrusts visible signs that confer the grace they signify."
          },
          {
            question: "Which sacraments can be received only once?",
            answer: "Baptism, Confirmation, and Holy Orders can only be received once because they imprint a permanent spiritual mark (character) on the soul. The other four sacraments can be received multiple times."
          },
          {
            question: "What is the most important sacrament?",
            answer: "The Eucharist is considered the 'source and summit of all Christian life' (Lumen Gentium 11). However, Baptism is the gateway to all other sacraments, making it foundational to the entire sacramental life."
          },
          {
            question: "Can non-Catholics receive the sacraments?",
            answer: "Generally, the sacraments are for Catholics in good standing. However, in danger of death, a non-Catholic Christian may receive Anointing of the Sick, Penance, and Eucharist if they cannot access their own minister and ask on their own initiative."
          },
          {
            question: "How often should Catholics receive the Eucharist?",
            answer: "The Church requires Catholics to receive Communion at least once a year during the Easter season. However, the Church strongly encourages frequent, even daily, reception of the Eucharist for those properly disposed."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "Discover How Your Faith Life Is Going" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and receive a personalized diagnosis of your Catholic journey." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function ImportanceOfConfession() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "The Importance of Confession: Why Confess Regularly? | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Discover the spiritual benefits of frequent confession. Learn how to confess well and why this sacrament transforms our Christian life." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "why confess to a priest, importance of confession, frequent confession, benefits of confession, how to make a good confession, examination of conscience" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/importance-confession/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "The Importance of Confession" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Sacraments" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "November 28, 2024"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "6 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "The Importance of Confession: Why Confess Regularly?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "Confession is one of the greatest treasures of the Catholic Church. Discover how this sacrament can transform your spiritual life and bring you closer to God." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Church, { className: "w-24 h-24 text-violet-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "If there is a sacrament that reveals in a special way the merciful heart of God, it is Confession. Imagine: the Creator of the universe, the thrice-Holy God, bends over human misery not to condemn, but to heal. Not to humiliate, but to restore. The confessional is not a court of condemnation – it is a hospital for souls, where the divine Physician applies the balm of His mercy to the wounds of sin." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Jesus instituted this sacrament on the night of the Resurrection, when He breathed on the Apostles and said: "Receive the Holy Spirit. Whose sins you forgive are forgiven them" (Jn 20:22-23). What an extraordinary gift! The same power that raised Christ from the dead is available to resurrect us from the spiritual death of sin. Each sincere confession is a little Easter, a passage from death to life.' }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "When was your last spiritual resurrection?",
              description: "Confession is the sacrament of joy. Take our quiz and discover how to overcome the fear of the confessional and live the freedom that only God's forgiveness can provide."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "What Happens in Confession?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'When you enter the confessional, you are not simply talking to a priest – you are before Christ Himself, who acts through the priest. The priest is merely the instrument; it is Jesus who forgives. When the confessor pronounces the words of absolution – "I absolve you from your sins, in the name of the Father, and of the Son, and of the Holy Spirit" – a miracle greater than the creation of the world happens: a soul dead from sin comes back to life.' }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'This encounter restores our friendship with God, returning sanctifying grace to us if we lost it through mortal sin, or increasing it if we confess venial sins. The Catechism calls confession the "second plank of salvation after the shipwreck of lost grace." If Baptism is the first plank, Confession is the second chance God gives us – and He offers it as many times as we need.' }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Saint Faustina Kowalska, the apostle of Divine Mercy, recorded in her diary the words of Jesus: "When you approach confession, know that I Myself am waiting for you in the confessional; I am only hidden in the priest, but it is I Myself who act in your soul." What consolation to know that we do not face our sins alone, but in the hands of infinite Love!' }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Spiritual Benefits of Frequent Confession" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Growth in Self-Knowledge" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Preparation for confession requires an honest examination of conscience. This regular exercise helps us better know our weaknesses, sinful tendencies, and behavior patterns. Over time, we develop a more delicate conscience sensitive to sin, which allows us to avoid it more effectively." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Strengthening of the Will" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Each sincere confession strengthens our will to avoid sin. Sacramental graces give us strength to resist temptations and practice virtues. Saint John Paul II recommended monthly confession, and many saints confessed weekly, recognizing that this practice was essential for their spiritual progress." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Inner Peace and Joy" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Those who confess regularly experience a peace that the world cannot give. The weight of guilt is removed, the conscience becomes tranquil, and the heart fills with true joy. This peace does not depend on external circumstances, but springs from the depths of the soul reconciled with God." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Protection Against Mortal Sin" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Frequent confession creates a kind of "spiritual shield" against grave sins. When we become accustomed to confessing regularly, even venial sins, we develop greater sensitivity to sin and stronger resistance to temptations that could lead us to mortal sins.' }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "How to Make a Good Confession" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "1. Examination of Conscience" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Before confession, dedicate time to examine your conscience in light of the Ten Commandments and the obligations of your state in life. Ask the Holy Spirit to illuminate your mind to recognize your sins. Be honest with yourself, neither minimizing nor exaggerating your faults." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "2. Sincere Contrition" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Contrition is the sorrow of the soul for sin committed, united with the purpose of sinning no more. Perfect contrition is born from love of God; imperfect contrition (attrition), from fear of hell or the ugliness of sin. Both are sufficient for the sacrament, but we should aspire to perfect contrition." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "3. Complete Confession" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Confess all mortal sins you remember, indicating their number and circumstances that alter their nature. Venial sins need not be confessed, but it is very profitable to do so. Be clear, concise, and complete, avoiding unnecessary details." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "4. Purpose of Amendment" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Have a firm purpose to sin no more and to avoid occasions of sin. This purpose need not be accompanied by certainty that you will never fall again, but it must be sincere and determined. Ask God for the grace to fulfill this purpose." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "5. Satisfaction or Penance" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Fulfill the penance indicated by the confessor. It serves to repair the damage caused by sin and helps in the conversion process. If you forget the penance, you should return to the confessor to receive it again." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "How Often Should You Confess?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The Church requires confession at least once a year, especially before Easter, if there is grave sin. However, this is the absolute minimum – like saying you are obliged to eat at least once a week to avoid starving. Spiritual masters recommend monthly confession for those who wish to progress in spiritual life, and many saints confessed weekly." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Saint Josemaría Escrivá taught: "Frequent confession is one of the greatest helps for interior life." Saint John Paul II confessed weekly, even as Pope. Saint Teresa of Calcutta did too. They understood that confession is not just to "clean" grave sins, but to polish the soul, remove imperfections, grow in holiness.' }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Do not wait to commit a grave sin to seek the sacrament. Confess also venial sins, imperfections, disordered tendencies. Each confession is an opportunity to receive special graces to overcome that defect that bothers you so much, that temptation that always returns, that vice that seems invincible. With God's grace, nothing is impossible." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Overcoming Fear of the Confessional" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Many Catholics avoid confession out of shame or fear. But think: the priest has heard everything. Your sin will not scandalize him or diminish the respect he has for you. On the contrary, he will rejoice in your humility and courage. Moreover, the sacramental seal is absolute – the priest would prefer to die rather than reveal what he heard in confession." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `The devil does everything to keep us away from the confessional. Before confession, he minimizes our sins: "That's nothing, everyone does it." Afterward, he maximizes them: "You are unforgivable, there's no point in confessing." Do not listen to these lies. God's mercy is greater than any sin. As Jesus said to Saint Faustina: "Even if the sins of souls were as black as night, when the sinner turns to My mercy, he gives Me the greatest glory."` }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"There is no sin, however grave, that the Church cannot forgive."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Catechism of the Catholic Church, 982" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Confession is the sacrament of joy. Do not be afraid to confess!"' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Pope Francis" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "importance-confession" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "How often should Catholics go to Confession?",
            answer: "The Church requires Confession at least once a year for those in mortal sin. However, the Church strongly recommends monthly Confession for spiritual growth. Many saints went weekly. Pope John Paul II went every week."
          },
          {
            question: "What sins must be confessed in Confession?",
            answer: "All mortal sins must be confessed, specifying the type of sin and the number of times committed. Venial sins are encouraged to be confessed but are not strictly required. A mortal sin involves grave matter, full knowledge, and deliberate consent."
          },
          {
            question: "Is Confession really necessary if I'm sorry in my heart?",
            answer: "Yes. Jesus specifically instituted the Sacrament of Confession when He said to the Apostles: 'Whose sins you forgive are forgiven them' (John 20:23). Perfect contrition can restore grace in an emergency, but one must still intend to go to Confession."
          },
          {
            question: "What happens if I forget to confess a sin?",
            answer: "If you forget a sin in good faith, it is forgiven through the absolution. However, when you remember it, you should mention it in your next Confession. Deliberately hiding a mortal sin makes the entire Confession invalid."
          },
          {
            question: "Can a priest ever reveal what is said in Confession?",
            answer: "Absolutely not. The seal of Confession is absolute and inviolable. A priest is forbidden under any circumstances to reveal anything heard in Confession. This is called the 'sacramental seal' and breaking it results in automatic excommunication."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "Discover How Your Faith Life Is Going" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and receive a personalized diagnosis of your Catholic journey." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function PatronSaints() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Patron Saints: How to Choose and Honor Yours | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Learn about the tradition of patron saints in the Catholic Church. Discover how to choose your patron saint and how to honor them to receive their intercession." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "how to choose patron saint, patron saints, saint protector, intercession of saints, devotion to saints, saint of my name" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/patron-saints/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Patron Saints" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Devotions" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "November 25, 2024"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "7 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "Patron Saints: How to Choose and Honor Yours" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "The saints are our older brothers and sisters in faith, who have already reached heavenly glory and continue interceding for us before God." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Users, { className: "w-24 h-24 text-amber-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Devotion to the saints is one of the most beautiful traditions of the Catholic Church. Since the first centuries, Christians venerated those who gave heroic witness to faith, often with their own blood. Patron saints are special intercessors who accompany us on our earthly journey, protecting us and inspiring us with their example of holiness." }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "Who is your friend in Heaven?",
              description: "Patron saints are our protectors and models. Take our quiz and discover which saint has a story that connects with your faith journey."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "What is a Patron Saint?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'A patron saint is a saint recognized as a special protector of a person, place, profession, group, or cause. The word "patron" comes from the Latin "patronus," which means "protector" or "defender." When we choose or receive a patron saint, we establish a special spiritual relationship with them, entrusting ourselves to their intercession before God.' }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "This tradition dates back to the first centuries of the Church, when Christians began to invoke martyrs as intercessors. Over time, the practice expanded to include confessors, virgins, doctors of the Church, and all who were canonized. Today, each Catholic can have one or more patron saints who accompany them on their journey of faith." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "How Do We Receive a Patron Saint?" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "At Baptism" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The most common time to receive a patron saint is at Baptism. Traditionally, parents choose for their child a saint's name, which becomes their baptismal patron. This saint will accompany the person throughout their life, interceding for them and serving as a model of virtue. Therefore, it is important to know the history and virtues of the saint whose name we bear." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "At Confirmation" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "In the Sacrament of Confirmation, the confirmand chooses a second patron saint. This choice, made more consciously and personally, represents a commitment to follow that saint's example in their adult life of faith. Many choose saints whose virtues they wish to imitate or who faced challenges similar to their own." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Through Personal Devotion" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'In addition to the saints of Baptism and Confirmation, we can develop devotion to other saints throughout life. Often, a saint "chooses us" – we feel a special attraction to their story, their words, or their charism. Others are adopted as patrons of professions, states of life, or specific needs.' }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "How to Choose a Patron Saint" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "If you are seeking a patron saint, consider these guidelines:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Your name:" }),
              " Research the saint who bears your baptismal name"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Your profession:" }),
              " Many professions have traditional patron saints"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Your difficulties:" }),
              " Look for saints who faced similar challenges"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Your virtues:" }),
              " Choose a saint whose virtues you wish to develop"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Your birth date:" }),
              " The saint of the day can be a good patron"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Spiritual intuition:" }),
              " Trust in grace – often the saint finds us"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Popular Patron Saints and Their Causes" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Saint Joseph" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Patron of the Universal Church, workers, families, and a happy death. Husband of Mary and foster father of Jesus, Saint Joseph is a model of silent faith, obedience to God, and dedication to family. He is especially invoked by fathers and those seeking employment." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Saint Thérèse of the Child Jesus" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Patroness of missions and florists. Her "little way" of love and trust in God inspires millions. She is invoked in impossible causes and often manifests her intercession by sending roses.' }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Saint Anthony of Padua" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Patron of lost objects, the poor, and popular matchmaker. Doctor of the Church, famous for his preaching and miracles, he is one of the most invoked saints in the world." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Saint Jude Thaddeus" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Patron of impossible and desperate causes. Apostle of Christ, he is invoked when all hopes seem lost." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "How to Honor Your Patron Saint" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsx("li", { children: "Study their life and writings" }),
            /* @__PURE__ */ jsx("li", { children: "Pray daily asking for their intercession" }),
            /* @__PURE__ */ jsx("li", { children: "Celebrate their liturgical feast in a special way" }),
            /* @__PURE__ */ jsx("li", { children: "Imitate their virtues in your daily life" }),
            /* @__PURE__ */ jsx("li", { children: "Have an image or medal of the saint" }),
            /* @__PURE__ */ jsx("li", { children: "Make promises and novenas in their honor" }),
            /* @__PURE__ */ jsx("li", { children: "Visit places associated with the saint, if possible" }),
            /* @__PURE__ */ jsx("li", { children: "Spread their devotion, especially among family members" })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Intercession of Saints" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "When we invoke a saint, we are not worshiping them – worship is due only to God. We are asking for their intercession, just as we ask for prayers from friends and family on earth. The difference is that the saints are in God's presence and their intercession is particularly powerful. As the Book of Revelation teaches, the prayers of the saints rise like incense before God's throne (Rev 8:3-4)." }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"The saints do not cease to intercede for us with the Father. Their fraternal concern greatly helps our weakness."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Catechism of the Catholic Church, 956" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "patron-saints" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "What is a patron saint?",
            answer: "A patron saint is a saint who is believed to have a special affinity for a particular person, place, profession, or cause. Catholics ask patron saints to intercede for them before God, similar to asking a holy friend to pray on your behalf."
          },
          {
            question: "How do I choose my patron saint?",
            answer: "You can choose a patron saint based on your baptismal or confirmation name, your profession, a cause you care about, or simply a saint whose life inspires you. You can also pray and ask God to guide you to the right patron."
          },
          {
            question: "Is praying to saints the same as worshipping them?",
            answer: "No. Catholics worship God alone. Asking saints to intercede is like asking a holy friend to pray for you. Saints are alive in Heaven and can present our prayers to God. This is called 'veneration,' which is entirely different from worship (latria)."
          },
          {
            question: "Who is the patron saint of the United States?",
            answer: "The Immaculate Conception of the Blessed Virgin Mary is the patroness of the United States, declared by Pope Pius IX in 1847. The National Shrine of the Immaculate Conception in Washington D.C. is dedicated to her."
          },
          {
            question: "Can I have more than one patron saint?",
            answer: "Yes! Catholics often have multiple patron saints — one from Baptism, one from Confirmation, a patron of their profession, and others they feel drawn to. There is no limit to the number of saints you can ask for intercession."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "Discover How Your Faith Life Is Going" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and receive a personalized diagnosis of your Catholic journey." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function FastingAndAbstinence() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Fasting and Abstinence: Practices That Strengthen the Soul | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Learn about the practices of fasting and abstinence in the Catholic Church. Discover when and how to fast correctly to grow in spiritual life." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "catholic fasting how to, meat abstinence friday, when to fast, lent fasting, days of fasting and abstinence, catholic penance" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/fasting-abstinence/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Fasting and Abstinence" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Spirituality" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "November 20, 2024"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "5 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "Fasting and Abstinence: Practices That Strengthen the Soul" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "Fasting and abstinence are ancient penitential practices that help us master our passions and draw closer to God." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-orange-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Flame, { className: "w-24 h-24 text-orange-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Fasting and abstinence are fundamental spiritual practices in Christian life, recommended by Jesus Christ Himself and practiced by the faithful since the early days of the Church. Far from being mere legal obligations, these penances are powerful means of spiritual growth, strengthening of the will, and union with Christ in His Passion. Understanding their profound meaning transforms these practices into sources of abundant grace." }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "How is your life of penance?",
              description: "Fasting and abstinence are powerful weapons for spiritual growth. Take our quiz and discover how these practices can strengthen your will and bring you closer to God."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Difference Between Fasting and Abstinence" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "What is Fasting?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Fasting consists of reducing the amount of food consumed. According to Church norms, on obligatory fast days, only one full meal is taken per day, with something light allowed in the morning and evening. Fasting obliges the faithful between 18 and 59 years of age. It is a practice that mortifies the body to free the spirit and better dispose us to prayer and charity." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "What is Abstinence?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Abstinence refers to the privation of meat or other food determined by ecclesiastical authority. Abstinence from meat obliges all the faithful from 14 years of age. This practice reminds us of Christ's sacrifice and invites us to participate in His Passion, renouncing an appreciated food." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "When to Fast and Abstain?" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Obligatory Fast Days" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "In the Latin Church, the obligatory fast days are Ash Wednesday and Good Friday. On these days, in addition to fasting, abstinence from meat is also observed. These are particularly intense penitential days that mark the beginning and climax of the Lenten season." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Obligatory Abstinence Days" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Abstinence from meat should be observed on all Fridays of the year, except when they coincide with a solemnity. Fridays are penitential days because they recall the death of Our Lord Jesus Christ. In some countries, abstinence from meat can be substituted with another form of penance, prayer, or charity, but the tradition of not eating meat remains the most common and recommended practice." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Lent" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Lent is the penitential season par excellence. During the 40 days preceding Easter, the faithful are called to intensify the practices of fasting, prayer, and almsgiving. Even outside the days of obligation, it is praiseworthy to fast and abstain voluntarily during this sacred time." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Spiritual Benefits of Fasting" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Mastery of Passions" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Fasting strengthens the will and helps us master bodily instincts. When we learn to say "no" to the appetite for food, we become more capable of resisting other temptations. Saint John Chrysostom taught that "fasting is the mother of chastity."' }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Intensification of Prayer" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Fasting frees the spirit and better disposes us to prayer. When the body is light, the soul rises more easily to God. Therefore, many saints fasted before important moments of prayer or decision." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Solidarity with the Poor" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "By voluntarily experiencing hunger, we develop compassion for those who go hungry involuntarily. The money saved from fasting can be given in alms, uniting penance and charity." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Union with Christ" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Jesus fasted 40 days in the desert before beginning His public mission. When we fast, we participate in His penance and unite ourselves more intimately to His Passion. We offer our small sacrifice in union with the great Sacrifice of the Cross." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "How to Practice Fasting Profitably" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsx("li", { children: "Start gradually, especially if you are not accustomed" }),
            /* @__PURE__ */ jsx("li", { children: "Unite fasting with prayer – without prayer, it is mere diet" }),
            /* @__PURE__ */ jsx("li", { children: "Offer your sacrifice for a specific intention" }),
            /* @__PURE__ */ jsx("li", { children: "Do not publicize your fasting (Mt 6:16-18)" }),
            /* @__PURE__ */ jsx("li", { children: "Replace meal times with prayer" }),
            /* @__PURE__ */ jsx("li", { children: "Convert the money saved into alms" }),
            /* @__PURE__ */ jsx("li", { children: "Respect your health limitations" }),
            /* @__PURE__ */ jsx("li", { children: "Maintain joy – Christian fasting is not sadness" })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Other Forms of Penance" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Besides food fasting, there are many other forms of mortification and penance we can practice: abstinence from television, social media, or entertainment; practices of silence; works of mercy; patiently bearing the day's contradictions; rising earlier to pray; making genuflections or prostrations during prayer." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The important thing is that penance be offered with love, in a spirit of reparation for one's own and others' sins, and as participation in Christ's redemptive work. A small mortification done with great love is worth more than great sacrifices done without devotion." }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Bodily fasting is not sufficient without spiritual fasting. True fasting is abstaining from all evil."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Saint Basil the Great" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "fasting-abstinence" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "What is the difference between fasting and abstinence?",
            answer: "Fasting means limiting food intake to one full meal and two smaller meals that together don't equal a full meal. Abstinence means refraining from eating meat. They are distinct practices: fasting affects quantity, abstinence affects type of food."
          },
          {
            question: "Who is required to fast and abstain in the Catholic Church?",
            answer: "Catholics aged 18–59 are bound to fast on Ash Wednesday and Good Friday. Catholics aged 14 and older must abstain from meat on Ash Wednesday and all Fridays of Lent. Those with health conditions or other serious reasons are exempt."
          },
          {
            question: "Why do Catholics abstain from meat on Fridays?",
            answer: "Friday abstinence is a penitential practice commemorating Christ's death on Good Friday. It is a small sacrifice that unites us to Christ's suffering and reminds us of our dependence on God. Outside Lent, Catholics may substitute another penance."
          },
          {
            question: "Does drinking water or coffee break the Eucharistic fast?",
            answer: "The Eucharistic fast (required before receiving Communion) requires abstaining from food and drink except water and medicine for one hour before receiving. Plain water does not break the fast. Coffee with milk or sugar does break it."
          },
          {
            question: "What are the spiritual benefits of fasting?",
            answer: "Fasting strengthens self-discipline, increases sensitivity to God's voice, expresses repentance, and unites us with the poor. Jesus said some demons can only be driven out by prayer and fasting (Matthew 17:21). It is a powerful spiritual weapon."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "Discover How Your Faith Life Is Going" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and receive a personalized diagnosis of your Catholic journey." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function SundayMass() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Sunday Mass: The Center of Christian Life | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Discover why participation in Sunday Mass is essential for every Catholic. Learn how to make the most of Holy Mass and grow in faith." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "sunday mass obligatory, why go to mass, catholic holy mass, sunday precept, not going to mass is sin, sunday eucharist" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/sunday-mass/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Sunday Mass" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Liturgy" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "November 15, 2024"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "9 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "Sunday Mass: The Center of Christian Life" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "Holy Mass is the most precious treasure of the Catholic Church, where Christ's sacrifice becomes present and we are nourished by the Bread of Life." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Sun, { className: "w-24 h-24 text-yellow-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `Sunday Mass is the beating heart of Catholic life, the most important meeting of the week, the moment when Heaven touches earth. Since the early times of the Church, Christians gathered on the "Lord's Day" – Sunday, the day of the Resurrection – to celebrate the Eucharist, even at risk of persecution and death. The martyrs of Abitina, in the 4th century, declared before the Roman tribunal: "Without Sunday we cannot live."` }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "This apostolic tradition remains as a commandment of the Church: every Catholic must participate in Mass on Sundays and holy days of obligation, unless legitimately prevented. But Mass is infinitely more than an obligation – it is an invaluable privilege, an inexhaustible source of graces, the greatest treasure we possess on this earth. If we truly knew the value of a single Mass, we would die of joy, as Saint Padre Pio said." }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "Is Mass the center of your week?",
              description: "Participating in the Eucharist is the greatest privilege of a Catholic. Take our quiz and discover how to live Holy Mass more deeply, receiving all the graces of the altar."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "What Happens at Holy Mass?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Mass is not a simple remembrance of the Last Supper or a theatrical representation of Calvary. It is the unbloody renewal of Christ's one Sacrifice on the Cross. The same Christ who offered Himself once and for all on Calvary continues offering Himself to the Father through the hands of the priest. The sacrifice is the same, the victim is the same, the principal priest is the same (Christ); only the manner of offering is different: on Calvary it was bloody (with shedding of blood), at Mass it is unbloody (without shedding of blood)." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Structure of Holy Mass" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Introductory Rites" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Mass begins with the entrance procession, greeting, penitential act, Gloria (on Sundays and feasts), and collect prayer. These rites prepare our soul for the encounter with God, helping us leave behind worldly concerns and enter the sacred mystery." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Liturgy of the Word" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "In the Liturgy of the Word, God speaks to us through Sacred Scripture. We hear readings from the Old and New Testaments, sing the Responsorial Psalm, and the Gospel is solemnly proclaimed. The priest's homily applies God's Word to our life. This part culminates with the Profession of Faith (Creed) and the Prayer of the Faithful." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Liturgy of the Eucharist" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `The heart of Mass is the Liturgy of the Eucharist. It begins with the presentation of the gifts (bread and wine), followed by the Eucharistic Prayer, when the consecration happens. At the moment the priest pronounces Christ's words – "This is my Body... This is my Blood" – the bread and wine truly become Christ. Then we pray the Our Father, exchange the sign of peace, and receive Holy Communion.` }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Why Is Sunday Mass Obligatory?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `The third commandment orders: "Keep holy the Lord's Day." The Church determines that Catholics fulfill this commandment by participating in Mass on Sundays and holy days of obligation. This obligation is not an arbitrary burden, but an expression of the minimum we owe God for all He gives us. If someone truly loves God, they do not consider Mass an obligation, but a privilege.` }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Fruits of Participation in Mass" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsx("li", { children: "Intimate union with Christ through Communion" }),
            /* @__PURE__ */ jsx("li", { children: "Forgiveness of venial sins" }),
            /* @__PURE__ */ jsx("li", { children: "Preservation against mortal sins" }),
            /* @__PURE__ */ jsx("li", { children: "Increase of sanctifying grace" }),
            /* @__PURE__ */ jsx("li", { children: "Participation in Christ's merits" }),
            /* @__PURE__ */ jsx("li", { children: "Communion with the universal Church" }),
            /* @__PURE__ */ jsx("li", { children: "Suffrage for the souls in Purgatory" }),
            /* @__PURE__ */ jsx("li", { children: "Temporal and spiritual blessings" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"If we knew the value of Holy Mass, we would die of joy."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Saint Padre Pio of Pietrelcina" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Mass is the most sacred thing that exists. In it, God gives us everything He has: His own Son."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Saint John Vianney" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "sunday-mass" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "Is missing Sunday Mass a mortal sin?",
            answer: "Yes, deliberately missing Sunday Mass without a serious reason (illness, caring for a sick person, no access to a church) is considered a mortal sin in Catholic teaching. The Third Commandment obliges us to keep holy the Lord's Day."
          },
          {
            question: "What counts as fulfilling the Sunday Mass obligation?",
            answer: "You fulfill the obligation by attending any valid Catholic Mass on Sunday or on Saturday evening (the vigil Mass). The Mass must be celebrated by a validly ordained priest. Watching Mass on TV does not fulfill the obligation unless you are homebound."
          },
          {
            question: "Can I receive Communion at every Mass?",
            answer: "You may receive Communion up to twice per day, provided you are in a state of grace, have observed the one-hour Eucharistic fast, and are a baptized Catholic. You must not be under any canonical penalty such as excommunication."
          },
          {
            question: "Why do Catholics go to Mass every Sunday?",
            answer: "Sunday Mass is the center of Catholic life because it re-presents Christ's sacrifice on Calvary, nourishes us with His Body and Blood, unites us as the Body of Christ, and fulfills our duty of worship to God. It is the highest form of prayer."
          },
          {
            question: "What should I do if I cannot attend Mass on Sunday?",
            answer: "If you have a serious reason (illness, travel with no church nearby, caring for someone), you are dispensed from the obligation. You should still pray, read Scripture, and observe Sunday as a day of rest and family. Seek a dispensation from your pastor if needed."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "Discover How Your Faith Life Is Going" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and receive a personalized diagnosis of your Catholic journey." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function PrayerLife() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "The Life of Prayer: How to Cultivate Intimacy with God | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Discover how to develop a deep and constant prayer life. Practical and spiritual tips to strengthen your friendship with God daily." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "how to have a prayer life, how to pray better, intimacy with god, daily catholic prayer, types of prayer, how to pray every day" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/prayer-life/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "The Life of Prayer" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Spirituality" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "December 29, 2024"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "7 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "The Life of Prayer: How to Cultivate Intimacy with God" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "Prayer is not just a duty, but a necessity of the soul. Learn how to transform your dialogue with God into a source of life and peace." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Heart, { className: "w-24 h-24 text-rose-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Saint Teresa of Ávila defined prayer as "a relationship of friendship, being alone often with Him who we know loves us." For Catholics, prayer is the oxygen of the soul. Without it, faith weakens, hope falters, and charity grows cold. However, many find it difficult to maintain a constant routine of dialogue with the Creator. The good news is that God does not demand perfection – He demands only sincerity and perseverance.' }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Prayer is not a complicated technique reserved for monks and saints. It is simply talking to God as you would talk to a dear friend. Jesus taught us: "When you pray, do not be like the hypocrites... But when you pray, go into your room, close the door and pray to your Father in secret" (Mt 6:5-6). Prayer is an intimate, personal encounter, where God knows us completely and loves us despite everything.' }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "How is your connection with God?",
              description: "Prayer is the oxygen of the soul and the relationship of friendship with the Creator. Take our quiz and discover what level your spiritual journey is at and how to grow in intimacy with the Lord."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Why Is Prayer Essential?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Prayer tunes us to God's will. It does not serve to convince God to do what we want – He already knows what we need before we even ask. Prayer transforms us. It prepares us to receive what God wants to give us. Through prayer, we receive the graces necessary to face temptations, discern confusing paths, and find meaning in suffering." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Saint Paul exhorts us: "Pray without ceasing" (1 Thess 5:17). This does not mean being on your knees all the time, but keeping your heart turned toward God in all circumstances. When you work with the intention of pleasing God, you are praying. When you suffer with patience, you are praying. When you love your neighbor, you are praying. Your entire life can become a prayer.' }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Different Types of Prayer" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Prayer of Adoration" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `Recognizing God's greatness and our smallness before Him. It is simply saying: "Lord, You are God and I am nothing. But what a privilege to be created by You!"` }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Prayer of Thanksgiving" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Thanking God for everything – for obvious joys, but also for difficulties that make us grow. Saint Paul says: "Give thanks in all circumstances" (1 Thess 5:18).' }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Prayer of Petition" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Asking God for what we need. Jesus encouraged us: "Ask and it will be given to you" (Mt 7:7). Do not be afraid to ask – God wants to bless us.' }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "Prayer of Intercession" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Praying for others. It is a powerful act of charity. When you pray for someone, you are placing that person in God's arms." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Practical Tips to Get Started" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "1. Set Aside a Time and Place" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'God is everywhere, but our mind is easily distracted. Having a "prayer corner" with an image, a candle, or the Bible helps to focus. Similarly, choosing a fixed time — whether upon waking or before sleeping — creates the necessary habit. Start with just 10 minutes. Consistency is more important than duration.' }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "2. Use Vocal Prayers and Silence" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Begin with the prayers the Church has taught us: Our Father, Hail Mary, Glory Be. They are the solid foundation. But do not stop there. Reserve moments of silence to hear what God speaks to your heart through inspirations and inner peace. Often, God speaks to us not in words, but in feelings of peace, clarity, or love." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "3. Do Not Give Up in Dryness" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'There will be days when prayer seems arid, tasteless, as if God were far away. These are the most precious days! When you pray without feeling consolation, you are loving God for Himself, not for the feelings He gives us. Saint John of the Cross called this the "dark night" – it is when faith grows most.' }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Mental Prayer and Meditation" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Christian meditation consists of reflecting on the truths of faith or passages of Scripture. When meditating on Christ's Passion, for example, we not only recall a historical fact, but unite ourselves to Jesus' love for us, allowing that love to transform our attitudes. You can meditate on a mystery of the Rosary, a Bible verse, or a teaching of the Church. The important thing is to let the truth penetrate your heart." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Contemplative Prayer" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `This is the peak of prayer life – simply being in God's presence without words, without thoughts, just loving. Saint Teresa of Ávila described it as "being alone with Him who we know loves us." Not everyone reaches this level, but everyone can aspire to it. Begin with vocal prayer and meditation; contemplation will come as a gift from God.` }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Prayer is the best weapon we have; it is a key that opens the heart of God."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Saint Padre Pio of Pietrelcina" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"To pray is to love. And to love is to pray."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Saint Teresa of Calcutta" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "prayer-life" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "How much time should I spend in prayer each day?",
            answer: "The Church does not set a minimum, but spiritual directors commonly recommend at least 15–30 minutes of mental prayer daily, plus the Liturgy of the Hours if possible. Quality matters more than quantity — even 10 focused minutes surpasses an hour of distracted prayer."
          },
          {
            question: "What is the difference between vocal prayer and mental prayer?",
            answer: "Vocal prayer uses set words (Our Father, Hail Mary, Rosary). Mental prayer is a personal, interior conversation with God — meditation and contemplation. Both are essential. St. Teresa of Avila defined mental prayer as 'a close sharing between friends.'"
          },
          {
            question: "What should I do when I feel nothing during prayer?",
            answer: "Spiritual dryness is normal and even spiritually valuable. St. John of the Cross called it the 'dark night of the soul.' Continue praying faithfully even without consolation. God is purifying your love, making it less dependent on feelings and more rooted in faith."
          },
          {
            question: "Is the Liturgy of the Hours (Divine Office) only for priests and religious?",
            answer: "No! The Liturgy of the Hours is the official prayer of the whole Church. Laypeople are encouraged to pray it, especially Morning Prayer (Lauds) and Evening Prayer (Vespers). Many apps make it accessible for everyone."
          },
          {
            question: "How do I build a consistent prayer habit?",
            answer: "Set a fixed time and place each day. Start small — even 5 minutes consistently beats 1 hour occasionally. Use a prayer journal, a rosary, or a prayer book to help focus. Link prayer to an existing habit (morning coffee, before bed). Accountability with a prayer partner also helps."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "How is your connection with God?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and discover what level your spiritual journey is at and how you can grow even more in faith." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function MeaningOfMass() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "The Meaning of Holy Mass: Understanding Each Part of the Liturgy | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Learn the profound meaning of each moment of Holy Mass. A complete guide to the liturgy to participate with more awareness and devotion." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "parts of mass explained, meaning of catholic mass, mass liturgy, what happens at mass, mass rites, how to participate in mass" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/meaning-mass/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "The Meaning of Holy Mass" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Liturgy" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "December 29, 2024"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "10 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "The Meaning of Holy Mass: Understanding Each Part of the Liturgy" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "Mass is Christ's sacrifice made present on our altar. Understanding its rites is the key to full and fruitful participation." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-24 h-24 text-blue-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Many Catholics attend Sunday Mass out of habit or precept, but few understand the theological and spiritual richness contained in each gesture, word, and silence of the liturgy. Holy Mass is not an enactment of the Last Supper, but the actualization of the sacrifice of Calvary. It is heaven touching earth." }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "Do you participate in Mass with depth?",
              description: "Holy Mass is heaven touching earth. Take our quiz and discover how to participate in each rite with more awareness, love, and devotion to the Eucharistic mystery."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Introductory Rites: Preparing the Heart" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Mass begins with the sign of the cross, reminding us that we are there in the name of the Trinity. The Penitential Act is a crucial moment of humility, where we recognize our smallness before God's greatness, asking forgiveness to worthily celebrate the holy mysteries." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Liturgy of the Word: God Speaks to His People" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "In the biblical readings, it is God Himself who speaks. The first reading (usually from the Old Testament), the Psalm, the second reading, and finally the Gospel form a dialogue of love. The priest's homily should help us apply this Word in our daily life." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Liturgy of the Eucharist: The Summit of the Celebration" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "The Offertory" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "We bring to the altar bread and wine, fruits of the earth and human work, but we also bring our lives, joys, and sufferings to be transformed." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "The Consecration" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "This is the most sacred moment. Through the priest's words and the power of the Holy Spirit, the substance of bread and wine becomes the Body and Blood of Christ. It is the miracle of Transubstantiation." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Communion Rites and Dismissal" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'By receiving Communion, we unite intimately with Jesus and with our brothers and sisters. Mass ends with the blessing and dismissal: "Go in peace and the Lord be with you." The celebration continues in our life, in the witness we will give in the world.' }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"If we knew the value of the Holy Sacrifice of the Mass, what zeal we would have to attend it!"' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Saint John Vianney (Curé of Ars)" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "meaning-mass" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "What is the most important part of the Mass?",
            answer: "The Liturgy of the Eucharist, specifically the Consecration, is the most sacred moment of the Mass. At the words of consecration, the bread and wine truly become the Body and Blood of Christ — this is the Real Presence."
          },
          {
            question: "Why does the priest face the altar during parts of the Mass?",
            answer: "In the traditional form, the priest faces east (ad orientem) together with the people, symbolizing that all are facing God together. In the ordinary form, the priest typically faces the people to emphasize the communal nature of the celebration."
          },
          {
            question: "What is the difference between the Ordinary and Extraordinary Form of the Mass?",
            answer: "The Ordinary Form (Novus Ordo) was promulgated by Pope Paul VI in 1969 and is celebrated in the vernacular. The Extraordinary Form (Traditional Latin Mass) follows the 1962 Missal and is celebrated in Latin. Both are valid forms of the Roman Rite."
          },
          {
            question: "Why do we say 'Amen' before receiving Communion?",
            answer: "When the minister says 'The Body of Christ,' your 'Amen' is a profound act of faith — you are affirming belief in the Real Presence of Christ in the Eucharist. St. Augustine said: 'Be what you see, and receive what you are.'"
          },
          {
            question: "What should I do if I arrive late to Mass?",
            answer: "If you arrive after the Gospel, you have not fulfilled your Sunday obligation and should attend another Mass if possible. If you arrive before the Offertory, you have generally fulfilled the obligation, though arriving on time is always the ideal."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "Do you live Mass with depth?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Discover how your liturgical knowledge and sacramental experience are through our personalized quiz." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function ExaminationOfConscience() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "How to Make a Good Examination of Conscience for Confession | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Practical guide to perform a deep and sincere examination of conscience. Prepare for the sacrament of Reconciliation with this spiritual roadmap." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "complete examination of conscience, how to examine conscience, list of sins for confession, preparation for confession, mortal and venial sins" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/examination-conscience/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Examination of Conscience" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Sacraments" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "December 29, 2024"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "8 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "How to Make a Good Examination of Conscience for Confession" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "Confession begins long before entering the confessional. The examination of conscience is the mirror that shows us where we need God's healing." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Church, { className: "w-24 h-24 text-violet-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The Sacrament of Reconciliation is one of the greatest gifts Jesus left to His Church. However, to fully receive the grace of forgiveness, a contrite heart and sincere preparation are necessary. The examination of conscience is not an exercise in guilt, but an act of love and truth before a God who is Father and Mercy." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "What is the Examination of Conscience?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "It is the effort to recall sins committed by thoughts, words, acts, and omissions since the last good confession. It is placing oneself under the light of the Holy Spirit to see the wounds that sin has caused in our relationship with God, with our neighbor, and with ourselves." }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "How is the health of your soul?",
              description: "A good examination of conscience is the first step to healing. Take our quiz and receive a practical roadmap to prepare your next confession, diving into God's mercy."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Step by Step for a Good Examination" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "1. Invoke the Holy Spirit" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Alone, we tend to justify our errors or despair. Ask the Holy Spirit to give you clarity, courage, and true repentance. "Come, Holy Spirit, enlighten my mind so I may see my sins and touch my heart so I may detest them."' }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "2. Use a Guide (Commandments)" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The most classic way is to follow the Ten Commandments. Ask yourself: Did I give God first place? Did I use His name in vain? Did I keep Sundays holy? Did I honor my parents? Was I violent or did I hold grudges? Was I pure in my thoughts and actions? Was I honest? Did I speak the truth?" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Three Dimensions of Sin" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Relationship with God:" }),
              " Omission of prayers, lack of trust, superstitions."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Relationship with Neighbor:" }),
              " Judgments, gossip, lack of charity, dishonesty."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Relationship with Oneself:" }),
              " Pride, laziness, gluttony, lack of care for one's own soul."
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Sorrow of the Heart (Contrition)" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "More important than the list of sins is repentance. Contrition is the sorrow of the soul for having offended such a good God. Without the purpose of sinning no more, confession loses its transforming meaning." }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Confession is the baptism of tears."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Saint John Chrysostom" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "examination-conscience" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "What is an examination of conscience?",
            answer: "An examination of conscience is a prayerful review of your thoughts, words, and actions in light of God's commandments and the teachings of the Church. It is an essential preparation for the Sacrament of Confession and a daily spiritual practice."
          },
          {
            question: "How often should I examine my conscience?",
            answer: "St. Ignatius of Loyola recommended a brief examination twice daily — at noon and before bed. At minimum, a thorough examination before each Confession is essential. Daily practice helps develop a sensitive conscience and awareness of sin."
          },
          {
            question: "What is the difference between a daily examen and preparing for Confession?",
            answer: "The daily examen (Ignatian) focuses on gratitude, reviewing the day, and noticing God's presence. Preparation for Confession is a more thorough review of sins against the Ten Commandments and Church precepts since your last Confession."
          },
          {
            question: "What if I can't remember all my sins?",
            answer: "Confess what you remember with sincere sorrow. Forgotten sins are forgiven through the absolution. However, if you remember a serious sin later, mention it in your next Confession. The key is honest effort, not perfect recall."
          },
          {
            question: "Can children do an examination of conscience?",
            answer: "Yes! Children preparing for First Confession should learn a simple examination of conscience. Age-appropriate guides help them review the Ten Commandments in simple language. This builds lifelong habits of moral reflection."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "How is your spiritual health?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and receive guidance on how to strengthen your sacramental life and your journey of holiness." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function VirginMary() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "The Virgin Mary in Catholic Doctrine: Dogmas and Devotion | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Learn about the four Marian dogmas and the importance of Our Lady in salvation history. Understand why Catholics honor the Mother of God." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "virgin mary in catholic church, marian dogmas, why catholics venerate mary, our lady mother of god, immaculate conception, assumption of mary" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/virgin-mary/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "The Virgin Mary" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Devotions" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "December 29, 2024"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "9 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "The Virgin Mary in Catholic Doctrine: Dogmas and Devotion" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: `"All generations will call me blessed." Understand Mary's fundamental role in God's plan and the pillars of Marian faith.` })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Heart, { className: "w-24 h-24 text-rose-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: '"All generations will call me blessed" (Lk 1:48). These prophetic words of Mary in the Magnificat have been fulfilled for two thousand years. On all continents, in all languages, in all ages, the children of the Church raise their hearts to the Mother of God, finding in her refuge, consolation, and the surest path to Jesus.' }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `Devotion to the Blessed Virgin Mary is not an optional "accessory" of Catholic faith – it is a logical and necessary consequence of the Incarnation. When God chose Mary to be the Mother of His Son, He placed her at the heart of salvation history. To ignore Mary would be to ignore God's plan. To honor her is, ultimately, to glorify the Lord for the wonders He accomplished in her.` }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "How is your Marian devotion?",
              description: "Mary is the Mother of God and our intercessor in Heaven. Take our spiritual quiz and discover how Our Lady's presence can transform your journey of faith and love for Jesus."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Four Marian Dogmas" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'The Catholic Church professes four fundamental truths about Mary, solemnly defined over the centuries. These are not human "inventions," but explications of the faith the Church has always professed since the Apostles:' }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "1. Divine Motherhood (Theotokos)" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Defined at the Council of Ephesus (431), this is the fundamental dogma from which all others derive. Mary is truly the Mother of God – not because she is prior to God or generated the divine nature, but because the One she conceived by the Holy Spirit is truly God. Jesus is not two persons (one divine and one human), but a single divine Person with two natures. And Mary is the Mother of that Person." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "2. Perpetual Virginity" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The Church professes that Mary was a virgin before childbirth (conceiving Jesus by the power of the Holy Spirit), during childbirth (giving birth miraculously), and after childbirth (remaining a virgin throughout her life). This virginity is not a limitation, but a sign of her total surrender to God and of divine initiative in the Incarnation." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "3. Immaculate Conception" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Proclaimed by Pope Pius IX in 1854, this dogma affirms that Mary, from the first instant of her conception, was preserved immune from all stain of original sin, by a singular grace and privilege of God, in view of the merits of Jesus Christ, Savior of the human race." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Four years after the definition of the dogma, Our Lady appeared in Lourdes to Saint Bernadette and confirmed: "I am the Immaculate Conception."' }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "4. Assumption into Heaven" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Defined by Pope Pius XII in 1950, this dogma teaches that the Immaculate Mother of God, the ever Virgin Mary, having completed the course of her earthly life, was assumed body and soul into heavenly glory. Mary did not have to wait for the final resurrection – she already enjoys, in glorified body, eternal blessedness." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Veneration, not Adoration" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "It is fundamental to distinguish: we adore only God (latria). To Mary and the saints, we give veneration (dulia). In Mary's case, because of her unique dignity as Mother of God, we give a special veneration called hyperdulia – superior to that of other saints, but infinitely inferior to the adoration due only to God." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `Mary is not a "goddess" nor an intermediary who distances us from Jesus. On the contrary, she is the shortest path to reach Him. At the Wedding at Cana, she told the servants: "Do whatever He tells you" (Jn 2:5). This is Mary's mission: to point to Jesus, to lead us to Jesus, to form Jesus in us.` }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Mary, Our Mother" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'From the height of the Cross, Jesus gave us Mary as Mother. To the beloved disciple – who represents each of us – He said: "Behold, your mother" (Jn 19:27). And to Mary: "Woman, behold, your son." From that hour, the disciple took her into his home. And we, do we welcome Mary into our life?' }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Of Mary, one can never say enough."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Saint Bernard of Clairvaux" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"He who does not have Mary for Mother, does not have God for Father."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Saint Cyprian of Carthage" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "virgin-mary" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "Why do Catholics call Mary the Mother of God?",
            answer: "Mary is called the Mother of God (Theotokos) because she is the mother of Jesus, who is truly God. This title was defined at the Council of Ephesus in 431 AD. It does not mean Mary existed before God, but that the child she bore is a divine Person."
          },
          {
            question: "What is the Immaculate Conception?",
            answer: "The Immaculate Conception is the dogma that Mary was conceived without original sin, preserved by God in anticipation of Christ's merits. It was defined as dogma by Pope Pius IX in 1854. It is not the same as the Virgin Birth of Jesus."
          },
          {
            question: "What is the Assumption of Mary?",
            answer: "The Assumption is the dogma that at the end of her earthly life, Mary was taken up body and soul into heavenly glory. Defined by Pope Pius XII in 1950, it is celebrated on August 15. It is a holy day of obligation in the Catholic Church."
          },
          {
            question: "Is devotion to Mary required for Catholics?",
            answer: "While specific Marian devotions are not strictly required, the Church strongly encourages devotion to Mary as our spiritual mother. The Second Vatican Council dedicated an entire chapter of Lumen Gentium to Mary's role in the Church."
          },
          {
            question: "What are the main Marian apparitions recognized by the Church?",
            answer: "The Church has approved several Marian apparitions, including: Our Lady of Guadalupe (Mexico, 1531), Our Lady of Lourdes (France, 1858), Our Lady of Fatima (Portugal, 1917), and Our Lady of Knock (Ireland, 1879). These are approved as worthy of belief but not required."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "How is your Marian devotion?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Discover how Mary's presence can transform your faith journey through our spiritual quiz." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function GiftsOfHolySpirit() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "The Gifts of the Holy Spirit: How to Identify and Use Them | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Learn about the seven gifts of the Holy Spirit and how they work in your life to guide you on the path of holiness and service to others." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "what are the seven gifts of the holy spirit, gift of wisdom, gift of understanding, gift of counsel, gift of fortitude, gift of knowledge, gift of piety, gift of fear of the lord" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/gifts-holy-spirit/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "The Gifts of the Holy Spirit" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Formation" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "April 15, 2026"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "10 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "The Gifts of the Holy Spirit and How They Work in Our Lives" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: 'The Holy Spirit is the "Sweet Guest of the Soul." Discover how His seven gifts transform our intelligence and will to live as true children of God.' })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-orange-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Flame, { className: "w-24 h-24 text-orange-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "On the day of our Baptism, and fully at Confirmation, we receive the Holy Spirit with His seven gifts. They are not natural talents, but supernatural dispositions that make man docile to follow divine inspirations. They are like the sails of a boat that, when opened, allow the breath of the Spirit to lead us to the high seas of holiness. Many Catholics receive these gifts and never use them – it is like having a treasure buried in the backyard and never digging to find it." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Seven Gifts Explained" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "1. Wisdom" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `It is not the accumulation of knowledge, but the "taste" for the things of God. The gift of Wisdom allows us to see the world, people, and events through God's eyes. When you have wisdom, you understand that riches pass, that fame is vain, that what really matters is friendship with God.` }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "Do you know the gifts you received at Confirmation?",
              description: "The Holy Spirit empowers us with His seven gifts. Take our quiz and discover which of these gifts you most need to cultivate right now to grow in holiness and service."
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "2. Understanding (or Intelligence)" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Helps us penetrate the deep meaning of revealed truths and the mysteries of faith, going beyond appearances. When you have understanding, you can comprehend why the Church teaches what it teaches, why the sacraments are so important, why Catholic morality leads to true happiness." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "3. Counsel" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "It is the light the Spirit gives us to discern what is right to do in complex life situations, always choosing the path that most pleases God. When you are in doubt about an important decision, the gift of Counsel enlightens you to choose well." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "4. Fortitude" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Gives us the courage and perseverance necessary to face difficulties, persecutions, and temptations, keeping us faithful to Christ until the end. It is the gift that allows the martyr to face death with joy, the young person to resist peer pressure, the Christian to remain faithful in times of crisis." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "5. Knowledge" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Allows us to judge created things rightly, seeing in them the reflection of the Creator and not transforming them into idols. With the gift of Knowledge, you see the beauty of a flower and praise the Creator; you see technology and use it for good, not for evil." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "6. Piety" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Heals our heart from hardness and gives us a filial affection for God and sincere fraternity toward our neighbor. It is the gift that makes us love God as a child loves their father, and that makes us serve our neighbor with tenderness." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "7. Fear of the Lord" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "It is not fear of punishment, but the loving fear of offending God, who is our Father and loves us infinitely. It is the beginning of true wisdom. When you have fear of the Lord, you avoid sin not out of fear of hell, but because you do not want to hurt the One who loves you." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "How to Cultivate the Presence of the Spirit?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'The Holy Spirit is a divine person with whom we can and should converse. Ask daily: "Come, Holy Spirit!" Remain in a state of grace through frequent confession and seek interior silence to hear His movements. The more you open yourself to the gifts of the Spirit, the more He acts in you, transforming you into an instrument of His will.' }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"The Holy Spirit is the interior master who leads us to the full truth."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Saint John Paul II" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Come, Holy Spirit, fill the hearts of your faithful and kindle in them the fire of your love."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Pentecost Sequence" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "gifts-holy-spirit" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "What are the 7 gifts of the Holy Spirit?",
            answer: "The seven gifts are: Wisdom, Understanding, Counsel, Fortitude, Knowledge, Piety, and Fear of the Lord. They are given at Baptism and strengthened at Confirmation, enabling us to respond readily to God's grace."
          },
          {
            question: "How are the gifts of the Holy Spirit different from the fruits?",
            answer: "The gifts are supernatural dispositions that help us act according to God's will. The fruits (love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control) are the visible results of living by the gifts. Gifts are the roots; fruits are what grows from them."
          },
          {
            question: "Can I lose the gifts of the Holy Spirit?",
            answer: "Mortal sin causes the loss of sanctifying grace and weakens the gifts. The gifts are restored through sincere repentance and the Sacrament of Confession. Venial sin does not remove the gifts but can diminish their effectiveness in our lives."
          },
          {
            question: "Which gift of the Holy Spirit is most important?",
            answer: "Wisdom is considered the highest gift because it enables us to judge all things from God's perspective. However, all seven gifts work together and are equally necessary for a complete Christian life. Fear of the Lord is the beginning of wisdom (Proverbs 9:10)."
          },
          {
            question: "How do I grow in the gifts of the Holy Spirit?",
            answer: "Growth in the gifts comes through prayer, frequent reception of the sacraments, reading Scripture, practicing virtue, and openness to the Holy Spirit. Ask the Holy Spirit daily to activate His gifts in you. The Novena to the Holy Spirit before Pentecost is especially powerful."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "Do you know the fruits of the Spirit in your life?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and discover how the gifts of the Holy Spirit are working in your faith journey and how you can open yourself more to His grace." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function LectioDivina() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "A Importância da Leitura Orante da Bíblia (Lectio Divina) | Bom Católico" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Aprenda a praticar a Lectio Divina, o método milenar de leitura orante da Bíblia. Transforme sua leitura das Escrituras em um encontro pessoal com Deus." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "o que é lectio divina, como fazer lectio divina, leitura orante da bíblia, meditação bíblica católica, oração com a palavra de deus" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/lectio-divina/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Bom Católico" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Fazer o Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Lectio Divina" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Voltar ao Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Espiritualidade" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "29 de Dezembro, 2024"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "7 min de leitura"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "A Importância da Leitura Orante da Bíblia (Lectio Divina)" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "A Bíblia não é apenas um livro de história, mas a Palavra viva de Deus. Aprenda o método da Lectio Divina e deixe que as Escrituras falem ao seu coração." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-24 h-24 text-blue-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Muitos católicos sentem dificuldade em ler a Bíblia. Começam com entusiasmo, mas logo se perdem em genealogias ou leis antigas. A Lectio Divina, ou "Leitura Divina", é um método monástico milenar que nos ensina a ler as Escrituras não apenas com a inteligência, mas com o coração, transformando a leitura em oração. É um encontro pessoal com Deus através de Sua Palavra.' }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'São Jerônimo dizia: "Desconhecer as Escrituras é desconhecer o próprio Cristo." A Bíblia não é um livro antigo e distante – é a Palavra viva de Deus que fala a você hoje, aqui, agora. Cada versículo pode ser uma mensagem pessoal do Pai para Seu filho.' }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "Quer ouvir a voz de Deus?",
              description: "A Lectio Divina transforma a leitura da Bíblia em um diálogo de amor. Faça nosso quiz e veja como aprofundar sua intimidade com a Palavra de Deus hoje mesmo."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Os Quatro Degraus da Lectio Divina" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Tradicionalmente, a Lectio Divina é composta por quatro passos fundamentais que nos conduzem ao encontro com Deus. Cada passo é como um degrau que nos leva mais alto:" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "1. Lectio (Leitura)" }),
          /* @__PURE__ */ jsxs("p", { className: "text-text leading-relaxed mb-6", children: [
            "Leia o texto escolhido (recomenda-se o Evangelho do dia) com calma e atenção. A pergunta aqui é: ",
            /* @__PURE__ */ jsx("strong", { children: '"O que o texto diz em si mesmo?"' }),
            ". Observe os personagens, o cenário, as ações e as palavras de Jesus. Leia devagar, deixando que cada palavra penetre seu coração. Se uma palavra ou frase o toca especialmente, releia-a várias vezes."
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "2. Meditatio (Meditação)" }),
          /* @__PURE__ */ jsxs("p", { className: "text-text leading-relaxed mb-6", children: [
            "Agora, rumine a Palavra. Deixe que ela ecoe em sua vida. A pergunta é: ",
            /* @__PURE__ */ jsx("strong", { children: '"O que o texto diz para mim?"' }),
            ". Qual palavra ou frase mais tocou meu coração? O que Deus está me revelando hoje através desta passagem? Como posso aplicar este ensinamento à minha vida? Este é o momento de deixar que a Palavra de Deus dialogue com sua situação pessoal."
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "3. Oratio (Oração)" }),
          /* @__PURE__ */ jsxs("p", { className: "text-text leading-relaxed mb-6", children: [
            "A Palavra de Deus gera uma resposta em nós. A pergunta é: ",
            /* @__PURE__ */ jsx("strong", { children: '"O que o texto me faz dizer a Deus?"' }),
            '. Pode ser uma oração de louvor ("Senhor, que grande é Teu amor!"), de agradecimento ("Obrigado por me mostrar isso"), de pedido de perdão ("Perdoa-me por ter agido assim"), ou de súplica por uma graça necessária ("Ajuda-me a ser mais paciente"). Fale com Deus como você falaria com um amigo querido.'
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "4. Contemplatio (Contemplação)" }),
          /* @__PURE__ */ jsxs("p", { className: "text-text leading-relaxed mb-6", children: [
            "É o momento de silêncio e repouso em Deus. Não há mais palavras, apenas a presença. É deixar-se transformar pelo olhar amoroso do Pai. A pergunta final é: ",
            /* @__PURE__ */ jsx("strong", { children: '"O que a Palavra de Deus mudará em minha vida?"' }),
            ". Aqui, você simplesmente repousa na presença de Deus, deixando que Ele trabalhe em seu coração."
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Dicas para uma Boa Prática" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Escolha um local silencioso, invoque o Espírito Santo antes de começar ("Vinde, Espírito Santo, iluminai meu entendimento") e não tenha pressa. Mais vale um versículo bem meditado do que dez capítulos lidos apenas por obrigação. A Bíblia é o "lugar" onde Deus nos espera todos os dias. Comece com apenas 15 minutos. Com o tempo, você desejará mais.' }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Desconhecer as Escrituras é desconhecer o próprio Cristo."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— São Jerônimo" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"A Bíblia é a carta de amor de Deus para você."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Santo Agostinho" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "lectio-divina" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "What is Lectio Divina?",
            answer: "Lectio Divina (Latin for 'Divine Reading') is an ancient method of praying with Scripture practiced since the early Church. It involves four steps: Lectio (reading), Meditatio (meditation), Oratio (prayer), and Contemplatio (contemplation)."
          },
          {
            question: "How long should a Lectio Divina session last?",
            answer: "A typical Lectio Divina session lasts 20–30 minutes, though beginners can start with 10–15 minutes. The goal is depth, not length. Even a few verses prayed slowly and attentively is more fruitful than reading many chapters quickly."
          },
          {
            question: "What Scripture passages are best for Lectio Divina?",
            answer: "The daily Mass readings are an excellent starting point. The Psalms, the Gospels, and the Letters of St. Paul are particularly rich for Lectio Divina. Many Catholics follow the Church's liturgical calendar, praying with the readings of the day."
          },
          {
            question: "Is Lectio Divina the same as Bible study?",
            answer: "No. Bible study is primarily intellectual — analyzing the text, its history, and meaning. Lectio Divina is primarily prayerful — listening for God's personal word to you. Both are valuable, but Lectio Divina is a form of prayer, not academic study."
          },
          {
            question: "Can Lectio Divina be done in a group?",
            answer: "Yes! Group Lectio Divina is a beautiful practice for families, prayer groups, and parishes. Each person shares a word or phrase that struck them, then reflections, then prayers. It deepens community bonds and enriches personal prayer."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "Como está sua intimidade com a Palavra?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Faça nosso quiz e descubra como você pode aprofundar seu conhecimento bíblico e sua vida de oração através das Escrituras." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Fazer o Quiz Agora" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function ChastityModernWorld() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Living Chastity in the Modern World: Challenges and Graces | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Understand the true meaning of Christian chastity and how to live it in today's world. An invitation to freedom and authentic love according to the Gospel." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "how to live chastity, chastity in modern world, catholic sexual purity, why be chaste, chastity before marriage, true love" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/chastity-modern-world/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Chastity in the Modern World" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Formation" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "December 29, 2024"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "9 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "Living Chastity in the Modern World: Challenges and Graces" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: 'Chastity is not a "no" to pleasure, but a "yes" to true love. Discover how this virtue frees the heart to love as Christ loved.' })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Users, { className: "w-24 h-24 text-amber-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Speaking of chastity today seems, to many, an anachronism. In a culture that preaches immediate satisfaction of all impulses, the Christian proposal of purity is often ridiculed or misunderstood. However, chastity is the virtue that orders our affectivity and sexuality, integrating them into the human person for the good of authentic love." }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "How is your pursuit of purity of heart?",
              description: "Chastity is the freedom to truly love. Take our quiz and receive guidance on how to strengthen your virtues and live Christian love with integrity in today's world."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "What is Chastity Really?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The Catechism of the Catholic Church teaches that chastity means the successful integration of sexuality within the person. It is not the denial of sexuality, but its self-mastery. A chaste heart is a free heart, which does not use the other as an object of pleasure, but respects them as the image and likeness of God." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Chastity According to Your State in Life" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Chastity is not a one-size-fits-all virtue. The Church teaches that it is lived differently according to one's state in life:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "For the unmarried:" }),
              " Chastity means abstaining from sexual activity and cultivating purity of heart, mind, and body while preparing for marriage or discerning a vocation."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "For the married:" }),
              " Chastity means faithful, exclusive, and open-to-life love between spouses. It excludes adultery, contraception, and the use of one's spouse as a mere object of pleasure."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "For the consecrated:" }),
              " Priests, religious sisters, and brothers live chastity as celibacy — a total gift of self to God and His people, a sign of the Kingdom of Heaven."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "For widows and widowers:" }),
              " Chastity means living faithfully to the memory of their spouse while remaining open to God's will for their future."
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Theology of the Body" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `St. John Paul II's "Theology of the Body" — a series of 129 Wednesday audiences delivered between 1979 and 1984 — is the most profound Catholic reflection on human sexuality ever written. He argued that the human body is not a prison for the soul but a sacrament — a visible sign of invisible spiritual realities. The body reveals the person, and the sexual union of husband and wife is meant to be an image of the Trinitarian love of God.` }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "This vision transforms how we understand chastity. It is not a negative prohibition but a positive vision: the body is made for love, and chastity protects the body's capacity to express genuine, self-giving love rather than selfish use." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Practical Steps for Living Chastity" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Frequent Confession:" }),
              " The Sacrament of Penance restores grace and gives strength to resist temptation. Many saints went to Confession weekly."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Daily prayer and Rosary:" }),
              " Our Lady is the model of purity. Ask her intercession daily."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Custody of the eyes:" }),
              ' Be intentional about what you watch, read, and look at. "The eye is the lamp of the body" (Matthew 6:22).'
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Avoid near occasions of sin:" }),
              " Identify the situations, places, and relationships that lead you toward unchastity and avoid them."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Internet accountability:" }),
              " Use filters and accountability software. Tell a trusted friend about your struggles."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Cultivate deep friendships:" }),
              " Loneliness is one of the greatest drivers of sexual sin. Build genuine, non-romantic friendships."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Physical exercise and healthy habits:" }),
              " A disciplined body is more easily a chaste body."
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "When You Fall: Starting Over" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `Chastity is a virtue that must be cultivated over time, and falls are part of the journey for most people. The concept of "secondary virginity" — a renewed commitment to chastity after failure — is recognized and encouraged by the Church. God's mercy is always greater than our failures. The Sacrament of Confession is not just for forgiveness but for healing and strengthening.` }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'St. Augustine, who struggled deeply with sexual sin before his conversion, wrote: "Our heart is restless until it rests in You." The restlessness that drives people to sexual sin is ultimately a hunger for God — and only God can satisfy it.' }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Chastity is the flower of virtues."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Saint Francis de Sales" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Our heart is restless until it rests in You."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Saint Augustine" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "chastity-modern-world" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "What does chastity mean in Catholic teaching?",
            answer: "Chastity is the virtue that integrates sexuality according to one's state in life. For married couples, it means faithful, open-to-life love. For single people, it means abstinence. For consecrated religious, it means celibacy. It is not the absence of sexuality but its proper ordering."
          },
          {
            question: "Is chastity only about avoiding sex?",
            answer: "No. Chastity encompasses all aspects of sexuality — thoughts, words, and actions. It includes modesty in dress and behavior, purity of heart, custody of the eyes, and avoiding pornography. The Catechism calls chastity 'the successful integration of sexuality within the person' (CCC 2337)."
          },
          {
            question: "How can I practice chastity in today's culture?",
            answer: "Practical steps include: frequent Confession and Communion, daily prayer and Rosary, avoiding near occasions of sin, using internet filters, cultivating deep friendships, practicing custody of the eyes, and reading about the theology of the body (St. John Paul II)."
          },
          {
            question: "What is the Church's teaching on pornography?",
            answer: "The Church teaches that pornography is gravely immoral. It offends against chastity, degrades human dignity, and can create serious addiction. The Catechism states it 'does grave injury to the dignity of its participants' (CCC 2354). Confession and professional help are recommended for those struggling."
          },
          {
            question: "Can someone who has failed in chastity start over?",
            answer: "Absolutely. The virtue of chastity can always be recovered through sincere repentance and the Sacrament of Confession. The concept of 'secondary virginity' — a renewed commitment to chastity — is recognized and encouraged. God's mercy is always greater than our failures."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "How is your pursuit of holiness?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and receive guidance on how to live Christian virtues and strengthen your character in following Jesus." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function SocialDoctrine() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "The Social Doctrine of the Church: The Catholic View on Society | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Learn the fundamental principles of the Church's Social Doctrine. Understand how Catholic faith proposes solutions to social, political, and economic challenges." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "what is church social doctrine, social doctrine principles, common good, solidarity, subsidiarity, human dignity, church and politics" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/social-doctrine/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Social Doctrine of the Church" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Formation" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "December 29, 2024"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "10 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "The Social Doctrine of the Church: The Catholic View on Society" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "Faith is not limited to sacristies. Discover how Catholic principles can illuminate the construction of a more just, human, and solidary society." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Users, { className: "w-24 h-24 text-amber-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'The Social Doctrine of the Church (SDC) is the set of Church teachings on social, political, and economic realities. It is not a "third way" between capitalism and socialism, nor a political ideology, but a theological and ethical reflection that seeks to apply the Gospel message to the challenges of human coexistence.' }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "Do you live your faith in public life?",
              description: "The Church's Social Doctrine illuminates the world's challenges. Take our quiz and discover how to apply principles of justice and solidarity in your work, family, and society."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Four Fundamental Principles" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "All Social Doctrine rests on four essential pillars: Human Dignity, Common Good, Subsidiarity, and Solidarity." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "1. Human Dignity" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Every human being, from conception to natural death, possesses an inalienable dignity because they are created in the image and likeness of God (Genesis 1:27). This dignity is not earned by productivity, intelligence, or social status — it is inherent to every person. Catholic Social Teaching insists that no economic system, political ideology, or social arrangement may treat persons as mere means to an end." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "2. The Common Good" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `The common good is "the sum total of social conditions which allow people, either as groups or as individuals, to reach their fulfillment more fully and more easily" (Gaudium et Spes 26). It requires that individuals, families, associations, and the state all contribute to creating conditions where every person can flourish. The common good is not the same as the majority's preference — it includes the rights of minorities and the most vulnerable.` }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "3. Subsidiarity" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Subsidiarity holds that decisions should be made at the lowest appropriate level of society. What individuals can do, families should not take over. What families can do, local communities should not absorb. What local communities can do, the state should not control. This principle protects human freedom and initiative while recognizing that higher authorities must step in when lower ones cannot adequately address a need." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "4. Solidarity" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Solidarity is the recognition that we are all responsible for one another. Pope John Paul II described it as "a firm and persevering determination to commit oneself to the common good." It is not mere sentiment but a moral virtue that moves us to share our goods, defend the rights of others, and work for a more just world. "We are all responsible for all" — this is the heart of solidarity.' }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The History of Catholic Social Teaching" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Catholic Social Teaching has a rich history of papal documents (encyclicals) addressing the social questions of each era:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Rerum Novarum (1891) — Leo XIII:" }),
              " The founding document, addressing the rights of workers in the Industrial Revolution"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Quadragesimo Anno (1931) — Pius XI:" }),
              " Developed subsidiarity and critiqued both capitalism and socialism"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Mater et Magistra (1961) — John XXIII:" }),
              " Applied social principles to the modern world"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Pacem in Terris (1963) — John XXIII:" }),
              " On peace and human rights"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Gaudium et Spes (1965) — Vatican II:" }),
              " The Church in the modern world"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Laborem Exercens (1981) — John Paul II:" }),
              " On the dignity of human work"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Centesimus Annus (1991) — John Paul II:" }),
              " 100 years after Rerum Novarum"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Laudato Si' (2015) — Francis:" }),
              " Care for our common home"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Fratelli Tutti (2020) — Francis:" }),
              " On fraternity and social friendship"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Preferential Option for the Poor" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'One of the most distinctive elements of Catholic Social Teaching is the "preferential option for the poor." This does not mean that the poor are morally superior or that the Church ignores others. It means that in any social analysis or policy decision, the first question must be: "How does this affect the most vulnerable?" Jesus identified Himself with the poor: "Whatever you did for one of the least of these brothers and sisters of mine, you did for me" (Matthew 25:40).' }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "How to Live Catholic Social Teaching Today" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "In your workplace:" }),
              " Treat coworkers with dignity, pay fair wages if you are an employer, refuse to participate in unjust practices"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "In your community:" }),
              " Volunteer at food banks, advocate for just housing policies, support local businesses"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "In your politics:" }),
              " Vote according to Catholic principles, prioritizing life, dignity, and the common good over party loyalty"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "In your consumption:" }),
              " Choose fair trade products, reduce waste, support companies with ethical practices"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "In your family:" }),
              " Practice hospitality, share your resources, teach children to care for the poor"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Social and political charity is not a sentiment, but a virtue."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Pope Francis (Fratelli Tutti)" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: `"The Church's social teaching is a rich treasure of wisdom about building a just society and living lives of holiness amidst the challenges of modern society."` }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— United States Conference of Catholic Bishops" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "social-doctrine" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "What is Catholic Social Doctrine?",
            answer: "Catholic Social Doctrine (CSD) is the body of Church teaching on social, economic, and political matters. It is rooted in Scripture and natural law, developed through papal encyclicals since Leo XIII's Rerum Novarum (1891). Its core principles include human dignity, solidarity, subsidiarity, and the common good."
          },
          {
            question: "What are the main principles of Catholic Social Teaching?",
            answer: "The key principles are: Human Dignity (every person has inherent worth), Common Good (society must serve all), Subsidiarity (decisions at the lowest appropriate level), Solidarity (we are responsible for one another), Preferential Option for the Poor, and Care for Creation."
          },
          {
            question: "Does the Church support capitalism or socialism?",
            answer: "Neither exclusively. The Church rejects both unbridled capitalism (which ignores the poor) and Marxist socialism (which denies private property and religious freedom). Catholic Social Teaching proposes a 'third way' centered on human dignity, just wages, and the universal destination of goods."
          },
          {
            question: "What does the Church say about workers' rights?",
            answer: "The Church strongly defends workers' rights: the right to a just wage, safe working conditions, rest, and the right to form unions. Leo XIII's Rerum Novarum (1891) was the first major social encyclical defending workers against exploitation by both capital and the state."
          },
          {
            question: "How can ordinary Catholics live Catholic Social Teaching?",
            answer: "Through: voting according to Catholic principles, supporting fair trade, volunteering at food banks and shelters, advocating for just laws, treating employees and coworkers with dignity, supporting Catholic charities, and living simply to share with those in need."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "Do you live your faith in society?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and discover how you can be salt of the earth and light of the world in your work environment and community." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function VocationalDiscernment() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "How to Discern God's Will in Your Life | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Learn the principles of spiritual discernment to discover God's plan for you. Practical tips for making decisions in the light of faith." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "how to know my vocation, catholic vocational discernment, god's will for my life, how to discern, priestly religious matrimonial vocation" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/vocational-discernment/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Vocational Discernment" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Spirituality" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "December 29, 2024"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "8 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "How to Discern God's Will in Your Life" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "God has a plan of love for each of us. Learn how to silence the noises of the world to hear the Lord's voice and make decisions with peace and security." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Sun, { className: "w-24 h-24 text-yellow-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Discernment is the art of discovering God's will amid the various options life presents us. It is not a magic formula, but a spiritual process that requires humility, patience, and above all, a life of sincere prayer. God does not play riddles with us; He desires that we be happy and fulfilled in our vocation." }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "Do you know what God's call is for you?",
              description: "Discernment is a path of listening and peace. Take our quiz and receive light on how to identify the signs of divine will in your life and make decisions with more spiritual security."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Four Vocations in the Catholic Church" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Every baptized person has a vocation — a specific call from God to love and serve in a particular way. The Church recognizes four primary vocations:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Marriage:" }),
              " The vocation of most Catholics, called to reflect the love of Christ for His Church through faithful, fruitful, and permanent union"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Holy Orders:" }),
              " The vocation to priesthood or diaconate, serving the Church through the sacraments and pastoral ministry"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Consecrated Life:" }),
              " Religious sisters, brothers, monks, and nuns who give their lives entirely to God through vows of poverty, chastity, and obedience"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Single Life:" }),
              " A vocation in itself for those called to serve God and neighbor without the specific commitments of marriage or religious life"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Ignatian Method of Discernment" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "St. Ignatius of Loyola, founder of the Jesuits and master of spiritual discernment, developed a systematic method for discovering God's will. His Spiritual Exercises remain one of the most powerful tools for discernment in the Church's history. The Ignatian method involves:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Indifference:" }),
              " Cultivating interior freedom from attachments so that you can choose what God wills rather than what you prefer"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Consolation and Desolation:" }),
              " Learning to recognize the movements of the Holy Spirit (consolation — peace, joy, love) versus the movements of the enemy (desolation — anxiety, confusion, darkness)"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "The Two Standards:" }),
              " Meditating on the contrast between Christ's way (humility, poverty, service) and the world's way (riches, honor, pride)"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "The Three Times of Election:" }),
              " Recognizing whether God is calling you through clarity, through consolations and desolations, or through rational deliberation"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Signs of a Genuine Vocation" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "While God calls each person uniquely, spiritual directors and the Church's tradition identify several common signs of a genuine vocation:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Persistent attraction:" }),
              " A consistent, recurring draw toward a particular way of life over time — not just a passing feeling"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Interior peace:" }),
              " When you imagine yourself in a particular vocation, do you experience deep peace or anxiety? Peace is generally a sign of God's will"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Fitness:" }),
              " Do you have the natural and spiritual qualities needed for this vocation? God generally calls people who have the capacity to live the vocation well"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "External confirmation:" }),
              " Do others — especially a spiritual director, confessor, or community — affirm what you are sensing?"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Desire to serve:" }),
              " A genuine vocation is always oriented toward love and service, not personal fulfillment alone"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Role of a Spiritual Director" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "A spiritual director is perhaps the most important human resource in vocational discernment. This is a trained guide — usually a priest, deacon, or experienced religious — who helps you recognize God's movements in your soul, distinguish genuine calls from personal desires or fears, and make decisions with greater clarity and peace." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Finding a good spiritual director takes time and prayer. Ask your pastor for recommendations, contact your diocesan vocations office, or reach out to a religious community. Meet with several directors before committing to one. The relationship should be characterized by trust, honesty, and a shared commitment to seeking God's will." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Practical Steps for Discernment" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Pray daily:" }),
              " You cannot hear God's voice if you never listen. Set aside time each day for silent prayer."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Receive the sacraments frequently:" }),
              " Confession and Communion open the soul to God's grace and clarity."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Make a retreat:" }),
              " A silent retreat — even a weekend — can provide the space needed to hear God's voice clearly."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Visit communities:" }),
              " If discerning religious life, visit seminaries, monasteries, and convents. If discerning marriage, spend time with holy married couples."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Keep a journal:" }),
              " Write down your prayers, feelings, and insights. Patterns often emerge over time."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Be patient:" }),
              " Discernment takes time. Trust God's timing and resist the pressure to decide before you are ready."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Lord, what do you want me to do?"' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Saint Francis of Assisi" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"The will of God is not a burden to be carried but a path to be walked — and it always leads to joy."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— St. John Paul II" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "vocational-discernment" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "What are the vocations in the Catholic Church?",
            answer: "The Church recognizes four main vocations: Marriage, Holy Orders (priesthood/diaconate), Consecrated Life (religious sisters, brothers, monks), and Single Life lived in service to God. Every baptized person has a vocation — a specific call from God."
          },
          {
            question: "How do I know if God is calling me to the priesthood or religious life?",
            answer: "Signs of a religious vocation include: a persistent attraction to prayer and service, a desire to give your life entirely to God, peace when considering this path, and affirmation from a spiritual director. Spending time in prayer, retreats, and visiting communities helps clarify the call."
          },
          {
            question: "What is the role of a spiritual director in discernment?",
            answer: "A spiritual director is a trained guide who helps you recognize God's movements in your soul. They help you distinguish between genuine divine calls and personal desires or fears. Regular meetings with a spiritual director are essential for serious vocational discernment."
          },
          {
            question: "Can I discern my vocation if I have a sinful past?",
            answer: "Yes. God calls people from all backgrounds. Many saints had troubled pasts before their conversion. What matters is your current relationship with God and your openness to His will. The Sacrament of Confession restores grace and opens the door to any vocation."
          },
          {
            question: "How long does vocational discernment take?",
            answer: "There is no fixed timeline. Some people know their vocation early; others discern for years. The important thing is to remain open, pray consistently, seek spiritual direction, and take concrete steps (visiting seminaries, attending discernment retreats) rather than waiting for absolute certainty."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "Do you know God's purpose for you?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and receive a reflection on your spiritual journey and how you can be more attentive to God's signs in your life." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function EucharistRealPresence() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "The Eucharist: Real Presence of Jesus in Bread and Wine | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Understand the dogma of Transubstantiation and the importance of the Eucharist as source and summit of Christian life. Discover why Jesus is truly present in the Holy Host." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "real presence of jesus in eucharist, what is transubstantiation, body and blood of christ, host is jesus, blessed sacrament, catholic communion" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/eucharist-real-presence/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "The Eucharist" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Sacraments" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "December 29, 2024"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "10 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "The Eucharist: Real Presence of Jesus in Bread and Wine" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: '"This is my body." The Eucharist is not a symbol, but the living and substantial presence of Jesus Christ. Understand the mystery that has sustained the Church for two millennia.' })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Church, { className: "w-24 h-24 text-violet-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `The Eucharist is the beating heart of the Catholic Church, the "sun" around which all Christian life revolves. While in other sacraments we receive God's grace, in the Eucharist we receive the Author of grace Himself – Jesus Christ in Person, with His Body, Blood, Soul, and Divinity. It is the mystery of faith par excellence, so sublime that angels prostrate themselves in adoration before the altar.` }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "Do you believe in the Real Presence?",
              description: "The Eucharist is the heart of our faith. Take our quiz and discover how to deepen your adoration and love for Jesus in the Sacrament, living the mystery of Transubstantiation with more faith."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "What is Transubstantiation?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `This theological term, defined by the Council of Trent, explains the miracle that occurs at every Mass: the change of the entire substance of bread into the substance of Christ's Body and the entire substance of wine into the substance of His Blood. The "appearances" or "accidents" (taste, color, smell, form) remain the same, but the deep reality – the substance – has changed completely.` }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `The Catechism of the Catholic Church states: "The Council of Trent summarizes the Catholic faith by declaring: 'Because Christ our Redeemer said that it was truly his body that he was offering under the species of bread, it has always been the conviction of the Church of God, and this holy Council now declares again, that by the consecration of the bread and wine there takes place a change of the whole substance of the bread into the substance of the body of Christ our Lord and of the whole substance of the wine into the substance of his blood'" (CCC 1376).` }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Biblical Foundation of the Real Presence" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The Real Presence is not a medieval invention — it is rooted in the explicit words of Jesus Himself:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "John 6:51-58 (The Bread of Life Discourse):" }),
              ' "I am the living bread that came down from heaven... Whoever eats my flesh and drinks my blood has eternal life." When many disciples left because of this teaching, Jesus did not soften His words — He let them go.'
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Matthew 26:26-28 (The Last Supper):" }),
              ' "This IS my body... This IS my blood." Jesus used the present tense, not "this represents" or "this symbolizes."'
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "1 Corinthians 11:27-29:" }),
              ' St. Paul warns that eating the Eucharist unworthily is "sinning against the Body and Blood of the Lord" — language that makes no sense if the Eucharist were merely symbolic.'
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Eucharistic Miracles" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Throughout history, the Church has documented numerous Eucharistic miracles — extraordinary events in which the Real Presence became visible to human senses. The most famous is the Miracle of Lanciano (8th century, Italy), where the consecrated Host transformed into visible flesh and the wine into visible blood. Scientific analysis in 1970 confirmed that the flesh is human cardiac muscle tissue and the blood is type AB — the same blood type found on the Shroud of Turin." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Blessed Carlo Acutis, the young Italian who died in 2006 and was beatified in 2020, created a website cataloguing Eucharistic miracles from around the world. He said: "The Eucharist is my highway to Heaven."' }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "How to Receive Communion Worthily" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Because the Eucharist is truly Jesus Christ, the Church requires that Catholics receive Communion with proper dispositions:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "State of grace:" }),
              " You must not be conscious of any unconfessed mortal sin. If you are, go to Confession before receiving Communion."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Eucharistic fast:" }),
              " Abstain from food and drink (except water and medicine) for one hour before receiving Communion."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Catholic faith:" }),
              " You must believe in the Real Presence. Non-Catholics generally should not receive Catholic Communion."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Right intention:" }),
              " Receive Communion to unite yourself with Christ, not out of habit or social pressure."
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Effects of Holy Communion" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Intimate union with Christ:" }),
              ' Communion incorporates us into Jesus in a real way — "He who eats my flesh and drinks my blood abides in me, and I in him" (John 6:56)'
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Increase of Sanctifying Grace:" }),
              " The Eucharist strengthens and increases divine life in the soul"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Remission of Venial Sins:" }),
              " The fire of Christ's love purifies our light faults"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Preservation against Mortal Sins:" }),
              " Frequent Communion gives us strength to resist grave temptations"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Pledge of eternal life:" }),
              ' "Whoever eats my flesh and drinks my blood has eternal life, and I will raise him up at the last day" (John 6:54)'
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"The Eucharist is the shortest path to Heaven."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Saint Pius X" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"It would be easier for the world to survive without the sun than to do without Holy Mass."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Saint Padre Pio" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "eucharist-real-presence" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "What is the Real Presence of Christ in the Eucharist?",
            answer: "The Real Presence means that Jesus Christ is truly, really, and substantially present — Body, Blood, Soul, and Divinity — under the appearances of bread and wine after the Consecration at Mass. This is not symbolic; it is a literal transformation called transubstantiation."
          },
          {
            question: "What is transubstantiation?",
            answer: "Transubstantiation is the term the Church uses to describe how the bread and wine become the Body and Blood of Christ at the Consecration. The outward appearances (accidents) remain the same, but the substance is entirely changed into Christ's Body and Blood."
          },
          {
            question: "How long is Jesus present in the Eucharist after Mass?",
            answer: "Jesus remains truly present in the consecrated hosts reserved in the tabernacle for as long as the appearances of bread remain. This is why Catholics genuflect before the tabernacle and why Eucharistic Adoration is possible outside of Mass."
          },
          {
            question: "What does the Bible say about the Real Presence?",
            answer: "Jesus said clearly: 'My flesh is real food and my blood is real drink' (John 6:55). At the Last Supper He said: 'This IS my body' (Matthew 26:26). St. Paul warns that eating unworthily is 'sinning against the Body and Blood of the Lord' (1 Corinthians 11:27)."
          },
          {
            question: "Why do some Christians not believe in the Real Presence?",
            answer: "Most Protestant denominations interpret Jesus's words symbolically, a view that emerged during the Reformation in the 16th century. Catholics, Eastern Orthodox, and some Lutherans maintain the ancient Christian belief in the Real Presence, which was universal in the early Church."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "Do you value the Bread of Life?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and discover how your sacramental life and love for the Eucharist, the center of Christian life, are going." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function EucharisticAdoration() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Eucharistic Adoration: A Complete Guide to the Holy Hour | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Discover the transforming power of Eucharistic Adoration. Learn what it is, how to make a holy hour, and why the saints called it the secret of holiness." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "eucharistic adoration, holy hour, blessed sacrament, perpetual adoration, adoration chapel, how to pray adoration, real presence" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/eucharistic-adoration/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz-intro", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog/page/1/", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Eucharistic Adoration" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog/page/1/", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Prayer" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "April 12, 2026"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "8 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "Eucharistic Adoration: Time with Jesus" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "In a world of constant noise and distraction, Eucharistic Adoration offers something radical: the chance to simply be with God. No agenda, no performance — just you and Jesus, face to face." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Sun, { className: "w-24 h-24 text-amber-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Eucharistic Adoration is the prolongation of the mystery celebrated at Holy Mass. When the priest consecrates the bread and wine, Jesus becomes truly present — Body, Blood, Soul, and Divinity — under the appearances of bread. This presence does not end when Mass ends. Jesus remains in the consecrated hosts reserved in the tabernacle, waiting for us to come and spend time with Him." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "What is Eucharistic Adoration?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Eucharistic Adoration is the practice of praying in the presence of the Blessed Sacrament — the consecrated Host — either exposed in a monstrance on the altar or reserved in the tabernacle. Because Jesus is truly present in the Eucharist (a doctrine called the Real Presence), adoration is literally spending time with the living God." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The practice of adoring the Blessed Sacrament outside of Mass developed gradually in the medieval Church, as the faithful's desire to remain in the presence of the Eucharistic Lord grew. Today, thousands of parishes worldwide have adoration chapels open for prayer, and many maintain Perpetual Adoration — continuous adoration 24 hours a day, 7 days a week." }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "How is your Eucharistic life?",
              description: "Take our Catholic life assessment and discover how to deepen your relationship with Jesus in the Eucharist."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Theological Foundation of Adoration" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `The Second Vatican Council's Constitution on the Sacred Liturgy teaches that the Eucharist is "the source and summit of the Christian life" (Lumen Gentium 11). If the Eucharist is the summit, then adoration is dwelling on that summit — lingering in the presence of the One who is the source of all grace.` }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'The Catechism of the Catholic Church states: "The Catholic Church has always offered and still offers to the sacrament of the Eucharist the cult of adoration, not only during Mass, but also outside of it, reserving the consecrated hosts with the utmost care, exposing them to the solemn veneration of the faithful" (CCC 1378).' }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "How to Make a Holy Hour" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'A "holy hour" is a traditional term for spending one hour in Eucharistic Adoration. Jesus asked His disciples in Gethsemane: "Could you not watch one hour with me?" (Matthew 26:40). Here is a simple structure for a holy hour:' }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Opening (5 minutes):" }),
              " Make the Sign of the Cross, acknowledge Jesus's presence, and offer your hour to Him. Ask the Holy Spirit to guide your prayer."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Scripture (10 minutes):" }),
              " Read a passage from the Gospels slowly, allowing the words to sink in. The Passion narratives are particularly powerful in adoration."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Meditation (15 minutes):" }),
              " Reflect on what you read. What is Jesus saying to you personally? What does He want from you?"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Intercession (15 minutes):" }),
              " Bring your needs and the needs of others before Jesus. Pray for your family, your parish, the Church, and the world."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Silence (10 minutes):" }),
              " Simply rest in God's presence. Don't speak — just listen. This is the most difficult and most fruitful part of adoration."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Rosary or other devotion (10 minutes):" }),
              " Pray the Rosary, the Divine Mercy Chaplet, or another devotional prayer."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Closing (5 minutes):" }),
              " Thank Jesus for the time spent together. Make an act of spiritual communion if you cannot receive Communion. Ask for His blessing as you leave."
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "What the Saints Say About Adoration" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The saints who practiced Eucharistic Adoration most fervently were also the saints who loved most deeply and served most generously. Their testimony is unanimous: time before the Blessed Sacrament transforms the soul." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `St. Peter Julian Eymard, the "Apostle of the Eucharist," wrote: "The Eucharist is the summary of all God's love." He founded the Congregation of the Blessed Sacrament specifically to promote adoration and spent hours each day before the tabernacle.` }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'St. Teresa of Calcutta (Mother Teresa) required her sisters to spend one hour each day in adoration, regardless of how busy their work with the poor became. She said: "The time you spend with Jesus in the Blessed Sacrament is the best time that you will spend on earth. Each moment that you spend with Jesus will deepen your union with Him and make your soul everlastingly more glorious and beautiful in Heaven."' }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'St. John Vianney, the Curé of Ars, described a simple peasant who spent hours in adoration each day. When asked what he did during all that time, the man replied: "I look at Him and He looks at me." This simple exchange captures the essence of adoration.' }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Perpetual Adoration: Never Leaving Jesus Alone" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Perpetual Adoration chapels maintain continuous adoration 24 hours a day, 7 days a week. Parishioners sign up for one-hour slots to ensure that Jesus in the Blessed Sacrament is never left alone. There are thousands of perpetual adoration chapels in the United States and around the world." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'If your parish has a perpetual adoration chapel, consider signing up for a regular weekly hour. Many adorers report that their "holy hour" becomes the most important hour of their week — the anchor that gives meaning and peace to everything else.' }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Spiritual Benefits of Regular Adoration" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Those who practice regular Eucharistic Adoration consistently report profound spiritual transformation:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsx("li", { children: "Deeper peace and interior calm, even amid life's storms" }),
            /* @__PURE__ */ jsx("li", { children: "Greater clarity in decision-making and discernment" }),
            /* @__PURE__ */ jsx("li", { children: "Healing of emotional wounds and past hurts" }),
            /* @__PURE__ */ jsx("li", { children: "Stronger desire for prayer and the sacraments" }),
            /* @__PURE__ */ jsx("li", { children: "Increased love for others, especially the poor and suffering" }),
            /* @__PURE__ */ jsx("li", { children: "Freedom from addictions and disordered attachments" }),
            /* @__PURE__ */ jsx("li", { children: "Many conversions and vocations have been born in adoration chapels" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"The time you spend with Jesus in the Blessed Sacrament is the best time that you will spend on earth."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— St. Teresa of Calcutta" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Could you not watch one hour with me?"' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Jesus Christ (Matthew 26:40)" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "eucharistic-adoration" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          { question: "What is Eucharistic Adoration?", answer: "Eucharistic Adoration is the practice of praying before the Blessed Sacrament — the consecrated Host — exposed in a monstrance or reserved in the tabernacle. Since Jesus is truly present, adoration is literally spending time with Him." },
          { question: "What is Perpetual Adoration?", answer: "Perpetual Adoration is when a parish or religious community maintains continuous adoration 24 hours a day, 7 days a week. Parishioners sign up for one-hour slots to ensure Jesus is never left alone. There are thousands of perpetual adoration chapels worldwide." },
          { question: "What should I do during Eucharistic Adoration?", answer: "You can pray the Rosary, read Scripture, use a prayer book, journal, or simply sit in silence. St. John Vianney described a parishioner who spent hours in adoration: 'I look at Him and He looks at me.' Simply being present with love is enough." },
          { question: "How long should I spend in Eucharistic Adoration?", answer: "Even 15–30 minutes is spiritually powerful. Many saints recommend at least one hour per week. Jesus asked His disciples: 'Could you not watch one hour with me?' (Matthew 26:40). Start with whatever time you can commit to consistently." },
          { question: "What are the spiritual benefits of Eucharistic Adoration?", answer: "Regular adorers report: deeper peace, clarity in decision-making, healing of emotional wounds, stronger prayer life, and greater love for others. St. Peter Julian Eymard said: 'The Eucharist is the summary of all God's love.' Many conversions and vocations have been born in adoration." }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "Discover How Your Faith Life Is" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and receive a personalized assessment of your Catholic journey." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz-intro", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function WhatIsPurgatory() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "What is Purgatory? Complete Guide to Catholic Teaching | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Understand the Catholic doctrine of Purgatory — what it is, what the Bible says, how we can help the Holy Souls, and why it is a sign of God's mercy." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "what is purgatory, catholic purgatory, purgatory bible, holy souls purgatory, prayers for the dead, purgatory doctrine" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/what-is-purgatory/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz-intro", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog/page/1/", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "What is Purgatory?" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog/page/1/", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Doctrine" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "April 12, 2026"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "9 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "What is Purgatory? Understanding Catholic Teaching" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "Purgatory is not a second chance or a place of punishment — it is the final act of God's mercy, a purifying love that prepares souls for the perfect joy of Heaven." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Cloud, { className: "w-24 h-24 text-blue-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Of all Catholic doctrines, Purgatory is perhaps the most misunderstood — and the most consoling. Far from being a gloomy doctrine of punishment, Purgatory reveals the depth of God's mercy: He desires every soul to reach Heaven, and He provides a means of final purification for those who die in His grace but are not yet fully ready for the beatific vision." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Catholic Definition of Purgatory" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `The Catechism of the Catholic Church defines Purgatory as follows: "All who die in God's grace and friendship, but still imperfectly purified, are indeed assured of their eternal salvation; but after death they undergo purification, so as to achieve the holiness necessary to enter the joy of heaven" (CCC 1030).` }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Three key truths emerge from this definition: First, those in Purgatory are already saved — their eternal destiny is Heaven, not Hell. Second, they require purification because nothing impure can enter Heaven (Revelation 21:27). Third, this purification happens after death, before the soul enters the full joy of God's presence." }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "How well do you know Catholic doctrine?",
              description: "Take our Catholic life assessment and discover how to deepen your understanding of the faith."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Purgatory in Sacred Scripture" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'While the word "Purgatory" does not appear in the Bible, the concept is clearly present in both the Old and New Testaments:' }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "2 Maccabees 12:43-46:" }),
              ' Judas Maccabeus collects money to offer sacrifice for fallen soldiers who had sinned, "for if he were not expecting that those who had fallen would rise again, it would have been superfluous and foolish to pray for the dead." This passage explicitly supports prayer for the dead and implies a state where such prayer is beneficial.'
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Matthew 12:32:" }),
              ' Jesus speaks of sins that "will not be forgiven either in this age or in the age to come" — implying that some sins can be forgiven in the next life.'
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "1 Corinthians 3:13-15:" }),
              ` St. Paul describes a fire that tests each person's work: "If it is burned up, the builder will suffer loss but yet will be saved — even though only as one escaping through the flames."`
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Matthew 5:26:" }),
              ' Jesus speaks of not getting out of prison "until you have paid the last penny" — a passage many Fathers of the Church interpreted as referring to Purgatory.'
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Purgatory in the Early Church" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The practice of praying for the dead is one of the oldest traditions in Christianity. Archaeological evidence from the Roman catacombs shows inscriptions asking for prayers for the deceased dating back to the 2nd and 3rd centuries. The earliest Christian liturgies included prayers for the dead." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Tertullian (c. 200 AD) wrote of offering prayers and sacrifices for the dead on the anniversary of their death. St. Augustine (354-430 AD) prayed fervently for his mother Monica after her death and wrote extensively about the purification of souls after death. St. John Chrysostom (347-407 AD) encouraged the faithful to pray for the dead, saying it was "not in vain."' }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "What is the Nature of Purgatory's Purification?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The Church has defined that Purgatory exists and that souls there can be helped by our prayers, but has not defined the precise nature of the purification. Theologians have proposed various understandings:" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `The traditional view, associated with St. Thomas Aquinas and many medieval theologians, speaks of a purifying fire — not the fire of Hell, but a cleansing fire of love. Pope Benedict XVI, in his encyclical Spe Salvi, offered a beautiful reflection: "The encounter with [Christ] is the decisive act of judgment. Before his gaze all falsehood melts away... His gaze, the touch of his heart heals us through an undeniably painful transformation 'as through fire.'"` }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "How Can We Help the Holy Souls?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The doctrine of Purgatory is inseparable from the doctrine of the Communion of Saints — the spiritual solidarity that unites the Church Militant (us on earth), the Church Suffering (souls in Purgatory), and the Church Triumphant (saints in Heaven). We can help the Holy Souls through:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Holy Mass:" }),
              " The most powerful help we can offer. Having Masses offered for deceased loved ones is the greatest act of charity we can perform for them."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Prayer:" }),
              " The Rosary, the Divine Mercy Chaplet, and the De Profundis (Psalm 130) are particularly recommended for the Holy Souls."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Indulgences:" }),
              " The Church grants indulgences that can be applied to the souls in Purgatory. The Portiuncula indulgence (August 2) and the All Souls' Day indulgence (November 2) are especially powerful."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Fasting and sacrifice:" }),
              " Offering our penances and sufferings for the Holy Souls is a beautiful act of charity."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Works of mercy:" }),
              " Performing corporal and spiritual works of mercy and offering them for the deceased."
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "November: Month of the Holy Souls" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The Church dedicates the month of November to prayer for the Holy Souls in Purgatory. All Souls' Day (November 2) is a day of special prayer and indulgences for the deceased. Visiting a cemetery and praying for the dead on this day, while fulfilling the usual conditions, gains a plenary indulgence applicable to the souls in Purgatory." }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"The souls in Purgatory are certain of their salvation, and they wait with patience and love for the moment when they will see God face to face."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— St. Catherine of Genoa" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"It is a holy and wholesome thought to pray for the dead, that they may be loosed from sins."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— 2 Maccabees 12:46" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "what-is-purgatory" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          { question: "What is Purgatory according to Catholic teaching?", answer: "Purgatory is a state of final purification after death for those who die in God's grace but are not yet fully purified. It is not a second chance at salvation, but a cleansing process for those already saved, preparing them for the full joy of Heaven." },
          { question: "Is Purgatory in the Bible?", answer: "Yes. 2 Maccabees 12:46 speaks of praying for the dead so they may be freed from sin. Matthew 12:32 mentions sins forgiven 'in the age to come.' 1 Corinthians 3:15 describes being 'saved, but only as through fire.' The early Church universally prayed for the dead." },
          { question: "How long does Purgatory last?", answer: "The Church does not specify a duration. Time in Purgatory may not correspond to earthly time. Our prayers, Masses, and indulgences offered for the souls in Purgatory can shorten their purification. The Church encourages praying for the dead, especially in November." },
          { question: "Can we help souls in Purgatory?", answer: "Yes! We can help the Holy Souls through: offering Mass for them, praying the Rosary, gaining indulgences on their behalf, fasting, and performing works of charity. November is traditionally dedicated to praying for the souls in Purgatory." },
          { question: "Do Protestants believe in Purgatory?", answer: "Most Protestant denominations reject Purgatory, as it was one of the doctrines disputed during the Reformation. However, some Anglican and Lutheran theologians have expressed openness to the concept. The Catholic and Eastern Orthodox churches both affirm a state of purification after death." }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "Discover How Your Faith Life Is" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and receive a personalized assessment of your Catholic journey." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz-intro", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function HowToLiveLent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "How to Live Lent: A Complete Guide to the Season of Conversion | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Discover how to make the most of Lent through prayer, fasting, and almsgiving. Practical tips for a transformative Lenten season that bears lasting spiritual fruit." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "how to live lent, lent catholic, lenten practices, ash wednesday, lent fasting, lent prayer, lent almsgiving, lenten season" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/how-to-live-lent/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz-intro", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog/page/1/", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "How to Live Lent" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog/page/1/", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Liturgy" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "April 12, 2026"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "11 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "How to Live Lent: A Season of Conversion and Grace" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "Lent is not about giving up chocolate. It is about giving up sin. It is the Church's annual invitation to die to self and rise with Christ — a 40-day school of holiness that can transform your entire year." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-purple-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Flame, { className: "w-24 h-24 text-purple-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Every year, the Church offers us the gift of Lent — forty days of grace, penance, and renewal that mirror Jesus's forty days of fasting in the desert. But for many Catholics, Lent passes by as a vague season of minor inconveniences rather than a genuine encounter with the living God. This guide will help you make Lent what it was always meant to be: a time of profound conversion." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "What is Lent?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Lent is the liturgical season of forty days that prepares the faithful for the celebration of Easter. It begins on Ash Wednesday and concludes on Holy Thursday evening, when the Easter Triduum begins. The forty days recall several biblical periods of forty: Moses's forty days on Mount Sinai, Elijah's forty-day journey to Horeb, and above all, Jesus's forty days of fasting and prayer in the desert before beginning His public ministry." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'The word "Lent" comes from the Old English "lencten," meaning spring — the season of lengthening days. It is a season of spiritual spring: a time to clear away the dead wood of sin, to till the soil of the soul, and to plant seeds of virtue that will bear fruit at Easter and throughout the year.' }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "Is your Lent bearing spiritual fruit?",
              description: "Take our Catholic life assessment and receive personalized guidance for your spiritual journey."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Three Pillars of Lent" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Jesus Himself outlined the three pillars of Lenten practice in the Sermon on the Mount (Matthew 6:1-18): prayer, fasting, and almsgiving. These three practices work together as a unified program of conversion:" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "1. Prayer: Deepening Your Relationship with God" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Lent is above all a time of intensified prayer. The Church offers many opportunities: daily Mass, the Stations of the Cross on Fridays, communal penance services, and personal prayer. Consider adding one of these practices to your Lenten routine:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsx("li", { children: "Daily Rosary or a decade of the Rosary" }),
            /* @__PURE__ */ jsx("li", { children: "Lectio Divina with the daily Mass readings" }),
            /* @__PURE__ */ jsx("li", { children: "The Stations of the Cross every Friday" }),
            /* @__PURE__ */ jsx("li", { children: "A weekly holy hour before the Blessed Sacrament" }),
            /* @__PURE__ */ jsx("li", { children: "Morning and evening prayer from the Liturgy of the Hours" }),
            /* @__PURE__ */ jsx("li", { children: "The Divine Mercy Chaplet at 3 PM" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "2. Fasting: Mastering the Body and Expressing Repentance" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Fasting is one of the most ancient and powerful spiritual practices in Christianity. The Church requires fasting on Ash Wednesday and Good Friday (one full meal and two smaller meals that together don't equal a full meal, for those aged 18-59) and abstinence from meat on all Fridays of Lent (for those aged 14 and older)." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "But fasting can go beyond food. Consider fasting from: social media, entertainment, alcohol, unnecessary spending, or any habit that has become a distraction from God. The purpose of fasting is not the sacrifice itself but what it opens up — more time for prayer, greater sensitivity to God's voice, and solidarity with the poor." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-text mt-8 mb-3", children: "3. Almsgiving: Love Made Concrete" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Almsgiving — giving to the poor — is the third pillar of Lent. It is the outward expression of the interior conversion that prayer and fasting are producing. The money saved by fasting can be given to the poor. Time freed from entertainment can be given in service. The Church's traditional works of mercy — feeding the hungry, clothing the naked, visiting the sick — are all forms of Lenten almsgiving." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Most Important Lenten Practice: Confession" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Above all else, Lent is the season of the Sacrament of Confession. The Church's ancient tradition of preparing catechumens for Baptism at Easter and reconciling penitents to the Church makes Lent the preeminent time for sacramental reconciliation. The Easter Duty — receiving Communion during the Easter season — presupposes being in a state of grace." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Many parishes offer additional Confession times during Lent, communal penance services, and "24 Hours for the Lord" events. Do not let Lent pass without making a good Confession. It is the most transformative thing you can do during this holy season.' }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Holy Week: The Heart of Lent" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Lent culminates in Holy Week — the most sacred week of the liturgical year. Each day of Holy Week has its own profound significance:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Palm Sunday:" }),
              " Jesus's triumphal entry into Jerusalem and the beginning of His Passion"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Holy Monday, Tuesday, Wednesday:" }),
              " Days of intensified prayer and preparation"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Holy Thursday:" }),
              " The institution of the Eucharist and the priesthood; the washing of feet"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Good Friday:" }),
              " The Passion and Death of Our Lord; the Stations of the Cross; the Veneration of the Cross"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Holy Saturday:" }),
              " The day of silence; the Easter Vigil in the night"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Easter Sunday:" }),
              " The Resurrection — the greatest feast of the Christian year"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Practical Tips for a Fruitful Lent" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Make a Lenten plan:" }),
              " Write down your specific commitments for prayer, fasting, and almsgiving before Ash Wednesday."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Start small and be consistent:" }),
              " One practice done faithfully every day is worth more than many practices abandoned after a week."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Don't give up on Sundays:" }),
              " While Sundays are not technically part of the 40 days, maintaining your Lenten practices on Sundays builds consistency."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Find a Lenten companion:" }),
              " Share your Lenten commitments with a friend or family member for mutual accountability."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Read a spiritual book:" }),
              " Choose a book that will nourish your faith during Lent — the lives of the saints, a commentary on the Passion, or a classic of Catholic spirituality."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Attend daily Mass if possible:" }),
              " Even a few extra weekday Masses during Lent can transform your spiritual life."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Lent is a favorable time for letting Christ serve us so that we in turn may become more like Him."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Pope Francis" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Return to me with all your heart, with fasting, with weeping, and with mourning; and rend your hearts and not your garments."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Joel 2:12-13" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "how-to-live-lent" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          { question: "What is Lent and when does it begin?", answer: "Lent is a 40-day season of prayer, fasting, and almsgiving that prepares Catholics for Easter. It begins on Ash Wednesday and ends on Holy Thursday evening. The 40 days recall Jesus's 40 days of fasting in the desert (Matthew 4:1-11)." },
          { question: "What are the three pillars of Lent?", answer: "The three pillars are: Prayer (deepening your relationship with God), Fasting (self-denial that strengthens the will and expresses repentance), and Almsgiving (giving to the poor as an act of love). Jesus mentions all three in Matthew 6:1-18." },
          { question: "What should I give up for Lent?", answer: "Choose something that is genuinely sacrificial for you — social media, sweets, alcohol, TV, or a comfort habit. The purpose is not the sacrifice itself but what it opens up: more time for prayer, greater dependence on God, and solidarity with the poor." },
          { question: "Are Sundays during Lent still penitential?", answer: "Sundays are always celebrations of the Resurrection and are not counted among the 40 days of Lent. You are not obligated to fast on Sundays, though many Catholics maintain their Lenten practices. Sundays during Lent are 'in Lent' but not 'of Lent.'" },
          { question: "What is the most important thing to do during Lent?", answer: "Go to Confession. Lent is the Church's primary season for reconciliation. The Easter Duty (receiving Communion during the Easter season) presupposes being in a state of grace. Many parishes offer extra Confession times and communal penance services during Lent." }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "Discover How Your Faith Life Is" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and receive a personalized assessment of your Catholic journey." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz-intro", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function GuardianAngels() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Guardian Angels: Our Heavenly Companions and Protectors | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Discover the Catholic teaching on guardian angels — who they are, what they do, and how to develop a deeper relationship with your personal heavenly protector." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "guardian angels, catholic guardian angel, angel of god prayer, feast of guardian angels, heavenly protector, catholic angels" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/guardian-angels/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz-intro", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog/page/1/", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Guardian Angels" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog/page/1/", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Devotions" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "April 12, 2026"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "7 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "Guardian Angels: Our Heavenly Companions and Protectors" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "You are never alone. From the moment of your birth, God has assigned a powerful heavenly spirit to watch over you, guide you, and accompany you on your journey to eternal life." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Shield, { className: "w-24 h-24 text-blue-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The existence of guardian angels is one of the most consoling truths of the Catholic faith. In a world filled with dangers — both visible and invisible — God in His infinite love has not left us defenseless. Each human soul, from the moment of conception, is entrusted to a personal angelic guardian whose mission is to protect, guide, and intercede for that soul until the moment of death." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "What Does the Church Teach About Guardian Angels?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `The Catechism of the Catholic Church states clearly: "From its beginning until death, human life is surrounded by their watchful care and intercession. Beside each believer stands an angel as protector and shepherd leading him to life" (CCC 336). This is not a pious legend or a children's story — it is a defined teaching of the Church, rooted in Scripture and Tradition.` }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `Jesus Himself affirmed the reality of guardian angels when He said: "See that you do not despise one of these little ones, for I say to you that their angels in heaven always look upon the face of my heavenly Father" (Matthew 18:10). This passage reveals two profound truths: every person has an angel, and that angel has direct access to God's presence.` }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "How strong is your devotion to your Guardian Angel?",
              description: "Take our Catholic life assessment and discover how to deepen your relationship with your heavenly protector."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Mission of Guardian Angels" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "St. Thomas Aquinas, the great Doctor of the Church, devoted extensive reflection to the nature and mission of angels. He taught that guardian angels serve us in four principal ways:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Protection from physical harm:" }),
              ' Angels can intervene in the physical world to protect us from accidents, dangers, and evil. The Psalms speak of angels bearing us up "lest we dash our foot against a stone" (Psalm 91:12).'
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Illumination of the intellect:" }),
              " Angels can inspire good thoughts, clarify our understanding, and help us recognize the right path when we face difficult decisions."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Intercession before God:" }),
              " Our guardian angel presents our prayers and good works before the throne of God. The Book of Revelation shows angels offering the prayers of the saints like incense before God (Revelation 8:3-4)."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Accompaniment at death:" }),
              ' At the moment of death, our guardian angel accompanies our soul before the judgment seat of God. This is why the Church prays: "May the angels lead you into paradise."'
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Guardian Angels in Scripture" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'The Bible is filled with accounts of angelic protection and guidance. In the Acts of the Apostles, when Peter was miraculously freed from prison, the early Christians initially thought it was "his angel" who had come to the door (Acts 12:15) — showing that belief in personal guardian angels was common in the early Church.' }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The Book of Tobit presents the archangel Raphael accompanying Tobias on a dangerous journey, protecting him from harm and guiding him to his destiny. This narrative is a beautiful illustration of how God uses angels as instruments of His providential care for His children." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `Psalm 91, one of the most beloved psalms, is entirely dedicated to the protection of God's angels: "For he will command his angels concerning you to guard you in all your ways; they will lift you up in their hands, so that you will not strike your foot against a stone" (Psalm 91:11-12).` }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Nine Choirs of Angels" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Catholic tradition, drawing on Scripture and the writings of Pseudo-Dionysius the Areopagite, recognizes nine choirs (orders) of angels arranged in three hierarchies:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "First Hierarchy:" }),
              " Seraphim, Cherubim, Thrones — closest to God"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Second Hierarchy:" }),
              " Dominions, Virtues, Powers — governing the cosmos"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Third Hierarchy:" }),
              " Principalities, Archangels, Angels — ministering to humanity"
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Guardian angels belong to the lowest choir — simply called "Angels" — but this does not diminish their dignity or power. They are mighty spiritual beings whose entire existence is oriented toward God and the service of the souls entrusted to them.' }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "How to Develop Devotion to Your Guardian Angel" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Many Catholics neglect their guardian angel, treating this devotion as something for children. But the saints — including St. Padre Pio, St. Francis de Sales, and St. John Bosco — had profound, adult relationships with their guardian angels. Here are practical ways to cultivate this devotion:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Pray the Guardian Angel Prayer daily:" }),
              ` "Angel of God, my guardian dear, to whom God's love commits me here, ever this day be at my side, to light and guard, to rule and guide. Amen." Pray it morning and evening.`
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Consult your angel before important decisions:" }),
              " Ask your guardian angel to enlighten your mind and protect you from deception."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Send your angel on missions:" }),
              " St. John Bosco would send his guardian angel to prepare the hearts of people he was about to meet. You can do the same."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Thank your angel:" }),
              " At the end of each day, thank your guardian angel for the protections and inspirations you may not even have noticed."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Observe the Feast of the Guardian Angels:" }),
              " October 2nd is the liturgical feast. Attend Mass and make it a day of special gratitude."
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "St. Padre Pio and His Guardian Angel" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Perhaps no modern saint had a more vivid relationship with his guardian angel than St. Padre Pio of Pietrelcina. He spoke of his guardian angel as a constant companion and friend. He would send his angel to deliver messages to people far away, and he claimed to recognize when someone's guardian angel was present." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Padre Pio once wrote: "How consoling it is to know that near us there is a spirit who, from the cradle to the tomb, does not leave us for an instant, not even when we dare to sin." He encouraged his spiritual children to cultivate a tender, personal relationship with their guardian angel, treating him as a true friend and companion.' }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"How consoling it is to know that near us there is a spirit who, from the cradle to the tomb, does not leave us for an instant."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— St. Padre Pio" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Make yourself familiar with the angels, and behold them frequently in spirit; for without being seen, they are present with you."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— St. Francis de Sales" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "guardian-angels" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          { question: "Does everyone have a guardian angel?", answer: "Yes. The Church teaches that every human being has a guardian angel assigned by God from birth. Jesus said: 'See that you do not despise one of these little ones, for I say to you that their angels in heaven always look upon the face of my heavenly Father' (Matthew 18:10)." },
          { question: "What do guardian angels do?", answer: "Guardian angels protect us from physical and spiritual harm, inspire good thoughts, present our prayers to God, and accompany us at the moment of death. St. Thomas Aquinas taught that angels can influence our imagination and senses to guide us toward good." },
          { question: "Can I communicate with my guardian angel?", answer: "Yes, through prayer. The traditional Guardian Angel Prayer ('Angel of God, my guardian dear...') is a beautiful way to invoke your angel's protection. You can also simply speak to your angel in your own words, asking for guidance, protection, and intercession." },
          { question: "When is the Feast of the Guardian Angels?", answer: "The Feast of the Guardian Angels is celebrated on October 2nd. The Feast of the Archangels Michael, Gabriel, and Raphael is September 29th (Michaelmas). October is traditionally a month of special devotion to the angels." },
          { question: "Are guardian angels the same as the archangels Michael, Gabriel, and Raphael?", answer: "No. Michael, Gabriel, and Raphael are archangels — a higher order of angels with specific missions in salvation history. Guardian angels are personal angels assigned to each human being. The Church recognizes nine choirs of angels in the heavenly hierarchy." }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "Discover How Your Faith Life Is" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and receive a personalized assessment of your Catholic journey." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz-intro", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function MeaningOfCrucifix() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "The History and Meaning of the Crucifix | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Understand why the crucifix is the central symbol of Catholic faith. Learn about its history, symbolism, and the importance of having it in our homes." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "meaning of crucifix, difference between cross and crucifix, why Catholics use crucifix, crucifix at home, symbol of the cross, passion of Christ, INRI meaning, Catholic cross, having crucifix in bedroom, sign of the cross" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/meaning-of-crucifix/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Meaning of the Crucifix" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Devotions" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "December 29, 2024"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "6 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "The History and Meaning of the Crucifix" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "The crucifix is not just an ornament, but the summary of our faith. Discover why this symbol is so central to Catholic life." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Church, { className: "w-24 h-24 text-violet-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `To the world, the cross is foolishness or scandal; to us Catholics, it is the sign of victory and the supreme proof of God's love. The crucifix (the cross with the image of Jesus) constantly reminds us of the price paid for our salvation and Jesus' invitation: "Whoever wants to follow me, take up your cross and follow me."` }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "Do you live the mystery of the Cross?",
              description: "The crucifix is the summary of our faith and God's love. Take our quiz and reflect on how you have been carrying your own cross in following Jesus Christ."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The History of the Crucifix" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'The cross was originally a Roman instrument of execution — one of the most shameful and painful deaths imaginable. For the first Christians, displaying a crucifix would have seemed scandalous. St. Paul acknowledged this: "We preach Christ crucified: a stumbling block to Jews and foolishness to Gentiles" (1 Corinthians 1:23).' }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `The earliest known depiction of the crucifixion dates to around 200 AD — a graffito mocking a Christian, showing a man worshipping a crucified figure with a donkey's head. This "Alexamenos graffito" reveals that early Christians were indeed known for venerating the cross, even when it was considered absurd.` }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "After Emperor Constantine's Edict of Milan (313 AD) legalized Christianity, the cross became the central symbol of the faith. The discovery of the True Cross by St. Helena (Constantine's mother) in Jerusalem around 326 AD further elevated the cross's significance. By the 6th century, crucifixes — crosses with the corpus (body of Christ) — became common in churches and homes." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Difference Between Cross and Crucifix" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "While the empty cross emphasizes the Resurrection, the crucifix emphasizes the Sacrifice. Both are valid and beautiful symbols, but they accent different aspects of the same mystery. The Catholic Church uses the crucifix to keep us focused on Christ's Passion, because there is no Resurrection without Calvary. Looking at the crucifix is looking at the Love that gave itself for us." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Many Protestant traditions prefer the empty cross, emphasizing that Christ is risen and no longer on the cross. Catholics agree that Christ is risen — but we also believe that His sacrifice is perpetually present in the Eucharist, and the crucifix keeps that reality before our eyes." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Rich Symbolism of the Crucifix" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "INRI (Iesus Nazarenus Rex Iudaeorum):" }),
              ' "Jesus of Nazareth, King of the Jews" — the title Pilate placed on the cross, written in Hebrew, Latin, and Greek. What Pilate meant as mockery, God turned into proclamation of truth.'
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "The Open Arms:" }),
              ` Christ's outstretched arms symbolize God's desire to embrace all humanity. "When I am lifted up from the earth, I will draw all people to myself" (John 12:32).`
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "The Five Wounds:" }),
              ` The wounds in Christ's hands, feet, and side are signs of our healing. "By His wounds we were healed" (Isaiah 53:5). The Risen Christ retained these wounds as eternal signs of His love.`
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "The Vertical and Horizontal:" }),
              " The vertical beam represents the union between Heaven and earth; the horizontal beam represents the reconciliation of all humanity. The cross is the meeting point of God and man."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "The Crown of Thorns:" }),
              " The mockery of earthly kingship becomes the crown of the true King. Christ reigns from the cross."
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Famous Crucifixes in Catholic History" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Throughout history, certain crucifixes have become particularly beloved and associated with miracles and conversions:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "The San Damiano Cross:" }),
              ' The Byzantine-style crucifix before which St. Francis of Assisi heard Christ say "Rebuild my Church." It depicts Christ in glory even on the cross, surrounded by witnesses to the Resurrection.'
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "The Miraculous Crucifix of Limpias (Spain):" }),
              " In 1919, thousands of witnesses reported seeing the eyes of the crucified Christ move and expressions of agony on His face."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "The Crucifix of St. John of God:" }),
              " The crucifix that spoke to St. John of God, calling him to serve the sick and poor."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "The Crucifix of St. Thomas More:" }),
              " The crucifix More held as he was executed for refusing to deny the Pope's authority."
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Why Have a Crucifix at Home?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Having a crucifix in a prominent place in the home sanctifies the environment and serves multiple spiritual purposes:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsx("li", { children: "It is a constant reminder of God's love and the price of our salvation" }),
            /* @__PURE__ */ jsx("li", { children: "It serves as a focal point for family prayer" }),
            /* @__PURE__ */ jsx("li", { children: "It provides consolation in times of suffering — we can look at Christ and know He understands our pain" }),
            /* @__PURE__ */ jsx("li", { children: "It is a sign that this house belongs to Christ and is under His protection" }),
            /* @__PURE__ */ jsx("li", { children: "It witnesses to visitors that this is a Christian home" }),
            /* @__PURE__ */ jsx("li", { children: "A blessed crucifix is a sacramental that can protect against evil" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Ave Crux, Spes Unica" (Hail the Cross, our only hope).' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Motto of the Order of the Holy Cross" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"The cross is the school of love."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— St. Maximilian Kolbe" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "meaning-of-crucifix" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "What is the difference between a cross and a crucifix?",
            answer: "A cross is an empty cross, symbolizing the Resurrection. A crucifix displays the body of Christ (corpus), emphasizing His sacrifice on Calvary. Catholics traditionally use crucifixes to keep the reality of Christ's suffering and redemption before their eyes."
          },
          {
            question: "Why do Catholics display crucifixes in their homes?",
            answer: "A crucifix in the home is a constant reminder of God's love, Christ's sacrifice, and our redemption. It sanctifies the home, invites God's blessing, and serves as a focal point for family prayer. The Church encourages having a crucifix in every room."
          },
          {
            question: "What does INRI mean on the crucifix?",
            answer: "INRI is an abbreviation of the Latin 'Iesus Nazarenus Rex Iudaeorum' — 'Jesus of Nazareth, King of the Jews.' This was the inscription Pontius Pilate ordered placed on the cross (John 19:19-20), written in Hebrew, Latin, and Greek."
          },
          {
            question: "Is it superstitious to wear a crucifix?",
            answer: "No. Wearing a crucifix is a sacramental — a sacred sign that disposes us to receive grace and sanctifies various occasions in life. It is an act of faith and a public witness to Christianity. The Church encourages wearing blessed crucifixes and religious medals."
          },
          {
            question: "What is the San Damiano Cross?",
            answer: "The San Damiano Cross is the Byzantine-style crucifix before which St. Francis of Assisi prayed when he heard Christ say 'Rebuild my Church.' It depicts Christ in glory even on the cross, surrounded by witnesses to the Resurrection. It is one of the most beloved crucifixes in Catholic history."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "Do you live the mystery of the Cross?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and reflect on how you have been carrying your own cross in following Jesus and how to strengthen your faith in times of trial." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function Jubilee2025Legacy() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "The Legacy of Jubilee 2025: How to Continue Being a Pilgrim of Hope? | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "The Holy Year of 2025 has ended, but its mission continues. Discover how to keep the flame of hope alive in your Christian life in 2026." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "jubilee 2025 what was it, pilgrims of hope, holy year 2025, holy door, pope francis jubilee, jubilee indulgence, how to live after jubilee, fruits of holy year, Christian hope, Catholic church 2026" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/jubilee-2025-legacy/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Jubilee 2025 Legacy" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Jubilee 2025" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "January 1, 2026"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "8 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "The Legacy of Jubilee 2025: How to Continue Being a Pilgrim of Hope?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "The Holy Doors have closed, but the Christian's heart must remain open. Discover how to carry the fruits of the Holy Year into your daily life in 2026." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Sun, { className: "w-24 h-24 text-yellow-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'The Jubilee of 2025, under the theme "Pilgrims of Hope," was a time of extraordinary grace for the universal Church. Millions of faithful crossed the Holy Doors, sought reconciliation, and renewed their faith. However, the end of the jubilee liturgical year does not mark the end of our journey, but the beginning of a new stage of witness.' }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "Are you a pilgrim of hope?",
              description: "The Jubilee of 2025 left a call for each of us. Take our quiz and discover how to keep the flame of hope alive and the fruits of the Holy Year in your life."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "What Was the Jubilee of 2025?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `The 2025 Jubilee was the 27th Ordinary Jubilee in the history of the Catholic Church, proclaimed by Pope Francis with the theme "Pilgrims of Hope." It officially opened on Christmas Eve 2024 with the opening of the Holy Door at St. Peter's Basilica in Rome and concluded on January 6, 2026, the Feast of the Epiphany.` }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `The theme "Pilgrims of Hope" was chosen to respond to the profound crises of our time — wars, climate change, economic inequality, and the spiritual emptiness of modern culture. Pope Francis called Catholics worldwide to be witnesses of hope: not a naive optimism, but the theological virtue rooted in Christ's Resurrection.` }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Holy Doors: A Symbol of Mercy" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The Holy Doors at the four major basilicas in Rome — St. Peter's, St. John Lateran, St. Mary Major, and St. Paul Outside the Walls — were opened for the first time since 2000. Passing through a Holy Door while in a state of grace, having received Confession and Communion, and praying for the Pope's intentions, gains a plenary indulgence." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "For the first time in Jubilee history, Pope Francis also opened a Holy Door at a prison — the Rebibbia Prison in Rome — symbolizing that God's mercy reaches even those society has cast aside. This gesture embodied the Jubilee's call to encounter Christ in the marginalized." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "What Does It Mean to Be a Pilgrim in 2026?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Being a pilgrim is not limited to traveling to Rome or to a shrine. It is an interior attitude of one who knows they have no permanent dwelling here. St. Augustine wrote: "Our heart is restless until it rests in You." The pilgrim is someone who is always moving toward God, never settling for mediocrity, always seeking the face of Christ.' }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'In 2026, we are called to be "pilgrims in daily life" — bringing the light of hope to our workplaces, schools, and families. The Jubilee may have ended, but the mission continues.' }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "5 Fruits of the Jubilee to Cultivate Now" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "The Joy of Forgiveness:" }),
              " The experience of Plenary Indulgence should make us more merciful to others. If God has forgiven us so much, how can we withhold forgiveness from our brothers and sisters?"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "The Centrality of Hope:" }),
              " In a world marked by uncertainties, the Christian is the one who points to the anchor that is Christ. Hope is not wishful thinking — it is certainty rooted in the Resurrection."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "The Culture of Encounter:" }),
              " The Jubilee taught us to walk together. This synodality must continue in our parishes — listening to one another, welcoming the stranger, building bridges rather than walls."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Care for Creation:" }),
              " The Jubilee's ecological dimension, rooted in Laudato Si', calls us to live more simply and care for our common home as an act of justice and love."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Missionary Outreach:" }),
              " The Jubilee renewed our sense of mission. Every Catholic is called to be an evangelist — not through aggressive proselytism, but through the witness of a joyful, transformed life."
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "How to Keep the Flame Burning" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "For the Jubilee not to be just a distant memory, spiritual discipline is needed. Here are concrete practices to carry the Jubilee spirit into 2026 and beyond:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsx("li", { children: "Go to Confession monthly — maintain the grace of reconciliation you received during the Jubilee" }),
            /* @__PURE__ */ jsx("li", { children: "Perform one work of mercy each week — corporal or spiritual" }),
            /* @__PURE__ */ jsx("li", { children: "Pray for peace daily — the Jubilee's call to peace is more urgent than ever" }),
            /* @__PURE__ */ jsx("li", { children: "Read one papal document from the Jubilee period — Laudate Deum, Laudato Si', or Fratelli Tutti" }),
            /* @__PURE__ */ jsx("li", { children: "Make a local pilgrimage — visit your diocesan shrine or cathedral with intention and prayer" }),
            /* @__PURE__ */ jsx("li", { children: "Invite someone back to the Church — the Jubilee's spirit of welcome extends to those who have drifted away" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: `"Hope does not disappoint, because God's love has been poured into our hearts."` }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Romans 5:5" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"A Christian is a person who has hope — not because they are optimistic by nature, but because they believe in the Resurrection."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Pope Benedict XVI" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "jubilee-2025-legacy" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "What is a Catholic Jubilee Year?",
            answer: "A Jubilee Year is a special year of grace proclaimed by the Pope, rooted in the Old Testament tradition (Leviticus 25). It is a time of special indulgences, pilgrimage, reconciliation, and renewal. Ordinary Jubilees occur every 25 years; Extraordinary Jubilees can be called at any time."
          },
          {
            question: "What was the theme of the 2025 Jubilee?",
            answer: "The 2025 Jubilee was proclaimed by Pope Francis with the theme 'Pilgrims of Hope.' It called Catholics worldwide to renew their hope in Christ amid the challenges of the modern world, emphasizing reconciliation, care for the poor, and ecological conversion."
          },
          {
            question: "What is a Holy Door and why is it significant?",
            answer: "Holy Doors are special doors at the four major basilicas in Rome (St. Peter's, St. John Lateran, St. Mary Major, St. Paul Outside the Walls) opened only during Jubilee Years. Passing through them while in a state of grace and fulfilling certain conditions gains a plenary indulgence."
          },
          {
            question: "How can I continue living the Jubilee spirit after 2025?",
            answer: "Continue the Jubilee spirit through: regular Confession and Communion, works of mercy, prayer for peace, care for the poor, ecological responsibility, and maintaining the pilgrim mindset — always journeying toward God. The Jubilee ends, but the call to holiness never does."
          },
          {
            question: "When is the next Catholic Jubilee Year?",
            answer: "Following the 2025 Ordinary Jubilee, the next Ordinary Jubilee would be in 2050. However, the Pope can call an Extraordinary Jubilee at any time for special occasions, as Pope Francis did in 2015-2016 with the Extraordinary Jubilee of Mercy."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "How is your journey of hope?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and discover how you can strengthen your faith and continue living the fruits of the Jubilee in your daily life." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function PlenaryIndulgenceGuide() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Plenary Indulgence: Complete Guide for the Final Days of the Jubilee | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "There's still time! Learn how to obtain plenary indulgence at the closing of Jubilee 2025 and understand the spiritual value of this grace." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "what is plenary indulgence, how to gain indulgence, jubilee 2025, conditions for indulgence, indulgence for souls in purgatory, holy door, Catholic holy year, forgiveness of penalties, partial and plenary indulgence, jubilee works of mercy" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/plenary-indulgence-guide/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Plenary Indulgence Guide" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Formation" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "December 28, 2025"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "10 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "Plenary Indulgence: Complete Guide for the Final Days of the Jubilee" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "The Church opens its treasures of grace in a special way during the Jubilee. Understand how to receive total remission of the penalties due for your sins." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-24 h-24 text-blue-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Many Catholics confuse Indulgence with Confession. While Confession forgives the guilt of sin, plenary indulgence erases the "temporal punishment" — the mark or disorder that sin leaves on our soul. In Jubilee 2025, Pope Francis facilitated access to this immense grace.' }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "Do you want to start a new life today?",
              description: "The Church opens its treasures of mercy for you. Take our quiz and understand how to obtain plenary indulgence, cleansing the marks of sin and renewing your spiritual journey."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The 4 Usual Conditions" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "For any plenary indulgence, four fundamental acts are necessary:" }),
          /* @__PURE__ */ jsxs("ol", { className: "list-decimal list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Sacramental Confession:" }),
              " Can be done a few days before or after."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Eucharistic Communion:" }),
              " Preferably on the day the indulgenced work is performed."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Prayer for the Pope's Intentions:" }),
              " Usually an Our Father and a Hail Mary."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Total Detachment from Sin:" }),
              " Including venial sins."
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Specific Works of Jubilee 2025" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "In addition to the above conditions, the faithful must perform one of the following works:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Pilgrimage:" }),
              " Visit one of the Papal Basilicas in Rome or the Cathedral of your diocese."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Pious Visit:" }),
              " Spend time in adoration or prayer in designated jubilee churches."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Works of Mercy:" }),
              " Visit the sick, prisoners, or lonely elderly."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Penance:" }),
              " Abstain from distractions (social media, TV) or fast for a day."
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Why Seek Indulgence Now?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'The Jubilee is a "favorable time." It is the opportunity to start the year 2026 with a completely renewed soul, as if we had just come out of Baptism. Additionally, you can apply the indulgence for a soul in Purgatory.' }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: `"Indulgence is the manifestation of the fullness of the Father's mercy, who comes to meet everyone with His face of love."` }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Pope Francis" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "plenary-indulgence-guide" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "What is a plenary indulgence?",
            answer: "A plenary indulgence is the full remission of the temporal punishment due to sins already forgiven. It does not forgive sins (that requires Confession) but removes the punishment that remains after forgiveness. It can be applied to oneself or to a soul in Purgatory."
          },
          {
            question: "What are the conditions for gaining a plenary indulgence?",
            answer: "To gain a plenary indulgence you must: (1) be in a state of grace, (2) perform the prescribed indulgenced work, (3) receive sacramental Confession within 20 days, (4) receive Holy Communion, and (5) pray for the Pope's intentions. All attachment to sin must be absent."
          },
          {
            question: "What is the difference between a plenary and partial indulgence?",
            answer: "A plenary indulgence removes all temporal punishment due to sin. A partial indulgence removes some of the temporal punishment. The Church grants partial indulgences for many pious acts, prayers, and works of mercy performed with a contrite heart."
          },
          {
            question: "Can I gain a plenary indulgence for a deceased person?",
            answer: "Yes. Indulgences can be applied to the souls in Purgatory by way of suffrage (intercession), not by jurisdiction. The Church encourages gaining indulgences for the Holy Souls, especially during November and on All Souls' Day (November 2)."
          },
          {
            question: "Are indulgences the same as buying forgiveness?",
            answer: "No. The Church has never taught that indulgences can be purchased. The abuses of selling indulgences in the Middle Ages were condemned by the Council of Trent. An indulgence is a spiritual benefit gained through prayer and good works, never through money."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "Are you in a state of grace?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our conscience quiz and prepare your heart to receive the graces that God has reserved for you at the end of this Holy Year." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function ChurchChangesPost2025() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "What Changes in the Church After the Holy Year of 2025? | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Analysis of perspectives and changes in the Catholic Church for 2026 after the closing of the Jubilee. What to expect from the pontificate and dioceses." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "Catholic church 2026, changes in church, pope francis, synodality, future of Catholic church, synod, laudato si, fratelli tutti, new bishops, digital Catholic evangelization" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/church-changes-post-2025/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Church Changes Post-2025" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Current Affairs" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "January 5, 2026"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "9 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "What Changes in the Church After the Holy Year of 2025?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "The closing of the Jubilee is not a period, but a new breath for the mission. Understand the trends and challenges of the Church for 2026." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Church, { className: "w-24 h-24 text-violet-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'With the closing of the Holy Doors in January 2026, the Catholic Church enters a new cycle. The Jubilee of 2025 left a deep mark on global spirituality, but now the challenge is the "pastoral of hope" — how to transform the enthusiasm of pilgrimages into lasting Christian commitment.' }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "What is your place in the Church?",
              description: "The Church is always renewing itself and you are part of this mission. Take our quiz and discover how your gifts can help build a more vibrant and missionary community."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Church's Unchanging Foundation" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Before discussing changes, it is essential to affirm what never changes: Catholic doctrine on faith and morals is immutable. The deposit of faith — Scripture and Sacred Tradition — cannot be altered. What develops is the Church's understanding and expression of doctrine (doctrinal development), not the doctrine itself. Disciplines can change; dogmas cannot." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `Christ promised: "The gates of hell shall not prevail against it" (Matthew 16:18). This is not a guarantee of human perfection in the Church, but of divine protection of the truth. Catholics can navigate change with confidence because the Church's foundation is Christ, not any particular pope, bishop, or theological trend.` }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Consolidation of Synodality" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'One of the great legacies of the 2021-2025 period was the Synod on Synodality — a global consultation process that asked Catholics worldwide: "How is God calling us to be a more missionary, listening Church?" In 2026, we will see the practical application of synodal guidelines in parishes: greater participation of the laity, active listening, and a more missionary and less bureaucratic Church.' }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Synodality does not mean changing doctrine by popular vote. It means the Church listening more carefully to the Holy Spirit speaking through all the faithful — clergy, religious, and laity — while maintaining the hierarchical structure Christ established." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Focus on Integral Ecology and Social Justice" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Pope Francis will continue to promote the themes of Laudato Si' (2015) and Fratelli Tutti (2020). The Church's engagement with ecological and social justice issues is not a departure from the Gospel but an expression of it. Care for creation is care for the poor — those most affected by environmental degradation are always the most vulnerable." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Digital Evangelization and New Media" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The Church will continue to explore digital frontiers. Blessed Carlo Acutis, beatified in 2020 and canonized in 2025, is the patron of the internet — a sign that the Church embraces digital culture as a field of evangelization. Catholic podcasts, YouTube channels, social media accounts, and apps are reaching millions who would never enter a church building." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "The challenge is maintaining depth and authenticity in a medium that rewards superficiality. The most effective Catholic digital evangelists are those who combine genuine holiness with digital fluency — not those who simply replicate secular content with a religious veneer." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "How Catholics Should Respond to Change" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Change in the Church can be unsettling, especially for those who love the tradition. Here is a framework for navigating change with faith and charity:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Distinguish doctrine from discipline:" }),
              " Doctrines (what we believe) are unchangeable. Disciplines (how we practice) can change. Know the difference."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Stay close to the sacraments:" }),
              " Whatever changes in the Church's external life, the sacraments remain the channels of grace. Mass, Confession, and Eucharistic Adoration are your anchors."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Study the faith:" }),
              " The Catechism of the Catholic Church is your reference point. Know what the Church actually teaches, not what media reports say it teaches."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Maintain unity:" }),
              " Disagreement with specific decisions is possible while maintaining communion with the Church. Schism — breaking from the Church — is never the answer."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Pray for the Pope and bishops:" }),
              " They carry an enormous burden. Pray for them daily, even when you disagree with them."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"The Church does not grow by proselytism, but by attraction."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Benedict XVI, frequently quoted by Pope Francis" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"The gates of hell shall not prevail against it."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Jesus Christ (Matthew 16:18)" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "church-changes-post-2025" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "What major changes has the Catholic Church made in recent years?",
            answer: "Recent years have seen: the publication of Fiducia Supplicans (2023) on blessings, ongoing synodal processes, continued liturgical discussions about the Traditional Latin Mass, increased emphasis on synodality, and the Church's response to global challenges like climate change and migration."
          },
          {
            question: "What is the Synod on Synodality?",
            answer: "The Synod on Synodality (2021-2024) was a global consultation process initiated by Pope Francis to discern how the Church can better listen to all its members. It emphasized participation, communion, and mission, while reaffirming core Catholic doctrine."
          },
          {
            question: "Has the Church changed any doctrines recently?",
            answer: "No. Catholic doctrine on faith and morals is unchangeable. What develops is the Church's understanding and expression of doctrine (doctrinal development), not the doctrine itself. Disciplines (like liturgical practices) can change; dogmas cannot."
          },
          {
            question: "What is the future of the Traditional Latin Mass?",
            answer: "Pope Francis's Traditionis Custodes (2021) restricted the Traditional Latin Mass, requiring bishop approval. This remains a point of discussion. The Church continues to navigate the balance between liturgical unity and pastoral care for communities attached to the traditional form."
          },
          {
            question: "How should Catholics respond to changes in the Church?",
            answer: "With faith, prayer, and charity. Catholics are called to trust in Christ's promise that 'the gates of hell shall not prevail' against the Church (Matthew 16:18). Stay close to the sacraments, study the faith, and maintain unity with your bishop and the Pope."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "How do you fit into the Church's mission?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Discover your gifts and how you can contribute to the renewal of your parish community through our vocational and talents quiz." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function PrayersOfHope2026() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Prayers of Hope for Times of Crisis in 2026 | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Find consolation and strength in traditional and contemporary Catholic prayers focused on the virtue of hope to face the challenges of 2026." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "prayers of hope, prayer for difficult times, prayer of abandonment, psalm 23, saint teresa of avila nothing disturb you, prayer in times of crisis, how to have hope, Catholic prayer, trust in God, pope francis prayer" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/prayers-of-hope-2026/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Prayers of Hope" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Prayers" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "January 10, 2026"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "6 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "Prayers of Hope for Times of Crisis in 2026" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "When strength seems exhausted, prayer is our refuge. Discover powerful prayers to renew your trust in God." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(Heart, { className: "w-24 h-24 text-rose-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Hope is a theological virtue, which means it is a gift from God. In times of personal, family, or social crisis, hope prevents us from falling into despair. Praying does not necessarily change the external situation immediately, but it changes our heart to face the storm with serenity." }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "How is your trust in God?",
              description: "Hope is the anchor of the soul amid storms. Take our quiz and discover which prayer method can strengthen your faith in times of difficulty."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "What is Christian Hope?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Christian hope is not optimism — it is not the belief that things will necessarily get better in this life. It is the theological virtue by which we desire the Kingdom of Heaven and eternal life as our happiness, placing our trust in Christ's promises and relying not on our own strength, but on the help of the Holy Spirit (CCC 1817)." }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `St. Paul wrote: "Hope does not disappoint, because God's love has been poured into our hearts through the Holy Spirit who has been given to us" (Romans 5:5). This hope is anchored not in circumstances but in the Resurrection of Christ — the definitive proof that God's love is stronger than death, suffering, and evil.` }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Prayer of Abandonment (St. Charles de Foucauld)" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-4 italic bg-surface p-6 rounded-xl border border-border", children: '"Father, I abandon myself into Your hands; do with me what You will. Whatever You may do, I thank You: I am ready for all, I accept all. Let only Your will be done in me, and in all Your creatures. I wish no more than this, O Lord. Into Your hands I commend my soul: I offer it to You with all the love of my heart, for I love You, Lord, and so need to give myself, to surrender myself into Your hands without reserve, and with boundless confidence, for You are my Father. Amen."' }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "This prayer, composed by Blessed Charles de Foucauld (1858-1916), is one of the most powerful prayers of surrender in the Catholic tradition. It expresses total trust in God's providence — not passive resignation, but active, loving abandonment to the Father's will." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Memorare" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-4 italic bg-surface p-6 rounded-xl border border-border", children: '"Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thine intercession was left unaided. Inspired by this confidence, I fly unto thee, O Virgin of virgins, my mother; to thee do I come, before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen."' }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `The Memorare, attributed to St. Bernard of Clairvaux, is a prayer of confident intercession to Our Lady. It has been prayed by countless Catholics in moments of crisis, and its bold confidence — "never was it known that anyone... was left unaided" — is a powerful expression of hope through Mary's intercession.` }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Psalm 23: The Lord is My Shepherd" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-4 italic bg-surface p-6 rounded-xl border border-border", children: `"The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul. He leads me in paths of righteousness for his name's sake. Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me."` }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Psalm 23 is perhaps the most beloved prayer in all of Scripture. It has comforted the dying, the grieving, the imprisoned, and the suffering throughout human history. Praying it slowly, meditating on each image — the green pastures, the still waters, the valley of the shadow of death — brings profound peace." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Divine Mercy Chaplet" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `Revealed by Jesus to St. Faustina Kowalska in the 1930s, the Divine Mercy Chaplet is prayed on rosary beads and focuses on God's infinite mercy. Jesus promised: "Whoever will recite it will receive great mercy at the hour of death." It is especially powerful when prayed at 3 PM — the "Hour of Mercy" — the hour of Christ's death on the cross.` }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'The chaplet begins: "You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us."' }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Practical Tips for Praying in Crisis" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Constancy over feeling:" }),
              " Pray even when you don't feel like it. Prayer is a commitment, not just a feeling. The saints prayed through years of spiritual dryness."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Sincerity:" }),
              " Tell God exactly how you feel — your anger, fear, confusion, and doubt. He already knows, but He wants to hear it from you. The Psalms model this radical honesty."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Silence:" }),
              ` After speaking, be silent. Let God's peace fill the emptiness of your soul. "Be still and know that I am God" (Psalm 46:10).`
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "The Rosary:" }),
              " In times of crisis, the Rosary is a lifeline. Its repetitive rhythm calms the anxious mind while the mysteries anchor us in the story of salvation."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Eucharistic Adoration:" }),
              " Simply sitting before the Blessed Sacrament — even for 15 minutes — can bring a peace that surpasses understanding."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Let nothing disturb you, let nothing frighten you, all things pass away: God never changes. Patience obtains all things; whoever has God lacks nothing: God alone suffices."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— St. Teresa of Ávila" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Philippians 4:6-7" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "prayers-of-hope-2026" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "What does the Catholic Church teach about hope?",
            answer: "Hope is one of the three theological virtues (along with faith and charity). The Catechism defines it as 'the theological virtue by which we desire the Kingdom of Heaven and eternal life as our happiness, placing our trust in Christ's promises and relying not on our own strength, but on the help of the Holy Spirit' (CCC 1817)."
          },
          {
            question: "What prayers are most powerful in times of crisis?",
            answer: "The most powerful prayers in times of crisis include: the Rosary, the Divine Mercy Chaplet, the Litany of the Saints, the Prayer to St. Michael, the Memorare, and the Anima Christi. Regular Mass attendance and Confession are also essential spiritual weapons."
          },
          {
            question: "How do I pray when I feel God is not listening?",
            answer: "Persevere in prayer even in dryness. Jesus taught the parable of the persistent widow (Luke 18:1-8) to show we must pray without losing heart. Spiritual dryness is not a sign of God's absence but often a sign of spiritual growth. Trust His timing, not your feelings."
          },
          {
            question: "What is the Divine Mercy Chaplet?",
            answer: "The Divine Mercy Chaplet is a prayer revealed by Jesus to St. Faustina Kowalska in the 1930s. It is prayed on rosary beads and focuses on God's infinite mercy. Jesus promised extraordinary graces to those who pray it, especially at the 3 PM 'Hour of Mercy.'"
          },
          {
            question: "How can prayer help with anxiety and fear?",
            answer: "St. Paul wrote: 'Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts' (Philippians 4:6-7). Prayer redirects our focus from problems to God's power."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "How is your dialogue with God?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and discover which prayer method best suits your current life moment and how to strengthen your intimacy with the Father." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function LocalPilgrimage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "How to Organize a Local Pilgrimage in Your Diocese | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Practical and spiritual guide to organizing pilgrimages to local shrines and jubilee churches, strengthening community faith in 2026." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "how to organize pilgrimage, Catholic pilgrimage, shrines, religious tourism Catholic, pilgrimage, how to make pilgrimage, jubilee churches, walking pilgrimage, pilgrimage route, Marian shrines" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/local-pilgrimage/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Local Pilgrimage" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Devotions" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "January 15, 2026"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "8 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "How to Organize a Local Pilgrimage in Your Diocese" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "You don't need to go to Rome to be a pilgrim. Discover how to organize a journey of faith to the shrines in your region." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-emerald-100 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(MapPin, { className: "w-24 h-24 text-emerald-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Pilgrimage is a metaphor for Christian life: we are on our way to the Heavenly Homeland. Organizing a local pilgrimage is an excellent way to unite the community, rediscover the history of faith in your region, and obtain jubilee graces without great costs." }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "Are you ready to walk with faith?",
              description: "Pilgrimage is about leaving your comfort zone to encounter God. Take our quiz and discover which type of spiritual journey best suits your current life moment."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "1. Define the Objective and Destination" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Choose a place that has spiritual significance: the diocesan Cathedral, a Marian shrine, or the church of a local patron saint. The objective should be clear: is it a journey of penance, thanksgiving, or petition for graces?" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "2. Spiritual Planning" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "A pilgrimage is not a tourist outing. Prepare a prayer itinerary for the journey:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Opening Prayer:" }),
              " Blessing of sending by the parish priest."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Holy Rosary:" }),
              " Meditated during the walk or journey."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Songs:" }),
              " Hymns that help elevate the soul."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Confession and Mass:" }),
              " The high point of arrival at the destination."
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "3. Logistics and Organization" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Think about practical details so nothing disrupts the moment of faith: transportation (bus or walking), food, support points, and pilgrim kit (prayer booklet, water, identification)." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "4. Post-Pilgrimage" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Upon return, set aside a moment to share the fruits of the journey. How did this experience change the participants' vision of faith? What concrete commitments does the community assume from now on?" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"To pilgrimage is to leave your comfort zone to encounter God and your brothers and sisters."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— Christian Popular Wisdom" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "local-pilgrimage" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "What is a Catholic pilgrimage?",
            answer: "A pilgrimage is a journey to a sacred place for spiritual purposes — prayer, penance, thanksgiving, or seeking healing. It is an ancient Christian practice that symbolizes our earthly journey toward Heaven. The pilgrim leaves behind the familiar to seek God in a special way."
          },
          {
            question: "What are the most important Catholic pilgrimage sites in the United States?",
            answer: "Major US pilgrimage sites include: the National Shrine of the Immaculate Conception (Washington D.C.), the Shrine of Our Lady of Guadalupe (La Crosse, WI), the National Shrine of St. Elizabeth Ann Seton (Emmitsburg, MD), the Shrine of St. Kateri Tekakwitha (NY), and the San Xavier del Bac Mission (Tucson, AZ)."
          },
          {
            question: "Do I need to travel far to make a pilgrimage?",
            answer: "No. A pilgrimage can be to your local cathedral, a nearby shrine, or even a special church in your diocese. What matters is the spirit of pilgrimage — intentional travel with prayer, sacrifice, and openness to God's grace. Even walking to your parish church with intention can be a mini-pilgrimage."
          },
          {
            question: "What should I do to prepare for a pilgrimage?",
            answer: "Prepare spiritually through prayer and Confession before departing. Research the history and significance of the site. Set a clear spiritual intention. Bring a rosary, prayer book, and journal. Travel with a spirit of openness and detachment. Many pilgrims fast on the day of travel."
          },
          {
            question: "What are the spiritual benefits of pilgrimage?",
            answer: "Pilgrimage offers: physical sacrifice that unites us to Christ's suffering, removal from daily distractions, encounter with the communion of saints, special graces attached to holy places, renewal of faith, and often the opportunity to gain indulgences. Many pilgrims report profound conversions and healings."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "What is your pilgrim profile?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and discover which types of spiritual experiences and pilgrimage destinations best match your current faith moment." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function FaithMentalHealth() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Faith and Mental Health: How Catholic Spirituality Helps Overcome Anxiety? | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Discover how Catholic faith and prayer life can be powerful allies in combating anxiety and seeking emotional balance." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "faith and anxiety, prayer for anxiety, Catholic with anxiety, spirituality and mental health, how to have inner peace, faith helps depression" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/blog/faith-mental-health/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-accent", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Faith and Mental Health" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Mental Health" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              "January 20, 2026"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              "12 min read"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "Faith and Mental Health: How Catholic Spirituality Helps Overcome Anxiety?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "In a hyperconnected and anxious world, the Catholic tradition offers ancient treasures for the balance of mind and soul." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10", children: /* @__PURE__ */ jsx(HeartPulse, { className: "w-24 h-24 text-rose-400", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Anxiety in the Modern World: A Challenge for Christians" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "We live in the age of haste. The demand for productivity, constant comparison on social media, and uncertainties about the future have created an epidemic of anxiety. For Catholics, this challenge is not only psychological but also spiritual. After all, how can we trust in Divine Providence when our heart is restless?" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-text mt-6 mb-3", children: "What does the Bible say about excessive worry?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: 'Jesus was clear: "Do not worry about tomorrow" (Mt 6:34). However, He does not ignore our pains. The biblical invitation is not to deny problems, but to change focus: from the problem to the Provider.' }),
          /* @__PURE__ */ jsx(
            QuizCTA,
            {
              title: "How is your inner peace today?",
              description: "Faith is a balm for the tired mind. Take our quiz and discover how Catholic spirituality and abandonment to Providence can help you overcome anxiety and find balance."
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "The Power of Abandonment to Divine Providence" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: `The most powerful antidote against anxiety in the Catholic tradition is "Holy Abandonment." Saints like St. Francis de Sales and St. Thérèse of Lisieux taught us that real peace comes from surrendering control of our lives into God's hands.` }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-text mt-6 mb-3", children: 'The prayer of surrender: "Jesus, I trust in You"' }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "Repeating simple ejaculations in moments of crisis helps anchor the mind in eternal truth. Trust is not a feeling, but a decision of the will supported by grace." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "Catholic Practices that Promote Inner Peace" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-text space-y-2 mb-6", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "The Holy Rosary:" }),
              " Its repetitive and meditative structure acts as a natural stress regulator, focusing the mind on the mysteries of Christ."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Eucharistic Adoration:" }),
              " Silence before the Blessed Sacrament is the place where God speaks to the restless heart, reordering our priorities."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Examination of Conscience:" }),
              " At the end of the day, reviewing graces and failures helps unload the weight of the day and sleep under the Father's gaze."
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "When Faith and Psychology Meet" }),
          /* @__PURE__ */ jsx("p", { className: "text-text leading-relaxed mb-6", children: "It is essential to understand that seeking psychological help is not a lack of faith. God acts through science and health professionals. An integrated approach — caring for body, mind, and spirit — is the most effective path to healing and balance in 2026." }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-text italic text-center", children: '"Let nothing disturb you, let nothing frighten you... God alone suffices."' }),
            /* @__PURE__ */ jsx("p", { className: "text-text-muted text-center mt-2", children: "— St. Teresa of Ávila" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "faith-mental-health" }),
        /* @__PURE__ */ jsx(BlogFAQ, { faqs: [
          {
            question: "Does the Catholic Church recognize mental illness?",
            answer: "Yes. The Church fully recognizes mental illness as a real medical condition. The Catechism acknowledges that psychological factors can diminish moral responsibility. Catholics are encouraged to seek professional mental health care alongside spiritual support — faith and medicine are complementary, not opposed."
          },
          {
            question: "Can prayer and faith help with anxiety and depression?",
            answer: "Research consistently shows that religious practice correlates with better mental health outcomes. Prayer, community, meaning, and hope are powerful psychological resources. However, faith is not a substitute for professional treatment when needed. Many saints suffered from depression and anxiety — it is not a sign of weak faith."
          },
          {
            question: "What does the Church say about suicide?",
            answer: "The Church teaches that suicide is gravely wrong as it contradicts the natural inclination to preserve life. However, the Catechism also recognizes that 'grave psychological disturbances, anguish, or grave fear' can diminish responsibility (CCC 2282). The Church prays for those who die by suicide and entrusts them to God's mercy."
          },
          {
            question: "Which saints struggled with mental health?",
            answer: "Many saints experienced what we would today recognize as mental health struggles: St. Teresa of Avila described severe depression, St. John of the Cross wrote about the 'dark night of the soul,' St. Thérèse of Lisieux suffered profound spiritual desolation, and Bl. Pier Giorgio Frassati battled anxiety. Their struggles became paths to holiness."
          },
          {
            question: "How can a Catholic parish support members with mental illness?",
            answer: "Parishes can: train volunteers in mental health first aid, create support groups, connect parishioners with Catholic counselors, reduce stigma through preaching and education, offer pastoral care visits, and partner with Catholic Charities mental health services. A welcoming community is itself therapeutic."
          }
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-text mb-4", children: "How is your inner peace today?" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-muted mb-6", children: "Take our quiz and discover how your spiritual life may be influencing your emotional well-being and receive personalized tips." }),
          /* @__PURE__ */ jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "bg-button hover:bg-button-hover text-button-text", children: "Take the Quiz Now" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function TermsOfUse() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Terms of Use | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Read the Terms of Use for Guide Catholic. Understand the rules and guidelines for using our content and services." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/terms/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz-intro", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Terms of Use" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Home"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Legal" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4" }),
              "Updated April 12, 2026"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "Terms of Use" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none text-text", children: [
          /* @__PURE__ */ jsx("p", { className: "leading-relaxed mb-6", children: "Welcome to Guide Catholic. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use. If you do not agree with any part of these terms, please do not use our website." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "1. Acceptance of Terms" }),
          /* @__PURE__ */ jsx("p", { className: "leading-relaxed mb-6", children: "Use of this website constitutes full and unreserved acceptance of all terms and conditions set forth herein. We reserve the right to modify these terms at any time without prior notice. We recommend periodic review of this page." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "2. Intellectual Property" }),
          /* @__PURE__ */ jsx("p", { className: "leading-relaxed mb-6", children: "All content on this website, including texts, graphics, logos, icons, images, and software, is the property of Guide Catholic or its content providers and is protected by applicable copyright laws. Reproduction, distribution, or modification of any content without prior written authorization is strictly prohibited." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "3. Use of Content" }),
          /* @__PURE__ */ jsx("p", { className: "leading-relaxed mb-6", children: "The content of this website is provided for informational and spiritual formation purposes only. You may view, download, and print portions of the content for your personal, non-commercial use, provided you keep intact all copyright notices and other proprietary notices." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "4. Disclaimer of Warranties" }),
          /* @__PURE__ */ jsx("p", { className: "leading-relaxed mb-6", children: "While we strive to provide accurate and up-to-date information, Guide Catholic makes no warranties regarding the accuracy, completeness, or suitability of the information contained on this website. Use of the information is at your own risk. We are not responsible for any direct or indirect damages arising from the use or inability to use this website." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "5. Third-Party Links" }),
          /* @__PURE__ */ jsx("p", { className: "leading-relaxed mb-6", children: "Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those websites and assume no responsibility for them or for any loss or damage that may arise from your use of them." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "6. Privacy" }),
          /* @__PURE__ */ jsxs("p", { className: "leading-relaxed mb-6", children: [
            "Use of this website is also governed by our ",
            /* @__PURE__ */ jsx(Link, { to: "/privacy/", className: "text-accent hover:underline", children: "Privacy Policy" }),
            ", which describes how we collect, use, and protect your personal information."
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "7. Governing Law" }),
          /* @__PURE__ */ jsx("p", { className: "leading-relaxed mb-6", children: "These terms are governed by and construed in accordance with applicable laws. Any dispute arising from these terms will be subject to the exclusive jurisdiction of the competent courts." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "8. Contact" }),
          /* @__PURE__ */ jsxs("p", { className: "leading-relaxed mb-6", children: [
            "If you have any questions about these Terms of Use, please ",
            /* @__PURE__ */ jsx(Link, { to: "/contact/", className: "text-accent hover:underline", children: "contact us" }),
            "."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-12 text-sm text-text-muted italic", children: "Last updated: April 12, 2026" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function PrivacyPolicy() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Privacy Policy | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Read the Privacy Policy for Guide Catholic. Learn how we collect, use, and protect your personal information." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/privacy/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz-intro", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Privacy Policy" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Home"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-text-muted mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium", children: "Legal" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4" }),
              "Updated April 12, 2026"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "Privacy Policy" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none text-text", children: [
          /* @__PURE__ */ jsx("p", { className: "leading-relaxed mb-6", children: "At Guide Catholic, your privacy is extremely important to us. This Privacy Policy describes the types of personal information we collect, how we use it, and the measures we take to protect it." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "1. Information We Collect" }),
          /* @__PURE__ */ jsx("p", { className: "leading-relaxed mb-6", children: "We collect information you voluntarily provide when participating in our quiz or contacting us. This may include your name and quiz responses. We do not require account creation or email registration to use our services." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "2. How We Use Your Information" }),
          /* @__PURE__ */ jsx("p", { className: "leading-relaxed mb-6", children: "The information collected is used to:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-2 mb-6", children: [
            /* @__PURE__ */ jsx("li", { children: "Provide personalized quiz results and spiritual guidance." }),
            /* @__PURE__ */ jsx("li", { children: "Generate your personalized Catholic Life Guide PDF." }),
            /* @__PURE__ */ jsx("li", { children: "Respond to your questions and contact requests." }),
            /* @__PURE__ */ jsx("li", { children: "Improve user experience and website content." })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "3. Data Storage" }),
          /* @__PURE__ */ jsx("p", { className: "leading-relaxed mb-6", children: "Guide Catholic stores quiz data locally in your browser (localStorage). We do not transmit your quiz answers or personal information to external servers. Your data remains on your device and is not shared with third parties." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "4. Third-Party Sharing" }),
          /* @__PURE__ */ jsx("p", { className: "leading-relaxed mb-6", children: "We do not sell, trade, or transfer your personally identifiable information to third parties. We may use trusted third-party services to help operate our website, provided those parties agree to keep this information confidential." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "5. Cookies" }),
          /* @__PURE__ */ jsx("p", { className: "leading-relaxed mb-6", children: "We may use cookies to enhance your browsing experience. Cookies are small files that a website transfers to your device through your browser (if you allow) that enable the website's systems to recognize your browser and remember certain information. You can choose to disable cookies through your browser settings." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "6. Your Rights" }),
          /* @__PURE__ */ jsxs("p", { className: "leading-relaxed mb-6", children: [
            "You have the right to access, correct, or delete your personal information. Since we store data locally in your browser, you can clear your browser's localStorage at any time to remove all stored data. If you have additional questions, please ",
            /* @__PURE__ */ jsx(Link, { to: "/contact/", className: "text-accent hover:underline", children: "contact us" }),
            "."
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "7. Children's Privacy" }),
          /* @__PURE__ */ jsx("p", { className: "leading-relaxed mb-6", children: "Our website is intended for general audiences. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will promptly remove it." }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mt-10 mb-4", children: "8. Changes to This Policy" }),
          /* @__PURE__ */ jsx("p", { className: "leading-relaxed mb-6", children: "We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with a revised update date. We encourage you to review this policy periodically." }),
          /* @__PURE__ */ jsx("p", { className: "mt-12 text-sm text-text-muted italic", children: "Last updated: April 12, 2026" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Contact | Guide Catholic" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Get in touch with the Guide Catholic team. We are here to hear your suggestions, questions, and faith sharing." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://guidecatholic.com/contact/" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-primary text-button-text py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(Cross, { className: "w-5 h-5 text-button-text" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-bold", children: "Guide Catholic" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/quiz-intro", children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Take the Quiz" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-background-muted/50 py-3", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-text-muted", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-accent", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-text", children: "Contact" })
      ] }) }) }),
      /* @__PURE__ */ jsx("article", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Home"
        ] }),
        /* @__PURE__ */ jsxs("header", { className: "mb-12", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6", children: "Get in Touch" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-text-muted leading-relaxed", children: "Have a question, suggestion, or would you like to share something with us? We are here to listen." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-text mb-6", children: "Contact Information" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Mail, { className: "w-6 h-6 text-accent" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-text", children: "Email" }),
                  /* @__PURE__ */ jsx("p", { className: "text-text-muted", children: "contact@guidecatholic.com" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Instagram, { className: "w-6 h-6 text-accent" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-text", children: "Instagram" }),
                  /* @__PURE__ */ jsx("p", { className: "text-text-muted", children: "@guidecatholic" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Youtube, { className: "w-6 h-6 text-accent" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-text", children: "YouTube" }),
                  /* @__PURE__ */ jsx("p", { className: "text-text-muted", children: "Guide Catholic" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-12 p-6 bg-surface rounded-2xl border border-border/50", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-bold text-text mb-2", children: "Response Time" }),
              /* @__PURE__ */ jsx("p", { className: "text-text-muted text-sm", children: "Our team responds to messages Monday through Friday. We aim to reply to all inquiries within 48 business hours." })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-surface p-8 rounded-2xl border border-border/50 shadow-sm", children: /* @__PURE__ */ jsxs("form", { className: "space-y-4", onSubmit: (e) => e.preventDefault(), children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-text mb-1", children: "Full Name" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  id: "name",
                  className: "w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none",
                  placeholder: "Your name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-text mb-1", children: "Email" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  id: "email",
                  className: "w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none",
                  placeholder: "your@email.com"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "subject", className: "block text-sm font-medium text-text mb-1", children: "Subject" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  id: "subject",
                  className: "w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "question", children: "Question" }),
                    /* @__PURE__ */ jsx("option", { value: "suggestion", children: "Suggestion" }),
                    /* @__PURE__ */ jsx("option", { value: "partnership", children: "Partnership" }),
                    /* @__PURE__ */ jsx("option", { value: "other", children: "Other" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-text mb-1", children: "Message" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  id: "message",
                  rows: 4,
                  className: "w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none resize-none",
                  placeholder: "How can we help?"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Button, { className: "w-full bg-accent hover:bg-accent/90 text-button-text font-semibold gap-2 py-6", children: [
              /* @__PURE__ */ jsx(Send, { className: "w-4 h-4" }),
              "Send Message"
            ] })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background-muted", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "mb-4 text-4xl font-bold", children: "404" }),
    /* @__PURE__ */ jsx("p", { className: "mb-4 text-xl text-text-muted", children: "Oops! Page not found" }),
    /* @__PURE__ */ jsx("a", { href: "/", className: "text-accent underline hover:text-accent/90", children: "Return to Home" })
  ] }) });
};
const queryClient = new QueryClient();
const App = () => /* @__PURE__ */ jsx(HelmetProvider, { children: /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [
  /* @__PURE__ */ jsx(Toaster$1, {}),
  /* @__PURE__ */ jsx(Toaster, {}),
  /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Index, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/quiz-intro", element: /* @__PURE__ */ jsx(QuizIntro, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/quiz", element: /* @__PURE__ */ jsx(QuizPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/checkout", element: /* @__PURE__ */ jsx(CheckoutPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/result", element: /* @__PURE__ */ jsx(ResultadoPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog", element: /* @__PURE__ */ jsx(BlogPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/page/:page", element: /* @__PURE__ */ jsx(BlogPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/termos", element: /* @__PURE__ */ jsx(TermsOfUse, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/terms", element: /* @__PURE__ */ jsx(TermsOfUse, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/privacidade", element: /* @__PURE__ */ jsx(PrivacyPolicy, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/privacy", element: /* @__PURE__ */ jsx(PrivacyPolicy, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/contato", element: /* @__PURE__ */ jsx(Contact, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(Contact, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/how-to-pray-rosary/", element: /* @__PURE__ */ jsx(HowToPrayRosary, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/seven-sacraments/", element: /* @__PURE__ */ jsx(SevenSacraments, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/importance-confession/", element: /* @__PURE__ */ jsx(ImportanceOfConfession, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/patron-saints/", element: /* @__PURE__ */ jsx(PatronSaints, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/fasting-abstinence/", element: /* @__PURE__ */ jsx(FastingAndAbstinence, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/sunday-mass/", element: /* @__PURE__ */ jsx(SundayMass, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/prayer-life/", element: /* @__PURE__ */ jsx(PrayerLife, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/meaning-mass/", element: /* @__PURE__ */ jsx(MeaningOfMass, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/examination-conscience/", element: /* @__PURE__ */ jsx(ExaminationOfConscience, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/virgin-mary/", element: /* @__PURE__ */ jsx(VirginMary, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/gifts-holy-spirit/", element: /* @__PURE__ */ jsx(GiftsOfHolySpirit, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/lectio-divina/", element: /* @__PURE__ */ jsx(LectioDivina, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/chastity-modern-world/", element: /* @__PURE__ */ jsx(ChastityModernWorld, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/social-doctrine/", element: /* @__PURE__ */ jsx(SocialDoctrine, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/vocational-discernment/", element: /* @__PURE__ */ jsx(VocationalDiscernment, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/eucharist-real-presence/", element: /* @__PURE__ */ jsx(EucharistRealPresence, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/eucharistic-adoration/", element: /* @__PURE__ */ jsx(EucharisticAdoration, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/what-is-purgatory/", element: /* @__PURE__ */ jsx(WhatIsPurgatory, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/how-to-live-lent/", element: /* @__PURE__ */ jsx(HowToLiveLent, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/guardian-angels/", element: /* @__PURE__ */ jsx(GuardianAngels, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/meaning-of-crucifix/", element: /* @__PURE__ */ jsx(MeaningOfCrucifix, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/jubilee-2025-legacy/", element: /* @__PURE__ */ jsx(Jubilee2025Legacy, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/plenary-indulgence-guide/", element: /* @__PURE__ */ jsx(PlenaryIndulgenceGuide, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/church-changes-post-2025/", element: /* @__PURE__ */ jsx(ChurchChangesPost2025, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/prayers-of-hope-2026/", element: /* @__PURE__ */ jsx(PrayersOfHope2026, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/local-pilgrimage/", element: /* @__PURE__ */ jsx(LocalPilgrimage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/faith-mental-health/", element: /* @__PURE__ */ jsx(FaithMentalHealth, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) })
  ] }) })
] }) }) });
const createRoot = ViteReactSSG(/* @__PURE__ */ jsx(App, {}));
export {
  createRoot
};
