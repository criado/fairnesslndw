\ProvidesClass{postermathplus}[2019/10/26 R2020/10/23
^^JLaTeX document class postermathplus]
%------------------
\RequirePackage{ifthen}
  \newboolean{BMS}
  \newboolean{affiliation}
  \newboolean{projectnumber}
  \newboolean{cooperationpartner}
%------------------
\newcommand{\printAAorEF}{%
  \color{magenta}\Large 
  If you are presenting a BMS project please set the option \texttt{BMS}.\\[5ex]
  Please set ONE area/field/project option:\\[2ex]
  \begin{tabular}[t]{@{}l@{\qquad}>{\ttfamily}l@{}}
    Application Area or Emerging Field: & AA1, AA2, AA3, AA4, EF1, EF2, EF3, EF4, EF5\\
    Incubator Project: & IN\\
    Transfer Unit: & TrU\\[2ex]
    For Pilot Projects, please add option & PP
  \end{tabular}%
}
\newcommand{\printprojectnumber}{\quad\textcolor{magenta}{Please set project number using \textbackslash projectnumber\{\}}}
\newcommand{\PPstar}{}
%------------------
% Affiliation
\newcommand{\printFUBlogo}{}
\newcommand{\printHUBlogo}{}
\newcommand{\printTUBlogo}{}
\newcommand{\printWIASlogo}{}
\newcommand{\printZIBlogo}{}
\DeclareOption{FUB} {\setboolean{affiliation}{true}\renewcommand{\printFUBlogo} {\footlogosep\raisebox{-1ex}[0pt][0pt]{\includegraphics[height=17ex]{logo-FUB-petrol}}\footlogosep}}
\DeclareOption{HUB} {\setboolean{affiliation}{true}\renewcommand{\printHUBlogo} {\footlogosep\raisebox{-1.5ex}[0pt][0pt]{\includegraphics[height=18ex]{logo-HUB-petrol}}\footlogosep}}
\DeclareOption{TUB} {\setboolean{affiliation}{true}\renewcommand{\printTUBlogo} {\footlogosep\raisebox{-1ex}[0pt][0pt]{\includegraphics[height=15ex]{logo-TUB-petrol}}\footlogosep}}
\DeclareOption{WIAS}{\setboolean{affiliation}{true}\renewcommand{\printWIASlogo}{\footlogosep\raisebox{-1.5ex}[0pt][0pt]{\includegraphics[height=15.5ex]{logo-WIAS-petrol}}\footlogosep}}
\DeclareOption{ZIB} {\setboolean{affiliation}{true}\renewcommand{\printZIBlogo} {\footlogosep\raisebox{-1ex}[0pt][0pt]{\includegraphics[height=14ex]{logo-ZIB-petrol}}\footlogosep}}
%------------------
% Pilot project
\DeclareOption{PP}{\renewcommand{\PPstar}{*}}
%------------------
% AA  EF  TrU  IN
\DeclareOption{AA1}{\renewcommand{\printAAorEF}{AA1\quad Life Sciences\qquad|\quad AA1-\printprojectnumber\PPstar}}
\DeclareOption{AA2}{\renewcommand{\printAAorEF}{AA2\quad Materials, Light, Devices\qquad|\quad AA2-\printprojectnumber\PPstar}}
\DeclareOption{AA3}{\renewcommand{\printAAorEF}{AA3\quad Networks\qquad|\quad AA3-\printprojectnumber\PPstar}}
\DeclareOption{AA4}{\renewcommand{\printAAorEF}{AA4\quad Energy and Markets\qquad|\quad AA4-\printprojectnumber\PPstar}}
\DeclareOption{EF1}{\renewcommand{\printAAorEF}{EF1\quad Extracting Dynamical Laws from Complex Data\qquad|\quad EF1-\printprojectnumber\PPstar}}
\DeclareOption{EF2}{\renewcommand{\printAAorEF}{EF2\quad Digital Shapes\qquad|\quad EF2-\printprojectnumber\PPstar}}
\DeclareOption{EF3}{\renewcommand{\printAAorEF}{EF3\quad Model-based Imaging\qquad|\quad EF3-\printprojectnumber\PPstar}}
\DeclareOption{EF4}{\renewcommand{\printAAorEF}{EF4\quad Particles and Agents\qquad|\quad EF4-\printprojectnumber\PPstar}}
\DeclareOption{EF5}{\renewcommand{\printAAorEF}{EF5\quad Concepts of Change in Historical Processes\qquad|\quad EF5-\printprojectnumber\PPstar}}
\DeclareOption{TrU}{\renewcommand{\printAAorEF}{TrU\quad Transfer Unit\qquad|\quad TrU-\printprojectnumber\PPstar}}
\DeclareOption{IN}{\renewcommand{\printAAorEF}{IN-\printprojectnumber\PPstar}}
%------------------
% Cooperation partner
\newcommand{\printDAIlogo}{}
\newcommand{\printPIKlogo}{}
\DeclareOption{DAI} {\setboolean{cooperationpartner}{true}\renewcommand{\printDAIlogo} {\footlogosep\includegraphics[height=18ex]{logo-DAI-short-petrol}\footlogosep}}
\DeclareOption{PIK} {\setboolean{cooperationpartner}{true}\renewcommand{\printPIKlogo} {\footlogosep\includegraphics[height=15ex]{logo-PIK-petrol}}}
%------------------
\DeclareOption{BMS}{\setboolean{BMS}{true}}
%------------------
\ProcessOptions\relax
\LoadClass[utf8,hyperref={pdfpagelabels=false}]{beamer}
\mode<presentation>

\RequirePackage[orientation=portrait,size=a0,scale=1,debug]{beamerposter}
	\geometry{margin=0.03\paperwidth}
%----
\RequirePackage{calc}
\RequirePackage[sfdefault]{roboto}
\RequirePackage[T1]{fontenc}
\RequirePackage[scaled=.95]{beramono}
\RequirePackage{amssymb}
\RequirePackage{tikz}
	\usetikzlibrary{cd}
\RequirePackage{graphicx}
	\graphicspath{{0-img/}}
\RequirePackage{overpic}
\RequirePackage{ragged2e}
	\AtBeginDocument{\justifying}
 \RequirePackage{caption} 
\RequirePackage{tabularx}
\RequirePackage{booktabs}
%----
\usetheme{mathplus}
\bibliographystyle{MP-abbrv}

\def\projectnumber#1{\def\printprojectnumber{#1}}
\newcommand{\mintabtl}[1]{\begin{tabular}[t]{@{}l@{}}#1\end{tabular}}
