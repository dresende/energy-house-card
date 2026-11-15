/*! energy-house-card v2.4.1 */
const VERSION = "2.4.1";
const HOUSE_SVG = "<defs><linearGradient id=\"roofGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#697582\"/><stop offset=\"50%\" stop-color=\"#586370\"/><stop offset=\"100%\" stop-color=\"#454f5b\"/></linearGradient><linearGradient id=\"carportRoofGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#75818f\"/><stop offset=\"100%\" stop-color=\"#525d69\"/></linearGradient><linearGradient id=\"fasciaLeft\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#49525c\"/><stop offset=\"100%\" stop-color=\"#373f47\"/></linearGradient><linearGradient id=\"fasciaRight\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#2c333a\"/><stop offset=\"100%\" stop-color=\"#1f242a\"/></linearGradient><linearGradient id=\"woodRight\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#d8ba98\"/><stop offset=\"100%\" stop-color=\"#bf9b75\"/></linearGradient><linearGradient id=\"woodLeft\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#b89672\"/><stop offset=\"100%\" stop-color=\"#967655\"/></linearGradient><linearGradient id=\"darkWoodLeft\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#4e463f\"/><stop offset=\"100%\" stop-color=\"#36302b\"/></linearGradient><linearGradient id=\"deckGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#cbb092\"/><stop offset=\"50%\" stop-color=\"#b89b7c\"/><stop offset=\"100%\" stop-color=\"#a38668\"/></linearGradient><linearGradient id=\"windowGlass\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#3a332c\"/><stop offset=\"45%\" stop-color=\"#5c4b3b\"/><stop offset=\"100%\" stop-color=\"#8c755e\"/></linearGradient><linearGradient id=\"windowReflect\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffffff\" stop-opacity=\"0.32\"/><stop offset=\"40%\" stop-color=\"#ffffff\" stop-opacity=\"0.08\"/><stop offset=\"100%\" stop-color=\"#ffffff\" stop-opacity=\"0.0\"/></linearGradient><linearGradient id=\"curtainGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#e5ded5\" stop-opacity=\"0.85\"/><stop offset=\"100%\" stop-color=\"#cbbba8\" stop-opacity=\"0.65\"/></linearGradient><linearGradient id=\"solarCell\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#2b4562\"/><stop offset=\"50%\" stop-color=\"#1d3147\"/><stop offset=\"100%\" stop-color=\"#101e2e\"/></linearGradient><linearGradient id=\"eqsUpperBody\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#eef1f4\"/><stop offset=\"30%\" stop-color=\"#cdd3d9\"/><stop offset=\"70%\" stop-color=\"#a3abb3\"/><stop offset=\"100%\" stop-color=\"#7a828a\"/></linearGradient><linearGradient id=\"eqsFlankGrad\" x1=\"0%\" y1=\"0%\" x2=\"90%\" y2=\"80%\"><stop offset=\"0%\" stop-color=\"#dde2e6\"/><stop offset=\"25%\" stop-color=\"#b9c0c6\"/><stop offset=\"65%\" stop-color=\"#8f979f\"/><stop offset=\"100%\" stop-color=\"#646b72\"/></linearGradient><linearGradient id=\"eqsLowerSculpt\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#6a7178\"/><stop offset=\"50%\" stop-color=\"#a9b0b7\"/><stop offset=\"100%\" stop-color=\"#6e757c\"/></linearGradient><linearGradient id=\"eqsCanopyGlass\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#49535e\"/><stop offset=\"28%\" stop-color=\"#22282e\"/><stop offset=\"70%\" stop-color=\"#101317\"/><stop offset=\"100%\" stop-color=\"#07090b\"/></linearGradient><linearGradient id=\"eqsWindowSide\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#3d4650\"/><stop offset=\"45%\" stop-color=\"#1b2026\"/><stop offset=\"100%\" stop-color=\"#0e1114\"/></linearGradient><linearGradient id=\"eqsTailGlow\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"50%\"><stop offset=\"0%\" stop-color=\"#ff1e27\"/><stop offset=\"50%\" stop-color=\"#ff5252\"/><stop offset=\"100%\" stop-color=\"#b90911\"/></linearGradient><linearGradient id=\"batteryBody\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#ffffff\"/><stop offset=\"100%\" stop-color=\"#dce2e8\"/></linearGradient><filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\"><feGaussianBlur stdDeviation=\"2.5\" result=\"blur\" /><feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/></filter><g id=\"grass-tuft-green\"><ellipse cx=\"0\" cy=\"2\" rx=\"14\" ry=\"7\" fill=\"#3a4b3c\" opacity=\"0.35\"/><path d=\"M0,2 C-4,-8 -12,-14 -18,-12 M0,2 C-2,-10 -8,-18 -12,-20 M0,2 C0,-12 -2,-20 -3,-24 M0,2 C2,-12 6,-20 9,-22 M0,2 C5,-8 12,-14 17,-13 M0,2 C-6,-4 -15,-6 -20,-4 M0,2 C6,-4 15,-6 19,-4\" stroke=\"#4f6d4a\" stroke-width=\"1.6\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M0,2 C-3,-9 -7,-15 -10,-17 M0,2 C1,-11 3,-17 5,-19 M0,2 C4,-7 10,-11 13,-10\" stroke=\"#78966d\" stroke-width=\"1.2\" stroke-linecap=\"round\" fill=\"none\"/></g><g id=\"grass-tuft-warm\"><ellipse cx=\"0\" cy=\"2\" rx=\"13\" ry=\"6\" fill=\"#52493c\" opacity=\"0.3\"/><path d=\"M0,2 C-5,-9 -13,-15 -19,-13 M0,2 C-1,-12 -5,-20 -8,-23 M0,2 C1,-13 4,-21 6,-24 M0,2 C6,-9 13,-15 18,-13 M0,2 C-8,-4 -16,-5 -21,-2\" stroke=\"#9e8c70\" stroke-width=\"1.4\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M0,2 C-2,-10 -4,-16 -6,-18 M0,2 C3,-10 7,-16 10,-17\" stroke=\"#c7b699\" stroke-width=\"1.1\" stroke-linecap=\"round\" fill=\"none\"/></g><g id=\"white-plume\"><path d=\"M0,0 C-5,-10 -12,-18 -16,-22 M0,0 C-1,-13 -3,-22 -4,-27 M0,0 C3,-12 8,-20 11,-24\" stroke=\"#dcd6cc\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M0,0 C-3,-8 -8,-14 -11,-17 M0,0 C2,-9 5,-16 7,-19\" stroke=\"#f4f1ea\" stroke-width=\"1.4\" stroke-linecap=\"round\" fill=\"none\"/></g></defs><g id=\"vegetation\"><polygon points=\"295,431 603,609 988,387 680,209\" fill=\"#d5d3ce\"/><polygon points=\"295,431 603,609 603,615 295,437\" fill=\"#b5b2ac\"/><polygon points=\"603,609 988,387 988,393 603,615\" fill=\"#9e9b95\"/><g fill=\"#aca9a2\" opacity=\"0.65\"><circle cx=\"595\" cy=\"590\" r=\"1.5\"/><circle cx=\"608\" cy=\"582\" r=\"1.2\"/><circle cx=\"620\" cy=\"592\" r=\"1.6\"/><circle cx=\"560\" cy=\"575\" r=\"1.4\"/><circle cx=\"545\" cy=\"562\" r=\"1.8\"/><circle cx=\"580\" cy=\"585\" r=\"1.3\"/><circle cx=\"650\" cy=\"570\" r=\"1.5\"/><circle cx=\"675\" cy=\"555\" r=\"1.2\"/><circle cx=\"705\" cy=\"540\" r=\"1.7\"/><circle cx=\"730\" cy=\"522\" r=\"1.4\"/><circle cx=\"775\" cy=\"498\" r=\"1.5\"/><circle cx=\"820\" cy=\"470\" r=\"1.6\"/><circle cx=\"860\" cy=\"448\" r=\"1.3\"/><circle cx=\"910\" cy=\"418\" r=\"1.5\"/><circle cx=\"485\" cy=\"530\" r=\"1.4\"/><circle cx=\"445\" cy=\"508\" r=\"1.6\"/><circle cx=\"380\" cy=\"472\" r=\"1.3\"/><circle cx=\"345\" cy=\"450\" r=\"1.5\"/></g><polygon points=\"435,498 518,546 538,534 455,486\" fill=\"#dcdad5\" stroke=\"#b5b2ac\" stroke-width=\"1\"/><polygon points=\"435,498 518,546 518,549 435,501\" fill=\"#a8a59e\"/></g><g id=\"ev\"><polygon points=\"182,366 312,441 465,353 335,278\" fill=\"#eaedf0\"/><polygon points=\"182,366 312,441 312,444 182,369\" fill=\"#d0d5dc\"/><use href=\"#grass-tuft-green\" transform=\"translate(385,295) scale(1.1)\"/><use href=\"#grass-tuft-warm\" x=\"415\" y=\"280\"/><polygon points=\"205,274 211,277 211,375 205,372\" fill=\"#4f5861\"/><polygon points=\"211,277 216,274 216,372 211,375\" fill=\"#32383e\"/><g id=\"mercedes-eqs\"><defs><linearGradient id=\"carSideGlass\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#55606b\"/><stop offset=\"100%\" stop-color=\"#262d34\"/></linearGradient><linearGradient id=\"carRoofGlass\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#4b5664\"/><stop offset=\"55%\" stop-color=\"#2a323c\"/><stop offset=\"100%\" stop-color=\"#1a2028\"/></linearGradient></defs><path d=\"M229.7,386.0 C236.5,376.9 270.7,360.0 292.1,348.0 C313.4,336.0 342.2,317.9 357.9,314.0 C373.6,310.1 378.7,320.0 386.5,324.5 C394.3,329.0 411.4,331.9 404.7,341.0 C397.9,350.1 366.6,366.7 345.8,379.0 C325.0,391.3 295.7,411.1 280.0,415.0 C264.2,418.9 259.7,407.3 251.4,402.5 C243.0,397.7 222.9,395.1 229.7,386.0 Z\" fill=\"#121518\" opacity=\"0.55\"/><ellipse cx=\"254.0\" cy=\"361.5\" rx=\"10.25\" ry=\"17.76\" transform=\"rotate(30 254.0 361.5)\" fill=\"#0f1113\"/><ellipse cx=\"344.0\" cy=\"309.5\" rx=\"10.25\" ry=\"17.76\" transform=\"rotate(30 344.0 309.5)\" fill=\"#0f1113\"/><path d=\"M228.4,350.6 C232.4,345.5 245.5,337.5 257.4,329.7 C269.4,321.8 287.5,310.5 300.3,303.3 C313.1,296.1 324.9,289.8 334.1,286.4 C343.2,283.1 348.4,282.8 355.3,283.0 C362.2,283.2 369.7,286.0 375.2,287.8 C380.7,289.6 384.2,291.5 388.2,293.8 C392.2,296.1 397.0,299.3 399.5,301.8 C401.9,304.2 404.7,306.2 402.9,308.5 C401.1,310.9 396.6,311.6 388.6,315.9 C380.6,320.3 367.7,327.3 354.9,334.8 C342.0,342.3 324.1,353.4 311.6,360.9 C299.0,368.5 287.0,377.1 279.5,380.1 C272.0,383.2 271.5,380.9 266.5,379.3 C261.6,377.7 255.1,373.7 249.6,370.6 C244.2,367.4 237.2,363.6 233.6,360.3 C230.1,356.9 224.5,355.7 228.4,350.6 Z\" fill=\"url(#eqsUpperBody)\"/><path d=\"M228.4,350.6 C229.8,349.8 230.1,356.9 233.6,360.3 C237.2,363.6 244.2,367.4 249.6,370.6 C255.1,373.7 261.6,377.7 266.5,379.3 C271.5,380.9 277.4,377.3 279.5,380.1 C281.6,382.9 279.0,391.4 279.1,395.9 C279.2,400.4 284.6,407.4 280.0,407.4 C275.3,407.3 259.6,400.7 250.9,395.7 C242.3,390.7 232.3,382.5 228.0,377.4 C223.7,372.2 225.3,369.4 225.4,364.9 C225.5,360.4 227.1,351.4 228.4,350.6 Z\" fill=\"#8e969e\"/><polygon points=\"244.1,386.2 256.2,393.2 256.2,387.8 244.1,380.8\" fill=\"#e9ecef\" stroke=\"#495057\" stroke-width=\"0.5\"/><path d=\"M279.5,380.1 C285.2,374.2 299.0,368.5 311.6,360.9 C324.1,353.4 342.0,342.3 354.9,334.8 C367.7,327.3 380.6,320.3 388.6,315.9 C396.6,311.6 400.5,310.2 402.9,308.5 C405.3,306.8 402.5,304.3 402.9,305.9 C403.4,307.6 404.8,313.6 405.5,318.3 C406.2,323.0 414.3,326.5 407.3,333.9 C400.3,341.2 380.9,351.7 363.5,362.2 C346.1,372.8 316.8,389.7 302.9,397.2 C289.0,404.8 284.1,407.5 280.0,407.4 C275.8,407.2 277.9,400.7 277.8,396.1 C277.7,391.6 273.9,386.0 279.5,380.1 Z\" fill=\"url(#eqsFlankGrad)\"/><path d=\"M313.4,387.5 C318.9,385.2 335.7,375.8 346.4,369.6 C357.1,363.5 372.3,354.4 377.5,350.5 C382.6,346.6 382.6,344.1 377.5,346.2 C372.3,348.3 357.1,357.0 346.4,363.2 C335.7,369.3 318.9,379.1 313.4,383.2 C307.9,387.2 307.9,389.8 313.4,387.5 Z\" fill=\"url(#eqsLowerSculpt)\" opacity=\"0.5\"/><path d=\"M280.8,380.9 C285.9,377.8 299.2,369.5 311.6,362.0 C323.9,354.5 342.0,343.4 354.9,335.9 C367.7,328.4 380.6,321.5 388.6,317.0 C396.6,312.6 400.5,310.4 402.9,309.1\" fill=\"none\" stroke=\"#f1f4f7\" stroke-width=\"1.1\" stroke-linecap=\"round\" opacity=\"0.85\"/><ellipse cx=\"302.5\" cy=\"389.5\" rx=\"12.02\" ry=\"20.82\" transform=\"rotate(30 302.5 389.5)\" fill=\"#121417\"/><ellipse cx=\"392.5\" cy=\"337.5\" rx=\"12.02\" ry=\"20.82\" transform=\"rotate(30 392.5 337.5)\" fill=\"#121417\"/><ellipse cx=\"384.7\" cy=\"333.0\" rx=\"10.25\" ry=\"17.76\" transform=\"rotate(30 384.7 333.0)\" fill=\"#0d0f11\"/><path d=\"M384.7,333.0 L390.8,336.5\" stroke=\"#0d0f11\" stroke-width=\"20.5\" stroke-linecap=\"round\"/><ellipse cx=\"390.8\" cy=\"336.5\" rx=\"10.25\" ry=\"17.76\" transform=\"rotate(30 390.8 336.5)\" fill=\"#1c1f23\" stroke=\"#0e1012\" stroke-width=\"0.8\"/><ellipse cx=\"390.8\" cy=\"336.5\" rx=\"7.59\" ry=\"13.14\" transform=\"rotate(30 390.8 336.5)\" fill=\"#16191d\" stroke=\"#c5cdd4\" stroke-width=\"1.4\"/><ellipse cx=\"390.8\" cy=\"336.5\" rx=\"6.15\" ry=\"10.65\" transform=\"rotate(30 390.8 336.5)\" fill=\"none\" stroke=\"#768089\" stroke-width=\"1.2\"/><g stroke=\"#d0d7de\" stroke-width=\"1.05\" opacity=\"0.92\"><line x1=\"399.3\" y1=\"331.6\" x2=\"382.3\" y2=\"341.4\"/><line x1=\"397.7\" y1=\"326.7\" x2=\"383.9\" y2=\"346.3\"/><line x1=\"393.4\" y1=\"325.6\" x2=\"388.2\" y2=\"347.4\"/><line x1=\"388.2\" y1=\"328.6\" x2=\"393.4\" y2=\"344.4\"/><line x1=\"383.9\" y1=\"334.7\" x2=\"397.7\" y2=\"338.3\"/></g><ellipse cx=\"390.8\" cy=\"336.5\" rx=\"2.05\" ry=\"3.55\" transform=\"rotate(30 390.8 336.5)\" fill=\"#22262b\" stroke=\"#aeb6be\" stroke-width=\"0.9\"/><ellipse cx=\"294.7\" cy=\"385.0\" rx=\"10.25\" ry=\"17.76\" transform=\"rotate(30 294.7 385.0)\" fill=\"#0d0f11\"/><path d=\"M294.7,385.0 L300.7,388.5\" stroke=\"#0d0f11\" stroke-width=\"20.5\" stroke-linecap=\"round\"/><ellipse cx=\"300.7\" cy=\"388.5\" rx=\"10.25\" ry=\"17.76\" transform=\"rotate(30 300.7 388.5)\" fill=\"#1c1f23\" stroke=\"#0e1012\" stroke-width=\"0.8\"/><ellipse cx=\"300.7\" cy=\"388.5\" rx=\"7.59\" ry=\"13.14\" transform=\"rotate(30 300.7 388.5)\" fill=\"#16191d\" stroke=\"#c5cdd4\" stroke-width=\"1.4\"/><ellipse cx=\"300.7\" cy=\"388.5\" rx=\"6.15\" ry=\"10.65\" transform=\"rotate(30 300.7 388.5)\" fill=\"none\" stroke=\"#768089\" stroke-width=\"1.2\"/><g stroke=\"#d0d7de\" stroke-width=\"1.05\" opacity=\"0.92\"><line x1=\"309.3\" y1=\"383.6\" x2=\"292.2\" y2=\"393.4\"/><line x1=\"307.6\" y1=\"378.7\" x2=\"293.8\" y2=\"398.3\"/><line x1=\"303.4\" y1=\"377.6\" x2=\"298.1\" y2=\"399.4\"/><line x1=\"298.1\" y1=\"380.6\" x2=\"303.4\" y2=\"396.4\"/><line x1=\"293.8\" y1=\"386.7\" x2=\"307.6\" y2=\"390.3\"/></g><ellipse cx=\"300.7\" cy=\"388.5\" rx=\"2.05\" ry=\"3.55\" transform=\"rotate(30 300.7 388.5)\" fill=\"#22262b\" stroke=\"#aeb6be\" stroke-width=\"0.9\"/><path d=\"M240.1,347.7 C239.8,342.2 249.1,335.4 255.3,329.1 C261.4,322.7 269.8,315.1 276.9,309.5 C284.1,303.9 291.2,299.5 298.1,295.6 C305.1,291.6 312.9,287.9 318.5,286.0 C324.1,284.1 328.4,284.5 331.9,284.4 C335.5,284.3 334.4,283.3 339.7,285.5 C345.1,287.8 356.5,293.7 364.0,298.1 C371.5,302.4 383.4,310.0 384.7,311.5 C386.0,313.1 376.9,308.2 371.8,307.4 C366.6,306.6 360.5,305.1 354.0,306.5 C347.5,307.9 339.7,311.6 332.8,315.6 C325.9,319.5 319.1,324.1 312.4,330.0 C305.7,335.8 297.9,343.8 292.5,350.6 C287.1,357.4 285.8,368.8 280.0,370.7 C274.1,372.5 264.1,365.6 257.4,361.7 C250.8,357.9 240.5,353.1 240.1,347.7 Z\" fill=\"url(#eqsCanopyGlass)\"/><path d=\"M264.4,337.4 C268.1,333.8 279.4,321.9 286.9,315.8 C294.4,309.6 302.8,304.4 309.4,300.6 C316.0,296.8 323.8,294.1 326.7,292.8\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"3.5\" stroke-linecap=\"round\" opacity=\"0.13\"/><path d=\"M267.0,319.0 C272.2,315.1 289.0,301.6 298.6,296.0 C308.1,290.4 319.9,287.2 324.1,285.4\" fill=\"none\" stroke=\"#9aa3ac\" stroke-width=\"1.0\" stroke-linecap=\"round\" opacity=\"0.7\"/><path d=\"M286.5,368.8 C294.0,365.2 318.4,350.3 334.1,341.2 C349.7,332.2 374.1,320.0 380.4,314.5 C386.8,309.0 376.5,309.4 372.2,308.2 C367.9,307.0 360.9,305.9 354.4,307.3 C347.9,308.7 340.1,312.4 333.2,316.4 C326.3,320.3 319.2,325.1 312.9,330.8 C306.5,336.4 299.2,344.7 295.1,350.1 C291.1,355.4 290.1,359.7 288.6,362.8 C287.2,365.9 278.9,372.4 286.5,368.8 Z\" fill=\"url(#carSideGlass)\"/><path d=\"M344.5,335.2 C343.6,331.8 340.2,318.2 339.4,314.8\" fill=\"none\" stroke=\"#101316\" stroke-width=\"3.0\" stroke-linecap=\"round\"/><path d=\"M302.1,359.4 C302.4,356.4 303.3,344.5 303.5,341.5\" fill=\"none\" stroke=\"#101316\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M347.9,332.7 C349.7,335.5 355.6,331.5 356.5,327.6 C357.4,323.7 355.0,311.9 353.2,309.1 C351.5,306.3 347.0,307.0 346.1,310.9 C345.2,314.8 346.2,329.9 347.9,332.7 Z\" fill=\"#ffffff\" opacity=\"0.1\"/><path d=\"M286.5,368.8 C287.9,365.7 290.7,356.4 295.1,350.1 C299.5,343.7 306.5,336.4 312.9,330.8 C319.2,325.1 326.3,320.3 333.2,316.4 C340.1,312.4 347.9,308.7 354.4,307.3 C360.9,305.9 367.9,307.0 372.2,308.2 C376.5,309.4 379.0,313.4 380.4,314.5\" fill=\"none\" stroke=\"#d0d7de\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><path d=\"M286.5,368.8 C294.4,364.2 318.4,350.3 334.1,341.2 C349.7,332.2 372.7,319.0 380.4,314.5\" fill=\"none\" stroke=\"#88919a\" stroke-width=\"0.9\" stroke-linecap=\"round\"/><path d=\"M376.9,318.9 C376.9,317.8 380.3,316.0 381.7,316.1 C383.2,316.2 385.5,318.4 385.6,319.4 C385.7,320.5 383.6,322.6 382.1,322.5 C380.7,322.4 377.0,319.9 376.9,318.9 Z\" fill=\"#4e555d\" stroke=\"#1b1e22\" stroke-width=\"0.6\"/><polyline points=\"330.8,356.0 336.0,352.7\" fill=\"none\" stroke=\"#cbd2d9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><polyline points=\"362.0,336.9 367.1,333.8\" fill=\"none\" stroke=\"#cbd2d9\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M227.6,357.1 C228.6,358.3 230.0,361.6 233.7,364.5 C237.4,367.5 244.3,371.6 249.8,374.8 C255.3,377.9 261.7,381.8 266.6,383.5 C271.6,385.2 276.6,385.0 279.5,385.0 C282.5,384.9 283.5,383.5 284.3,383.2\" fill=\"none\" stroke=\"url(#eqsTailGlow)\" stroke-width=\"3.4\" stroke-linecap=\"round\" filter=\"url(#glow)\"/><path d=\"M228.0,357.3 C228.9,358.5 230.1,361.6 233.7,364.5 C237.3,367.5 244.3,371.6 249.8,374.8 C255.3,377.9 261.7,381.9 266.6,383.5 C271.5,385.2 277.0,384.5 279.1,384.7\" fill=\"none\" stroke=\"#ffcccc\" stroke-width=\"1.0\" stroke-linecap=\"round\"/><path d=\"M399.5,312.5 C400.1,311.8 402.9,309.7 403.4,308.4 C403.8,307.1 402.3,305.4 402.1,304.8\" fill=\"none\" stroke=\"#f0f7ff\" stroke-width=\"2.2\" stroke-linecap=\"round\" filter=\"url(#glow)\"/><circle cx=\"249.9\" cy=\"379.1\" r=\"2.4\" fill=\"none\" stroke=\"#d8dee4\" stroke-width=\"0.8\"/></g><polygon points=\"282,318 288,321 288,427 282,424\" fill=\"#5a646e\"/><polygon points=\"288,321 294,318 294,424 288,427\" fill=\"#373f47\"/><g id=\"carport-roof\"><polygon points=\"190,261 286,316 436,230 340,175\" fill=\"url(#carportRoofGrad)\"/><g stroke=\"#3e4650\" stroke-width=\"1.2\" opacity=\"0.75\"><line x1=\"206\" y1=\"270\" x2=\"356\" y2=\"184\"/><line x1=\"222\" y1=\"279\" x2=\"372\" y2=\"193\"/><line x1=\"238\" y1=\"288\" x2=\"388\" y2=\"202\"/><line x1=\"254\" y1=\"298\" x2=\"404\" y2=\"212\"/><line x1=\"270\" y1=\"307\" x2=\"420\" y2=\"221\"/></g><polygon points=\"190,261 286,316 286,326 190,271\" fill=\"url(#fasciaLeft)\"/><polygon points=\"286,316 436,230 436,240 286,326\" fill=\"url(#fasciaRight)\"/><polyline points=\"190,261 286,316 436,230\" fill=\"none\" stroke=\"#9aa5b1\" stroke-width=\"1.2\"/></g></g><g id=\"house\"><g id=\"wooden-deck\"><polygon points=\"366,374 603,511 912,333 845,294 603,434 430,334\" fill=\"url(#deckGrad)\"/><g stroke=\"#8c6f52\" stroke-width=\"0.9\" opacity=\"0.55\"><line x1=\"378\" y1=\"381\" x2=\"442\" y2=\"344\"/><line x1=\"392\" y1=\"389\" x2=\"456\" y2=\"352\"/><line x1=\"406\" y1=\"397\" x2=\"470\" y2=\"360\"/><line x1=\"420\" y1=\"405\" x2=\"484\" y2=\"368\"/><line x1=\"434\" y1=\"413\" x2=\"498\" y2=\"376\"/><line x1=\"448\" y1=\"421\" x2=\"512\" y2=\"384\"/><line x1=\"462\" y1=\"429\" x2=\"526\" y2=\"392\"/><line x1=\"476\" y1=\"437\" x2=\"540\" y2=\"400\"/><line x1=\"490\" y1=\"445\" x2=\"554\" y2=\"408\"/><line x1=\"504\" y1=\"453\" x2=\"568\" y2=\"416\"/><line x1=\"518\" y1=\"461\" x2=\"582\" y2=\"424\"/><line x1=\"532\" y1=\"469\" x2=\"596\" y2=\"432\"/><line x1=\"546\" y1=\"477\" x2=\"857\" y2=\"298\"/><line x1=\"560\" y1=\"485\" x2=\"871\" y2=\"306\"/><line x1=\"574\" y1=\"493\" x2=\"885\" y2=\"314\"/><line x1=\"588\" y1=\"501\" x2=\"899\" y2=\"322\"/></g><polygon points=\"366,374 603,511 603,529 366,392\" fill=\"#7c6248\"/><polygon points=\"603,511 912,333 912,351 603,529\" fill=\"#5e4934\"/><polygon points=\"445,428 535,480 526,486 436,434\" fill=\"#9c8062\" stroke=\"#6e563e\" stroke-width=\"0.8\"/><polygon points=\"436,434 526,486 526,493 436,441\" fill=\"#634d38\"/><polygon points=\"438,440 528,492 519,498 429,446\" fill=\"#8c7054\" stroke=\"#5e4934\" stroke-width=\"0.8\"/><polygon points=\"429,446 519,498 519,505 429,453\" fill=\"#4f3d2b\"/></g><g id=\"rear-module\"><polygon points=\"396,216 492,271 492,379 396,324\" fill=\"url(#darkWoodLeft)\"/><g stroke=\"#27221e\" stroke-width=\"1\" opacity=\"0.7\"><line x1=\"408\" y1=\"223\" x2=\"408\" y2=\"331\"/><line x1=\"420\" y1=\"230\" x2=\"420\" y2=\"338\"/><line x1=\"432\" y1=\"237\" x2=\"432\" y2=\"345\"/><line x1=\"444\" y1=\"244\" x2=\"444\" y2=\"352\"/><line x1=\"456\" y1=\"251\" x2=\"456\" y2=\"359\"/><line x1=\"468\" y1=\"258\" x2=\"468\" y2=\"366\"/><line x1=\"480\" y1=\"265\" x2=\"480\" y2=\"373\"/></g><polygon points=\"390,202 486,257 600,191 504,136\" fill=\"url(#roofGrad)\"/><g stroke=\"#3c444d\" stroke-width=\"1\" opacity=\"0.65\"><line x1=\"410\" y1=\"213\" x2=\"524\" y2=\"147\"/><line x1=\"430\" y1=\"225\" x2=\"544\" y2=\"159\"/><line x1=\"450\" y1=\"236\" x2=\"564\" y2=\"170\"/><line x1=\"470\" y1=\"248\" x2=\"584\" y2=\"182\"/></g><polygon points=\"390,202 486,257 486,269 390,214\" fill=\"url(#fasciaLeft)\"/><polyline points=\"390,202 486,257 600,191\" fill=\"none\" stroke=\"#8c96a2\" stroke-width=\"1\"/></g><g id=\"main-timber-module\"><polygon points=\"486,268 632,352 632,462 486,378\" fill=\"url(#woodLeft)\"/><g stroke=\"#856546\" stroke-width=\"0.8\" opacity=\"0.5\"><line x1=\"496\" y1=\"274\" x2=\"496\" y2=\"384\"/><line x1=\"506\" y1=\"280\" x2=\"506\" y2=\"390\"/><line x1=\"516\" y1=\"286\" x2=\"516\" y2=\"396\"/><line x1=\"622\" y1=\"346\" x2=\"622\" y2=\"456\"/></g><g id=\"window-left-1\"><polygon points=\"522,296 574,326 574,424 522,394\" fill=\"#2b231d\"/><polygon points=\"525,298 572,325 572,421 525,394\" fill=\"url(#windowGlass)\"/><polygon points=\"525,298 572,325 572,421 525,394\" fill=\"url(#curtainGrad)\" opacity=\"0.55\"/><line x1=\"549\" y1=\"312\" x2=\"549\" y2=\"408\" stroke=\"#1e1b18\" stroke-width=\"3\"/><polygon points=\"525,298 572,325 572,421 525,394\" fill=\"none\" stroke=\"#1e1b18\" stroke-width=\"2.5\"/><polygon points=\"530,302 545,310 535,398 526,393\" fill=\"url(#windowReflect)\"/></g><g id=\"window-left-2\"><polygon points=\"584,332 620,353 620,451 584,430\" fill=\"#2b231d\"/><polygon points=\"587,334 618,352 618,448 587,430\" fill=\"url(#windowGlass)\"/><polygon points=\"587,334 618,352 618,448 587,430\" fill=\"url(#curtainGrad)\" opacity=\"0.55\"/><polygon points=\"587,334 618,352 618,448 587,430\" fill=\"none\" stroke=\"#1e1b18\" stroke-width=\"2.5\"/><polygon points=\"590,336 602,343 594,434 587,430\" fill=\"url(#windowReflect)\"/></g><polygon points=\"632,352 866,217 866,327 632,462\" fill=\"url(#woodRight)\"/><g stroke=\"#a6825c\" stroke-width=\"0.9\" opacity=\"0.55\"><line x1=\"642\" y1=\"346\" x2=\"642\" y2=\"456\"/><line x1=\"714\" y1=\"305\" x2=\"714\" y2=\"415\"/><line x1=\"722\" y1=\"300\" x2=\"722\" y2=\"410\"/><line x1=\"790\" y1=\"261\" x2=\"790\" y2=\"371\"/><line x1=\"798\" y1=\"256\" x2=\"798\" y2=\"366\"/><line x1=\"858\" y1=\"222\" x2=\"858\" y2=\"332\"/></g><g id=\"window-right-1\"><polygon points=\"648,350 710,314 710,413 648,449\" fill=\"#6e543b\"/><polygon points=\"651,432 708,399 708,411 651,444\" fill=\"#8d6b4c\"/><polygon points=\"651,351 708,318 708,411 651,444\" fill=\"url(#windowGlass)\"/><polygon points=\"651,351 708,318 708,411 651,444\" fill=\"url(#curtainGrad)\" opacity=\"0.55\"/><line x1=\"680\" y1=\"334\" x2=\"680\" y2=\"427\" stroke=\"#221f1d\" stroke-width=\"2.8\"/><polygon points=\"651,351 708,318 708,411 651,444\" fill=\"none\" stroke=\"#221f1d\" stroke-width=\"2.5\"/><polygon points=\"656,349 676,337 666,435 652,443\" fill=\"url(#windowReflect)\"/></g><g id=\"window-right-2\"><polygon points=\"726,305 786,270 786,369 726,404\" fill=\"#6e543b\"/><polygon points=\"729,306 784,274 784,367 729,399\" fill=\"url(#windowGlass)\"/><polygon points=\"729,306 784,274 784,367 729,399\" fill=\"url(#curtainGrad)\" opacity=\"0.55\"/><line x1=\"757\" y1=\"290\" x2=\"757\" y2=\"383\" stroke=\"#221f1d\" stroke-width=\"2.8\"/><polygon points=\"729,306 784,274 784,367 729,399\" fill=\"none\" stroke=\"#221f1d\" stroke-width=\"2.5\"/><polygon points=\"736,302 754,292 744,390 730,398\" fill=\"url(#windowReflect)\"/></g><g id=\"window-right-3\"><polygon points=\"802,261 854,231 854,330 802,360\" fill=\"#6e543b\"/><polygon points=\"805,262 852,235 852,328 805,355\" fill=\"url(#windowGlass)\"/><polygon points=\"805,262 852,235 852,328 805,355\" fill=\"url(#curtainGrad)\" opacity=\"0.55\"/><line x1=\"829\" y1=\"248\" x2=\"829\" y2=\"341\" stroke=\"#221f1d\" stroke-width=\"2.5\"/><polygon points=\"805,262 852,235 852,328 805,355\" fill=\"none\" stroke=\"#221f1d\" stroke-width=\"2.5\"/><polygon points=\"810,259 826,250 818,347 805,355\" fill=\"url(#windowReflect)\"/></g><g id=\"main-flat-roof\"><polygon points=\"478,248 632,337 874,197 720,108\" fill=\"url(#roofGrad)\"/><g stroke=\"#39414a\" stroke-width=\"1.3\" opacity=\"0.8\"><line x1=\"502\" y1=\"262\" x2=\"744\" y2=\"122\"/><line x1=\"526\" y1=\"276\" x2=\"768\" y2=\"136\"/><line x1=\"550\" y1=\"290\" x2=\"792\" y2=\"150\"/><line x1=\"574\" y1=\"304\" x2=\"816\" y2=\"164\"/><line x1=\"598\" y1=\"318\" x2=\"840\" y2=\"178\"/></g><polygon points=\"478,248 632,337 632,354 478,265\" fill=\"url(#fasciaLeft)\"/><polygon points=\"632,337 874,197 874,214 632,354\" fill=\"url(#fasciaRight)\"/><polyline points=\"478,248 632,337 874,197\" fill=\"none\" stroke=\"#9aa5b1\" stroke-width=\"1.5\"/><polyline points=\"478,265 632,354 874,214\" fill=\"none\" stroke=\"#20252b\" stroke-width=\"1\"/></g></g><g id=\"planter-left\" transform=\"translate(405, 382)\"><polygon points=\"0,0 32,19 32,37 0,18\" fill=\"#495159\"/><polygon points=\"32,19 52,7 52,25 32,37\" fill=\"#32383e\"/><polygon points=\"0,0 32,19 52,7 20,-12\" fill=\"#262b30\"/><use href=\"#grass-tuft-green\" transform=\"translate(26,4) scale(0.85)\"/><use href=\"#grass-tuft-warm\" transform=\"translate(18,0) scale(0.75)\"/></g><g id=\"planter-center\" transform=\"translate(580, 466)\"><polygon points=\"0,0 34,20 34,42 0,22\" fill=\"#495159\"/><polygon points=\"34,20 62,4 62,26 34,42\" fill=\"#32383e\"/><polygon points=\"0,0 34,20 62,4 28,-16\" fill=\"#262b30\"/><use href=\"#grass-tuft-green\" transform=\"translate(24,2) scale(0.95)\"/><use href=\"#grass-tuft-green\" transform=\"translate(38,4) scale(0.9)\"/><use href=\"#grass-tuft-warm\" transform=\"translate(31,-2) scale(0.85)\"/></g><g id=\"planter-back\" transform=\"translate(580, 146)\"><polygon points=\"0,0 26,15 26,32 0,17\" fill=\"#495159\"/><polygon points=\"26,15 52,0 52,17 26,32\" fill=\"#32383e\"/><use href=\"#grass-tuft-green\" transform=\"translate(26,8) scale(0.85)\"/></g></g><g id=\"battery\"><g fill=\"none\" stroke=\"#9aa3ad\" stroke-width=\"2.2\" stroke-linejoin=\"round\"><polyline points=\"473,308 473,275 452,263 452,240\"/><polyline points=\"478,311 478,272 456,260 456,242\"/></g><polygon points=\"447,236 458,242 458,248 447,242\" fill=\"#cbd2d9\" stroke=\"#5c646d\" stroke-width=\"0.8\"/><polygon points=\"448,300 482,320 482,374 448,354\" fill=\"#1e1a17\" opacity=\"0.6\"/><polygon points=\"476,321 483,317 483,371 476,375\" fill=\"#2c3238\"/><polygon points=\"444,302 476,321 483,317 451,298\" fill=\"#eef2f6\"/><polygon points=\"444,302 476,321 476,375 444,356\" fill=\"url(#batteryBody)\" stroke=\"#c5cdd6\" stroke-width=\"0.8\"/><line x1=\"446\" y1=\"316\" x2=\"474\" y2=\"332\" stroke=\"#d0d7de\" stroke-width=\"0.8\"/><line x1=\"455\" y1=\"326\" x2=\"465\" y2=\"332\" stroke=\"#10b981\" stroke-width=\"2.2\" stroke-linecap=\"round\" filter=\"url(#glow)\"/><circle cx=\"457\" cy=\"333\" r=\"0.9\" fill=\"#64748b\"/><circle cx=\"460\" cy=\"335\" r=\"0.9\" fill=\"#64748b\"/><circle cx=\"463\" cy=\"337\" r=\"0.9\" fill=\"#64748b\"/><g id=\"house-wallbox\" transform=\"translate(414, 296)\"><polygon points=\"0,0 10,6 10,22 0,16\" fill=\"#2c3238\" stroke=\"#64748b\" stroke-width=\"0.6\"/><polygon points=\"10,6 13,4 13,20 10,22\" fill=\"#1a1d21\"/><circle cx=\"5\" cy=\"10\" r=\"2\" fill=\"#6366f1\"/></g></g><g id=\"solar\"><g stroke=\"#252b31\" stroke-width=\"2\" fill=\"none\"><polyline points=\"552,201 552,223 536,214\"/><polyline points=\"585,221 585,244 568,234\"/><polyline points=\"602,196 602,212\"/><polyline points=\"650,168 650,184\"/><polyline points=\"700,139 700,155\"/></g><polygon points=\"552,225 588,247 752,152 714,130\" fill=\"#262c33\" opacity=\"0.75\"/><polygon points=\"546,198 588,246 752,151 710,103\" fill=\"#b8c2cc\" stroke=\"#49545e\" stroke-width=\"1.2\"/><polygon points=\"546,198 588,246 588,249 546,201\" fill=\"#3a434c\"/><polygon points=\"588,246 752,151 752,154 588,249\" fill=\"#252b31\"/><polygon points=\"549,199 587,243 749,149 711,105\" fill=\"url(#solarCell)\"/><line x1=\"568\" y1=\"221\" x2=\"730\" y2=\"127\" stroke=\"#cbd5e1\" stroke-width=\"1.8\"/><g stroke=\"#cbd5e1\" stroke-width=\"1.5\"><line x1=\"576\" y1=\"183\" x2=\"614\" y2=\"227\"/><line x1=\"603\" y1=\"168\" x2=\"641\" y2=\"212\"/><line x1=\"630\" y1=\"152\" x2=\"668\" y2=\"196\"/><line x1=\"657\" y1=\"136\" x2=\"695\" y2=\"180\"/><line x1=\"684\" y1=\"121\" x2=\"722\" y2=\"165\"/></g><g stroke=\"#6482a6\" stroke-width=\"0.5\" opacity=\"0.55\"><line x1=\"558\" y1=\"210\" x2=\"720\" y2=\"116\"/><line x1=\"578\" y1=\"232\" x2=\"740\" y2=\"138\"/><line x1=\"562\" y1=\"191\" x2=\"600\" y2=\"235\"/><line x1=\"590\" y1=\"175\" x2=\"628\" y2=\"219\"/><line x1=\"617\" y1=\"160\" x2=\"655\" y2=\"204\"/><line x1=\"644\" y1=\"144\" x2=\"682\" y2=\"188\"/><line x1=\"671\" y1=\"128\" x2=\"709\" y2=\"172\"/><line x1=\"698\" y1=\"113\" x2=\"736\" y2=\"157\"/></g><polygon points=\"580,181 615,161 638,213 603,233\" fill=\"#ffffff\" opacity=\"0.09\"/><polygon points=\"655,137 675,126 698,178 678,189\" fill=\"#ffffff\" opacity=\"0.07\"/></g><g id=\"vegetation-foreground\"><use href=\"#grass-tuft-green\" transform=\"translate(342,428) scale(1.15)\"/><use href=\"#grass-tuft-green\" transform=\"translate(368,442) scale(1.25)\"/><use href=\"#white-plume\" transform=\"translate(392,460) scale(1.1)\"/><use href=\"#grass-tuft-warm\" x=\"415\" y=\"472\"/><use href=\"#grass-tuft-green\" transform=\"translate(526,520) scale(1.05)\"/><use href=\"#white-plume\" x=\"546\" y=\"534\"/><use href=\"#grass-tuft-warm\" transform=\"translate(568,544) scale(1.1)\"/><use href=\"#grass-tuft-green\" transform=\"translate(598,548) scale(1.3)\"/><use href=\"#grass-tuft-green\" transform=\"translate(615,568) scale(0.95)\"/><use href=\"#grass-tuft-green\" transform=\"translate(638,536) scale(1.2)\"/><use href=\"#grass-tuft-warm\" transform=\"translate(668,518) scale(1.15)\"/><use href=\"#grass-tuft-green\" transform=\"translate(698,502) scale(1.05)\"/><use href=\"#white-plume\" x=\"722\" y=\"492\"/><use href=\"#grass-tuft-warm\" transform=\"translate(752,474) scale(1.2)\"/><use href=\"#grass-tuft-green\" transform=\"translate(782,454) scale(1.15)\"/><use href=\"#grass-tuft-warm\" transform=\"translate(815,432) scale(1.25)\"/><use href=\"#grass-tuft-green\" transform=\"translate(845,418) scale(1.1)\"/><use href=\"#grass-tuft-green\" transform=\"translate(885,395) scale(1.2)\"/><use href=\"#grass-tuft-warm\" transform=\"translate(920,372) scale(1.15)\"/></g><g id=\"grid\"><path d=\"M982,368 C995,375 1012,382 1022,374\" fill=\"none\" stroke=\"#6c757d\" stroke-width=\"2\"/><path d=\"M982,373 C996,381 1014,387 1025,378\" fill=\"none\" stroke=\"#868e96\" stroke-width=\"2\"/><path d=\"M1044,392 C1058,399 1068,396 1074,382\" fill=\"none\" stroke=\"#6c757d\" stroke-width=\"2\"/><path d=\"M1044,396 C1060,404 1070,400 1075,386\" fill=\"none\" stroke=\"#868e96\" stroke-width=\"1.8\"/><line x1=\"986\" y1=\"304\" x2=\"986\" y2=\"388\" stroke=\"#495057\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><g id=\"grid-meter-box\" transform=\"translate(1024, 344)\"><polygon points=\"0,0 14,8 14,62 0,54\" fill=\"#adb5bd\"/><polygon points=\"14,8 24,2 24,56 14,62\" fill=\"#ced4da\"/><polygon points=\"0,0 14,8 24,2 10,-6\" fill=\"#e9ecef\"/><polygon points=\"3,10 11,15 11,24 3,19\" fill=\"#495057\"/></g><polygon points=\"1071,105 1076,108 1076,396 1071,393\" fill=\"#8d8478\"/><polygon points=\"1076,108 1080,105 1080,393 1076,396\" fill=\"#6e655b\"/><polygon points=\"1048,132 1106,98 1108,102 1050,136\" fill=\"#9c9286\"/><polygon points=\"1050,136 1108,102 1108,106 1050,140\" fill=\"#6e655b\"/><line x1=\"1062\" y1=\"132\" x2=\"1074\" y2=\"148\" stroke=\"#495057\" stroke-width=\"1.5\"/><line x1=\"1092\" y1=\"114\" x2=\"1076\" y2=\"148\" stroke=\"#495057\" stroke-width=\"1.5\"/><rect x=\"1052\" y=\"125\" width=\"4\" height=\"7\" rx=\"1\" fill=\"#adb5bd\"/><rect x=\"1073\" y=\"113\" width=\"4\" height=\"7\" rx=\"1\" fill=\"#adb5bd\"/><rect x=\"1096\" y=\"100\" width=\"4\" height=\"7\" rx=\"1\" fill=\"#adb5bd\"/><g transform=\"translate(1056, 152)\"><path d=\"M0,0 L16,0 L16,32 C16,35 0,35 0,32 Z\" fill=\"#adb5bd\" stroke=\"#6c757d\" stroke-width=\"0.8\"/><ellipse cx=\"8\" cy=\"0\" rx=\"8\" ry=\"3.5\" fill=\"#dee2e6\" stroke=\"#6c757d\" stroke-width=\"0.8\"/><line x1=\"4\" y1=\"-5\" x2=\"4\" y2=\"0\" stroke=\"#495057\" stroke-width=\"1.5\"/><line x1=\"12\" y1=\"-5\" x2=\"12\" y2=\"0\" stroke=\"#495057\" stroke-width=\"1.5\"/></g><g transform=\"translate(1082, 142)\"><path d=\"M0,0 L16,0 L16,32 C16,35 0,35 0,32 Z\" fill=\"#ced4da\" stroke=\"#6c757d\" stroke-width=\"0.8\"/><ellipse cx=\"8\" cy=\"0\" rx=\"8\" ry=\"3.5\" fill=\"#f1f3f5\" stroke=\"#6c757d\" stroke-width=\"0.8\"/><line x1=\"4\" y1=\"-5\" x2=\"4\" y2=\"0\" stroke=\"#495057\" stroke-width=\"1.5\"/><line x1=\"12\" y1=\"-5\" x2=\"12\" y2=\"0\" stroke=\"#495057\" stroke-width=\"1.5\"/></g><g fill=\"none\" stroke=\"#5c646d\" stroke-width=\"1.1\"><path d=\"M1054,127 C995,172 935,192 872,198\"/><path d=\"M1075,115 C1008,168 942,195 872,202\"/><path d=\"M1098,102 C1022,164 950,202 872,206\"/></g></g>";
const VB = { x: 170, y: 40, w: 960, h: 590 };
const HUB = [43.2, 51.7];

