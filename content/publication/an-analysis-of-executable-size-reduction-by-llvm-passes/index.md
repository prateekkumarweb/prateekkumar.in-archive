---
title: "An analysis of executable size reduction by LLVM passes"
authors:
  - Shalini Jain
  - Utpal Bora
  - Prateek Kumar
  - Vaibhav B. Sinha
  - Suresh Purini
  - Ramakrishna Upadrasta
date: "2019-06-03"
doi: "10.1007/s40012-019-00248-5"

# Schedule page publish date (NOT publication's date).
publishDate: "2019-06-03"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*CSI Transactions on ICT*"
publication_short: "*CSIT*"

abstract: The formidable increase in the number of smaller and smarter embedded devices has compelled programmers to develop more and more specialized application programs for these systems. These resource intensive programs that have to be executed on limited memory systems make a strong case for compiler optimizations that reduce the executable size of programs. Standard compilers (like LLVM) offer an out-of-the-box -Oz optimization option—just a series of compiler optimization passes—that is specifically targeted for the reduction of the generated executable size. In this paper, we aim to analyze the effects of optimizations of LLVM compiler on the reduction of executable size. Specifically, we take the size of the executable as a metric and attempt to divide the -Oz series into logical groups and study their individual effects; while also study the effect of their combinations. Our preliminary study over SPEC CPU 2017 benchmarks gives us an insight into the comparative effect of the groups of passes on the executable size. Our work has potential to enable the user to tailor a custom series of passes so as to obtain the desired executable size.

tags:
  - Compilers
  - Compiler optimizations
  - Code size optimizations
featured: true

# links:
# - name: Custom Link
#   url: http://example.org
url_pdf: https://link.springer.com/article/10.1007%2Fs40012-019-00248-5

# url_code: '#'
# url_dataset: '#'
# url_poster: '#'
# url_project: ''
# url_slides: ''
# url_source: '#'
# url_video: '#'

projects:
  - analysis-llvm-passes-binary-size
---
