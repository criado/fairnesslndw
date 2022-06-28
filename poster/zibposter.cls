%%% Create a ZIBPoster with LaTeX
%%% (Template by Franziska Schloesser, ZIB 20. May 2019)
%%% ------------------------------------------------------------------------------------------------
%%% LaTeX class file for ZIB poster.
%%% ------------------------------------------------------------------------------------------------

\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{zibposter}[2019/05/20 ZIB poster class]

\RequirePackage{xcolor,graphicx}
\RequirePackage{calc}


\RequirePackage{zibcolors}

%% pass on options (tikzposter ignores global options)
\DeclareOption{25pt}{
  \PassOptionsToClass{\CurrentOption}{tikzposter}
}
\DeclareOption{20pt}{
  \PassOptionsToClass{\CurrentOption}{tikzposter}
}
\DeclareOption{17pt}{
  \PassOptionsToClass{\CurrentOption}{tikzposter}
}
\DeclareOption{14pt}{
  \PassOptionsToClass{\CurrentOption}{tikzposter}
}
\DeclareOption{12pt}{
  \PassOptionsToClass{\CurrentOption}{tikzposter}
}
\DeclareOption{b1paper}{
  \PassOptionsToClass{\CurrentOption}{tikzposter}
  \PassOptionsToClass{innermargin=20mm}{tikzposter}
  \def\zibposter@papersize{b1paper}
}
\DeclareOption{a0paper}{
  \PassOptionsToClass{\CurrentOption}{tikzposter}
  \PassOptionsToClass{innermargin=28mm}{tikzposter}
    \def\zibposter@papersize{a0paper}
}
\DeclareOption{fontsans}{
  \PassOptionsToPackage{\CurrentOption}{zibposter}
}
\DeclareOption{fontserif}{
  \PassOptionsToPackage{\CurrentOption}{zibposter}
}

\DeclareOption{portrait}{
  \PassOptionsToClass{\CurrentOption}{tikzposter}
}
\DeclareOption{landscape}{
  \PassOptionsToClass{\CurrentOption}{tikzposter}
}

\DeclareOption{draft}{
  \AtEndDocument{\guideline}
}

\DeclareOption{final}{
  \AtEndOfClass{\renewcommand{\guideline}{}}
}

% define color schemes

% 'colorscheme1': similar to legacy 'grey' color scheme.
\DeclareOption{colorscheme1}{
  \definecolor{ZIBbg}{named}{white}
  \definecolor{ZIBbgfg}{HTML}{d5d7d4}
  \definecolor{ZIBfg}{named}{ZIBtextGray}
  \definecolor{ZIBtitlefg}{named}{ZIBtextGray}
  \definecolor{ZIBboxtitlebg}{named}{ZIBprimary}
  \definecolor{ZIBboxtitle}{named}{white}
  \renewcommand{\ziblogo}{graphics/logos/ZIB-logo}
  \zibposter@logodistantbackgroundtrue
}

% 'colorscheme2': same as colorscheme1 with box titles in primary color.
\DeclareOption{colorscheme2}{
  \definecolor{ZIBbg}{HTML}{cdcfcc}
  \definecolor{ZIBbgfg}{HTML}{b0b1b0}
  \definecolor{ZIBfg}{named}{ZIBtextGray}
  \definecolor{ZIBtitlefg}{named}{ZIBtextGray}
  \definecolor{ZIBboxtitlebg}{named}{ZIBprimary}
  \definecolor{ZIBboxtitle}{named}{white}
  \renewcommand{\ziblogo}{graphics/logos/ZIB-logo}
  \zibposter@logodistantbackgroundtrue
}

\newcommand{\ziblogo}{graphics/logos/ZIB-logo-white}
\newif\ifzibposter@logodistantbackground
\zibposter@logodistantbackgroundtrue

\DeclareOption{fontsans}{
  \renewcommand{\familydefault}{\sfdefault}
}

\DeclareOption{fontserif}{
  \renewcommand{\familydefault}{\rmdefault}
}

\DeclareOption{sansmath}{
  \AtEndOfPackage{\sansmath}
}