// svg layers per part; the wallbox lives inside #battery but belongs to the car
const PARTS = {
  solar: ["solar"],
  grid: ["grid"],
  car: ["ev", "house-wallbox"],
  vegetation: ["vegetation", "vegetation-foreground", "planter-left", "planter-center", "planter-back"],
};
const FLOW_PARTS = {
  solar_home: ["solar"],
  solar_battery: ["solar", "battery"],
  battery_home: ["battery"],
  home_car: ["car"],
  grid_home: ["grid"],
};

const ROLES = {
  solar:   { icon: "mdi:solar-power-variant", color: "var(--ehc-solar)" },
  home:    { icon: "mdi:home-lightning-bolt", color: "var(--ehc-home)" },
  grid:    { icon: "mdi:transmission-tower",  color: "var(--ehc-grid)" },
  battery: { icon: "mdi:home-battery",        color: "var(--ehc-battery)" },
  car:     { icon: "mdi:car-electric",        color: "var(--ehc-car)" },
};

// card texts; English unless Home Assistant (or `language:`) says Portuguese
const I18N = {
  en: {
    roles: { solar: "Solar", home: "Home", grid: "Grid", battery: "Battery", car: "Car" },
    importing: "importing", exporting: "exporting", discharging: "discharging", charging: "charging",
    no_production: "no production", plugged: "plugged in", unplugged: "unplugged",
    today: "Today", produced: "Produced", consumed: "Consumed", imported: "Imported", exported: "Exported",
    car_today: "Car", self_consumption: "Self-consumption",
    aria: "House and energy flows",
    edit_hint: "Positioning mode: drag the values and the flow points",
    copy: "Copy YAML", copied: "Copied", select_copy: "Select and copy",
  },
  pt: {
    roles: { solar: "Solar", home: "Casa", grid: "Rede", battery: "Bateria", car: "Carro" },
    importing: "a importar", exporting: "a exportar", discharging: "a descarregar", charging: "a carregar",
    no_production: "sem produção", plugged: "ligado", unplugged: "desligado",
    today: "Hoje", produced: "Produzido", consumed: "Consumido", imported: "Importado", exported: "Exportado",
    car_today: "Carro", self_consumption: "Autoconsumo",
    aria: "Casa e fluxos de energia",
    edit_hint: "Modo de posicionamento: arrasta os valores e os pontos dos fluxos",
    copy: "Copiar YAML", copied: "Copiado", select_copy: "Seleciona e copia",
  },
};

