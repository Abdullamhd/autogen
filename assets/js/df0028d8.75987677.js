"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8993],{87235:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(85893),r=t(11151);const o={sidebar_label:"agent_optimizer",title:"agentchat.contrib.agent_optimizer"},s=void 0,c={id:"reference/agentchat/contrib/agent_optimizer",title:"agentchat.contrib.agent_optimizer",description:"execute\\_func",source:"@site/docs/reference/agentchat/contrib/agent_optimizer.md",sourceDirName:"reference/agentchat/contrib",slug:"/reference/agentchat/contrib/agent_optimizer",permalink:"/autogen/docs/reference/agentchat/contrib/agent_optimizer",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/contrib/agent_optimizer.md",tags:[],version:"current",frontMatter:{sidebar_label:"agent_optimizer",title:"agentchat.contrib.agent_optimizer"},sidebar:"referenceSideBar",previous:{title:"agent_builder",permalink:"/autogen/docs/reference/agentchat/contrib/agent_builder"},next:{title:"compressible_agent",permalink:"/autogen/docs/reference/agentchat/contrib/compressible_agent"}},a={},l=[{value:"execute_func",id:"execute_func",level:3},{value:"AgentOptimizer",id:"agentoptimizer",level:2},{value:"__init__",id:"__init__",level:3},{value:"record_one_conversation",id:"record_one_conversation",level:3},{value:"step",id:"step",level:3},{value:"reset_optimizer",id:"reset_optimizer",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"execute_func",children:"execute_func"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def execute_func(name, packages, code, **args)\n"})}),"\n",(0,i.jsx)(n.p,{children:"The wrapper for generated functions."}),"\n",(0,i.jsx)(n.h2,{id:"agentoptimizer",children:"AgentOptimizer"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class AgentOptimizer()\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Base class for optimizing AutoGen agents. Specifically, it is used to optimize the functions used in the agent.\nMore information could be found in the following paper: ",(0,i.jsx)(n.a,{href:"https://arxiv.org/abs/2402.11359",children:"https://arxiv.org/abs/2402.11359"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def __init__(max_actions_per_step: int,\n             config_file_or_env: Optional[str] = "OAI_CONFIG_LIST",\n             config_file_location: Optional[str] = "",\n             optimizer_model: Optional[str] = "gpt-4-1106-preview")\n'})}),"\n",(0,i.jsx)(n.p,{children:"(These APIs are experimental and may change in the future.)"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"max_actions_per_step"})," ",(0,i.jsx)(n.em,{children:"int"})," - the maximum number of actions that the optimizer can take in one step."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"config_file_or_env"})," - path or environment of the OpenAI api configs."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"config_file_location"})," - the location of the OpenAI config file."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"optimizer_model"})," - the model used for the optimizer."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"record_one_conversation",children:"record_one_conversation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def record_one_conversation(conversation_history: List[Dict],\n                            is_satisfied: bool = None)\n"})}),"\n",(0,i.jsx)(n.p,{children:"record one conversation history."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"conversation_history"})," ",(0,i.jsx)(n.em,{children:"List[Dict]"})," - the chat messages of the conversation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"is_satisfied"})," ",(0,i.jsx)(n.em,{children:"bool"})," - whether the user is satisfied with the solution. If it is none, the user will be asked to input the satisfaction."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step",children:"step"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def step()\n"})}),"\n",(0,i.jsxs)(n.p,{children:["One step of training. It will return register_for_llm and register_for_executor at each iteration,\nwhich are subsequently utilized to update the assistant and executor agents, respectively.\nSee example: ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_agentoptimizer.ipynb",children:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_agentoptimizer.ipynb"})]}),"\n",(0,i.jsx)(n.h3,{id:"reset_optimizer",children:"reset_optimizer"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def reset_optimizer()\n"})}),"\n",(0,i.jsx)(n.p,{children:"reset the optimizer."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var i=t(67294);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);