%% Execute default options
\ExecuteOptions{primary,colorscheme1}
%\ExecuteOptions{fontsans}
\ExecuteOptions{25pt,b1paper,portrait}

%% Process given options
\ProcessOptions\relax

%% Load base
\LoadClass[margin=0mm, blockverticalspace=10mm, colspace=10mm, subcolspace=10mm]{tikzposter}

\RequirePackage{fontawesome}

\RequirePackage[sfdefault]{carlito}

% times new roman clone
\RequirePackage{mathptmx}

\RequirePackage{sansmath}


% HACK: tikzposter v2.0 doesn't support paper sizes it doesn't know
% like b1paper.  Allow at least setting an arbitrary paper size via
% \geometry{...} *after* this class has been loaded.
% Recompute documented internal variables
% \TP@visibletextheight, \TP@visibletextwidth
% without relying on undocumented ones (like \TP@innermargin).
\newlength\zibposter@doublemargin
\setlength{\zibposter@doublemargin}{%
  \textheight -\TP@visibletextheight}
\AtBeginDocument{%
  \setlength{\TP@visibletextheight}{%
    \textheight -\zibposter@doublemargin}%
  \setlength{\TP@visibletextwidth}{%
    \textwidth -\zibposter@doublemargin}}

\RequirePackage{geometry}
\geometry{\zibposter@papersize}

\usetikzlibrary{intersections}