function pickLang(config, hass) {
  const want = config?.language && config.language !== "auto" ? config.language : hass?.locale?.language || hass?.language || "en";
  return String(want).toLowerCase().startsWith("pt") ? "pt" : "en";
}

const DEFAULT_PLACES = {
  solar:   { x: 49, y: 0,  align: "center", valign: "top" },
  home:    { x: 62, y: 70, align: "center" },
  grid:    { x: 86, y: 40, align: "center" },
  battery: { x: 25, y: 66, align: "center" },
  car:     { x: 15, y: 33, align: "center" },
};

const DEFAULT_FLOWS = {
  solar_home:    [[49.5, 23.7], [47.7, 39], [43.2, 51.7]],
  solar_battery: [[46.9, 25.4], [38.5, 30.8], [29.4, 34.1], [29.4, 37.6], [31.6, 39.8], [31.6, 44.4]],
  battery_home:  [[30.4, 50.5], [36.8, 56.3], [43.2, 51.7]],
  home_car:      [[43.2, 51.7], [34.4, 47.1], [25.9, 45.1], [16.5, 50]],
  grid_home:     [[94.3, 12.7], [85.4, 22], [73.1, 27.5], [58.3, 35.6], [43.2, 51.7]],
};

// recolourable parts: gradients and flat colours drawn as shades of `base`
const PALETTE = {
  walls: {
    base: "#c9a986",
    gradients: ["woodRight", "woodLeft"],
    colors: ["#856546", "#a6825c", "#6e543b"],
  },
  deck: {
    base: "#b89b7c",
    gradients: ["deckGrad"],
    colors: ["#8c6f52", "#7c6248", "#5e4934", "#9c8062", "#634d38", "#8c7054", "#4f3d2b", "#6e563e"],
  },
  car: {
    base: "#b9c0c6",
    gradients: ["eqsUpperBody", "eqsFlankGrad", "eqsLowerSculpt"],
    colors: ["#8e969e"],
  },
};
const DEFAULT_COLORS = { walls: "#f2f0eb" };
const defaultColor = (part) => DEFAULT_COLORS[part] ?? PALETTE[part].base;

