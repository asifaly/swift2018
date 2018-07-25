
// parameters
PRESERVESTATE = 0;
STARTALLOPEN = 0;
USETEXTLINKS = 1;
HIGHLIGHT = 1 ;
ICONPATH = "" ;

// for non-recursive expand all feature
foldersList = new Object ;
foldersList.size = 1 ;

// nodes
foldersTree = gFld("Standards - Category 8", "title.htm", "") ;
foldersTree.oldxID = "US8M" ;
foldersTree.xID = "title.htm" ;
n1 = insFld(foldersTree, gFld("Introduction", "ac.htm#genac", "")) ;
n1.oldxID = "a2" ;
n1.xID = "ac.htm" ;
n2 = insDoc(n1, gLnk("R", "Summary of Changes", "ac.htm#genacb", "")) ;
n2.oldxID = "a3" ;
n2.xID = "ac.htm" ;
n3 = insDoc(foldersTree, gLnk("R", "Category 8 Message Types", "ad.htm#genad", "")) ;
n3.oldxID = "a4" ;
n3.xID = "ad.htm" ;
n4 = insDoc(foldersTree, gLnk("R", "Euro - Impact on Category Message Standards", "ae.htm#genae", "")) ;
n4.oldxID = "a5" ;
n4.xID = "ae.htm" ;
n5 = insFld(foldersTree, gFld("T/C Purchase Agreement Guidelines", "af.htm#genaf", "")) ;
n5.oldxID = "a6" ;
n5.xID = "af.htm" ;
n6 = insDoc(n5, gLnk("R", "Guidelines", "af.htm#genafe", "")) ;
n6.oldxID = "a7" ;
n6.xID = "af.htm" ;
n7 = insDoc(n5, gLnk("R", "Handling of the purchase agreement", "af.htm#genaff", "")) ;
n7.oldxID = "a8" ;
n7.xID = "af.htm" ;
n8 = insDoc(foldersTree, gLnk("R", "MT 800  T/C Sales and Settlement Advice [Single]", "aga.htm#mt800", "")) ;
n8.oldxID = "a9" ;
n8.xID = "aga.htm" ;
n9 = insDoc(foldersTree, gLnk("R", "MT 801  T/C Multiple Sales Advice", "aha.htm#mt801", "")) ;
n9.oldxID = "a10" ;
n9.xID = "aha.htm" ;
n10 = insDoc(foldersTree, gLnk("R", "MT 802  T/C Settlement Advice", "aia.htm#mt802", "")) ;
n10.oldxID = "a11" ;
n10.xID = "aia.htm" ;
n11 = insDoc(foldersTree, gLnk("R", "MT 824  T/C Inventory Destruction/Cancellation Notice", "aja.htm#mt824", "")) ;
n11.oldxID = "a12" ;
n11.xID = "aja.htm" ;
n12 = insDoc(foldersTree, gLnk("R", "MT 890 Advice of Charges, Interest and Other Adjustments", "alaa.htm#mt890", "")) ;
n12.oldxID = "a13" ;
n12.xID = "alaa.htm" ;
n13 = insDoc(foldersTree, gLnk("R", "MT 891 Request for Payment of Charges, Interest and Other Expenses", "alba.htm#mt891", "")) ;
n13.oldxID = "a14" ;
n13.xID = "alba.htm" ;
n14 = insDoc(foldersTree, gLnk("R", "MT 892 Request for Cancellation", "alca.htm#mt892", "")) ;
n14.oldxID = "a15" ;
n14.xID = "alca.htm" ;
n15 = insDoc(foldersTree, gLnk("R", "MT 895 Queries", "alda.htm#mt895", "")) ;
n15.oldxID = "a16" ;
n15.xID = "alda.htm" ;
n16 = insDoc(foldersTree, gLnk("R", "MT 896 Answers", "alea.htm#mt896", "")) ;
n16.oldxID = "a17" ;
n16.xID = "alea.htm" ;
n17 = insDoc(foldersTree, gLnk("R", "MT 898 Proprietary Message", "alfa.htm#mt898", "")) ;
n17.oldxID = "a18" ;
n17.xID = "alfa.htm" ;
n18 = insDoc(foldersTree, gLnk("R", "MT 899 Free Format Message", "alga.htm#mt899", "")) ;
n18.oldxID = "a19" ;
n18.xID = "alga.htm" ;
n19 = insDoc(foldersTree, gLnk("R", "Glossary of Terms", "alh.htm#genalh", "")) ;
n19.oldxID = "a20" ;
n19.xID = "alh.htm" ;
n20 = insDoc(foldersTree, gLnk("R", "Legal Notices", "copyr.htm#genali", "")) ;
n20.oldxID = "a21" ;
n20.xID = "copyr.htm" ;