%% Add a strut to ensure uniform block title height.
\RequirePackage{etoolbox}
\let\zibposter@orig@block\block
\newcommand{\zibposter@block}[3][]{%
  \ifstrempty{#2}{\zibposter@orig@block[{#1}]{}{#3}}%
  {\zibposter@orig@block[{#1}]{{\normalsize\strut}#2}{#3}}}
\let\block\zibposter@block

%% No heading for bibliography, small font
\let\zibposter@orig@thebibliography\thebibliography
\newcommand{\zibposter@thebibliography}{\def\section##1##{\@gobble}%
  \small\zibposter@orig@thebibliography}
\let\thebibliography\zibposter@thebibliography

%% Don't scale title
% Handle (unlikely) # in argument of \title properly.
\renewcommand{\title}[1]{\edef\@title{\unexpanded{#1}}}

%% Additional packages and commands.
\RequirePackage{enumitem}

\AtBeginDocument{%
  \path (bottomleft |- {(0, -\TP@visibletextheight/2)})
    coordinate (zibposter@textbottomleft);}

\newcommand{\guideline}{%
    \draw[red, line width=1mm] (zibposter@textbottomleft)
    -- (topright |- zibposter@textbottomleft);%
}
\newcommand{\zibposter@titlelogos}{}
\newcommand{\titlelogos}{\forcsvlist{\listadd\zibposter@titlelogos}}
\newcommand{\zibposter@logos}{\ignorespaces\forlistloop{\space%
    \includegraphics[height=3.17cm]}{\zibposter@titlelogos}}
\newcommand{\mathpluslogo}{\titlelogos{graphics/logos/mathplus}}
% Redefine itemize environment
\setlist[itemize]{leftmargin=1.5em,itemsep=0pt,topsep=0pt,partopsep=0pt, parsep=0pt}
\renewcommand\labelitemi{\faCaretRight\hspace{.8em}}

% assign named colors required by tikzposter
\definecolorstyle{ZIBstyle}{
}{
  % Background Colors
  \colorlet{backgroundcolor}{ZIBbg}
  \colorlet{framecolor}{ZIBfg}
  % Title Colors
  \colorlet{titlefgcolor}{ZIBtitlefg}
  % Title background color is currently ignored.
  \colorlet{titlebgcolor}{-ZIBtitlefg}
  % Block Colors
  \colorlet{blocktitlebgcolor}{ZIBboxtitlebg}
  \colorlet{blocktitlefgcolor}{ZIBboxtitle}
  \colorlet{blockbodybgcolor}{white}
  \colorlet{blockbodyfgcolor}{black}
  % Innerblock Colors
  \colorlet{innerblocktitlebgcolor}{white}
  \colorlet{innerblocktitlefgcolor}{black}
  \colorlet{innerblockbodybgcolor}{white}
  \colorlet{innerblockbodyfgcolor}{black}
  % Note colors
  \colorlet{notefgcolor}{black}
  \colorlet{notebgcolor}{white}
  \colorlet{noteframecolor}{ZIBboxtitlebg}
}

\tikzposterlatexaffectionproofoff %shows small comment on how the poster was made at bottom of poster

\newlength{\zibposter@tmpwidth}
\newlength{\zibposter@tmpheight}
\definetitlestyle{zibposter}{%
  % TODO: Having many parameters depend on page orientation is not
  % readable/maintainable.  But perhaps they should be a function of
  % something else than page orientation.
  width=\ifdim\textwidth>\textheight.955\else.94\fi\textwidth,
  roundedcorners=0,
  linewidth=0pt, innersep=0cm,
  % TODO: Spacing around title should be stretchable to adjust to
  % actual content, but tikzposter doesn't support it.
  % Page orientation is probably a not too robust substitute.
  titletotopverticalspace=\ifdim\textwidth>\textheight
  .025\else.035\fi\textwidth,
  titletoblockverticalspace=\ifdim\textwidth>\textheight
  .02\else.033\fi\textwidth}{\@ifundefined{backgroundgraphic}{%
  \node[above right, inner sep=0pt] at (zibposter@textbottomleft)
  {% Draw background curve here, as the size of title area is
   % known here but not in the background style.
   % maximum size curve can reach right, ideally to not overlap with
   % logos.
    \setlength{\zibposter@tmpwidth}{.75\paperwidth}%
    % Height of area curve should fill
    \setlength{\zibposter@tmpheight}{\paperheight
      -.5\zibposter@doublemargin}%
    \ifdim\zibposter@tmpheight<\zibposter@tmpwidth
      % Enough space for whole curve
      \resizebox{!}{\zibposter@tmpheight}{\zibposter@curve{ZIBbgfg}}
    \else
      % Not enough space, place curve below title area and cut it.
      \setlength{\zibposter@tmpheight}{\titleposbottom
        + \TP@visibletextheight/2 % diff of positions
        - \TP@titletoblockverticalspace}% distance between title
                                        % bottom and first box top
      \resizebox{!}{\zibposter@tmpheight}{%
        \zibposter@curveclipped{ZIBbgfg}%
        {\zibposter@tmpwidth}{\zibposter@tmpheight}}
    \fi
  };}{}}

% Draw curve of ZIB logo of color #2; no margins, with bottom edge on
% baseline.  #1 is additional drawing commands like clipping
\newcommand{\zibposter@curve}[2][]{%
  \begin{tikzpicture}[x=10pt, y=10pt]
  #1
  \path[fill={#2}]
    (107.624, 118.23211)
    -- (121.002, 118.23211)
    .. controls (119.314, 52.86991) and (65.716, 0.19805)
    .. (0, 0)
    -- (0, 13.36911)
    .. controls (58.344, 13.56721) and (105.94, 60.24301)
    .. cycle;
  \end{tikzpicture}}

% Draw curve of color #3 clipped to fit into #1 wide and #2 rectangle.
% TODO: This is noticably a bit slow.
\newcommand{\zibposter@curveclipped}[3]{\zibposter@curve[{%
  \begin{pgfinterruptboundingbox}
    \path[name path=lower curve] (121.002, 118.23211) .. controls
    (119.314, 52.86991) and (65.716, 0.19805) .. (0, 0);
    % The diagonal of the area curve should fill
    \path[name path=diagonal] (121.002, 118.23211) --
    ++(xyz cs:x=-{#2/#3}*200, y=-200);
    \tikzset{name intersections={of=lower curve and diagonal,
        sort by=diagonal,
        total=\zibposter@tmp}}
    \global\let\zibposter@tmp\zibposter@tmp
  \end{pgfinterruptboundingbox}
  \ifnum\zibposter@tmp>1
    \clip (intersection-2) rectangle (121.002, 118.23211);
    \fi}]{#1}}

\newsavebox{\zibposter@tmpbox}
\newlength{\zibposter@titlewidth}
% Minimum distance between title and ZIB logo
\providecommand{\zibposterlogosep}{1cm}

\settitle{
  \begin{minipage}{\linewidth}
    \Large
    \color{titlefgcolor}
    \savebox{\zibposter@tmpbox}{%
      \includegraphics[width=12cm]{\ziblogo}}
    \setlength{\zibposter@titlewidth}{\linewidth
      - \wd\zibposter@tmpbox
      - \zibposterlogosep}
    \hbox{%
      \parbox[b]{\zibposter@titlewidth}{
        \sffamily
        \raggedright \bfseries
        % Is there a better way selecting a relative font size?
        % \Huge is too small.
        % The factors are chosen to produce 88pt font size and 105pt
        % baselinsekip with the default document font size.
        \normalsize
        \fontsize{\dimexpr \f@size\p@ * 1100/311\relax}{\dimexpr
          \f@baselineskip * 7/2\relax}
        \selectfont
        \penalty1 %
        \@title
      }%
      % FIXME: There should be a cleaner way to put \parbox into a box
      % register.
      \setbox0\lastbox
      % Test on available space is somewhat arbitrary.
      \ifdim \dimexpr \ht0 + 2\baselineskip \relax
             > \ht\zibposter@tmpbox\relax
        \parbox[t]{\zibposter@titlewidth}{\unvbox0}
        % Little space available besides logo, move further title
        % elements below the logo.
        \aftergroup\zibposter@authorship
      \else
        \parbox[t]{\zibposter@titlewidth}{%
          \prevdepth\dp0 \unvbox0 %
          % Don't leave large space besides logo, fill it with
          % following title elements.
          \zibposter@authorship
        }
      \fi
      \parbox[t]{\wd\zibposter@tmpbox}{\penalty1 %
      \usebox{\zibposter@tmpbox}% no distant background as of now
     }
   }%
 \end{minipage}}

\newcommand{\zibposter@authorship}{%
  \message{authors}%
      \@author
      \vspace*{.4em}
      {\color{framecolor}
      \hrule height.720mm}
      \vspace*{.3em}
    \sbox{\zibposter@tmpbox}{\zibposter@logos}
    \mbox{\parbox{\linewidth - \wd\zibposter@tmpbox}{%
        \@institute}%
      \parbox{\wd\zibposter@tmpbox}{%
      \ifzibposter@logodistantbackground
        \usebox{\zibposter@tmpbox}%
      \else
        \colorbox{white}{\usebox{\zibposter@tmpbox}}%
      \fi
      }%
    }}
\definebackgroundstyle{zibposter}{%
  \path[fill=backgroundcolor] (bottomleft) rectangle (topright);
  \@ifundefined{backgroundgraphic}{}{%
    \node[above right, inner sep=0pt] at (bottomleft) {\includegraphics[height=\paperheight,
      width=\paperwidth]{\backgroundgraphic}};
}}

\defineblockstyle{zibposter}{
    titlewidthscale=1, bodywidthscale=1, titlecenter, titleoffsetx=0pt, titleoffsety=0pt, bodyoffsetx=0pt, bodyoffsety=0pt,
    bodyverticalshift=0pt, roundedcorners=0, linewidth=1pt, titleinnersep=4.7mm, bodyinnersep=9mm
  }{
  \begin{scope}[line width=\blocklinewidth, rounded corners=\blockroundedcorners]
    \ifBlockHasTitle %
       \draw[color=framecolor, fill=blocktitlebgcolor] (blockbody.south west) rectangle (blocktitle.north east);
    \fi
    \draw[color=framecolor, fill=blockbodybgcolor] (blockbody.south west) rectangle (blockbody.north east);
  \end{scope}
}

% -- PREDEFINED THEMES ---------------------- %
% Choose LAYOUT for \usetheme:  Default, Basic, Rays, Simple, Envelope, Wave, Board, Autumn, Desert,
\usetheme{Default}
\usetitlestyle{zibposter}
\useblockstyle{zibposter}
\usebackgroundstyle{zibposter}
\useinnerblockstyle{TornOut}
\usecolorstyle{ZIBstyle}

% needs to be the last command
\endinput