function toRgb(c) {
  if (Array.isArray(c) && c.length === 3) return c.map(Number);
  const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(String(c ?? "").trim());
  if (!m) return null;
  const h = m[1].length === 3 ? m[1].replace(/./g, "$&$&") : m[1];
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
}

const toHex = (rgb) => "#" + rgb.map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0")).join("");
const lum = ([r, g, b]) => 0.2126 * r + 0.7152 * g + 0.0722 * b;

// the original colour's brightness relative to the part's base, applied to the new base
function shade(target, orig, base) {
  const f = lum(toRgb(orig)) / lum(toRgb(base));
  if (f <= 1) return toHex(target.map((v) => v * f));
  const t = Math.min(1, (f - 1) * 1.5);
  return toHex(target.map((v) => v + (255 - v) * t));
}

const toSvg = ([x, y]) => [VB.x + (x / 100) * VB.w, VB.y + (y / 100) * VB.h];

const ENTITY_KEYS = {
  solar: "solar_power", home: "home_power", grid: "grid_power",
  battery: "battery_power", car: "car_power",
};
const SECONDARY_KEYS = { battery: "battery_soc", car: "car_soc" };

const SOURCE_COLOR = { solar: "var(--ehc-solar)", battery: "var(--ehc-battery)", grid: "var(--ehc-grid)" };

function toWatts(stateObj) {
  if (!stateObj) return null;
  const v = parseFloat(stateObj.state);
  if (!isFinite(v)) return null;
  const u = (stateObj.attributes?.unit_of_measurement || "W").trim();
  if (u === "kW") return v * 1000;
  if (u === "MW") return v * 1e6;
  return v;
}

function toKwh(stateObj) {
  if (!stateObj) return null;
  const v = parseFloat(stateObj.state);
  if (!isFinite(v)) return null;
  const u = (stateObj.attributes?.unit_of_measurement || "kWh").trim();
  if (u === "Wh") return v / 1000;
  if (u === "MWh") return v * 1000;
  return v;
}

function fmtPower(w) {
  if (w == null) return "—";
  const a = Math.abs(w);
  if (Math.round(a) === 0) return "—";
  if (a >= 1000) return `${(a / 1000).toFixed(a >= 10000 ? 1 : 2)} kW`;
  return `${Math.round(a)} W`;
}

function fmtEnergy(k) {
  if (k == null) return "—";
  return `${k.toFixed(k >= 100 ? 0 : 1)} kWh`;
}

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function routeEnergy(p) {
  const S = Math.max(0, p.solar ?? 0);
  const G = p.grid ?? 0;
  const B = p.battery ?? 0;
  const C = Math.max(0, p.car ?? 0);
  const L = p.home != null ? Math.max(0, p.home) : Math.max(0, S + B + G);

  const battDis = Math.max(0, B);
  const battChg = Math.max(0, -B);
  const gridImp = Math.max(0, G);
  const gridExp = Math.max(0, -G);

  // a charging battery takes solar first (as hybrid inverters do), so the
  // house→battery path only lights up when the sun can't cover the charge
  const solarToBatt = Math.min(S, battChg);
  const solarToLoad = Math.min(S - solarToBatt, L);
  let rem = S - solarToBatt - solarToLoad;
  const solarToGrid = Math.min(rem, gridExp);
  const battToLoad = Math.min(battDis, Math.max(0, L - solarToLoad));
  const battToGrid = Math.max(0, gridExp - solarToGrid);
  const gridToBatt = Math.max(0, battChg - solarToBatt);

  const shares = { solar: solarToLoad, battery: battToLoad, grid: Math.max(0, L - solarToLoad - battToLoad) };
  const carSource = Object.entries(shares).sort((a, b) => b[1] - a[1])[0][0];

  return {
    load: L,
    flows: {
      solar_home:    { w: solarToLoad, dir: 1, color: SOURCE_COLOR.solar },
      solar_battery: { w: solarToBatt, dir: 1, color: SOURCE_COLOR.solar },
      battery_home:  battToLoad >= gridToBatt
        ? { w: battToLoad, dir: 1, color: SOURCE_COLOR.battery }
        : { w: gridToBatt, dir: -1, color: SOURCE_COLOR.grid },
      home_car:      { w: C, dir: 1, color: SOURCE_COLOR[carSource] },
      grid_home:     gridImp > 0
        ? { w: gridImp, dir: 1, color: SOURCE_COLOR.grid }
        : { w: gridExp, dir: -1, color: battToGrid > solarToGrid ? SOURCE_COLOR.battery : SOURCE_COLOR.solar },
    },
  };
}

const WORDS = {
  solar: ["solar", "pv", "photovoltaic", "fotovoltaico", "inverter", "inversor", "producao", "production"],
  grid: ["grid", "rede", "net", "meter", "contador", "utility"],
  battery: ["battery", "bateria", "batt", "powerwall", "storage"],
  home: ["home", "house", "casa", "load", "consumo", "consumption"],
  car: ["car", "ev", "charger", "wallbox", "carregador", "carro", "vehicle", "tesla", "zappi", "easee"],
  gadget: ["phone", "iphone", "pixel", "galaxy", "watch", "tablet", "ipad", "remote", "comando", "door", "porta", "motion", "movimento", "contact", "button", "botao"],
};

function tokens(id, stateObj) {
  const name = stateObj?.attributes?.friendly_name || "";
  return `${id} ${name}`.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").split(/[^a-z0-9]+/).filter(Boolean);
}

function hits(toks, words) {
  return toks.filter((t) => words.some((w) => t === w || (w.length > 3 && t.startsWith(w)))).length;
}

// best entity of a kind whose name mentions `want` and none of `avoid`
function guessEntity(hass, used, { domain = "sensor", deviceClass, units, want, avoid = [] }) {
  let best = null;
  let bestScore = 0;
  for (const [id, s] of Object.entries(hass?.states || {})) {
    if (!id.startsWith(`${domain}.`) || used.has(id)) continue;
    const dc = s.attributes?.device_class;
    const unit = s.attributes?.unit_of_measurement;
    const kindOk = dc ? dc === deviceClass : !!units?.includes(unit);
    if (!kindOk) continue;
    const toks = tokens(id, s);
    if (avoid.some((words) => hits(toks, words))) continue;
    const score = want.reduce((sum, words) => sum + (hits(toks, words) ? 1 : 0), 0);
    if (score === want.length && score > bestScore) {
      best = id;
      bestScore = score;
    }
  }
  if (best) used.add(best);
  return best;
}

function guessEntities(hass) {
  const used = new Set();
  const power = { deviceClass: "power", units: ["W", "kW"] };
  const soc = { deviceClass: "battery", units: ["%"] };
  const found = {
    solar_power: guessEntity(hass, used, { ...power, want: [WORDS.solar], avoid: [WORDS.car, WORDS.battery] }),
    battery_power: guessEntity(hass, used, { ...power, want: [WORDS.battery], avoid: [WORDS.car, WORDS.gadget] }),
    car_power: guessEntity(hass, used, { ...power, want: [WORDS.car] }),
    grid_power: guessEntity(hass, used, { ...power, want: [WORDS.grid], avoid: [WORDS.car] }),
    home_power: guessEntity(hass, used, { ...power, want: [WORDS.home], avoid: [WORDS.car, WORDS.solar] }),
    car_soc: guessEntity(hass, used, { ...soc, want: [WORDS.car], avoid: [WORDS.gadget] }),
    battery_soc: guessEntity(hass, used, { ...soc, want: [WORDS.battery], avoid: [WORDS.car, WORDS.gadget] }),
    car_plugged: guessEntity(hass, used, { domain: "binary_sensor", deviceClass: "plug", want: [WORDS.car] }),
  };
  return Object.fromEntries(Object.entries(found).filter(([, v]) => v));
}

async function ensureHaForm() {
  if (customElements.get("ha-form") && customElements.get("ha-entity-picker")) return;
  try {
    const helpers = await window.loadCardHelpers?.();
    const card = await helpers?.createCardElement({ type: "entities", entities: [] });
    await card?.constructor?.getConfigElement?.();
  } catch (e) {
    // the YAML editor still works if HA's form components can't be preloaded
  }
}

class EnergyHouseCard extends HTMLElement {
  static getStubConfig(hass) {
    return { entities: guessEntities(hass) };
  }

  static async getConfigElement() {
    await ensureHaForm();
    return document.createElement("energy-house-card-editor");
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._flowState = {};
    this._raf = null;
    this._visible = true;
    this._last = 0;
    this._drag = null;
  }

  setConfig(config) {
    if (!config || typeof config !== "object") throw new Error("Invalid configuration");
    this._config = {
      flow_threshold: 10,
      invert_grid: false,
      invert_battery: false,
      edit_positions: false,
      ...config,
      entities: { ...(config.entities || {}) },
    };
    const ents = this._config.entities;
    const hasRole = (r) => !!ents[ENTITY_KEYS[r]] || (config.places || []).some((p) => p.role === r && p.entity);
    this._show = {
      solar: hasRole("solar"),
      battery: hasRole("battery"),
      car: hasRole("car"),
      grid: hasRole("grid"),
      vegetation: true,
      ...(config.show || {}),
    };
    this._lang = pickLang(this._config, this._hass);
    this._places = this._buildPlaces();
    this._flows = {};
    for (const [k, pts] of Object.entries(DEFAULT_FLOWS)) {
      const custom = config.flows?.[k];
      this._flows[k] = (Array.isArray(custom) && custom.length >= 2 ? custom : pts).map((p) => [Number(p[0]), Number(p[1])]);
    }
    this._render();
    if (this._hass) this._update();
  }

  _buildPlaces() {
    const ents = this._config.entities;
    const list = [];
    const userPlaces = Array.isArray(this._config.places) ? this._config.places : [];
    const rolesInUser = new Set(userPlaces.filter((p) => p.role).map((p) => p.role));
    for (const role of Object.keys(ROLES)) {
      if (rolesInUser.has(role)) continue;
      if (role !== "home" && this._show[role] === false) continue;
      const entity = ents[ENTITY_KEYS[role]];
      if (!entity && role !== "home") continue;
      list.push({ role, entity, secondary: ents[SECONDARY_KEYS[role]], ...DEFAULT_PLACES[role] });
    }
    for (const p of userPlaces) {
      if (p.role && p.role !== "home" && this._show[p.role] === false) continue;
      const base = p.role ? DEFAULT_PLACES[p.role] || {} : { align: "center" };
      list.push({
        ...base,
        ...p,
        entity: p.entity ?? (p.role ? ents[ENTITY_KEYS[p.role]] : undefined),
        secondary: p.secondary ?? (p.role ? ents[SECONDARY_KEYS[p.role]] : undefined),
      });
    }
    return list.map((p, i) => ({ ...p, id: i, x: Number(p.x ?? 50), y: Number(p.y ?? 50) }));
  }

  get _t() {
    return I18N[this._lang || "en"];
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    const lang = pickLang(this._config, hass);
    if (lang !== this._lang) {
      this._lang = lang;
      this._render();
    }
    this._update();
  }

  getCardSize() {
    return 7;
  }

  getGridOptions() {
    return { columns: 12, min_columns: 6, rows: "auto" };
  }

  connectedCallback() {
    this._io = new IntersectionObserver((entries) => {
      this._visible = entries.some((e) => e.isIntersecting);
      this._loop();
    });
    this._io.observe(this);
    this._onVis = () => this._loop();
    document.addEventListener("visibilitychange", this._onVis);
    this._loop();
  }

  disconnectedCallback() {
    this._io?.disconnect();
    document.removeEventListener("visibilitychange", this._onVis);
    cancelAnimationFrame(this._raf);
    this._raf = null;
  }

  _state(id) {
    return id ? this._hass?.states?.[id] : undefined;
  }

  _power(role) {
    const place = this._places.find((p) => p.role === role);
    const id = place?.entity ?? this._config.entities[ENTITY_KEYS[role]];
    let w = toWatts(this._state(id));
    if (w == null) return null;
    if (role === "grid" && this._config.invert_grid) w = -w;
    if (role === "battery" && this._config.invert_battery) w = -w;
    return w;
  }

  _render() {
    const c = this._config;
    // a height set in the sections Layout tab arrives as grid rows: fill that cell
    const rows = c.grid_options?.rows ?? c.layout_options?.grid_rows;
    const fill = typeof rows === "number" && !c.height && !c.full_screen;
    const h = /^\d+(\.\d+)?$/.test(String(c.height ?? "").trim()) ? `${String(c.height).trim()}px` : c.height;
    const height = c.full_screen ? "calc(100vh - var(--header-height, 56px) - 16px)" : fill ? "100%" : h;
    this.toggleAttribute("sized", !!height);
    this.toggleAttribute("fill", fill);
    this.toggleAttribute("static", !!c.static_flows);
    this.style.setProperty("--ehc-height", height || "auto");
    this.style.setProperty("--ehc-ar", String(VB.w / VB.h));
    const [hx, hy] = toSvg(c.hub || HUB);
    this.shadowRoot.innerHTML = `
      <style>${STYLE}</style>
      <ha-card>
        <div class="stage-wrap">
        <div class="stage" id="stage">
          <svg class="scene" viewBox="${VB.x} ${VB.y} ${VB.w} ${VB.h}" preserveAspectRatio="xMidYMid meet" id="svg" role="img" aria-label="${this._t.aria}">
            <g class="art">${HOUSE_SVG}</g>
            <g id="trails"></g>
            <g id="dots" ${c.static_flows ? "" : `filter="url(#glow)"`}></g>
            <g id="hub" class="hub">
              <circle cx="${hx}" cy="${hy}" r="12" class="hub-halo" filter="url(#glow)"/>
              <circle cx="${hx}" cy="${hy}" r="8.5" class="hub-core"/>
              <path d="M${hx + 1},${hy - 5} l-4,5.5 h3.5 l-1.5,4.5 l4,-5.5 h-3.5 z" class="hub-bolt"/>
            </g>
            <g id="handles"></g>
          </svg>
          <div id="places"></div>
        </div>
        </div>
        <div class="foot" id="foot"></div>
        ${c.edit_positions ? `
        <div class="editor">
          <div class="editor-head">
            <span>${this._t.edit_hint}</span>
            <button type="button" id="copy">${this._t.copy}</button>
          </div>
          <textarea id="yaml" readonly spellcheck="false"></textarea>
        </div>` : ""}
      </ha-card>`;

    const root = this.shadowRoot;
    this._els = {
      stage: root.getElementById("stage"),
      svg: root.getElementById("svg"),
      trails: root.getElementById("trails"),
      dots: root.getElementById("dots"),
      handles: root.getElementById("handles"),
      places: root.getElementById("places"),
      foot: root.getElementById("foot"),
      yaml: root.getElementById("yaml"),
      hub: root.getElementById("hub"),
    };
    this._applyParts();
    this._applyColors();
    this._buildFlows();
    this._buildPlacesDom();
    if (c.edit_positions) {
      this._buildHandles();
      this._writeYaml();
      root.getElementById("copy").addEventListener("click", () => this._copyYaml());
    }
  }

  _applyParts() {
    const svg = this._els.svg;
    const s = this._show;
    for (const [part, ids] of Object.entries(PARTS)) {
      for (const id of ids) {
        const el = svg.querySelector(`#${id}`);
        if (el) el.style.display = s[part] === false ? "none" : "";
      }
    }
    const battery = svg.querySelector("#battery");
    if (battery) {
      for (const child of battery.children) {
        if (child.id === "house-wallbox") continue;
        child.style.display = s.battery === false ? "none" : "";
      }
    }
  }

  _applyColors() {
    const svg = this._els.svg;
    const chosen = { ...DEFAULT_COLORS, ...(this._config.colors || {}) };
    for (const [part, pal] of Object.entries(PALETTE)) {
      const target = toRgb(chosen[part]);
      if (!target) continue;
      for (const id of pal.gradients) {
        svg.querySelectorAll(`#${id} stop`).forEach((s) => s.setAttribute("stop-color", shade(target, s.getAttribute("stop-color"), pal.base)));
      }
      for (const c of pal.colors) {
        const nc = shade(target, c, pal.base);
        svg.querySelectorAll(`[fill="${c}"]`).forEach((el) => el.setAttribute("fill", nc));
        svg.querySelectorAll(`[stroke="${c}"]`).forEach((el) => el.setAttribute("stroke", nc));
      }
    }
  }

  _flowVisible(key) {
    return (FLOW_PARTS[key] || []).every((p) => this._show[p] !== false);
  }

  // Catmull-Rom through the control points, as cubic Béziers
  _pathD(points) {
    const P = points.map(toSvg);
    if (P.length === 2) return `M${P[0]} L${P[1]}`;
    let d = `M${P[0][0].toFixed(1)},${P[0][1].toFixed(1)}`;
    for (let i = 0; i < P.length - 1; i++) {
      const p0 = P[i - 1] || P[i];
      const p1 = P[i];
      const p2 = P[i + 1];
      const p3 = P[i + 2] || p2;
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
    }
    return d;
  }

  _buildFlows() {
    const ns = "http://www.w3.org/2000/svg";
    this._els.trails.innerHTML = "";
    this._els.dots.innerHTML = "";
    const prevAll = this._flowState;
    this._flowState = {};
    for (const key of Object.keys(this._flows)) {
      if (!this._flowVisible(key)) continue;
      const trail = document.createElementNS(ns, "path");
      trail.setAttribute("class", "trail");
      trail.setAttribute("d", this._pathD(this._flows[key]));
      this._els.trails.appendChild(trail);
      const g = document.createElementNS(ns, "g");
      this._els.dots.appendChild(g);
      const prev = prevAll[key];
      this._flowState[key] = {
        trail, g, dots: [],
        len: 0,
        phase: prev?.phase ?? Math.random(),
        speed: prev?.speed ?? 0,
        target: prev?.target ?? 0,
        n: 0, dir: prev?.dir ?? 1, color: prev?.color ?? "currentColor", w: prev?.w ?? 0,
      };
      this._flowState[key].len = trail.getTotalLength?.() || 0;
    }
  }

  _setDots(st, n) {
    if (st.n === n) return;
    const ns = "http://www.w3.org/2000/svg";
    st.g.innerHTML = "";
    st.dots = [];
    for (let i = 0; i < n; i++) {
      const tail = [];
      for (let t = 0; t < 3; t++) {
        const c = document.createElementNS(ns, "circle");
        c.setAttribute("r", String([4.6, 3.2, 2.1][t]));
        c.setAttribute("opacity", String([1, 0.55, 0.28][t]));
        st.g.appendChild(c);
        tail.push(c);
      }
      st.dots.push(tail);
    }
    st.n = n;
  }

  _buildPlacesDom() {
    this._els.places.innerHTML = this._places.map((p) => {
      const meta = ROLES[p.role] || {};
      const color = p.color || meta.color || "var(--ehc-accent)";
      const icon = p.icon || meta.icon || "mdi:information-outline";
      const name = p.name ?? (p.role ? this._config.names?.[p.role] || this._t.roles[p.role] : "");
      const ring = p.role === "battery" || p.role === "car";
      return `
        <button type="button" class="place align-${esc(p.align || "center")} valign-${esc(p.valign || "center")} ${this._config.edit_positions ? "editable" : ""}"
          data-id="${p.id}" style="left:${p.x}%;top:${p.y}%;--c:${esc(color)}">
          <span class="ico">
            ${ring ? `<svg class="ring" viewBox="0 0 36 36"><circle class="ring-bg" cx="18" cy="18" r="16"/><circle class="ring-fg" cx="18" cy="18" r="16" pathLength="100" stroke-dasharray="0 100"/></svg>` : ""}
            <ha-icon icon="${esc(icon)}"></ha-icon>
          </span>
          <span class="txt">
            <span class="name">${esc(name)}</span>
            <span class="val">—</span>
            <span class="sub"></span>
          </span>
        </button>`;
    }).join("");
    this._els.places.querySelectorAll(".place").forEach((el) => {
      const place = this._places[Number(el.dataset.id)];
      if (this._config.edit_positions) {
        el.addEventListener("pointerdown", (e) => this._startDrag(e, { type: "place", place, el }));
      } else {
        el.addEventListener("click", () => this._moreInfo(place.entity));
      }
    });
  }

  _moreInfo(entityId) {
    if (!entityId) return;
    this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId }, bubbles: true, composed: true }));
  }

  _update() {
    if (!this._els) return;
    const powers = {};
    for (const role of Object.keys(ROLES)) powers[role] = this._power(role);
    const routed = routeEnergy(powers);
    if (powers.home == null && (powers.solar != null || powers.grid != null)) powers.home = routed.load;

    const dark = !!this._hass?.themes?.darkMode;
    this.toggleAttribute("dark", dark);

    this._els.places.querySelectorAll(".place").forEach((el) => {
      const p = this._places[Number(el.dataset.id)];
      const valEl = el.querySelector(".val");
      const subEl = el.querySelector(".sub");
      let val = "—";
      let sub = "";
      let active = false;
      if (p.role) {
        const w = powers[p.role];
        val = fmtPower(w);
        active = w != null && Math.abs(w) >= this._config.flow_threshold;
        const t = this._t;
        if (p.role === "grid" && w != null && active) sub = w > 0 ? t.importing : t.exporting;
        if (p.role === "battery" && w != null && active) sub = w > 0 ? t.discharging : t.charging;
        if (p.role === "solar" && w != null && !active) sub = t.no_production;
      } else {
        const s = this._state(p.entity);
        if (s && !["unavailable", "unknown"].includes(s.state)) {
          const n = parseFloat(s.state);
          const unit = s.attributes?.unit_of_measurement || "";
          val = isFinite(n) && p.decimals != null ? `${n.toFixed(p.decimals)} ${unit}`.trim()
            : this._hass.formatEntityState ? this._hass.formatEntityState(s) : `${s.state} ${unit}`.trim();
        }
      }
      if (p.secondary) {
        const s2 = this._state(p.secondary);
        const n2 = s2 ? parseFloat(s2.state) : NaN;
        const ring = el.querySelector(".ring-fg");
        if (isFinite(n2)) {
          const unit = s2.attributes?.unit_of_measurement ?? "%";
          const secTxt = `${Math.round(n2)}${unit === "%" ? "%" : " " + unit}`;
          sub = sub ? `${secTxt} · ${sub}` : secTxt;
          if (ring && unit === "%") ring.setAttribute("stroke-dasharray", `${Math.max(0, Math.min(100, n2))} 100`);
        } else if (ring) {
          ring.setAttribute("stroke-dasharray", "0 100");
        }
      }
      if (p.role === "car") {
        const plug = this._state(this._config.entities.car_plugged);
        if (plug) {
          const on = plug.state === "on";
          const txt = on ? this._t.plugged : this._t.unplugged;
          sub = sub ? `${sub} · ${txt}` : txt;
        }
      }
      valEl.textContent = val;
      subEl.textContent = sub;
      subEl.hidden = !sub;
      el.classList.toggle("active", active);
      el.classList.toggle("missing", val === "—");
      el.title = p.entity || "";
    });

    const th = this._config.flow_threshold;
    for (const [key, f] of Object.entries(routed.flows)) {
      const st = this._flowState[key];
      if (!st) continue;
      const roleA = key.split("_");
      const has = roleA.every((r) => r === "home" || powers[r] != null);
      const w = has ? f.w : 0;
      st.w = w;
      st.dir = f.dir;
      st.color = f.color;
      st.target = w >= th ? 0.12 + 0.38 * Math.min(1, Math.log10(1 + w / 50) / Math.log10(101)) : 0;
      const n = w < th ? 0 : w < 400 ? 1 : w < 1500 ? 2 : w < 4000 ? 3 : 4;
      this._setDots(st, n);
      st.g.style.color = f.color;
      st.trail.style.color = f.color;
      st.trail.classList.toggle("on", w >= th);
      st.trail.style.opacity = w >= th ? String(0.35 + 0.45 * Math.min(1, w / 5000)) : "";
    }
    this._els.hub.classList.toggle("on", Object.values(this._flowState).some((s) => s.w >= th));

    this._renderFoot();
    if (this._reduced()) this._drawFrame(0);
    this._loop();
  }

  _renderFoot() {
    const e = this._config.entities;
    const t = this._t;
    const items = [
      ["produced", e.solar_energy_today, "var(--ehc-solar)"],
      ["consumed", e.home_energy_today, "var(--ehc-home)"],
      ["imported", e.grid_import_today, "var(--ehc-grid)"],
      ["exported", e.grid_export_today, "var(--ehc-grid)"],
      ["car_today", e.car_energy_today, "var(--ehc-car)"],
    ].filter(([, id]) => id);
    if (!items.length) {
      this._els.foot.hidden = true;
      return;
    }
    const vals = items.map(([label, id, color]) => [label, toKwh(this._state(id)), color, id]);
    const prod = vals.find((v) => v[0] === "produced")?.[1];
    const exp = vals.find((v) => v[0] === "exported")?.[1];
    let extra = "";
    if (prod != null && exp != null && prod > 0) {
      extra = `<div class="stat"><span class="k">${t.self_consumption}</span><span class="v">${Math.round(Math.max(0, 1 - exp / prod) * 100)}%</span></div>`;
    }
    this._els.foot.hidden = false;
    this._els.foot.innerHTML = `<div class="foot-label">${t.today}</div><div class="stats">` + vals.map(([label, v, color, id]) =>
      `<button type="button" class="stat" data-entity="${esc(id)}"><span class="k"><i style="background:${color}"></i>${t[label]}</span><span class="v">${fmtEnergy(v)}</span></button>`
    ).join("") + extra + `</div>`;
    this._els.foot.querySelectorAll("[data-entity]").forEach((b) => b.addEventListener("click", () => this._moreInfo(b.dataset.entity)));
  }

  // `static_flows` (or the OS reduced-motion setting) draws the flows once, without the animation loop
  _reduced() {
    return !!this._config?.static_flows || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  }

  _loop() {
    const running = this.isConnected && this._visible && !document.hidden && !this._reduced();
    if (!running) {
      cancelAnimationFrame(this._raf);
      this._raf = null;
      return;
    }
    if (this._raf) return;
    this._last = performance.now();
    const tick = (now) => {
      const dt = Math.min(0.1, (now - this._last) / 1000);
      this._last = now;
      this._drawFrame(dt);
      this._raf = requestAnimationFrame(tick);
    };
    this._raf = requestAnimationFrame(tick);
  }

  _drawFrame(dt) {
    for (const st of Object.values(this._flowState)) {
      if (!st.n) continue;
      if (!st.len) st.len = st.trail.getTotalLength?.() || 0;
      if (!st.len) continue;
      st.speed += (st.target - st.speed) * Math.min(1, dt * 2.5);
      const pxPerSec = st.speed * 340;
      st.phase = (st.phase + (pxPerSec * dt) / st.len) % 1;
      for (let i = 0; i < st.n; i++) {
        const base = (st.phase + i / st.n) % 1;
        st.dots[i].forEach((c, t) => {
          let f = base - (t * 9) / st.len;
          f = ((f % 1) + 1) % 1;
          const pos = st.dir > 0 ? f : 1 - f;
          const pt = st.trail.getPointAtLength(pos * st.len);
          c.setAttribute("cx", pt.x.toFixed(1));
          c.setAttribute("cy", pt.y.toFixed(1));
          const edge = Math.min(f, 1 - f);
          c.style.opacity = String(Math.min(1, edge * 12));
        });
      }
    }
  }

  _buildHandles() {
    const ns = "http://www.w3.org/2000/svg";
    this._els.handles.innerHTML = "";
    for (const [key, pts] of Object.entries(this._flows)) {
      if (!this._flowVisible(key)) continue;
      pts.forEach((pt, i) => {
        const c = document.createElementNS(ns, "circle");
        const [sx, sy] = toSvg(pt);
        c.setAttribute("class", "handle");
        c.setAttribute("r", "6");
        c.setAttribute("cx", String(sx));
        c.setAttribute("cy", String(sy));
        c.innerHTML = `<title>${key} · ponto ${i + 1}</title>`;
        c.addEventListener("pointerdown", (e) => this._startDrag(e, { type: "handle", key, i, el: c }));
        this._els.handles.appendChild(c);
      });
    }
  }

  _startDrag(e, d) {
    e.preventDefault();
    const rect = this._els.stage.getBoundingClientRect();
    d.rect = rect;
    this._drag = d;
    d.el.setPointerCapture?.(e.pointerId);
    d.el.classList?.add("dragging");
    const move = (ev) => {
      const x = Math.max(0, Math.min(100, ((ev.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(0, Math.min(100, ((ev.clientY - rect.top) / rect.height) * 100));
      const rx = Math.round(x * 10) / 10;
      const ry = Math.round(y * 10) / 10;
      if (d.type === "place") {
        d.place.x = rx;
        d.place.y = ry;
        d.el.style.left = `${rx}%`;
        d.el.style.top = `${ry}%`;
      } else {
        this._flows[d.key][d.i] = [rx, ry];
        const [sx, sy] = toSvg([rx, ry]);
        d.el.setAttribute("cx", String(sx));
        d.el.setAttribute("cy", String(sy));
        const st = this._flowState[d.key];
        st.trail.setAttribute("d", this._pathD(this._flows[d.key]));
        st.len = st.trail.getTotalLength();
        if (this._reduced()) this._drawFrame(0);
      }
      this._writeYaml();
    };
    const up = () => {
      d.el.classList?.remove("dragging");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      this._drag = null;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
  }

  _writeYaml() {
    if (!this._els.yaml) return;
    const q = (s) => (/^[\w.:-]+$/.test(String(s)) ? String(s) : JSON.stringify(String(s)));
    const lines = ["places:"];
    for (const p of this._places) {
      lines.push(p.role ? `  - role: ${p.role}` : `  - name: ${q(p.name ?? "")}`);
      if (p.role && p.name) lines.push(`    name: ${q(p.name)}`);
      if (p.entity) lines.push(`    entity: ${q(p.entity)}`);
      if (p.secondary) lines.push(`    secondary: ${q(p.secondary)}`);
      if (p.icon) lines.push(`    icon: ${q(p.icon)}`);
      if (p.color) lines.push(`    color: ${q(p.color)}`);
      if (p.decimals != null) lines.push(`    decimals: ${p.decimals}`);
      if (p.align && p.align !== "center") lines.push(`    align: ${p.align}`);
      if (p.valign && p.valign !== "center") lines.push(`    valign: ${p.valign}`);
      lines.push(`    x: ${p.x}`, `    y: ${p.y}`);
    }
    lines.push("flows:");
    for (const [k, pts] of Object.entries(this._flows)) {
      lines.push(`  ${k}: [${pts.map(([x, y]) => `[${x}, ${y}]`).join(", ")}]`);
    }
    this._els.yaml.value = lines.join("\n");
  }

  async _copyYaml() {
    const btn = this.shadowRoot.getElementById("copy");
    try {
      await navigator.clipboard.writeText(this._els.yaml.value);
      btn.textContent = this._t.copied;
    } catch {
      this._els.yaml.select();
      btn.textContent = this._t.select_copy;
    }
    setTimeout(() => (btn.textContent = this._t.copy), 1600);
  }
}

const STYLE = `
:host {
  --ehc-solar: #f2a516;
  --ehc-battery: #2fb36d;
  --ehc-grid: #e5484d;
  --ehc-car: #3d8bfd;
  --ehc-home: #9a6cf0;
  --ehc-accent: var(--primary-color, #03a9f4);
  --ehc-text: var(--primary-text-color, #1c1f24);
  --ehc-muted: var(--secondary-text-color, #66707d);
  --ehc-badge-bg: color-mix(in srgb, var(--card-background-color, #fff) 82%, transparent);
  --ehc-badge-border: color-mix(in srgb, var(--ehc-text) 10%, transparent);
  --ehc-trail: color-mix(in srgb, var(--ehc-text) 22%, transparent);
  display: block;
}
:host([dark]) {
  --ehc-solar: #ffbe3d;
  --ehc-battery: #3fd18a;
  --ehc-grid: #ff6b6f;
  --ehc-car: #5fa2ff;
  --ehc-home: #b391ff;
  --ehc-badge-bg: color-mix(in srgb, var(--card-background-color, #1c1c1c) 78%, transparent);
  --ehc-badge-border: color-mix(in srgb, #fff 12%, transparent);
}
[hidden] { display: none !important; }
ha-card { overflow: hidden; padding: 14px 14px 12px; display: flex; flex-direction: column; gap: 6px; color: var(--ehc-text); }

.stage-wrap { display: flex; justify-content: center; align-items: center; min-width: 0; }
:host([fill]) { height: 100%; }
:host([sized]) ha-card { height: var(--ehc-height); box-sizing: border-box; }
:host([sized]) .stage-wrap { flex: 1; min-height: 0; container-type: size; }
:host([sized]) .stage { width: min(100cqw, 100cqh * var(--ehc-ar)); }
.stage { position: relative; width: 100%; aspect-ratio: var(--ehc-ar); container-type: inline-size; user-select: none; -webkit-user-select: none; touch-action: manipulation; }
.scene { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; pointer-events: none; }
.art { transition: filter .3s; }
:host([dark]) .art { filter: brightness(.92) saturate(.95); }
.trail { fill: none; stroke: var(--ehc-trail); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 2 6; transition: opacity .4s; }
.trail.on { stroke: currentColor; stroke-dasharray: none; stroke-width: 2.6; }
.hub { opacity: 0; transition: opacity .4s; }
.hub.on { opacity: 1; }
.hub-halo { fill: #fff; opacity: .85; }
.hub-core { fill: #1e293b; stroke: #fff; stroke-width: 2.2; }
.hub-bolt { fill: #f8fafc; }
#dots circle { fill: currentColor; }
#dots g { transition: color .4s; }
.handle { fill: #fff; stroke: var(--ehc-accent); stroke-width: 2.5; cursor: grab; pointer-events: all; }
.handle.dragging { cursor: grabbing; fill: var(--ehc-accent); }

.place {
  all: unset; box-sizing: border-box; position: absolute;
  display: flex; align-items: center; gap: .45em; padding: .3em .7em .3em .3em;
  font-size: clamp(10px, 1.9cqw, 24px); line-height: 1.15;
  background: var(--ehc-badge-bg); border: 1px solid var(--ehc-badge-border); border-radius: 999px;
  -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);
  box-shadow: 0 2px 10px rgba(0,0,0,.12); cursor: pointer; white-space: nowrap; color: var(--ehc-text);
  transition: box-shadow .2s, opacity .3s;
}
.place { --tx: -50%; --ty: -50%; transform: translate(var(--tx), var(--ty)); }
.place.align-left { --tx: 0; }
.place.align-right { --tx: -100%; }
.place.valign-top { --ty: 0; }
.place.valign-bottom { --ty: -100%; }
.place:focus-visible { outline: 2px solid var(--ehc-accent); outline-offset: 2px; }
.place:hover { box-shadow: 0 3px 14px rgba(0,0,0,.2); }
.place.editable { cursor: grab; outline: 1.5px dashed var(--ehc-accent); outline-offset: 2px; touch-action: none; }
.place.editable.dragging { cursor: grabbing; }
.place.missing .val { color: var(--ehc-muted); }
.ico { position: relative; display: grid; place-items: center; width: 2.3em; height: 2.3em; border-radius: 50%; flex: none;
  background: color-mix(in srgb, var(--c) 16%, transparent); color: var(--c); }
.place.active .ico { background: color-mix(in srgb, var(--c) 26%, transparent); }
.ico ha-icon { --mdc-icon-size: 1.3em; display: inline-flex; }
.ring { position: absolute; inset: -2px; width: calc(100% + 4px); height: calc(100% + 4px); transform: rotate(-90deg); }
.ring-bg { fill: none; stroke: color-mix(in srgb, var(--c) 18%, transparent); stroke-width: 3; }
.ring-fg { fill: none; stroke: var(--c); stroke-width: 3; stroke-linecap: round; transition: stroke-dasharray .6s; }
.txt { display: flex; flex-direction: column; min-width: 0; }
.name { font-size: .72em; text-transform: uppercase; letter-spacing: .06em; color: var(--ehc-muted); }
.val { font-size: 1.12em; font-weight: 600; font-variant-numeric: tabular-nums; }
.sub { font-size: .74em; color: var(--ehc-muted); font-variant-numeric: tabular-nums; }

.foot { display: flex; flex-direction: column; gap: 6px; padding-top: 8px; border-top: 1px solid var(--divider-color, var(--ehc-badge-border)); }
.foot-label { font-size: .7rem; text-transform: uppercase; letter-spacing: .08em; color: var(--ehc-muted); }
.stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(84px, 1fr)); gap: 4px 10px; }
.stat { all: unset; display: flex; flex-direction: column; gap: 1px; cursor: pointer; border-radius: 6px; padding: 2px 4px; margin: 0 -4px; }
.stat:focus-visible { outline: 2px solid var(--ehc-accent); }
.stat .k { font-size: .72rem; color: var(--ehc-muted); display: flex; align-items: center; gap: 5px; }
.stat .k i { width: 7px; height: 7px; border-radius: 50%; display: inline-block; }
.stat .v { font-size: .95rem; font-weight: 600; font-variant-numeric: tabular-nums; }

.editor { display: flex; flex-direction: column; gap: 6px; margin-top: 6px; }
.editor-head { display: flex; justify-content: space-between; align-items: center; gap: 8px; font-size: .78rem; color: var(--ehc-muted); flex-wrap: wrap; }
.editor button { font: inherit; font-size: .8rem; padding: 5px 12px; border-radius: 8px; border: 1px solid var(--ehc-accent); background: transparent; color: var(--ehc-accent); cursor: pointer; }
.editor textarea { width: 100%; box-sizing: border-box; min-height: 180px; font: 12px/1.45 ui-monospace, SFMono-Regular, Menlo, monospace; padding: 8px; border-radius: 8px;
  border: 1px solid var(--ehc-badge-border); background: color-mix(in srgb, var(--ehc-text) 4%, transparent); color: var(--ehc-text); resize: vertical; }
/* lighter rendering for less capable devices */
:host([static]) .place { -webkit-backdrop-filter: none; backdrop-filter: none; background: var(--card-background-color, #fff); }
:host([static]) .ring-fg, :host([static]) .trail, :host([static]) .art, :host([static]) .hub, :host([static]) .place { transition: none; }
@media (prefers-reduced-motion: reduce) { .ring-fg, .trail, .art, .hub { transition: none; } }
`;

const POWER = { entity: { filter: [{ domain: "sensor", device_class: "power" }] } };
const SOC = { entity: { filter: [{ domain: "sensor", device_class: "battery" }] } };
const ENERGY = { entity: { filter: [{ domain: "sensor", device_class: "energy" }] } };

const EDITOR_ENTITY_KEYS = [
  "solar_power", "home_power", "grid_power", "battery_power", "battery_soc",
  "car_power", "car_soc", "car_plugged",
  "solar_energy_today", "home_energy_today", "grid_import_today", "grid_export_today", "car_energy_today",
];

const NAME_ROLES = ["solar", "home", "grid", "battery", "car"];

const EDITOR_TEXT = {
  en: {
    groups: { power: "Power now", soc: "Battery charge", today: "Today's totals (optional)", names: "Names", colors: "House colours", options: "Options" },
    labels: {
      solar_power: "Solar production", home_power: "Home consumption", grid_power: "Grid", battery_power: "Home battery",
      car_power: "Car charging", battery_soc: "Home battery charge (SOC)", car_soc: "Car charge (SOC)", car_plugged: "Car plugged in",
      solar_energy_today: "Produced today", home_energy_today: "Consumed today", grid_import_today: "Imported today",
      grid_export_today: "Exported today", car_energy_today: "Car today",
      walls_color: "Walls", deck_color: "Deck", car_color: "Car",
      invert_grid: "Invert grid sign", invert_battery: "Invert battery sign", show_vegetation: "Show garden",
      full_screen: "Fill the screen", height: "Card height", flow_threshold: "Minimum to animate a flow",
      edit_positions: "Positioning mode", language: "Language", static_flows: "Static flows",
    },
    helpers: {
      home_power: "Total consumption, including the car. Leave empty to calculate it from solar, battery and grid.",
      grid_power: "Positive when importing, negative when exporting. If yours is the other way round, turn on \"Invert grid sign\".",
      battery_power: "Positive when discharging, negative when charging. If yours is the other way round, turn on \"Invert battery sign\".",
      car_power: "Without this entity, the car and the carport are hidden.",
      height: "E.g. 600px or 80vh. Empty = automatic height.",
      edit_positions: "Drag the values and flows on the card, then copy the generated YAML.",
      names: "Leave empty to use the default name.",
      static_flows: "For less capable devices (wall tablets, old phones): shows the flows without animation.",
    },
    languages: { auto: "Same as Home Assistant", en: "English", pt: "Português" },
  },
  pt: {
    groups: { power: "Potência agora", soc: "Carga das baterias", today: "Totais de hoje (opcional)", names: "Nomes", colors: "Cores da casa", options: "Opções" },
    labels: {
      solar_power: "Produção solar", home_power: "Consumo da casa", grid_power: "Rede elétrica", battery_power: "Bateria da casa",
      car_power: "Carregamento do carro", battery_soc: "Carga da bateria da casa (SOC)", car_soc: "Carga do carro (SOC)", car_plugged: "Carro ligado à tomada",
      solar_energy_today: "Produzido hoje", home_energy_today: "Consumido hoje", grid_import_today: "Importado hoje",
      grid_export_today: "Exportado hoje", car_energy_today: "Carro hoje",
      walls_color: "Paredes", deck_color: "Alpendre", car_color: "Carro",
      invert_grid: "Inverter sinal da rede", invert_battery: "Inverter sinal da bateria", show_vegetation: "Mostrar jardim",
      full_screen: "Ocupar o ecrã todo", height: "Altura do card", flow_threshold: "Mínimo para animar o fluxo",
      edit_positions: "Modo de posicionamento", language: "Língua", static_flows: "Fluxos estáticos",
    },
    helpers: {
      home_power: "Consumo total, incluindo o carro. Se ficar vazio, é calculado a partir de solar, bateria e rede.",
      grid_power: "Positivo a importar, negativo a exportar. Se o teu for ao contrário, liga \"Inverter sinal da rede\".",
      battery_power: "Positivo a descarregar, negativo a carregar. Se o teu for ao contrário, liga \"Inverter sinal da bateria\".",
      car_power: "Sem esta entidade, o carro e o telheiro não aparecem.",
      height: "Ex.: 600px ou 80vh. Vazio = altura automática.",
      edit_positions: "Arrasta os valores e os fluxos no card e copia o YAML gerado.",
      names: "Se ficar vazio, usa o nome por defeito.",
      static_flows: "Para dispositivos menos capazes (tablets de parede, telemóveis antigos): mostra os fluxos sem animação.",
    },
    languages: { auto: "Igual ao Home Assistant", en: "English", pt: "Português" },
  },
};

function editorSchema(et) {
  return [
    {
      type: "expandable", flatten: true, expanded: true, title: et.groups.power, icon: "mdi:flash",
      schema: [
        { name: "solar_power", selector: POWER },
        { name: "home_power", selector: POWER },
        { name: "grid_power", selector: POWER },
        { name: "battery_power", selector: POWER },
        { name: "car_power", selector: POWER },
      ],
    },
    {
      type: "expandable", flatten: true, expanded: true, title: et.groups.soc, icon: "mdi:battery-charging-60",
      schema: [
        { name: "battery_soc", selector: SOC },
        { name: "car_soc", selector: SOC },
        { name: "car_plugged", selector: { entity: { filter: [{ domain: "binary_sensor" }] } } },
      ],
    },
    {
      type: "expandable", flatten: true, title: et.groups.today, icon: "mdi:calendar-today",
      schema: [
        { name: "solar_energy_today", selector: ENERGY },
        { name: "home_energy_today", selector: ENERGY },
        { name: "grid_import_today", selector: ENERGY },
        { name: "grid_export_today", selector: ENERGY },
        { name: "car_energy_today", selector: ENERGY },
      ],
    },
    {
      type: "expandable", flatten: true, title: et.groups.names, icon: "mdi:form-textbox",
      schema: NAME_ROLES.map((r) => ({ name: `${r}_name`, selector: { text: {} } })),
    },
    {
      type: "expandable", flatten: true, title: et.groups.colors, icon: "mdi:palette",
      schema: [
        { name: "walls_color", selector: { color_rgb: {} } },
        { name: "deck_color", selector: { color_rgb: {} } },
        { name: "car_color", selector: { color_rgb: {} } },
      ],
    },
    {
      type: "expandable", flatten: true, title: et.groups.options, icon: "mdi:cog",
      schema: [
        { name: "language", selector: { select: { mode: "dropdown", options: ["auto", "en", "pt"].map((v) => ({ value: v, label: et.languages[v] })) } } },
        { name: "invert_grid", selector: { boolean: {} } },
        { name: "invert_battery", selector: { boolean: {} } },
        { name: "show_vegetation", selector: { boolean: {} } },
        { name: "full_screen", selector: { boolean: {} } },
        { name: "height", selector: { text: {} } },
        { name: "static_flows", selector: { boolean: {} } },
        { name: "flow_threshold", selector: { number: { min: 0, max: 500, step: 5, mode: "box", unit_of_measurement: "W" } } },
        { name: "edit_positions", selector: { boolean: {} } },
      ],
    },
  ];
}

class EnergyHouseCardEditor extends HTMLElement {
  set hass(hass) {
    const before = this._hass;
    this._hass = hass;
    if (!this._form) return;
    this._form.hass = hass;
    if (!before || pickLang(this._config, before) !== pickLang(this._config, hass)) this._render();
  }

  setConfig(config) {
    this._config = config || {};
    this._render();
  }

  _data() {
    const c = this._config;
    return {
      ...(c.entities || {}),
      ...Object.fromEntries(NAME_ROLES.map((r) => [`${r}_name`, c.names?.[r] ?? ""])),
      language: c.language || "auto",
      ...Object.fromEntries(Object.keys(PALETTE).map((p) => [`${p}_color`, toRgb(c.colors?.[p] ?? defaultColor(p))])),
      invert_grid: !!c.invert_grid,
      invert_battery: !!c.invert_battery,
      show_vegetation: c.show?.vegetation !== false,
      full_screen: !!c.full_screen,
      height: c.height ?? "",
      flow_threshold: c.flow_threshold ?? 10,
      edit_positions: !!c.edit_positions,
      static_flows: !!c.static_flows,
    };
  }

  _render() {
    if (!this._form) {
      this._form = document.createElement("ha-form");
      // expandable groups reach these too, and have no name
      const role = (s) => (s.name?.endsWith("_name") && I18N.en.roles[s.name.slice(0, -5)] ? s.name.slice(0, -5) : null);
      this._form.computeLabel = (s) => (role(s) ? I18N[this._lang].roles[role(s)] : this._et.labels[s.name] ?? s.name);
      this._form.computeHelper = (s) => (role(s) ? this._et.helpers.names : this._et.helpers[s.name]);
      this._form.addEventListener("value-changed", (e) => this._changed(e.detail.value));
      this.appendChild(this._form);
    }
    this._lang = pickLang(this._config, this._hass);
    this._et = EDITOR_TEXT[this._lang];
    this._form.hass = this._hass;
    this._form.schema = editorSchema(this._et);
    this._form.data = this._data();
  }

  _changed(v) {
    const config = { ...this._config };
    delete config.title;
    const entities = { ...(this._config.entities || {}) };
    for (const k of EDITOR_ENTITY_KEYS) {
      if (v[k]) entities[k] = v[k];
      else delete entities[k];
    }
    config.entities = entities;
    for (const k of ["invert_grid", "invert_battery", "full_screen", "edit_positions", "static_flows"]) {
      if (v[k]) config[k] = true;
      else delete config[k];
    }
    if (v.height) config.height = v.height;
    else delete config.height;
    if (v.flow_threshold != null && v.flow_threshold !== 10) config.flow_threshold = v.flow_threshold;
    else delete config.flow_threshold;
    const names = { ...(this._config.names || {}) };
    for (const r of NAME_ROLES) {
      const n = (v[`${r}_name`] || "").trim();
      if (n) names[r] = n;
      else delete names[r];
    }
    if (Object.keys(names).length) config.names = names;
    else delete config.names;
    if (v.language && v.language !== "auto") config.language = v.language;
    else delete config.language;

    const colors = { ...(this._config.colors || {}) };
    for (const p of Object.keys(PALETTE)) {
      const rgb = toRgb(v[`${p}_color`]);
      const hex = rgb && toHex(rgb);
      if (!hex || hex === toHex(toRgb(defaultColor(p)))) delete colors[p];
      else colors[p] = hex;
    }
    if (Object.keys(colors).length) config.colors = colors;
    else delete config.colors;

    const show = { ...(this._config.show || {}) };
    if (v.show_vegetation === false) show.vegetation = false;
    else delete show.vegetation;
    if (Object.keys(show).length) config.show = show;
    else delete config.show;

    const langChanged = pickLang(this._config, this._hass) !== pickLang(config, this._hass);
    this._config = config;
    if (langChanged) this._render();
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config }, bubbles: true, composed: true }));
  }
}

if (!customElements.get("energy-house-card-editor")) {
  customElements.define("energy-house-card-editor", EnergyHouseCardEditor);
}

if (!customElements.get("energy-house-card")) {
  customElements.define("energy-house-card", EnergyHouseCard);
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: "energy-house-card",
    name: "Energy House Card",
    description: "Isometric house with animated energy flows: solar, battery, grid and EV.",
    preview: true,
    documentationURL: "https://github.com/dresende/energy-house-card",
  });
  console.info(`%c ENERGY-HOUSE-CARD %c v${VERSION} `, "color:#fff;background:#2fb36d;font-weight:600", "color:#2fb36d;background:transparent");
}
