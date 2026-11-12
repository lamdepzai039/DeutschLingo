const lessons = [
  { id: "a1-1", level: "A1", icon: "👋", title: "Xin chào & giới thiệu bản thân", duration: "8 phút", focus: "Đại từ nhân xưng · sein · câu hỏi W", intro: "Học cách chào hỏi, giới thiệu tên và hỏi thăm người mới gặp.", theory: [
    { title: "Đại từ nhân xưng (Personalpronomen)", text: "Tiếng Đức có 4 đại từ cho ngôi số ít: ich (tôi), du (bạn thân mật), er/sie/es (anh ấy/cô ấy/nó). Số nhiều: wir (chúng tôi), ihr (các bạn thân mật), sie (họ). Sie viết hoa dùng trong giao tiếp lịch sự.", example: "Ich heiße Linh. Wie heißen Sie? — Tôi tên Linh. Quý vị tên gì?" },
    { title: "Động từ sein — thì hiện tại", text: "Sein (là/thì/ở) là động từ bất quy tắc rất quan trọng. Dạng chia: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind. Động từ thường đứng vị trí thứ hai trong câu kể.", example: "Ich bin Studentin. Wir sind aus Vietnam. — Tôi là sinh viên. Chúng tôi đến từ Việt Nam." },
    { title: "Câu hỏi với từ để hỏi", text: "Từ để hỏi như wie (như thế nào), wo (ở đâu), woher (từ đâu), was (cái gì) đứng đầu câu; động từ chia đứng ngay sau từ hỏi, rồi đến chủ ngữ.", example: "Woher kommst du? — Bạn đến từ đâu? · Wie geht es Ihnen? — Quý vị khỏe không?" }
  ], words: [["heißen","tên là"],["kommen","đến, xuất thân"],["wohnen","sống, cư trú"],["der Name","tên"],["die Sprache","ngôn ngữ"],["Guten Morgen","chào buổi sáng"]], questions: [
    ["Chọn dạng đúng: Ich ___ aus Hanoi.",["bin","bist","sind"],0,"Với ich, sein được chia là bin."],
    ["“Bạn tên là gì?” (thân mật) là câu nào?",["Wie heißt du?","Wie heiße du?","Wie heißen du?"],0,"Du đi với động từ heißen chia thành heißt."],
    ["Động từ trong câu hỏi W thường đứng ở đâu?",["Ngay sau từ hỏi","Cuối câu","Sau trạng từ thời gian"],0,"Cấu trúc: từ hỏi + động từ chia + chủ ngữ."],
    ["“Sie” viết hoa trong giao tiếp có nghĩa là gì?",["Quý vị (lịch sự)","Cô ấy","Họ"],0,"Sie viết hoa là đại từ ngôi thứ hai lịch sự."]
  ] },
  { id: "a1-2", level: "A1", icon: "🧺", title: "Đồ vật & mạo từ", duration: "9 phút", focus: "der, die, das · ein/eine · số nhiều", intro: "Gọi tên đồ vật quanh bạn và ghi nhớ giống danh từ ngay từ đầu.", theory: [
    { title: "Giống danh từ: der, die, das", text: "Mỗi danh từ tiếng Đức có giống ngữ pháp: đực (der), cái (die), trung (das). Giống không phải lúc nào cũng theo giới tính tự nhiên, vì vậy hãy học danh từ luôn kèm mạo từ. Mạo từ xác định dùng khi người nghe biết bạn nói về vật nào.", example: "der Tisch (cái bàn) · die Lampe (cái đèn) · das Buch (quyển sách)" },
    { title: "Mạo từ không xác định: ein / eine", text: "Khi nhắc đến một người/vật chưa xác định: ein dùng với danh từ giống đực và trung tính; eine dùng với giống cái. Ở số nhiều không dùng ein/eine.", example: "Das ist ein Stuhl. Das ist eine Tasche. — Đây là một cái ghế. Đây là một chiếc túi." },
    { title: "Danh từ số nhiều", text: "Danh từ số nhiều có nhiều kiểu biến đổi như -e, -er, -n/-en, -s hoặc không đổi; đôi khi nguyên âm đổi thành Umlaut (ä, ö, ü). Luôn học dạng số nhiều cùng danh từ mới.", example: "das Buch → die Bücher · die Lampe → die Lampen" }
  ], words: [["der Stuhl, -¨e","cái ghế"],["die Tasche, -n","cái túi"],["das Buch, -¨er","quyển sách"],["der Schlüssel, -","chìa khóa"],["die Flasche, -n","cái chai"],["das Handy, -s","điện thoại"]], questions: [
    ["Chọn mạo từ: ___ Lampe",["der","die","das"],1,"Lampe là danh từ giống cái: die Lampe."],
    ["“Một quyển sách” là gì?",["ein Buch","eine Buch","einen Buch"],0,"Buch giống trung, dùng ein ở Nominativ."],
    ["Số nhiều của das Buch là gì?",["die Buche","die Bücher","die Buchs"],1,"Buch đổi u thành ü và thêm -er: Bücher."],
    ["Cách học danh từ hiệu quả nhất là gì?",["Ghi nhớ cùng mạo từ và số nhiều","Chỉ học nghĩa tiếng Việt","Đợi đến khi nói mới học giống"],0,"Học cả giống và dạng số nhiều giúp dùng đúng ngay."]
  ] },
  { id: "a1-3", level: "A1", icon: "🥐", title: "Ăn uống & gọi món", duration: "8 phút", focus: "möchten · Akkusativ · câu lịch sự", intro: "Gọi món tự tin tại quán cà phê và nói điều bạn muốn.", theory: [
    { title: "Động từ khuyết thiếu möchten", text: "Möchten (muốn, cách nói lịch sự) chia như động từ thường: ich möchte, du möchtest, er/sie möchte, wir möchten, ihr möchtet, sie möchten. Khi đi với một động từ khác, động từ nguyên mẫu đứng cuối câu.", example: "Ich möchte einen Kaffee trinken. — Tôi muốn uống một cà phê." },
    { title: "Akkusativ — tân ngữ trực tiếp", text: "Khi danh từ là đối tượng trực tiếp của hành động, nó ở Akkusativ. Với mạo từ xác định, chỉ giống đực đổi: der → den. Với không xác định: ein → einen. Die và das không đổi ở cách này.", example: "Ich nehme den Salat und einen Tee. — Tôi lấy món salad và một trà." },
    { title: "Cách gọi món lịch sự", text: "Bạn có thể dùng Ich hätte gern… (Tôi muốn dùng…), Ich nehme… (Tôi lấy…) hoặc Können Sie mir … bringen? (Ông/bà có thể mang cho tôi…?). Bitte và danke khiến lời nói tự nhiên, thân thiện hơn.", example: "Ich hätte gern eine Suppe, bitte. — Cho tôi một phần súp nhé." }
  ], words: [["das Frühstück","bữa sáng"],["das Mittagessen","bữa trưa"],["der Kaffee","cà phê"],["das Wasser","nước"],["die Rechnung","hóa đơn"],["lecker","ngon"]], questions: [
    ["“Tôi muốn uống trà”: Ich möchte Tee ___.",["trinken","trinke","getrunken"],0,"Với möchten, động từ còn lại ở nguyên mẫu cuối câu."],
    ["Chọn câu đúng: Ich nehme ___ Salat.",["der","den","dem"],1,"Salat là giống đực và làm tân ngữ trực tiếp: Akkusativ den."],
    ["Cách nói lịch sự “Cho tôi một cà phê nhé”?",["Ich hätte gern einen Kaffee, bitte.","Ich Kaffee haben.","Ich bin einen Kaffee."],0,"Ich hätte gern… là mẫu câu gọi món lịch sự."],
    ["Mạo từ giống đực ở Akkusativ đổi thế nào?",["der → den","der → dem","der không đổi"],0,"Trong nhóm mạo từ xác định, der đổi thành den."]
  ] },
  { id: "a2-1", level: "A2", icon: "🚆", title: "Một ngày của tôi", duration: "10 phút", focus: "Động từ tách · vị trí từ trong câu", intro: "Mô tả lịch sinh hoạt và nắm chắc cách dùng động từ tách.", theory: [
    { title: "Động từ tách (trennbare Verben)", text: "Một số động từ có tiền tố nhấn âm như aufstehen (thức dậy), einkaufen (mua sắm). Ở câu chính thì hiện tại, động từ chia đứng vị trí thứ hai còn tiền tố chạy xuống cuối câu.", example: "Ich stehe um sieben Uhr auf. — Tôi thức dậy lúc 7 giờ." },
    { title: "Khung câu và vị trí thứ hai", text: "Trong câu kể, động từ đã chia giữ vị trí thứ hai, nhưng vị trí đầu có thể là chủ ngữ hoặc thành phần thời gian. Nếu thời gian lên đầu, chủ ngữ đứng ngay sau động từ.", example: "Am Samstag kaufe ich im Markt ein. — Thứ Bảy tôi mua sắm ở chợ." },
    { title: "Nói giờ hẹn", text: "Uhr dùng cho giờ chính xác; um đứng trước thời điểm. Mốc giờ rưỡi diễn đạt theo hướng đến giờ tiếp theo: halb acht là 7 giờ 30.", example: "Der Kurs beginnt um halb neun. — Lớp học bắt đầu lúc 8 giờ 30." }
  ], words: [["aufstehen","thức dậy"],["anfangen","bắt đầu"],["einkaufen","mua sắm"],["frühstücken","ăn sáng"],["die Mittagspause","giờ nghỉ trưa"],["um halb acht","lúc 7 giờ 30"]], questions: [
    ["Chọn câu đúng: “Tôi thức dậy lúc 6 giờ.”",["Ich stehe um sechs Uhr auf.","Ich aufstehe um sechs Uhr.","Ich stehe auf um sechs Uhr."],0,"Tiền tố auf nằm cuối câu."],
    ["Am Montag ___ ich Deutsch ___. (anfangen)",["fange … an","an … fange","fangen … an"],0,"Vị trí đầu là thời gian, động từ chia fange ở vị trí hai."],
    ["“halb acht” là mấy giờ?",["7:30","8:30","7:15"],0,"Trong tiếng Đức, halb acht nghĩa là nửa đường đến tám giờ."],
    ["Động từ chia trong câu kể thường ở vị trí nào?",["Vị trí thứ hai","Cuối câu","Vị trí đầu tiên luôn luôn"],0,"Quy tắc câu chính tiếng Đức: động từ chia ở vị trí thứ hai."]
  ] },
  { id: "a2-2", level: "A2", icon: "🧭", title: "Kể chuyện cuối tuần", duration: "10 phút", focus: "Perfekt · haben / sein · Partizip II", intro: "Kể về những việc đã làm bằng thì quá khứ giao tiếp thông dụng.", theory: [
    { title: "Thì Perfekt", text: "Perfekt thường dùng khi kể việc đã xảy ra trong hội thoại. Cấu trúc: haben hoặc sein đã chia ở vị trí thứ hai + Partizip II ở cuối câu. Phần lớn động từ dùng haben.", example: "Wir haben einen Film gesehen. — Chúng tôi đã xem một bộ phim." },
    { title: "Khi nào dùng sein?", text: "Các động từ chỉ di chuyển từ nơi này sang nơi khác (gehen, fahren, kommen) hoặc đổi trạng thái (aufstehen, einschlafen) thường đi với sein. Động từ sein/haben tự thân cũng dùng sein/haben tương ứng.", example: "Sie ist nach Berlin gefahren. · Er ist früh aufgestanden." },
    { title: "Cách tạo Partizip II", text: "Động từ có quy tắc thường theo mẫu ge- + gốc + -t (machen → gemacht). Động từ kết thúc -ieren không có ge- (studieren → studiert). Động từ bất quy tắc cần học dạng Partizip riêng (sehen → gesehen).", example: "Ich habe gelernt, gekocht und Musik gehört. — Tôi đã học, nấu ăn và nghe nhạc." }
  ], words: [["gestern","hôm qua"],["das Wochenende","cuối tuần"],["besuchen","thăm"],["gefahren","đã đi bằng xe"],["getroffen","đã gặp"],["zu Hause","ở nhà"]], questions: [
    ["Điền trợ động từ: Wir ___ spät aufgestanden.",["sind","haben","seid"],0,"Aufstehen diễn tả chuyển trạng thái, Perfekt thường đi với sein."],
    ["Partizip II của machen là gì?",["gemacht","gemachen","gemachtet"],0,"Động từ có quy tắc: ge- + gốc mach- + -t."],
    ["Hoàn thành: Ich ___ meine Freundin besucht.",["habe","bin","ist"],0,"Besuchen là động từ thường, dùng haben."],
    ["Vị trí của Partizip II trong câu Perfekt?",["Cuối câu","Đứng trước chủ ngữ","Ngay sau chủ ngữ"],0,"Trợ động từ chia ở vị trí 2, Partizip II đứng cuối câu."]
  ] },
  { id: "a2-3", level: "A2", icon: "🏡", title: "Nhà cửa & Dativ", duration: "11 phút", focus: "Dativ · giới từ hai chiều · vị trí", intro: "Mô tả căn phòng và nói đồ vật đang ở đâu.", theory: [
    { title: "Dativ — người nhận hoặc vị trí", text: "Dativ thường đánh dấu người nhận (tặng cho ai) hoặc đứng sau các giới từ Dativ. Mạo từ xác định đổi: der → dem, die → der, das → dem; số nhiều die → den và danh từ thường thêm -n.", example: "Ich helfe dem Nachbarn. — Tôi giúp người hàng xóm." },
    { title: "Giới từ hai chiều: wo? / wohin?", text: "An, auf, in, unter, über, vor, hinter, neben, zwischen dùng Dativ khi nói vị trí tĩnh (wo? ở đâu) và Akkusativ khi có chuyển động đến nơi (wohin? đi đâu).", example: "Die Lampe steht auf dem Tisch. (vị trí) · Ich stelle die Lampe auf den Tisch. (di chuyển)" },
    { title: "Động từ vị trí và đặt để", text: "Stehen/liegen/sitzen mô tả một vật/người đang ở tư thế nào, đi với câu hỏi wo? Đặt/để như stellen/legen/setzen mô tả chuyển động, đi với wohin?.", example: "Das Buch liegt auf dem Bett. Ich lege das Buch auf das Bett." }
  ], words: [["die Wohnung","căn hộ"],["das Wohnzimmer","phòng khách"],["der Schrank","tủ"],["auf dem Tisch","trên bàn"],["neben","bên cạnh"],["die Miete","tiền thuê nhà"]], questions: [
    ["“Cuốn sách nằm trên bàn”: Das Buch liegt ___ dem Tisch.",["auf","auf den","unter"],0,"Vị trí tĩnh (wo?) dùng Dativ: auf dem Tisch."],
    ["Dativ của der Nachbar là gì?",["dem Nachbarn","den Nachbar","der Nachbar"],0,"Der → dem trong Dativ; danh từ giống đực yếu thêm -n."],
    ["“Tôi đặt cuốn sách lên bàn” dùng cách nào?",["Akkusativ (wohin?)","Dativ (wo?)","Nominativ"],0,"Có chuyển động đặt đến một nơi: wohin? dùng Akkusativ."],
    ["Chọn câu đúng về Dativ số nhiều.",["den Kindern","die Kindern","der Kindern"],0,"Mạo từ Dativ số nhiều là den; danh từ thường thêm -n."]
  ] },
  { id: "b1-1", level: "B1", icon: "🗣️", title: "Nêu ý kiến & lập luận", duration: "12 phút", focus: "Mệnh đề phụ với weil / obwohl / dass", intro: "Kết nối ý tưởng và giải thích quan điểm trong hội thoại, bài viết.", theory: [
    { title: "Mệnh đề phụ với weil và dass", text: "Weil (bởi vì) nêu lý do; dass (rằng) giới thiệu nội dung suy nghĩ/nói. Trong mệnh đề phụ, động từ chia chuyển xuống cuối. Dấu phẩy ngăn cách mệnh đề chính và phụ.", example: "Ich lerne Deutsch, weil ich in Berlin studieren möchte. — Tôi học tiếng Đức vì muốn học ở Berlin." },
    { title: "Mệnh đề nhượng bộ với obwohl", text: "Obwohl (mặc dù) thể hiện hai ý tương phản. Động từ ở cuối mệnh đề obwohl; mệnh đề chính sau dấu phẩy giữ trật tự thông thường, hoặc nếu mệnh đề phụ đứng trước thì động từ chính đứng ngay sau dấu phẩy.", example: "Obwohl es regnet, gehen wir spazieren. — Mặc dù trời mưa, chúng tôi vẫn đi dạo." },
    { title: "Cách nêu và nối quan điểm", text: "Ich bin der Meinung, dass… (Tôi cho rằng…), Meiner Ansicht nach… (Theo quan điểm tôi…) giúp lập luận mạch lạc. Dùng außerdem (ngoài ra), deshalb (vì vậy), jedoch (tuy nhiên) để nối ý.", example: "Meiner Ansicht nach ist das wichtig, weil es viele Menschen betrifft." }
  ], words: [["die Meinung","ý kiến"],["der Grund","lý do"],["obwohl","mặc dù"],["deshalb","vì vậy"],["zustimmen","đồng ý"],["die Erfahrung","trải nghiệm"]], questions: [
    ["Chọn vị trí đúng: Ich bleibe zu Hause, weil ich krank ___.",["bin","ich bin","krank bin ich"],0,"Trong mệnh đề weil, động từ chia bin đứng cuối."],
    ["“Mặc dù đắt, tôi mua chiếc xe”: Obwohl es teuer ist, ___ ich das Auto.",["kaufe","ich kaufe","gekauft"],0,"Mệnh đề phụ đứng trước; sau dấu phẩy động từ chính đứng ngay đầu."],
    ["Từ nào diễn đạt ý “tuy nhiên”?",["jedoch","deshalb","außerdem"],0,"Jedoch nghĩa là tuy nhiên; deshalb là vì vậy."],
    ["Chọn câu đúng: Ich glaube, ___ die Idee gut ist.",["dass","weil","obwohl"],0,"Dass giới thiệu nội dung điều bạn tin rằng."]
  ] },
  { id: "b1-2", level: "B1", icon: "📰", title: "Trải nghiệm & tường thuật", duration: "12 phút", focus: "Präteritum · als / wenn · câu gián tiếp", intro: "Kể lại trải nghiệm, phân biệt sự kiện quá khứ một lần và lặp lại.", theory: [
    { title: "Präteritum trong văn viết và hội thoại", text: "Präteritum phổ biến trong truyện và tin tức. Trong hội thoại, sein (war), haben (hatte) và động từ khuyết thiếu (konnte, musste) cũng rất thường gặp. Động từ có quy tắc thêm -te; bất quy tắc thay đổi thân từ.", example: "Als Kind war ich oft bei meinen Großeltern. — Khi còn nhỏ, tôi thường ở nhà ông bà." },
    { title: "Phân biệt als và wenn", text: "Als dùng cho một sự kiện/thời kỳ cụ thể trong quá khứ. Wenn dùng cho sự việc lặp đi lặp lại trong quá khứ hoặc điều kiện/hiện tại/tương lai. Trong mệnh đề phụ, động từ đứng cuối.", example: "Als ich 18 war, zog ich um. · Wenn ich früher krank war, blieb ich zu Hause." },
    { title: "Kể lại lời nói và ý kiến", text: "Ở mức B1, thường dùng mệnh đề dass để thuật lại điều ai đó nói/suy nghĩ. Động từ truyền đạt như sagen, erzählen, berichten đứng ở mệnh đề chính.", example: "Sie sagt, dass sie morgen keine Zeit hat. — Cô ấy nói rằng ngày mai cô ấy không có thời gian." }
  ], words: [["die Kindheit","tuổi thơ"],["damals","khi ấy"],["die Nachricht","tin tức"],["berichten","tường thuật"],["erleben","trải qua"],["plötzlich","đột nhiên"]], questions: [
    ["Chọn từ đúng: ___ ich klein war, lebte ich in Bonn. (một giai đoạn)",["Als","Wenn","Ob"],0,"Một giai đoạn cụ thể trong quá khứ dùng als."],
    ["Präteritum của sein với ich là gì?",["war","bin","hatte"],0,"Sein ở Präteritum: ich war."],
    ["Mệnh đề dass đặt động từ ở đâu?",["Cuối mệnh đề","Vị trí thứ hai","Ngay sau dass"],0,"Dass mở mệnh đề phụ, động từ chia đứng cuối."],
    ["Sự việc lặp lại trong quá khứ thường dùng liên từ nào?",["wenn","als","denn"],0,"Wenn dùng cho hành động lặp lại; als thường dùng một lần."]
  ] },
  { id: "b1-3", level: "B1", icon: "💼", title: "Công việc & tương lai", duration: "11 phút", focus: "Futur I · um…zu · damit", intro: "Nói về kế hoạch, mục đích và con đường nghề nghiệp.", theory: [
    { title: "Futur I với werden", text: "Futur I dùng werden đã chia + động từ nguyên mẫu ở cuối câu. Trong giao tiếp, hiện tại kèm trạng từ thời gian cũng thường diễn đạt kế hoạch tương lai; werden còn dùng để dự đoán.", example: "Nach dem Kurs werde ich eine Ausbildung machen. — Sau khóa học tôi sẽ học nghề." },
    { title: "um … zu diễn đạt mục đích", text: "Dùng um … zu + động từ nguyên mẫu ở cuối khi chủ ngữ của hai hành động giống nhau. Um đứng đầu cụm mục đích và zu đặt ngay trước động từ nguyên mẫu.", example: "Ich lerne Deutsch, um in Österreich zu arbeiten. — Tôi học tiếng Đức để làm việc ở Áo." },
    { title: "damit khi chủ ngữ khác nhau", text: "Nếu hai hành động có chủ ngữ khác nhau, dùng damit + mệnh đề phụ; động từ chia đứng cuối. So sánh: Ich erkläre es, damit du es verstehst.", example: "Sie schreibt alles auf, damit ihr Kollege nichts vergisst." }
  ], words: [["die Bewerbung","đơn xin việc"],["der Lebenslauf","CV"],["die Fähigkeit","kỹ năng"],["das Ziel","mục tiêu"],["sich bewerben","ứng tuyển"],["die Weiterbildung","đào tạo nâng cao"]], questions: [
    ["Futur I: Ich ___ nächstes Jahr in Deutschland ___. (arbeiten)",["werde … arbeiten","werde … arbeitet","bin … arbeiten"],0,"Werden chia theo chủ ngữ; động từ nguyên mẫu về cuối."],
    ["Cùng chủ ngữ: Ich spare Geld, ___ ein Auto zu kaufen.",["um","damit","weil"],0,"Cùng chủ ngữ dùng um … zu."],
    ["Hai chủ ngữ khác nhau nên chọn: Ich helfe dir, ___ du die Aufgabe schaffst.",["damit","um","denn"],0,"Chủ ngữ thay đổi (ich/du): dùng damit + mệnh đề."],
    ["Trong mệnh đề damit, động từ chia ở đâu?",["Cuối mệnh đề","Vị trí thứ hai","Sau damit"],0,"Damit là liên từ phụ thuộc, động từ chia ở cuối."]
  ] },
  { id: "b2-1", level: "B2", icon: "🏛️", title: "Thể bị động & quy trình", duration: "13 phút", focus: "Passiv · von / durch · trạng thái", intro: "Mô tả quy trình, báo cáo và tập trung vào sự việc thay vì người làm.", theory: [
    { title: "Vorgangspassiv — quá trình bị động", text: "Thể bị động nhấn mạnh hành động/quá trình. Công thức hiện tại: werden chia + Partizip II ở cuối. Đối tượng chịu tác động ở câu chủ động trở thành chủ ngữ Nominativ ở câu bị động.", example: "Die Firma produziert die Geräte. → Die Geräte werden produziert. — Các thiết bị được sản xuất." },
    { title: "Tác nhân với von và durch", text: "Von + Dativ thường nêu người/cơ quan thực hiện. Durch + Akkusativ thường nêu phương tiện, nguyên nhân hoặc tác nhân trung gian. Có thể bỏ tác nhân khi không quan trọng hoặc không biết.", example: "Der Bericht wird von der Ministerin vorgestellt. · Die Tür wurde durch den Wind geöffnet." },
    { title: "Trạng thái bị động: sein + Partizip II", text: "Zustandspassiv dùng sein + Partizip II để mô tả kết quả/trạng thái sau khi hành động hoàn tất; Vorgangspassiv với werden nhấn vào quá trình đang diễn ra.", example: "Die Tür wird geöffnet. (đang được mở) · Die Tür ist geöffnet. (đang ở trạng thái mở)" }
  ], words: [["der Vorgang","quy trình"],["die Maßnahme","biện pháp"],["durchführen","tiến hành"],["herstellen","sản xuất"],["die Voraussetzung","điều kiện tiên quyết"],["betroffen","bị ảnh hưởng"]], questions: [
    ["Chuyển bị động hiện tại: Man repariert das Dach. → Das Dach ___.",["wird repariert","ist reparieren","hat repariert"],0,"Passiv hiện tại: werden chia + Partizip II."],
    ["Tác nhân là một người/tổ chức thường đi với giới từ nào?",["von + Dativ","durch + Akkusativ","mit + Akkusativ"],0,"Von nêu người/cơ quan thực hiện hành động."],
    ["“Cửa đang ở trạng thái đóng” dùng cấu trúc nào?",["Die Tür ist geschlossen.","Die Tür wird geschlossen.","Die Tür hat geschlossen."],0,"Trạng thái sau hành động: sein + Partizip II."],
    ["Vorgangspassiv nhấn mạnh điều gì?",["Quá trình/hành động","Người sở hữu vật","Mục đích hành động"],0,"Vorgangspassiv nhấn mạnh quá trình diễn ra."]
  ] },
  { id: "b2-2", level: "B2", icon: "🧩", title: "Mệnh đề quan hệ nâng cao", duration: "14 phút", focus: "Relativsatz · đại từ quan hệ theo cách", intro: "Mở rộng câu và bổ sung thông tin chính xác, tự nhiên hơn.", theory: [
    { title: "Đại từ quan hệ theo giống và số", text: "Đại từ quan hệ lấy giống và số từ danh từ đứng trước, nhưng cách (Kasus) phụ thuộc vai trò của nó trong mệnh đề quan hệ. Mệnh đề quan hệ thường nằm ngay sau danh từ được bổ nghĩa và ngăn bằng dấu phẩy.", example: "Der Mann, der dort steht, ist mein Lehrer. — Người đàn ông đang đứng kia là thầy tôi." },
    { title: "Chọn cách của đại từ", text: "Nominativ nếu đại từ là chủ ngữ; Akkusativ nếu là tân ngữ trực tiếp; Dativ nếu là tân ngữ gián tiếp hoặc theo giới từ Dativ. Mạo từ có hình thức quen thuộc: den (đực Akk.), dem (đực/trung Dativ), der (cái Dativ).", example: "Die Kollegin, der ich helfe, arbeitet heute. — Đồng nghiệp nữ mà tôi giúp hôm nay làm việc." },
    { title: "Giới từ + đại từ quan hệ", text: "Giới từ đứng ngay trước đại từ quan hệ và quyết định cách. Hãy xác định động từ/giới từ trong mệnh đề cần cách nào trước khi chọn đại từ.", example: "Das Thema, über das wir sprechen, ist aktuell. — Chủ đề mà chúng ta đang nói đến rất thời sự." }
  ], words: [["die Beziehung","mối quan hệ"],["sich beziehen auf","đề cập đến"],["der Zusammenhang","mối liên hệ"],["wobei","trong đó/qua đó"],["derjenige","người/cái đó"],["hinsichtlich","xét về"]], questions: [
    ["Der Film, ___ ich gestern gesehen habe, war spannend.",["den","der","dem"],0,"Film giống đực, là Akkusativ của sehen: den."],
    ["Die Frau, ___ ich die Unterlagen schicke, ist neu.",["der","die","den"],0,"Động từ schicken: gửi cho ai → Dativ giống cái: der."],
    ["Das Projekt, an ___ wir arbeiten, ist wichtig.",["dem","das","den"],0,"Arbeiten an + Dativ; Projekt giống trung: an dem."],
    ["Đại từ quan hệ phụ thuộc vào yếu tố nào để xác định cách?",["Vai trò của nó trong mệnh đề quan hệ","Giống của danh từ đứng trước","Thì của động từ chính"],0,"Giống/số theo danh từ trước; cách theo chức năng trong mệnh đề."]
  ] },
  { id: "b2-3", level: "B2", icon: "💬", title: "Lập luận & giả định", duration: "14 phút", focus: "Konjunktiv II · nhượng bộ · liên kết", intro: "Thảo luận tinh tế, trình bày phương án giả định và phản biện.", theory: [
    { title: "Konjunktiv II: giả định và lịch sự", text: "Konjunktiv II diễn đạt tình huống không có thật, mong muốn hoặc lời đề nghị lịch sự. Các dạng thường dùng: hätte, wäre, könnte, würde + động từ nguyên mẫu. Mẫu würde + Infinitiv phổ biến với nhiều động từ.", example: "Wenn ich mehr Zeit hätte, würde ich ein Praktikum machen. — Nếu có thêm thời gian, tôi sẽ đi thực tập." },
    { title: "Điều kiện giả định", text: "Mệnh đề nếu thường bắt đầu bằng wenn; động từ chia đứng cuối. Nếu mệnh đề wenn đứng trước, mệnh đề chính bắt đầu bằng động từ chia ngay sau dấu phẩy.", example: "Wenn die Stadt mehr Radwege baute, würden weniger Menschen Auto fahren." },
    { title: "Nhượng bộ và lập luận cân bằng", text: "Trotzdem (dù vậy) nối hai câu chính; dennoch (tuy nhiên) trang trọng hơn. Zwar …, aber … thừa nhận một mặt rồi đưa ra ý đối lập; während có thể so sánh hai xu hướng.", example: "Zwar ist die Lösung teuer, aber sie wäre langfristig sinnvoll." }
  ], words: [["die Voraussetzung","điều kiện"],["die Auswirkung","tác động"],["dennoch","tuy nhiên"],["zwar … aber","tuy… nhưng"],["die Stellungnahme","bài nêu quan điểm"],["abwägen","cân nhắc"]], questions: [
    ["“Nếu tôi có thời gian, tôi sẽ đi”: Wenn ich Zeit ___, ___ ich verreisen.",["hätte … würde","habe … werde","hatte … bin"],0,"Giả định dùng hätte và würde + động từ nguyên mẫu."],
    ["Können ở Konjunktiv II ngôi ich là gì?",["könnte","kann","konnte"],0,"Dạng Konjunktiv II: ich könnte."],
    ["Cấu trúc nhượng bộ “Tuy đắt, nhưng hữu ích”?",["Zwar ist es teuer, aber es ist nützlich.","Weil es teuer, aber nützlich.","Obwohl teuer, deshalb nützlich."],0,"Zwar … aber … cân bằng hai mặt đối lập."],
    ["Nếu mệnh đề wenn đứng đầu, từ đầu mệnh đề chính là gì?",["Động từ chia","Chủ ngữ","Trạng từ"],0,"Mệnh đề phụ đứng đầu chiếm vị trí 1; động từ chính đứng vị trí 2."]
  ] }
];

const learningNotes = {
  "a1-1": {
    context: "Bạn gặp một đồng nghiệp mới ở Berlin. Bạn cần chào hỏi, giới thiệu tên và hỏi quê quán một cách thân mật hoặc lịch sự.",
    formula: "Câu kể: Chủ ngữ + động từ đã chia + thông tin còn lại. · Câu hỏi W: Từ hỏi + động từ đã chia + chủ ngữ + …? · Câu hỏi có/không: Động từ đã chia + chủ ngữ + …?",
    logic: "Động từ chia đứng vị trí thứ hai trong câu kể để người nghe sớm biết hành động/chủ thể đang nói đến. Câu hỏi không có từ hỏi đưa động từ lên đầu; câu hỏi W đặt từ cần hỏi lên trước động từ.",
    examples: [["Ich bin Mai. — Tôi là Mai.", "bin = sein chia theo ich."], ["Woher kommst du? — Bạn đến từ đâu?", "Từ hỏi woher + kommst (động từ chia) + du."], ["Wie heißen Sie? — Quý vị tên là gì?", "Sie viết hoa là cách xưng hô lịch sự; heißen chia theo Sie."]],
    trap: "Không nói Ich bist hoặc Wie du heißt? trong câu hỏi W chuẩn. Phân biệt sie (cô ấy/họ) và Sie (quý vị): viết hoa ở ngôi lịch sự, kể cả giữa câu.",
    memory: "Học sein theo nhịp: ich bin – du bist – er ist / wir sind – ihr seid – sie sind. Luyện một câu giới thiệu với mỗi đại từ.",
    summary: "Câu kể: động từ chia ở vị trí 2. · W-Frage: từ hỏi + động từ + chủ ngữ. · sein: bin, bist, ist, sind, seid, sind. · Sie viết hoa = lịch sự.",
    order: ["Woher", "kommst", "du", "?"], blank: { prompt: "___ heißen Sie? — Quý vị tên là gì?", options: ["Wie", "Wo", "Was"], answer: 0 }
  },
  "a1-2": {
    context: "Bạn mua đồ dùng cho căn hộ mới và hỏi tên các vật dụng. Trong từ điển, danh từ luôn đi cùng mạo từ và dạng số nhiều.",
    formula: "Nominativ: der Mann · die Frau · das Kind. / ein Mann · eine Frau · ein Kind. · Akkusativ: den Mann · die Frau · das Kind. / einen Mann · eine Frau · ein Kind.",
    logic: "Mạo từ cho biết giống ngữ pháp (der/die/das), còn đuôi mạo từ thay đổi theo vai trò của danh từ trong câu (Kasus). Trước hết xác định danh từ làm chủ ngữ hay tân ngữ, rồi mới chọn mạo từ.",
    table: true,
    examples: [["Der Tisch ist neu. — Cái bàn mới.", "Tisch là chủ ngữ Nominativ, giống đực: der."], ["Ich kaufe einen Tisch. — Tôi mua một cái bàn.", "Tisch là tân ngữ Akkusativ giống đực: ein → einen."], ["Das Buch liegt neben der Lampe. — Quyển sách nằm cạnh chiếc đèn.", "Buch giống trung; Lampe giống cái, đi sau neben + Dativ: der Lampe."]],
    trap: "Đừng đoán giống chỉ dựa vào nghĩa tiếng Việt. die dùng cho cả danh từ số nhiều, nên màu hồng của mạo từ số nhiều không có nghĩa danh từ ấy là giống cái.",
    memory: "Học danh từ thành một cụm: der Tisch – die Tische; die Lampe – die Lampen; das Buch – die Bücher. Đuôi -ung, -heit, -keit, -schaft thường là giống cái.",
    summary: "Mỗi danh từ có giống riêng; học kèm mạo từ + số nhiều. Nominativ là chủ ngữ. Ở Akkusativ, giống đực đổi der → den, ein → einen.",
    order: ["Das", "Buch", "ist", "neu", "."], blank: { prompt: "Ich sehe ___ Apfel. (der Apfel — tân ngữ trực tiếp)", options: ["den", "dem", "der"], answer: 0 }
  },
  "a1-3": {
    context: "Bạn gọi món tại quán cà phê. Muốn nói lịch sự mình muốn gì và gọi đúng tên món ăn, đồ uống.",
    formula: "möchten (đã chia ở vị trí 2) + … + động từ nguyên mẫu ở cuối. · Chủ ngữ + động từ + tân ngữ Akkusativ. · der → den; ein → einen (giống đực).",
    logic: "Động từ khuyết thiếu như möchten mang thông tin về ý muốn; động từ chính ở nguyên mẫu chuyển về cuối để hoàn tất ý. Món được gọi là đối tượng trực tiếp nên dùng Akkusativ.",
    table: true,
    examples: [["Ich möchte einen Tee trinken. — Tôi muốn uống một trà.", "möchte chia theo ich; trinken ở cuối; ein Tee → einen Tee."], ["Wir nehmen die Suppe. — Chúng tôi lấy món súp.", "Suppe giống cái, Akkusativ vẫn là die."], ["Können Sie mir die Rechnung bringen? — Quý vị mang hóa đơn giúp tôi được không?", "Câu hỏi lịch sự; mir là Dativ (cho tôi), die Rechnung là Akkusativ."]],
    trap: "Không chia động từ cuối câu sau möchten: Ich möchte trinken, không phải Ich möchte trinke. Nhớ phân biệt mir (Dativ: cho tôi) và mich (Akkusativ: tôi).",
    memory: "Cụm lịch sự dễ dùng: Ich hätte gern …, bitte. Khi có hai động từ, động từ chia đứng vị trí 2, nguyên mẫu đứng cuối.",
    summary: "möchten + động từ nguyên mẫu cuối câu. Món ăn/đồ uống là Akkusativ. Chỉ giống đực đổi mạo từ ở Akkusativ: der/ein → den/einen.",
    order: ["Ich", "möchte", "einen Kaffee", "trinken", "."], blank: { prompt: "Ich nehme ___ Salat. (der Salat — tân ngữ)", options: ["den", "dem", "der"], answer: 0 }
  },
  "a2-1": {
    context: "Bạn kể cho bạn cùng nhà lịch sinh hoạt: thức dậy, ăn sáng, đi làm. Các động từ như aufstehen tách tiền tố trong câu chính.",
    formula: "Câu chính hiện tại: Chủ ngữ / thành phần đầu + động từ đã chia ở vị trí 2 + … + tiền tố tách ở cuối.",
    logic: "Tiếng Đức giữ động từ đã chia ở vị trí 2, còn tiền tố nhấn âm được đặt cuối để tạo một khung câu (Satzklammer). Nếu đưa thời gian lên đầu, chủ ngữ đứng ngay sau động từ chia.",
    examples: [["Ich stehe um sieben Uhr auf. — Tôi thức dậy lúc 7 giờ.", "aufstehen → stehe … auf."], ["Am Montag fängt der Kurs an. — Thứ Hai khóa học bắt đầu.", "Thành phần thời gian đứng đầu; fängt vẫn ở vị trí 2."], ["Wir kaufen heute im Supermarkt ein. — Hôm nay chúng tôi mua sắm ở siêu thị.", "einkaufen tách thành kaufen … ein."]],
    trap: "Không để tiền tố ở cạnh động từ đã chia trong câu chính: Ich aufstehe um sieben… là sai. Trong mệnh đề phụ với weil, tiền tố kết hợp lại ở cuối: …weil ich früh aufstehe.",
    memory: "Tưởng tượng động từ tách như hai đầu khung: động từ chia ở vị trí 2, tiền tố đợi ở cuối câu.",
    summary: "Động từ tách: chia phần gốc ở vị trí 2, tiền tố về cuối câu chính. Thành phần thời gian có thể đứng đầu nhưng động từ vẫn ở vị trí 2.",
    order: ["Ich", "stehe", "um sieben Uhr", "auf", "."], blank: { prompt: "Am Samstag ___ ich im Markt ___. (einkaufen)", options: ["kaufe … ein", "ein … kaufe", "kaufen … ein"], answer: 0 }
  },
  "a2-2": {
    context: "Đầu tuần, bạn kể với đồng nghiệp về cuối tuần vừa rồi: đã đi đâu, gặp ai và làm gì.",
    formula: "Câu chính Perfekt: Chủ ngữ + haben/sein (đã chia) + … + Partizip II ở cuối.",
    logic: "Trợ động từ chia mang thông tin về ngôi và thì; Partizip II ở cuối chứa ý nghĩa hành động chính. Phần lớn động từ dùng haben; di chuyển có đích hoặc đổi trạng thái thường dùng sein.",
    examples: [["Ich habe meine Freundin besucht. — Tôi đã thăm bạn mình.", "besuchen dùng haben; Partizip II là besucht (không có ge- sau tiền tố không tách be-)."], ["Wir sind nach Hamburg gefahren. — Chúng tôi đã đi Hamburg.", "fahren chỉ di chuyển đến nơi khác nên dùng sein."], ["Er hat gestern lange gearbeitet. — Hôm qua anh ấy đã làm việc lâu.", "arbeiten có quy tắc: ge + arbeit + et = gearbeitet."]],
    trap: "Đừng chọn sein chỉ vì câu nói về quá khứ. Hãy xem động từ có diễn tả di chuyển/đổi trạng thái không. Động từ kết thúc -ieren không thêm ge-: studiert.",
    memory: "Hỏi nhanh: “đã đi đến đâu/đã đổi trạng thái?” → thường sein; “đã làm gì/đã tác động gì?” → thường haben. Luôn giữ trợ động từ vị trí 2 và Partizip II cuối câu.",
    summary: "Perfekt = haben/sein đã chia + Partizip II cuối câu. Phần lớn dùng haben; di chuyển/đổi trạng thái thường dùng sein. -ieren không có ge-.",
    order: ["Wir", "sind", "nach Berlin", "gefahren", "."], blank: { prompt: "Sie ___ früh aufgestanden. (đổi trạng thái)", options: ["ist", "hat", "sind"], answer: 0 }
  },
  "a2-3": {
    context: "Bạn mô tả căn phòng cho người bạn đang tìm nhà: đồ vật nằm ở đâu và bạn đặt món đồ mới vào vị trí nào.",
    formula: "Wo? vị trí tĩnh → Dativ: auf dem Tisch. · Wohin? chuyển động đến nơi → Akkusativ: auf den Tisch. · Dativ: der → dem, die → der, das → dem; số nhiều die → den (+n).",
    logic: "Giới từ hai chiều không tự quyết định cách; ý nghĩa của động từ mới quan trọng. Mô tả vị trí hiện có (wo) dùng Dativ, còn hành động đưa vật đến nơi (wohin) dùng Akkusativ.",
    table: true,
    examples: [["Das Buch liegt auf dem Tisch. — Quyển sách nằm trên bàn.", "liegt mô tả vị trí: wo? dem Tisch (Dativ)."], ["Ich lege das Buch auf den Tisch. — Tôi đặt quyển sách lên bàn.", "lege có chuyển động: wohin? den Tisch (Akkusativ)."], ["Die Lampe steht neben der Tür. — Đèn đứng cạnh cửa.", "steht là vị trí tĩnh; neben + Dativ: der Tür."]],
    trap: "Không chọn Dativ chỉ vì giới từ là auf/in. So sánh: Ich bin in der Küche (wo?); Ich gehe in die Küche (wohin?).",
    memory: "Hỏi “Wo?” = Dativ; hỏi “Wohin?” = Akkusativ. Động từ mô tả tư thế (stehen/liegen/sitzen) thường tĩnh; đặt/để (stellen/legen/setzen) thường có hướng.",
    summary: "Giới từ hai chiều + wo? → Dativ; wohin? → Akkusativ. Dativ: dem / der / dem / den (+n số nhiều).",
    order: ["Das Buch", "liegt", "auf dem Tisch", "."], blank: { prompt: "Ich stelle den Stuhl ___ Fenster. (đến vị trí — wohin?)", options: ["ans (an das)", "am (an dem)", "dem"], answer: 0 }
  },
  "b1-1": {
    context: "Trong buổi họp, bạn giải thích vì sao ủng hộ một phương án và thừa nhận một khó khăn còn tồn tại.",
    formula: "Mệnh đề chính + dấu phẩy + weil/dass/obwohl + chủ ngữ + … + động từ chia ở cuối. · Nếu mệnh đề phụ đứng đầu: Weil …, động từ chính + chủ ngữ …",
    logic: "Liên từ phụ thuộc báo hiệu người nghe cần chờ phần thông tin chính đến cuối mệnh đề. Vì vậy động từ chia được đặt cuối để đánh dấu điểm kết thúc và liên kết các thành phần phụ thuộc.",
    examples: [["Ich lerne Deutsch, weil ich in Berlin arbeiten möchte. — Tôi học tiếng Đức vì muốn làm việc ở Berlin.", "weil mở mệnh đề phụ; möchte ở cuối, arbeiten là nguyên mẫu."], ["Sie sagt, dass der Kurs hilfreich ist. — Cô ấy nói khóa học hữu ích.", "dass đưa động từ chia ist xuống cuối."], ["Obwohl es regnet, gehen wir spazieren. — Mặc dù trời mưa, chúng tôi vẫn đi dạo.", "Mệnh đề obwohl đứng đầu; động từ chính gehen đứng ngay sau dấu phẩy."]],
    trap: "Không để động từ chia ở vị trí 2 sau weil/dass/obwohl. Phân biệt denn (câu chính, trật tự thường) với weil (mệnh đề phụ, động từ cuối).",
    memory: "Liên từ phụ thuộc mở “cửa ngoặc”: dấu phẩy mở ở đầu, động từ chia khép ở cuối. Nếu cả mệnh đề phụ đứng đầu, động từ chính đảo lên ngay sau dấu phẩy.",
    summary: "weil = lý do; dass = nội dung; obwohl = tương phản. Cả ba đẩy động từ chia xuống cuối mệnh đề phụ.",
    order: ["Ich bleibe zu Hause,", "weil", "ich", "krank", "bin", "."], blank: { prompt: "Ich glaube, dass er heute zu Hause ___.", options: ["bleibt", "er bleibt", "bleiben"], answer: 0 }
  },
  "b1-2": {
    context: "Bạn kể cho bạn mới quen về một lần chuyển thành phố và thói quen thời thơ ấu.",
    formula: "als + một sự kiện/thời kỳ quá khứ. · wenn + hành động lặp lại trong quá khứ hoặc điều kiện. · Mệnh đề als/wenn: động từ chia cuối.",
    logic: "Als đóng khung một mốc hay giai đoạn đã xảy ra một lần; wenn mở điều kiện hoặc những lần lặp lại. Perfekt phổ biến khi nói; Präteritum thường dùng với sein/haben/modal và trong văn viết.",
    examples: [["Als ich 18 war, zog ich nach Köln. — Khi 18 tuổi, tôi chuyển đến Köln.", "Mốc tuổi cụ thể, một giai đoạn: als."], ["Wenn wir früher Ferien hatten, besuchten wir Oma. — Mỗi khi trước đây được nghỉ, chúng tôi thăm bà.", "Sự việc lặp lại: wenn; hatten ở cuối mệnh đề phụ."], ["Sie sagte, dass sie keine Zeit hatte. — Cô ấy nói rằng cô ấy không có thời gian.", "hatte là Präteritum của haben; động từ phụ thuộc đứng cuối."]],
    trap: "Không chọn wenn chỉ vì tiếng Việt dịch là “khi”. Hãy xác định sự kiện là một lần (als) hay lặp lại/điều kiện (wenn).",
    memory: "ALs = một lần trong dĩ vãng. WENN = mỗi khi / nếu. Đọc mốc thời gian trước, rồi mới chọn liên từ.",
    summary: "als: một sự kiện/giai đoạn quá khứ. wenn: lặp lại hoặc điều kiện. Trong mệnh đề phụ, động từ chia đứng cuối.",
    order: ["Als", "ich klein war,", "wohnte", "ich in Bonn", "."], blank: { prompt: "___ ich als Kind krank war, blieb ich zu Hause. (mỗi lần)", options: ["Wenn", "Als", "Dass"], answer: 0 }
  },
  "b1-3": {
    context: "Bạn nói về dự định nghề nghiệp, giải thích mục tiêu học tiếng Đức và cách giúp đồng nghiệp đạt mục tiêu.",
    formula: "Dự đoán/kế hoạch nhấn mạnh: werden (chia) + … + động từ nguyên mẫu cuối. · Cùng chủ ngữ: um … zu + Infinitiv. · Khác chủ ngữ: damit + mệnh đề, động từ cuối.",
    logic: "Um … zu không cần nhắc lại chủ ngữ vì người thực hiện hai hành động là một. Damit tạo mệnh đề độc lập có chủ ngữ riêng, nên động từ tuân theo trật tự mệnh đề phụ.",
    examples: [["Ich werde nächstes Jahr eine Ausbildung machen. — Năm sau tôi sẽ học nghề.", "werde chia theo ich; machen ở nguyên mẫu cuối."], ["Sie lernt Deutsch, um in Wien zu studieren. — Cô ấy học tiếng Đức để học ở Vienna.", "Cùng chủ ngữ sie: um … zu."], ["Ich erkläre es langsam, damit du alles verstehst. — Tôi giải thích chậm để bạn hiểu mọi thứ.", "Chủ ngữ thay đổi ich → du: damit; verstehst cuối mệnh đề."]],
    trap: "Không dùng um … zu nếu chủ ngữ hai hành động khác nhau. Sau động từ khuyết thiếu/cấu trúc Futur, giữ nguyên mẫu: wird machen, không phải wird macht.",
    memory: "Một người làm cả hai việc? um … zu. Có hai người/chủ thể? damit + chủ ngữ + động từ cuối.",
    summary: "Futur I = werden + Infinitiv cuối câu. Cùng chủ ngữ diễn đạt mục đích bằng um … zu; khác chủ ngữ dùng damit.",
    order: ["Ich lerne Deutsch,", "um", "in Deutschland", "zu arbeiten", "."], blank: { prompt: "Ich spare Geld, ___ ich später studieren kann. (chủ ngữ thay đổi)", options: ["damit", "um", "denn"], answer: 0 }
  },
  "b2-1": {
    context: "Bạn đọc báo cáo sản xuất, nơi quy trình quan trọng hơn việc nêu tên người thực hiện.",
    formula: "Vorgangspassiv hiện tại: Chủ ngữ chịu tác động + werden (chia) + … + Partizip II cuối. · Tác nhân: von + Dativ (người/tổ chức), durch + Akkusativ (phương tiện/nguyên nhân).",
    logic: "Đưa đối tượng được tác động lên làm chủ ngữ để nhấn mạnh điều đang xảy ra. Werden mang thì/ngôi; Partizip II nêu hành động. Sein + Partizip II thường mô tả trạng thái kết quả, không phải quá trình.",
    examples: [["Die Geräte werden täglich geprüft. — Các thiết bị được kiểm tra hằng ngày.", "werden chia số nhiều; geprüft ở cuối."], ["Der Bericht wird von der Direktorin vorgestellt. — Báo cáo được giám đốc trình bày.", "von + Dativ nêu người thực hiện."], ["Die Tür ist geöffnet. — Cửa đang ở trạng thái mở.", "sein + Partizip II mô tả trạng thái; so sánh Die Tür wird geöffnet = đang được mở."]],
    trap: "Không dùng sein khi muốn nhấn mạnh một quá trình đang diễn ra. Không quên chia werden theo chủ ngữ mới: das Gerät wird, die Geräte werden.",
    memory: "WERDEN = việc đang được làm (quá trình). SEIN = việc đã xong và trạng thái còn lại.",
    summary: "Passiv quá trình = werden chia + Partizip II cuối câu. von + Dativ cho người thực hiện; durch + Akkusativ cho phương tiện. sein + Partizip II = trạng thái.",
    order: ["Die Geräte", "werden", "heute", "repariert", "."], blank: { prompt: "Der Brief ___ von der Firma ___ . (verschicken — hiện tại)", options: ["wird … verschickt", "ist … verschicken", "werden … verschickt"], answer: 0 }
  },
  "b2-2": {
    context: "Bạn giới thiệu một đồng nghiệp, dự án hoặc chủ đề bằng cách bổ sung thông tin thay vì tách thành nhiều câu ngắn.",
    formula: "Danh từ được bổ nghĩa + dấu phẩy + đại từ quan hệ (giống/số theo danh từ; cách theo chức năng trong mệnh đề) + … + động từ chia cuối.",
    logic: "Đại từ quan hệ thay cho danh từ được nhắc lại. Giống và số giữ nguyên từ danh từ đó; cách mới được xác định bởi vai trò (chủ ngữ/tân ngữ) hoặc giới từ ngay trong mệnh đề quan hệ.",
    table: true,
    examples: [["Der Kollege, der dort arbeitet, spricht drei Sprachen. — Người đồng nghiệp làm việc ở kia nói ba thứ tiếng.", "der là chủ ngữ Nominativ trong mệnh đề quan hệ."], ["Das Buch, das ich lese, ist spannend. — Quyển sách tôi đang đọc rất hấp dẫn.", "Buch giống trung; das là tân ngữ Akkusativ của lese."], ["Die Kollegin, der ich helfe, ist sehr nett. — Đồng nghiệp nữ mà tôi giúp rất thân thiện.", "helfen + Dativ; giống cái Dativ là der."]],
    trap: "Không chọn cách chỉ dựa vào danh từ đứng trước. Hỏi vai trò bên trong mệnh đề quan hệ: ai làm? (Nominativ), làm gì? (Akkusativ), giúp/gửi cho ai? (Dativ).",
    memory: "Giống/số “mượn” từ danh từ trước; cách “làm bài riêng” theo chức năng trong mệnh đề phụ.",
    summary: "Mệnh đề quan hệ đứng sau danh từ, ngăn bằng dấu phẩy; động từ chia cuối. Giống/số theo danh từ trước, cách theo chức năng bên trong.",
    order: ["Das Buch,", "das", "ich lese,", "ist", "spannend", "."], blank: { prompt: "Der Mann, mit ___ ich spreche, ist mein Lehrer. (mit + Dativ)", options: ["dem", "den", "der"], answer: 0 }
  },
  "b2-3": {
    context: "Trong buổi thảo luận, bạn đưa ra phương án giả định và cân nhắc cả lợi ích lẫn hạn chế.",
    formula: "Giả định: wenn + chủ ngữ + … + Konjunktiv II cuối, würde + chủ ngữ + … + Infinitiv cuối. · Zwar …, aber … thừa nhận một mặt rồi nêu mặt đối lập.",
    logic: "Konjunktiv II tạo khoảng cách với thực tế: điều chưa có thật, mong muốn hoặc đề nghị lịch sự. Dạng würde + Infinitiv là khuôn dễ dùng; hätte, wäre, könnte phổ biến và tự nhiên hơn với các động từ ấy.",
    examples: [["Wenn ich mehr Zeit hätte, würde ich öfter lesen. — Nếu có thêm thời gian, tôi sẽ đọc nhiều hơn.", "Điều kiện giả định: hätte; kết quả: würde + lesen."], ["Könnten Sie mir bitte helfen? — Ông/bà có thể giúp tôi được không?", "könnten là lời đề nghị lịch sự."], ["Zwar ist die Lösung teuer, aber sie wäre langfristig sinnvoll. — Tuy giải pháp đắt, nhưng về lâu dài sẽ hợp lý.", "zwar nêu nhượng bộ; aber nêu ý đối lập; wäre là giả định."]],
    trap: "Nếu mệnh đề wenn đứng đầu, sau dấu phẩy động từ chính đứng ngay trước chủ ngữ: Wenn …, würde ich … Không dùng hätte/würde như động từ nguyên mẫu.",
    memory: "Học cặp điều kiện–kết quả: Wenn ich könnte, würde ich helfen. Có thể bắt đầu từ 3 dạng hay gặp: hätte, wäre, könnte.",
    summary: "Konjunktiv II: giả định, mong muốn, lịch sự. wenn + động từ cuối; câu chính thường dùng würde + Infinitiv. Zwar …, aber … = tuy… nhưng…",
    order: ["Wenn ich Zeit hätte,", "würde", "ich", "mehr", "reisen", "."], blank: { prompt: "Wenn ich reich ___, ___ ich um die Welt reisen.", options: ["wäre … würde", "bin … werde", "war … bin"], answer: 0 }
  }
};

const levelInfo = {
  A1: { name: "Khởi đầu thật vui", subtitle: "Xây nền tảng giao tiếp: làm quen, đồ vật, ăn uống và những câu đầu tiên bằng tiếng Đức.", emoji: "🌱", color: "A1", description: "Chào hỏi · danh từ & mạo từ · câu hiện tại · gọi món" },
  A2: { name: "Tự tin trong đời sống", subtitle: "Kể về thói quen, trải nghiệm và những điều quen thuộc trong cuộc sống hằng ngày.", emoji: "🌼", color: "A2", description: "Động từ tách · Perfekt · Dativ · nhà cửa & lịch trình" },
  B1: { name: "Kết nối ý tưởng", subtitle: "Diễn đạt quan điểm, kể trải nghiệm và nói về kế hoạch học tập, công việc.", emoji: "🌿", color: "B1", description: "Mệnh đề phụ · Präteritum · mục đích · lập luận" },
  B2: { name: "Diễn đạt sắc thái", subtitle: "Dùng cấu trúc nâng cao để lập luận, mô tả quy trình và trao đổi tự nhiên.", emoji: "🌳", color: "B2", description: "Bị động · mệnh đề quan hệ · Konjunktiv II" }
};

const STORAGE_KEY = "deutschlingo-progress-v1";
const loadState = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const studyDays = Array.isArray(saved.studyDays) ? saved.studyDays.filter(day => /^\d{4}-\d{2}-\d{2}$/.test(day)) : [];
    if (saved.lastStudy && !studyDays.includes(saved.lastStudy)) studyDays.push(saved.lastStudy);
    const savedDaily = saved.dailyStats && typeof saved.dailyStats === "object" && !Array.isArray(saved.dailyStats) ? saved.dailyStats : {};
    const dailyStats = {
      date: typeof savedDaily.date === "string" ? savedDaily.date : "",
      correct: Math.max(0, Number(savedDaily.correct) || 0),
      lessons: Math.max(0, Number(savedDaily.lessons) || 0),
      xp: Math.max(0, Number(savedDaily.xp) || 0),
      claimed: Array.isArray(savedDaily.claimed) ? savedDaily.claimed.filter(key => ["correct", "lesson", "xp"].includes(key)) : []
    };
    const savedProfile = saved.profile && typeof saved.profile === "object" && !Array.isArray(saved.profile) ? saved.profile : {};
    const savedSettings = saved.settings && typeof saved.settings === "object" && !Array.isArray(saved.settings) ? saved.settings : {};
    const dailyGoal = [5, 10, 15, 20, 30].includes(Number(savedSettings.dailyGoal)) ? Number(savedSettings.dailyGoal) : 10;
    return {
      completed: Array.isArray(saved.completed) ? saved.completed.filter(id => lessons.some(lesson => lesson.id === id)) : [],
      xp: Math.max(0, Number(saved.xp) || 0),
      streak: Math.max(0, Number(saved.streak) || 0),
      lastStudy: typeof saved.lastStudy === "string" ? saved.lastStudy : "",
      studyDate: typeof saved.studyDate === "string" ? saved.studyDate : "",
      minutesToday: Math.max(0, Number(saved.minutesToday) || 0),
      srs: saved.srs && typeof saved.srs === "object" && !Array.isArray(saved.srs) ? saved.srs : {},
      studyDays: [...new Set(studyDays)],
      dailyStats,
      profile: {
        name: typeof savedProfile.name === "string" && savedProfile.name.trim() ? savedProfile.name.trim().slice(0, 32) : "Người học mới",
        avatarImage: typeof savedProfile.avatarImage === "string" && /^data:image\/(?:jpeg|png|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(savedProfile.avatarImage) && savedProfile.avatarImage.length <= 300000 ? savedProfile.avatarImage : ""
      },
      settings: {
        dailyGoal,
        sound: savedSettings.sound !== false,
        animations: savedSettings.animations !== false
      }
    };
  } catch (error) {
    console.error("Không thể đọc tiến độ đã lưu.", error);
    return { completed: [], xp: 0, streak: 0, lastStudy: "", studyDate: "", minutesToday: 0, srs: {}, studyDays: [], dailyStats: { date: "", correct: 0, lessons: 0, xp: 0, claimed: [] }, profile: { name: "Người học mới", avatarImage: "" }, settings: { dailyGoal: 10, sound: true, animations: true } };
  }
};
let state = loadState();
let activePage = "home";
let activeLevel = "A1";
let vocabIndex = 0;
let currentLesson = null;
let lessonStep = "theory";
let questionIndex = 0;
let correctAnswers = 0;
let comboCount = 0;
let bestCombo = 0;
let comboBonusXp = 0;
let comboMessage = "";
let comboMessageTimer = 0;
let answered = false;
let lessonEarned = 0;
let theoryAnswered = false;
let theorySelected = -1;
let drillAnswer = [];
let fillChoice = -1;
let quickReferenceOpen = false;
let quickReferenceTopic = "cases";
let toastTimer;
let grammarFilter = "all";
let grammarSearch = "";
let vocabDueOnly = false;
let pendingAvatarImage = null;
let pendingAvatarName = "";

const pageContent = document.getElementById("page-content");
const modalRoot = document.getElementById("modal-root");
const levelOrder = ["A1", "A2", "B1", "B2"];
const allWords = lessons.flatMap(lesson => lesson.words.map(([word, meaning], index) => ({ word, meaning, level: lesson.level, lesson: lesson.title, example: exampleFor(word), gender: genderColor(word, index) })));
function exampleFor(word) {
  const examples = { "heißen":"Ich heiße Anna.", "kommen":"Woher kommst du?", "wohnen":"Wir wohnen in Berlin.", "der Name":"Mein Name ist Linh.", "die Sprache":"Deutsch ist eine schöne Sprache.", "Guten Morgen":"Guten Morgen, Frau Müller!", "der Stuhl, -¨e":"Der Stuhl ist bequem.", "die Tasche, -n":"Die Tasche ist neu.", "das Buch, -¨er":"Das Buch liegt auf dem Tisch.", "der Schlüssel, -":"Wo ist mein Schlüssel?", "die Flasche, -n":"Die Flasche ist aus Glas.", "das Handy, -s":"Mein Handy ist nicht hier.", "das Frühstück":"Das Frühstück ist schon fertig.", "der Kaffee":"Ich trinke gern Kaffee.", "das Wasser":"Ein Wasser, bitte.", "die Rechnung":"Die Rechnung, bitte.", "lecker":"Die Suppe schmeckt sehr lecker.", "aufstehen":"Ich stehe jeden Tag früh auf.", "anfangen":"Der Film fängt um acht an.", "einkaufen":"Wir kaufen am Samstag ein.", "frühstücken":"Um sieben frühstücke ich.", "die Mittagspause":"Die Mittagspause dauert eine Stunde.", "um halb acht":"Der Zug fährt um halb acht.", "gestern":"Gestern habe ich meine Oma besucht.", "das Wochenende":"Am Wochenende fahre ich ans Meer.", "besuchen":"Wir besuchen unsere Freunde.", "gefahren":"Sie ist mit dem Zug gefahren.", "getroffen":"Ich habe ihn im Café getroffen.", "zu Hause":"Heute bleibe ich zu Hause.", "die Wohnung":"Unsere Wohnung ist sehr hell.", "das Wohnzimmer":"Im Wohnzimmer steht ein Sofa.", "der Schrank":"Die Bücher sind im Schrank.", "auf dem Tisch":"Die Schlüssel liegen auf dem Tisch.", "neben":"Das Café ist neben dem Bahnhof.", "die Miete":"Die Miete ist diesen Monat höher.", "die Meinung":"Meiner Meinung nach ist das richtig.", "der Grund":"Was ist der Grund dafür?", "obwohl":"Obwohl es spät ist, lese ich noch.", "deshalb":"Es regnet, deshalb bleiben wir hier.", "zustimmen":"Ich kann dir nur zustimmen.", "die Erfahrung":"Das war eine interessante Erfahrung.", "die Kindheit":"In meiner Kindheit spielte ich draußen.", "damals":"Damals wohnte ich in München.", "die Nachricht":"Hast du die Nachricht gelesen?", "berichten":"Die Zeitung berichtet darüber.", "erleben":"Wir haben viel zusammen erlebt.", "plötzlich":"Plötzlich wurde es ganz still.", "die Bewerbung":"Ich schreibe gerade eine Bewerbung.", "der Lebenslauf":"Der Lebenslauf ist schon fertig.", "die Fähigkeit":"Teamarbeit ist eine wichtige Fähigkeit.", "das Ziel":"Mein Ziel ist das B2-Zertifikat.", "sich bewerben":"Ich bewerbe mich um eine Stelle.", "die Weiterbildung":"Sie macht eine Weiterbildung.", "der Vorgang":"Der Vorgang wird dokumentiert.", "die Maßnahme":"Die Maßnahme beginnt nächste Woche.", "durchführen":"Wir führen eine Umfrage durch.", "herstellen":"Die Firma stellt Möbel her.", "die Voraussetzung":"Gute Deutschkenntnisse sind eine Voraussetzung.", "betroffen":"Viele Menschen sind davon betroffen.", "die Beziehung":"Die Beziehung zwischen den Themen ist klar.", "sich beziehen auf":"Der Text bezieht sich auf aktuelle Fragen.", "der Zusammenhang":"Es gibt einen Zusammenhang.", "wobei":"Das ist ein Punkt, wobei ich dir zustimme.", "derjenige":"Derjenige, der hilft, bekommt Dank.", "hinsichtlich":"Hinsichtlich der Kosten gibt es Fragen.", "die Auswirkung":"Die Auswirkungen sind deutlich.", "dennoch":"Es regnet, dennoch gehen wir spazieren.", "zwar … aber":"Zwar ist es schwierig, aber machbar.", "die Stellungnahme":"Bitte schreiben Sie eine Stellungnahme.", "abwägen":"Wir müssen die Vor- und Nachteile abwägen." };
  return examples[word] || `${word} — ein wichtiges deutsches Wort.`;
}
function genderColor(word, index) {
  if (word.startsWith("der ")) return "#9bc5e4";
  if (word.startsWith("die ")) return "#e9a1a4";
  if (word.startsWith("das ")) return "#edc66e";
  return ["#a9d781", "#edbc74", "#a9d4e5"][index % 3];
}
function articleGender(word) {
  const match = word.trim().match(/^(?:der|die|das|den|dem|des|ein|eine|einen|einem|einer)\s+([A-Za-zÄÖÜäöüß-]+)/i);
  if (!match) return "";
  const noun = match[1].toLocaleLowerCase("de-DE");
  const fixed = { mann: "masculine", hund: "masculine", hunde: "masculine", tisch: "masculine", salat: "masculine", tee: "masculine", nachbar: "masculine", nachbarn: "masculine", kaffee: "masculine", apfel: "masculine", freund: "masculine", kollege: "masculine", kollegen: "masculine", stuhl: "masculine", schlüssel: "masculine", zug: "masculine", film: "masculine", brief: "masculine", plan: "masculine", morgen: "masculine", name: "masculine", lampe: "feminine", tür: "feminine", suppe: "feminine", rechnung: "feminine", freundin: "feminine", frau: "feminine", kollegin: "feminine", idee: "feminine", tasche: "feminine", sprache: "feminine", flasche: "feminine", wohnung: "feminine", buch: "neuter", kind: "neuter", gerät: "neuter", projekt: "neuter", auto: "neuter", fenster: "neuter", handy: "neuter", thema: "neuter", ergebnis: "neuter", café: "neuter", wochenende: "neuter" };
  return fixed[noun] || "";
}
function germanText(value) {
  const safe = escapeHtml(value);
  return safe.replace(/\b(der|die|das|den|dem|des|ein|eine|einen|einem|einer)\s+([A-Za-zÄÖÜäöüß-]+)/gi, (match, article, noun) => {
    const gender = articleGender(`${article} ${noun}`);
    return gender ? `<span class="gender-${gender}">${article} ${noun}</span>` : match;
  });
}
function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); return true; }
  catch (error) { console.error("Không thể lưu tiến độ.", error); showToast("Không thể lưu tiến độ trên thiết bị này."); return false; }
}
function isValidDateKey(value, allowEmpty = false) {
  if (allowEmpty && value === "") return true;
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}
function normalizeBackupState(data) {
  const isRecord = value => value !== null && typeof value === "object" && !Array.isArray(value);
  const isCount = value => Number.isSafeInteger(value) && value >= 0 && value <= 100000000;
  if (!isRecord(data) || !Array.isArray(data.completed) || data.completed.some(id => typeof id !== "string" || !lessons.some(lesson => lesson.id === id)) || new Set(data.completed).size !== data.completed.length) throw new Error("Danh sách bài học trong bản sao không hợp lệ.");
  if (!isCount(data.xp) || !isCount(data.streak) || !isCount(data.minutesToday) || !isValidDateKey(data.lastStudy, true) || !isValidDateKey(data.studyDate, true)) throw new Error("Thông tin tiến độ trong bản sao không hợp lệ.");
  if (!Array.isArray(data.studyDays) || data.studyDays.length > 400 || data.studyDays.some(day => !isValidDateKey(day))) throw new Error("Lịch học trong bản sao không hợp lệ.");
  if (!isRecord(data.srs) || Object.entries(data.srs).some(([word, item]) => !allWords.some(entry => entry.word === word) || !isRecord(item) || ![1, 3, 7].includes(item.interval) || !isValidDateKey(item.due))) throw new Error("Lịch ôn từ vựng trong bản sao không hợp lệ.");
  if (!isRecord(data.dailyStats) || !isValidDateKey(data.dailyStats.date, true) || !isCount(data.dailyStats.correct) || !isCount(data.dailyStats.lessons) || !isCount(data.dailyStats.xp) || !Array.isArray(data.dailyStats.claimed) || data.dailyStats.claimed.some(key => !["correct", "lesson", "xp"].includes(key))) throw new Error("Thống kê hằng ngày trong bản sao không hợp lệ.");
  if (!isRecord(data.profile) || typeof data.profile.name !== "string" || !data.profile.name.trim() || data.profile.name.trim().length > 32) throw new Error("Hồ sơ trong bản sao không hợp lệ.");
  const avatarImage = data.profile.avatarImage || "";
  if (typeof avatarImage !== "string" || avatarImage.length > 300000 || (avatarImage && !/^data:image\/(?:jpeg|png|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(avatarImage))) throw new Error("Ảnh đại diện trong bản sao không hợp lệ.");
  if (!isRecord(data.settings) || ![5, 10, 15, 20, 30].includes(data.settings.dailyGoal) || typeof data.settings.sound !== "boolean" || typeof data.settings.animations !== "boolean") throw new Error("Cài đặt trong bản sao không hợp lệ.");
  return {
    completed: [...data.completed],
    xp: data.xp,
    streak: data.streak,
    lastStudy: data.lastStudy,
    studyDate: data.studyDate,
    minutesToday: data.minutesToday,
    srs: Object.fromEntries(Object.entries(data.srs).map(([word, item]) => [word, { interval: item.interval, due: item.due }])),
    studyDays: [...new Set(data.studyDays)],
    dailyStats: { date: data.dailyStats.date, correct: data.dailyStats.correct, lessons: data.dailyStats.lessons, xp: data.dailyStats.xp, claimed: [...new Set(data.dailyStats.claimed)] },
    profile: { name: data.profile.name.trim(), avatarImage },
    settings: { dailyGoal: data.settings.dailyGoal, sound: data.settings.sound, animations: data.settings.animations }
  };
}
async function importBackup(file) {
  if (!file || file.size > 5 * 1024 * 1024 || (!file.type.includes("json") && !file.name.toLowerCase().endsWith(".json"))) {
    showToast("Chọn tệp JSON Deutschlingo hợp lệ, dung lượng tối đa 5 MB.");
    return;
  }
  try {
    const backup = JSON.parse(await file.text());
    if (backup?.app !== "DeutschLingo" || backup.version !== 1) throw new Error("Tệp này không phải bản sao Deutschlingo được hỗ trợ.");
    const imported = normalizeBackupState(backup.data);
    if (!window.confirm("Khôi phục bản sao này? Tiến độ, từ ôn tập, hồ sơ và cài đặt hiện tại sẽ bị thay thế.")) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(imported));
    state = imported;
    pendingAvatarImage = null;
    pendingAvatarName = "";
    applySettings();
    showToast("Đã khôi phục bản sao dữ liệu.");
    window.setTimeout(() => window.location.reload(), 500);
  } catch (error) {
    console.error("Không thể khôi phục bản sao dữ liệu.", error);
    showToast(error instanceof SyntaxError ? "Tệp JSON bị lỗi hoặc không đọc được." : error instanceof DOMException && error.name === "QuotaExceededError" ? "Không đủ dung lượng lưu dữ liệu trên thiết bị." : error.message || "Không thể khôi phục bản sao.");
  }
}
function applySettings() {
  document.body.classList.toggle("user-reduced-motion", !state.settings.animations);
}
function levelLessons(level) { return lessons.filter(lesson => lesson.level === level); }
function getNextLesson() { return lessons.find(lesson => !state.completed.includes(lesson.id)) || lessons[0]; }
function progressPercent(level) {
  const items = levelLessons(level);
  return items.length ? Math.round(items.filter(item => state.completed.includes(item.id)).length / items.length * 100) : 0;
}
function updateTopbar() {
  document.getElementById("xp-count").textContent = state.xp;
  const streak = getCurrentStreak();
  document.getElementById("streak-count").textContent = streak;
  document.querySelector(".streak-pill").classList.toggle("streak-active", streak > 0);
  document.querySelectorAll(".top-avatar").forEach(button => { button.innerHTML = avatarMarkup(state.profile.avatarImage); });
  document.querySelectorAll(".profile-button .avatar").forEach(avatar => { avatar.innerHTML = avatarMarkup(state.profile.avatarImage); });
  document.querySelectorAll(".profile-button .profile-copy strong").forEach(name => { name.textContent = state.profile.name; });
  document.querySelectorAll(".profile-button .profile-copy small").forEach(label => { label.textContent = learnerRank(state.xp).name; });
  document.querySelectorAll(".profile-button").forEach(button => { button.setAttribute("aria-label", `Hồ sơ của ${state.profile.name}`); });
}
function avatarMarkup(image = "") {
  if (image) return `<img class="avatar-photo" src="${escapeHtml(image)}" alt="">`;
  return `<svg class="avatar-illustration" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="23" r="10.5"/><path d="M11 56c1.2-11.2 9.5-18 21-18s19.8 6.8 21 18"/></svg>`;
}
function getCurrentStreak() {
  if (!state.lastStudy) return 0;
  const today = new Date(`${localDateKey()}T00:00:00`);
  const lastStudy = new Date(`${state.lastStudy}T00:00:00`);
  const daysSinceStudy = Math.round((today - lastStudy) / 86400000);
  return daysSinceStudy >= 0 && daysSinceStudy <= 1 ? state.streak : 0;
}
function streakFlameSvg() {
  return '<svg viewBox="0 0 32 32" aria-hidden="true"><path class="flame-outer" d="M17.4 2.8c1.2 6.4-3.1 7.5-2.4 12.1-2.2-1.2-3.2-3.2-3-5.7C7.2 13.1 5 17 5 21a11 11 0 0 0 22 0c0-6.1-4.1-12-9.6-18.2Z"/><path class="flame-inner" d="M16.5 16.4c.5 3.1-2.4 4.2-2.1 6.6.1 1.4 1.2 2.5 2.7 2.5a3 3 0 0 0 3-3.1c0-2.1-1.6-4.2-3.6-6Z"/></svg>';
}
function renderStreakWeek() {
  const today = new Date();
  const currentStreak = getCurrentStreak();
  const mondayOffset = (today.getDay() + 6) % 7;
  const monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - mondayOffset);
  const labels = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  const days = labels.map((label, index) => {
    const date = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + index);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    const isToday = key === localDateKey();
    const studied = state.studyDays.includes(key);
    return `<div class="streak-day ${studied ? "studied" : ""} ${isToday ? "today" : ""}" ${isToday ? 'aria-current="date"' : ""}><span>${label}</span><i>${studied ? '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9"/></svg>' : ""}</i><small>${date.getDate()}</small></div>`;
  }).join("");
  return `<section class="week-streak-card"><div class="week-streak-heading"><div><span class="eyebrow">NHỊP HỌC CỦA BẠN</span><h3>Tuần này</h3></div><div class="week-streak-total">${streakFlameSvg()}<strong>${currentStreak}</strong><small>ngày streak</small></div></div><div class="streak-week" aria-label="Lịch học trong tuần">${days}</div><p>${state.studyDays.includes(localDateKey()) ? "Hôm nay đã được ghi nhận. Hẹn gặp bạn ngày mai!" : "Hoàn thành một bài học hôm nay để giữ nhịp nhé."}</p></section>`;
}
function wordOfTheDay() {
  const [year, month, day] = localDateKey().split("-").map(Number);
  const dayNumber = Math.floor(Date.UTC(year, month - 1, day) / 86400000);
  return allWords[dayNumber % allWords.length];
}
function renderWordSpotlight() {
  const item = wordOfTheDay();
  return `<section class="word-spotlight" aria-labelledby="word-spotlight-title">
    <div class="word-spotlight-copy">
      <span class="word-spotlight-kicker"><span aria-hidden="true">✦</span> MỖI NGÀY MỘT TỪ MỚI</span>
      <span class="word-spotlight-level">${item.level} · ${escapeHtml(item.lesson)}</span>
      <h3 id="word-spotlight-title">${germanText(item.word)}</h3>
      <p class="word-spotlight-meaning">${escapeHtml(item.meaning)}</p>
      <p class="word-spotlight-example">${germanText(item.example)}</p>
      <div class="word-spotlight-actions">
        <button class="word-audio-button" data-action="play-word-of-day" aria-label="Nghe phát âm ${escapeHtml(item.word)}">🔊 <span>Nghe phát âm</span></button>
        <button class="word-library-link" data-page="vocabulary">Khám phá kho từ <span aria-hidden="true">→</span></button>
      </div>
    </div>
    <div class="word-spotlight-art" aria-hidden="true"><span>Ä</span><i></i><b>✦</b></div>
  </section>`;
}
function getDailyStats() {
  const saved = state.dailyStats;
  return saved?.date === localDateKey() ? saved : { date: localDateKey(), correct: 0, lessons: 0, xp: 0 };
}
function updateDailyStats(changes) {
  state.dailyStats = { ...getDailyStats(), ...changes, date: localDateKey() };
  const quests = [
    { key: "correct", target: 5, reward: 10, value: state.dailyStats.correct },
    { key: "lesson", target: 1, reward: 20, value: state.dailyStats.lessons },
    { key: "xp", target: 25, reward: 15, value: state.dailyStats.xp }
  ];
  const claimed = Array.isArray(state.dailyStats.claimed) ? state.dailyStats.claimed : [];
  const newlyCompleted = quests.filter(quest => quest.value >= quest.target && !claimed.includes(quest.key));
  if (newlyCompleted.length) {
    state.xp += newlyCompleted.reduce((total, quest) => total + quest.reward, 0);
    state.dailyStats.claimed = [...claimed, ...newlyCompleted.map(quest => quest.key)];
    newlyCompleted.forEach(quest => showToast(`Nhiệm vụ hoàn thành · +${quest.reward} XP`));
  }
  persist();
}
function learnerRank(xp) {
  const ranks = [
    { name: "Người mới", min: 0, next: 100 },
    { name: "Khám phá viên", min: 100, next: 250 },
    { name: "Nhà ngôn ngữ", min: 250, next: 500 },
    { name: "Deutsch-Profi", min: 500, next: 900 },
    { name: "Deutsch-Meister", min: 900, next: 900 }
  ];
  const rank = [...ranks].reverse().find(item => xp >= item.min) || ranks[0];
  const progress = rank.next === rank.min ? 100 : Math.min(100, Math.round((xp - rank.min) / (rank.next - rank.min) * 100));
  return { ...rank, progress, remaining: Math.max(0, rank.next - xp) };
}
function questIcon(name) {
  const paths = {
    correct: '<path d="m5 12 4 4L19 6"/><path d="M21 12a9 9 0 1 1-2.6-6.4"/>',
    lesson: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22.5z"/><path d="M4 5.5v17M8 7h8m-8 4h8"/>',
    xp: '<path d="m12 2 2.8 6.2L22 9l-5.2 4.7 1.4 7.1L12 17.2l-6.2 3.6 1.4-7.1L2 9l7.2-.8z"/>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`;
}
function renderDailyQuests() {
  const stats = getDailyStats();
  const quests = [
    { id: "correct", title: "Trả lời chính xác", detail: "5 câu đúng", value: stats.correct, target: 5, xp: 10 },
    { id: "lesson", title: "Hoàn thành bài học", detail: "1 bài học", value: stats.lessons, target: 1, xp: 20 },
    { id: "xp", title: "Tích lũy kinh nghiệm", detail: "25 XP hôm nay", value: stats.xp, target: 25, xp: 15 }
  ];
  const done = quests.filter(quest => quest.value >= quest.target).length;
  return `<section class="daily-quests"><div class="quest-heading"><div><span class="eyebrow">THỬ THÁCH HÔM NAY</span><h2>Nhiệm vụ nhỏ, tiến bộ lớn</h2></div><span class="quest-completion">${done}/${quests.length} xong</span></div><div class="quest-list">${quests.map(quest => {
    const progress = Math.min(100, Math.round(quest.value / quest.target * 100));
    const complete = progress >= 100;
    const claimed = Array.isArray(stats.claimed) && stats.claimed.includes(quest.id);
    return `<article class="quest-card ${complete ? "quest-done" : ""}"><span class="quest-icon">${questIcon(quest.id)}</span><div class="quest-main"><div class="quest-title-row"><strong>${quest.title}</strong><span>${complete ? claimed ? "ĐÃ NHẬN" : "HOÀN TẤT" : `+${quest.xp} XP`}</span></div><small>${complete ? "Bạn đã hoàn thành thử thách này!" : quest.detail}</small><div class="quest-progress" role="progressbar" aria-label="${quest.title}" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100"><span style="width:${progress}%"></span></div></div><span class="quest-value">${Math.min(quest.value, quest.target)}<small>/${quest.target}</small></span></article>`;
  }).join("")}</div>${done === quests.length ? '<p class="quest-all-done">Tuyệt vời! Bạn đã hoàn thành mọi nhiệm vụ hôm nay.</p>' : ""}</section>`;
}
function renderRankCard() {
  const rank = learnerRank(state.xp);
  const completedLessons = lessons.filter(lesson => state.completed.includes(lesson.id)).length;
  const overallProgress = Math.round(completedLessons / lessons.length * 100);
  const activeCourse = activePage === "path"
    ? activeLevel
    : levelOrder.find(level => progressPercent(level) < 100) || levelOrder[levelOrder.length - 1];
  const levels = levelOrder.map(level => {
    const complete = progressPercent(level) === 100;
    const current = level === activeCourse && !complete;
    return `<span class="course-milestone ${complete ? "complete" : ""} ${current ? "current" : ""}" aria-label="${level}${complete ? " đã hoàn thành" : current ? " hiện tại" : ""}">${complete ? '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m3 8 3 3 7-7"/></svg>' : level}</span>`;
  }).join("");
  return `<section class="rank-card"><div class="rank-emblem"><span>${rank.name === "Người mới" ? "I" : rank.name === "Khám phá viên" ? "II" : rank.name === "Nhà ngôn ngữ" ? "III" : rank.name === "Deutsch-Profi" ? "IV" : "V"}</span></div><div class="rank-info"><div class="rank-heading"><div><span class="eyebrow">CẤP ĐỘ NGƯỜI HỌC</span><h3>${rank.name}</h3></div><strong>${state.xp} XP</strong></div><div class="rank-track" role="progressbar" aria-label="Tiến độ cấp XP" aria-valuenow="${rank.progress}" aria-valuemin="0" aria-valuemax="100"><span style="width:${rank.progress}%"></span></div><small>${rank.remaining ? `Còn ${rank.remaining} XP để lên cấp tiếp theo` : "Đã đạt cấp cao nhất — xuất sắc!"}</small><div class="course-progress"><div class="course-progress-label"><span>Hành trình A1–B2</span><strong>${completedLessons}/${lessons.length} bài · ${overallProgress}%</strong></div><div class="course-progress-track" role="progressbar" aria-label="Tiến độ toàn khóa học" aria-valuenow="${overallProgress}" aria-valuemin="0" aria-valuemax="100"><span style="width:${overallProgress}%"></span></div><div class="course-milestones">${levels}</div></div></div></section>`;
}
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function setPage(page) {
  const titles = { home: "Tổng quan", path: "Lộ trình học", grammar: "Ngữ pháp nhanh", vocabulary: "Từ vựng & ôn tập", speaking: "Luyện phát âm", achievements: "Thành tích", profile: "Hồ sơ", settings: "Cài đặt" };
  if (!Object.prototype.hasOwnProperty.call(titles, page)) return;
  if (activeStream && page !== "speaking") {
    stopSpeaking();
    speakingStatus = "Phiên luyện nói đã dừng khi chuyển trang.";
  }
  if (page !== "speaking" && "speechSynthesis" in window) window.speechSynthesis.cancel();
  activePage = page;
  document.querySelectorAll(".nav-link").forEach(button => {
    const active = button.dataset.page === page;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  document.getElementById("breadcrumb-current").textContent = titles[page];
  renderPage();
  closeMobileMenu();
}
function closeMobileMenu() {
  document.getElementById("sidebar").classList.remove("open");
  const menuToggle = document.getElementById("menu-toggle");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Mở menu");
  document.body.classList.remove("menu-open");
}
function renderPage() {
  updateTopbar();
  if (activePage === "home") renderHome();
  if (activePage === "path") renderPath();
  if (activePage === "grammar") renderGrammar();
  if (activePage === "vocabulary") renderVocabulary();
  if (activePage === "speaking") renderSpeaking();
  if (activePage === "achievements") renderAchievements();
  if (activePage === "profile") renderProfile();
  if (activePage === "settings") renderSettings();
  renderRightRail();
}
function renderRightRail() {
  const completedLessons = lessons.filter(lesson => state.completed.includes(lesson.id)).length;
  const overallProgress = Math.round(completedLessons / lessons.length * 100);
  const activeCourse = activePage === "path"
    ? activeLevel
    : levelOrder.find(level => progressPercent(level) < 100) || levelOrder[levelOrder.length - 1];
  const levelDone = levelLessons(activeCourse).filter(lesson => state.completed.includes(lesson.id)).length;
  const rank = learnerRank(state.xp);
  document.getElementById("right-rail").innerHTML = `
    <section class="rail-card rail-course">
      <div class="rail-card-heading"><span class="eyebrow">CHẶNG ĐANG HỌC</span><span class="rail-level-badge">${activeCourse}</span></div>
      <h2>${levelInfo[activeCourse].name}</h2>
      <p>${levelDone}/${levelLessons(activeCourse).length} bài đã hoàn thành · ${overallProgress}% toàn khóa</p>
      <div class="rail-progress" role="progressbar" aria-label="Tiến độ toàn khóa" aria-valuenow="${overallProgress}" aria-valuemin="0" aria-valuemax="100"><span style="width:${overallProgress}%"></span></div>
      <div class="rail-rank"><span class="rail-rank-mark">${rank.name === "Người mới" ? "I" : rank.name === "Khám phá viên" ? "II" : rank.name === "Nhà ngôn ngữ" ? "III" : rank.name === "Deutsch-Profi" ? "IV" : "V"}</span><span><small>CẤP ĐỘ NGƯỜI HỌC</small><strong>${rank.name}</strong></span><b>${state.xp} XP</b></div>
    </section>
    <section class="rail-quests">${renderDailyQuests()}</section>
    <section class="rail-card rail-encouragement"><span class="rail-spark">✦</span><h2>Tiến bộ từng chút một.</h2><p>Một bài học ngắn hôm nay sẽ đưa bạn gần hơn tới mục tiêu tiếng Đức.</p><button class="rail-action" data-page="path">Tiếp tục học <span>→</span></button></section>`;
}
function renderHome() {
  const next = getNextLesson();
  const doneTotal = state.completed.length;
  const totalProgress = Math.round(doneTotal / lessons.length * 100);
  const learnedWords = new Set(lessons.filter(lesson => state.completed.includes(lesson.id)).flatMap(lesson => lesson.words.map(([word]) => word))).size;
  const currentStreak = getCurrentStreak();
  const goal = state.settings.dailyGoal;
  const todayMinutes = state.studyDate === localDateKey() ? state.minutesToday : 0;
  const goalAngle = Math.min(360, todayMinutes / goal * 360);
  const welcomeHeading = doneTotal ? "Bạn đang tiến bộ mỗi ngày." : "Tiếng Đức của bạn bắt đầu từ đây.";
  pageContent.innerHTML = `
    <div class="welcome-row"><div><div class="eyebrow">CHÀO MỪNG BẠN ĐẾN VỚI DEUTSCHLINGO</div><h1>Hallo, ${escapeHtml(state.profile.name)}! <span>☀️</span></h1><p class="welcome-copy">Mỗi ngày một chút — tiếng Đức sẽ trở nên thật gần.</p></div><div class="date-chip">📅 &nbsp;${new Intl.DateTimeFormat("vi-VN", { weekday: "long", day: "numeric", month: "long" }).format(new Date())}</div></div>
    <section class="hero-card"><div class="hero-copy"><div class="hero-label"><i></i> ${doneTotal ? "BẠN ĐANG TIẾN BỘ MỖI NGÀY" : "MỘT HÀNH TRÌNH MỚI ĐANG CHỜ"}</div><h2>${welcomeHeading}</h2><p>Những bài học ngắn, vui và hữu ích — được thiết kế để bạn tiến bộ mỗi ngày.</p><button class="button-primary" data-action="start-next">${doneTotal ? "Tiếp tục học" : "Bắt đầu bài học đầu tiên"} <span>→</span></button></div><div class="hero-art" aria-hidden="true"><div class="hero-sun"></div><div class="hero-orbit"></div><svg class="hero-book" viewBox="0 0 220 220" role="presentation"><ellipse cx="110" cy="197" rx="66" ry="10" fill="#418a67" opacity=".16"/><path d="M37 67c26-10 49-6 73 9v92c-24-15-47-19-73-9z" fill="#fffdf3" stroke="#416c4d" stroke-width="5" stroke-linejoin="round"/><path d="M183 67c-26-10-49-6-73 9v92c24-15 47-19 73-9z" fill="#e5f6c9" stroke="#416c4d" stroke-width="5" stroke-linejoin="round"/><path d="M110 76v94" stroke="#416c4d" stroke-width="4"/><path d="M51 82c15-4 30-2 43 4m-43 9c15-4 30-2 43 4m-43 9c12-3 23-2 33 1m61-23c12-4 23-4 35 0m-35 9c12-4 23-4 35 0m-35 9c10-3 21-4 31-2" fill="none" stroke="#b3d58c" stroke-width="4" stroke-linecap="round"/><path d="M110 62c-12-19-2-34 7-41 4 14 2 22-7 28 14-13 30-9 37-1-12 2-23 7-37 14Z" fill="#65ae72" stroke="#416c4d" stroke-width="4" stroke-linejoin="round"/><circle cx="82" cy="131" r="4" fill="#304e3c"/><circle cx="96" cy="131" r="4" fill="#304e3c"/><path d="M82 141c4 5 10 5 14 0" fill="none" stroke="#e28c62" stroke-width="3" stroke-linecap="round"/><path d="M68 137c-9 1-13 6-15 12m91-12c9 1 13 6 15 12" fill="none" stroke="#416c4d" stroke-width="4" stroke-linecap="round"/></svg><span class="float-word one">Guten Tag!</span><span class="float-word two">du schaffst das ✦</span><span class="float-word three">Hallo!</span></div></section>
    <div class="dashboard-grid"><div><div class="section-heading"><h2>Tiếp tục hành trình</h2><button class="text-link" data-page="path">Xem lộ trình →</button></div><div class="continue-card"><div class="lesson-icon">${next.icon}</div><div class="continue-copy"><span class="small-level">${next.level} · ${next.focus}</span><h3>${next.title}</h3><p>${next.duration} &nbsp;·&nbsp; ${state.completed.includes(next.id) ? "Ôn tập lại để ghi nhớ" : "Bài học tiếp theo của bạn"}</p><div class="progress-track" role="progressbar" aria-label="Tiến độ khóa học" aria-valuenow="${totalProgress}" aria-valuemin="0" aria-valuemax="100"><span style="width:${totalProgress}%"></span></div><small class="continue-progress-label">${totalProgress}% toàn khóa đã hoàn thành</small></div><button class="continue-action" data-lesson="${next.id}" aria-label="Mở bài học">→</button></div>
      <div class="stat-grid"><article class="stat-card stat-streak"><span class="stat-icon">${streakFlameSvg()}</span><strong class="stat-value">${currentStreak}</strong><span class="stat-label">Ngày học liên tiếp</span></article><article class="stat-card stat-lessons"><span class="stat-icon">${questIcon("lesson")}</span><strong class="stat-value">${doneTotal}<small>/${lessons.length}</small></strong><span class="stat-label">Bài học hoàn thành</span></article><article class="stat-card stat-vocabulary"><span class="stat-icon">${questIcon("correct")}</span><strong class="stat-value">${learnedWords}<small> từ</small></strong><span class="stat-label">Từ đã gặp trong bài học</span></article><article class="stat-card stat-progress"><span class="stat-icon">${questIcon("xp")}</span><strong class="stat-value">${totalProgress}<small>%</small></strong><span class="stat-label">Tiến độ toàn khóa</span></article></div>
    </div><div><div class="section-heading"><h2>Mục tiêu hôm nay</h2><span class="eyebrow">${goal} PHÚT</span></div><div class="goal-card ${todayMinutes >= goal ? "goal-complete" : ""}"><div class="goal-card-top"><div><span class="eyebrow">MỤC TIÊU HẰNG NGÀY</span><h3>${todayMinutes >= goal ? "Bạn đã hoàn thành mục tiêu!" : "Mỗi phút đều có ý nghĩa."}</h3></div><span class="goal-icon">${todayMinutes >= goal ? "✓" : "◎"}</span></div><div class="goal-ring" role="progressbar" aria-label="Mục tiêu học tập hôm nay" aria-valuenow="${Math.min(todayMinutes, goal)}" aria-valuemin="0" aria-valuemax="${goal}" style="--goal-angle:${goalAngle}deg"><div class="goal-ring-content"><strong>${todayMinutes}<small style="display:inline;font-size:10px">/${goal}</small></strong><small>phút hôm nay</small></div></div><p class="goal-note">${todayMinutes >= goal ? "Tuyệt vời! Mục tiêu hôm nay đã hoàn thành." : todayMinutes ? `Còn ${goal - todayMinutes} phút để hoàn thành mục tiêu.` : "Hoàn thành một bài học để tiến gần mục tiêu nhé."}</p></div></div></div>
    ${renderRankCard()}
    ${renderDailyQuests()}
    ${renderStreakWeek()}
    ${renderWordSpotlight()}
    <div style="margin-top:24px"><div class="section-heading"><h2>Chọn cấp độ của bạn</h2><button class="text-link" data-page="path">Khám phá tất cả →</button></div><div class="level-tabs">${levelOrder.map(level => `<button class="level-tab" data-level="${level}">${level}</button>`).join("")}</div></div>`;
}
function renderPath() {
  const info = levelInfo[activeLevel];
  const items = levelLessons(activeLevel);
  const done = items.filter(item => state.completed.includes(item.id)).length;
  const index = levelOrder.indexOf(activeLevel);
  const complete = done === items.length;
  const nextLevel = levelOrder[index + 1];
  const currentLessonId = items.find(item => !state.completed.includes(item.id))?.id;
  const featuredLesson = items.find(item => item.id === currentLessonId) || items[items.length - 1];
  const featuredAction = complete && nextLevel
    ? `<button class="path-featured-action" data-level="${nextLevel}">CHẶNG TIẾP THEO <span>→</span></button>`
    : `<button class="path-featured-action" data-lesson="${featuredLesson.id}">BẮT ĐẦU <span>→</span></button>`;
  const journey = items.map((lesson, i) => {
    const finished = state.completed.includes(lesson.id);
    const current = !finished && lesson.id === currentLessonId;
    const status = finished ? "complete" : current ? "current" : "upcoming";
    const nodeIcon = finished
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>'
      : current
        ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.8 5.7 6.3.9-4.6 4.5 1.1 6.3-5.6-3-5.6 3 1.1-6.3L3 9.4l6.3-.9z"/></svg>'
        : `<span aria-hidden="true">${lesson.icon}</span>`;
    return `<button class="journey-node ${status}" data-lesson="${lesson.id}" aria-label="${lesson.title} · ${finished ? "Ôn tập lại" : current ? "Bài học tiếp theo" : "Học bài này"}" ${current ? 'aria-current="step"' : ""}><span class="journey-node-number">BÀI ${String(i + 1).padStart(2, "0")}</span><span class="journey-node-orb">${nodeIcon}</span><span class="journey-node-copy"><strong>${lesson.title}</strong><small>${lesson.duration} · ${lesson.focus}</small></span><span class="journey-node-status">${finished ? "ĐÃ HOÀN THÀNH" : current ? "BẮT ĐẦU" : "HỌC BÀI NÀY"}</span></button>`;
  }).join("");
  const checkpoint = `<section class="path-checkpoint ${complete ? "checkpoint-complete" : ""}"><span class="checkpoint-mark">${complete ? '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9"/></svg>' : `<span>${activeLevel}</span>`}</span><div><strong>${complete ? `Đã chinh phục ${activeLevel}` : `Cột mốc ${activeLevel}`}</strong><small>${complete ? `${done}/${items.length} bài học hoàn thành · bạn có thể tiếp tục bất cứ lúc nào` : `Bạn có thể chọn học bài khác hoặc tiếp tục theo lộ trình`}</small></div>${nextLevel ? `<button class="button-quiet" data-level="${nextLevel}" aria-label="Đi đến cấp ${nextLevel}">Đi tiếp →</button>` : ""}</section>`;
  pageContent.innerHTML = `<section class="path-featured"><div class="path-featured-copy"><span class="featured-kicker"><i></i> PHẦN ${index + 1} · ${activeLevel}</span><h1>${complete ? `Bạn đã hoàn thành ${activeLevel}!` : featuredLesson.title}</h1><p>${complete ? "Sẵn sàng khám phá chặng tiếp theo?" : `${activeLevel} · ${featuredLesson.focus}`}</p><div class="featured-progress"><span class="featured-progress-track"><i style="width:${Math.round(done / items.length * 100)}%"></i></span><small>${done}/${items.length} bài hoàn thành</small></div></div><div class="featured-mascot" aria-hidden="true"><svg viewBox="0 0 120 120"><path d="M22 37c13-7 26-5 38 3v46c-12-8-25-10-38-3z" fill="#f3ffd9" stroke="#286b22" stroke-width="4" stroke-linejoin="round"/><path d="M98 37c-13-7-26-5-38 3v46c12-8 25-10 38-3z" fill="#d9ffad" stroke="#286b22" stroke-width="4" stroke-linejoin="round"/><path d="M60 40v45" stroke="#286b22" stroke-width="3"/><path d="M32 49h17m-17 9h17m22-9h17m-17 9h17" stroke="#8acb57" stroke-width="3" stroke-linecap="round"/><circle cx="48" cy="68" r="3" fill="#28543a"/><circle cx="57" cy="68" r="3" fill="#28543a"/><path d="M49 75c3 3 6 3 9 0" fill="none" stroke="#e57e5e" stroke-width="2.5" stroke-linecap="round"/><path d="M60 30c-7-9-3-17 2-22 2 7 2 11-2 15 8-7 16-5 20 0-7 1-13 3-20 7Z" fill="#b5f072" stroke="#286b22" stroke-width="3" stroke-linejoin="round"/></svg><span>Hallo!</span></div>${featuredAction}</section>
    <div class="path-heading"><div><div class="eyebrow">BẢN ĐỒ HỌC TẬP CỦA BẠN</div><h2>Lộ trình học</h2><p>Đi từng bước nhỏ, chinh phục từng cấp độ lớn.</p></div><span class="date-chip">✦ &nbsp; A1 → B2</span></div>
    <div class="level-tabs">${levelOrder.map(level => `<button class="level-tab ${activeLevel === level ? "active" : ""}" data-level="${level}">${level}</button>`).join("")}</div>
    <section class="level-banner level-${activeLevel}"><span class="level-emoji">${info.emoji}</span><div class="level-banner-copy"><span class="level-overline">CHẶNG ${index + 1} · ${items.length} BÀI HỌC</span><h2>${activeLevel} · ${info.name}</h2><p>${info.subtitle}</p><div class="level-banner-progress"><span style="width:${Math.round(done / items.length * 100)}%"></span></div></div><div class="level-meta"><strong>${done}<small>/${items.length}</small></strong><span>bài đã xong</span></div></section>
    <div class="section-heading"><h2>Hành trình ${activeLevel}</h2><span class="eyebrow">${Math.round(done / items.length * 100)}% HOÀN THÀNH · TỰ DO CHỌN BÀI</span></div>
    <div class="lesson-list path-journey">${journey}${checkpoint}</div>`;
}
const grammarTopics = [
  { title: "Mạo từ xác định", subtitle: "der · die · das qua bốn cách", tag: "Kasus", detail: "Chọn mạo từ theo giống/số của danh từ và vai trò của nó trong câu. Giống đực là nhóm thay đổi dễ nhận thấy nhất ở Akkusativ.", example: "Der Mann sieht den Hund. · Ich helfe dem Mann. · Das Buch der Frau ist neu.", category: "cases" },
  { title: "Mạo từ không xác định", subtitle: "ein · eine và các biến thể", tag: "Kasus", detail: "ein không có dạng số nhiều. Đuôi của ein- phản ánh giống và cách: einen Freund, einer Freundin, einem Kind.", example: "Ein Hund läuft. · Ich sehe einen Hund. · Ich helfe einem Kind.", category: "cases" },
  { title: "Akkusativ & Dativ", subtitle: "Tân ngữ trực tiếp và người nhận", tag: "Kasus", detail: "Akkusativ thường trả lời wen/was? (ai/cái gì bị tác động). Dativ thường trả lời wem? (cho ai/giúp ai). Một số động từ luôn đi với Dativ như helfen, danken, gefallen.", example: "Ich sehe den Film. · Ich helfe dem Nachbarn.", category: "cases" },
  { title: "Genitiv", subtitle: "Sở hữu và văn phong trang trọng", tag: "Kasus", detail: "Genitiv thường biểu thị sở hữu. Giống đực/trung thêm -s hoặc -es vào danh từ; giống cái và số nhiều thường không thêm đuôi danh từ.", example: "Das Auto des Mannes. · Die Tasche der Frau.", category: "cases" },
  { title: "Chia động từ hiện tại", subtitle: "Đuôi động từ theo chủ ngữ", tag: "Verben", detail: "Bỏ -en/-n để tìm gốc, rồi thêm -e, -st, -t, -en, -t, -en. Động từ gốc kết thúc bằng -t/-d thường thêm một e nối ở du/er.", example: "lernen: ich lerne, du lernst, er lernt, wir lernen, ihr lernt, sie lernen.", category: "verbs" },
  { title: "sein & haben", subtitle: "Hai động từ bất quy tắc cốt lõi", tag: "Verben", detail: "sein: bin, bist, ist, sind, seid, sind. haben: habe, hast, hat, haben, habt, haben. Học theo đại từ; dùng haben/sein còn làm trợ động từ Perfekt.", example: "Ich bin müde. · Wir haben heute Zeit.", category: "verbs" },
  { title: "Động từ khuyết thiếu", subtitle: "Động từ chính ở cuối câu", tag: "Verben", detail: "können, müssen, wollen, dürfen, sollen, mögen đứng vị trí 2 và chia theo chủ ngữ; động từ chính giữ nguyên mẫu ở cuối.", example: "Ich muss heute arbeiten. · Darf ich hier sitzen?", category: "verbs" },
  { title: "Trật tự câu chính", subtitle: "Động từ chia ở vị trí thứ hai", tag: "Wortstellung", detail: "Vị trí thứ nhất có thể là chủ ngữ hoặc thành phần thời gian/nơi chốn; động từ chia vẫn đứng thứ hai. Các động từ nguyên mẫu/phân từ thường tạo khung câu ở cuối.", example: "Heute fährt Lina nach Bonn. · Lina möchte morgen nach Bonn fahren.", category: "sentence" },
  { title: "Câu hỏi W- & câu hỏi Có/Không", subtitle: "Wie, wo, wann · đảo động từ", tag: "Wortstellung", detail: "Câu hỏi W có từ hỏi + động từ chia + chủ ngữ. Câu hỏi Ja/Nein đưa động từ chia lên đầu câu.", example: "Wo wohnst du? · Wohnst du in Berlin?", category: "sentence" },
  { title: "Mệnh đề phụ", subtitle: "weil · dass · obwohl · động từ cuối", tag: "Wortstellung", detail: "Liên từ phụ thuộc đưa động từ chia về cuối. Nếu mệnh đề phụ đứng đầu, ngay sau dấu phẩy là động từ chia của mệnh đề chính.", example: "Ich bleibe hier, weil ich arbeiten muss. · Obwohl es regnet, gehen wir raus.", category: "sentence" },
  { title: "Đuôi tính từ sau mạo từ xác định", subtitle: "der gute · die gute · das gute", tag: "Adjektiv", detail: "Khi mạo từ đã biểu thị rõ giống/cách, phần lớn tính từ nhận đuôi -en. Ngoại lệ dễ nhớ ở Nominativ số ít và Akkusativ giống cái/trung là -e.", example: "der gute Kaffee · mit dem guten Freund · die gute Idee", category: "adjective" },
  { title: "Đuôi tính từ sau ein-/kein-/sở hữu", subtitle: "ein guter · eine gute · ein gutes", tag: "Adjektiv", detail: "Khi ein- không biểu thị rõ giống/cách ở Nominativ đực và trung tính, tính từ mang đuôi mạnh -er/-es. Các ô còn lại phần lớn theo đuôi yếu -e/-en.", example: "ein guter Plan · ein gutes Buch · mit einer guten Freundin", category: "adjective" }
];
function renderGrammar() {
  const query = grammarSearch.trim().toLocaleLowerCase("vi");
  const items = grammarTopics.filter(item => (grammarFilter === "all" || grammarFilter === item.category) && `${item.title} ${item.subtitle} ${item.detail}`.toLocaleLowerCase("vi").includes(query));
  const cases = [
    ["Nominativ","Chủ ngữ","der / ein","die / eine","das / ein","die / —"],
    ["Akkusativ","Tân ngữ trực tiếp","den / einen","die / eine","das / ein","die / —"],
    ["Dativ","Người nhận / vị trí","dem / einem","der / einer","dem / einem","den / — (+n)"],
    ["Genitiv","Sở hữu","des / eines (+s/es)","der / einer","des / eines (+s/es)","der / —"]
  ];
  const adjective = [
    ["Nominativ","-e / -er","-e / -e","-e / -es","-en / —"],
    ["Akkusativ","-en / -en","-e / -e","-e / -es","-en / —"],
    ["Dativ","-en / -en","-en / -en","-en / -en","-en / —"],
    ["Genitiv","-en / -en","-en / -en","-en / -en","-en / —"]
  ];
  pageContent.innerHTML = `<div class="path-heading"><div><div class="eyebrow">TRA CỨU NHANH · DÙNG BẤT CỨ LÚC NÀO</div><h1>Ngữ pháp gọn, nhớ lâu.</h1><p>Bảng biến cách, trật tự từ và cấu trúc cốt lõi A1–B2.</p></div><span class="date-chip">§ &nbsp; Grammatik</span></div>
    <label class="search-box grammar-search"><span>⌕</span><input id="grammar-search" type="search" placeholder="Tìm chủ điểm, cấu trúc…" value="${escapeHtml(grammarSearch)}"></label>
    <div class="grammar-filter">${[["all","Tất cả"],["cases","Các cách"],["verbs","Động từ"],["sentence","Trật tự từ"],["adjective","Tính từ"]].map(([key,label]) => `<button class="level-tab ${grammarFilter === key ? "active" : ""}" data-grammar-filter="${key}">${label}</button>`).join("")}</div>
    ${grammarFilter === "all" || grammarFilter === "cases" ? `<section class="reference-panel"><div class="section-heading"><h2>Bảng mạo từ theo cách (Kasus)</h2><span class="eyebrow">XÁC ĐỊNH / KHÔNG XÁC ĐỊNH</span></div><div class="table-wrap"><table class="grammar-table"><thead><tr><th>Cách</th><th>Chức năng</th><th>Giống đực</th><th>Giống cái</th><th>Giống trung</th><th>Số nhiều</th></tr></thead><tbody>${cases.map(row => `<tr><th>${row[0]}<small>${row[1]}</small></th>${row.slice(2).map((cell,index) => `<td>${genderCell(cell,index)}</td>`).join("")}</tr>`).join("")}</tbody></table></div><p class="table-note">Dativ số nhiều thường thêm -n vào danh từ nếu chưa có đuôi này. Genitiv đực/trung thường thêm -s hoặc -es vào danh từ.</p><div class="table-wrap adjective-wrap"><div class="table-title">Đuôi tính từ: mạo từ xác định / ein- (thứ tự hai dạng trong mỗi ô). Ví dụ: der gute Mann / ein guter Mann.</div><table class="grammar-table"><thead><tr><th>Cách</th><th>Giống đực</th><th>Giống cái</th><th>Giống trung</th><th>Số nhiều</th></tr></thead><tbody>${adjective.map(row => `<tr><th>${row[0]}</th>${row.slice(1).map(cell => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></section>` : ""}
    <div class="grammar-card-grid">${items.map(item => `<article class="grammar-card"><span class="grammar-tag">${item.tag}</span><h2>${item.title}</h2><h3>${item.subtitle}</h3><p>${item.detail}</p><div class="grammar-example">${germanText(item.example)}</div></article>`).join("")}</div>${items.length ? "" : '<div class="empty-state">Chưa tìm thấy chủ điểm này.</div>'}`;
}
function renderLessonCaseTable(lessonId) {
  const rows = lessonId === "a2-3"
    ? [["Nominativ","Chủ ngữ","der","die","das","die"],["Akkusativ","Wohin?","den","die","das","die"],["Dativ","Wo? / cho ai?","dem","der","dem","den (+n)"]]
    : [["Nominativ","Chủ ngữ","der / ein","die / eine","das / ein","die / —"],["Akkusativ","Tân ngữ trực tiếp","den / einen","die / eine","das / ein","die / —"],["Dativ","Người nhận","dem / einem","der / einer","dem / einem","den / — (+n)"]];
  return `<div class="table-wrap"><table class="grammar-table compact-table"><thead><tr><th>Cách</th><th>Dùng khi</th><th>Đực</th><th>Cái</th><th>Trung</th><th>Số nhiều</th></tr></thead><tbody>${rows.map(row => `<tr><th>${row[0]}<small>${row[1]}</small></th>${row.slice(2).map((cell,index) => `<td>${genderCell(cell,index)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}
function renderQuickReference() {
  const rows = [["Nominativ","der / ein","die / eine","das / ein","die / —"],["Akkusativ","den / einen","die / eine","das / ein","die / —"],["Dativ","dem / einem","der / einer","dem / einem","den / — (+n)"],["Genitiv","des / eines","der / einer","des / eines","der / —"]];
  const matches = grammarTopics.filter(item => item.category === quickReferenceTopic);
  return `<aside class="reference-drawer" role="dialog" aria-modal="true" aria-label="Tra cứu ngữ pháp nhanh"><div class="drawer-header"><div><span class="step-kicker">TRA CỨU NHANH</span><h2>Ngữ pháp &amp; biến cách</h2></div><button class="close-modal" data-action="close-grammar">×</button></div><div class="drawer-body"><div class="grammar-filter">${[["cases","Kasus"],["verbs","Động từ"],["sentence","Trật tự câu"],["adjective","Tính từ"]].map(([key,label]) => `<button class="level-tab ${quickReferenceTopic === key ? "active" : ""}" data-reference-topic="${key}">${label}</button>`).join("")}</div>${quickReferenceTopic === "cases" ? `<div class="table-wrap"><table class="grammar-table compact-table"><thead><tr><th>Kasus</th><th>Đực</th><th>Cái</th><th>Trung</th><th>Nhiều</th></tr></thead><tbody>${rows.map(row => `<tr><th>${row[0]}</th>${row.slice(1).map((cell,index) => `<td>${genderCell(cell,index)}</td>`).join("")}</tr>`).join("")}</tbody></table></div><p class="table-note">Dativ số nhiều thường thêm -n vào danh từ. Akkusativ giống đực: der → den, ein → einen.</p>` : quickReferenceTopic === "adjective" ? `<div class="reference-card"><strong>Đuôi tính từ sau mạo từ xác định</strong><p>Nominativ: der gute Mann · die gute Frau · das gute Kind</p><p>Akkusativ: den guten Mann · die gute Frau · das gute Kind</p><p>Dativ: dem guten Mann · der guten Frau · dem guten Kind</p></div><div class="reference-card"><strong>Sau ein-</strong><p>ein guter Plan · eine gute Idee · ein gutes Buch</p><p>mit einem guten Plan · mit einer guten Idee</p></div>` : matches.map(item => `<div class="reference-card"><strong>${item.title}</strong><p>${item.detail}</p><div class="grammar-example">${germanText(item.example)}</div></div>`).join("")}<button class="button-quiet" data-action="open-full-grammar">Mở toàn bộ bảng tra cứu →</button></div></aside>`;
}
function genderCell(value, column) {
  const className = column === 0 ? "gender-masculine" : column === 1 ? "gender-feminine" : column === 2 ? "gender-neuter" : "gender-plural";
  return `<span class="${className}">${escapeHtml(value)}</span>`;
}
function renderVocabulary(filter = "", level = "all") {
  const query = filter.trim().toLocaleLowerCase("vi");
  const filtered = allWords.filter(item => (level === "all" || item.level === level) && `${item.word} ${item.meaning} ${item.lesson}`.toLocaleLowerCase("vi").includes(query));
  if (vocabIndex >= filtered.length) vocabIndex = 0;
  const dueCount = filtered.filter(item => dueWords().some(due => due.word === item.word)).length;
  pageContent.innerHTML = `<div class="path-heading"><div><div class="eyebrow">KHO TỪ VỰNG CỦA BẠN</div><h1>Từ vựng, nhớ thật lâu.</h1><p>${allWords.length} từ và cụm từ thiết yếu · học giống danh từ bằng màu sắc · ôn theo nhịp 1–3–7 ngày.</p></div><span class="date-chip">🧠 &nbsp; ${filtered.length} từ</span></div>
    <div class="gender-legend"><span><i class="legend-dot gender-masculine"></i>der · giống đực</span><span><i class="legend-dot gender-feminine"></i>die · giống cái</span><span><i class="legend-dot gender-neuter"></i>das · giống trung</span><span class="plural-hint">Số nhiều “die” dùng màu trung tính.</span></div>
    <div class="srs-strip"><div><strong>Ôn tập ngắt quãng</strong><span>${dueCount} thẻ đến hạn hôm nay · lần quên sẽ được nhắc lại sau 1 ngày.</span></div><button class="button-dark" data-action="review-vocab" data-due="true">Ôn thẻ đến hạn (${dueCount}) →</button></div>
    <div class="vocab-toolbar"><label class="search-box"><span>⌕</span><input id="vocab-search" type="search" placeholder="Tìm từ tiếng Đức hoặc nghĩa tiếng Việt…" value="${escapeHtml(filter)}"></label><select class="filter-select" id="vocab-filter"><option value="all" ${level === "all" ? "selected" : ""}>Tất cả cấp độ</option>${levelOrder.map(item => `<option value="${item}" ${level === item ? "selected" : ""}>${item}</option>`).join("")}</select><button class="button-dark" data-action="review-vocab">✦ Học từ mới</button></div>
    <div class="vocab-grid" id="vocab-grid">${filtered.length ? filtered.map(item => `<button class="vocab-card" data-action="speak" data-word="${escapeHtml(item.word)}" title="Đọc từ"><span class="vocab-card-head"><span class="word-article"><i class="article-dot" style="--word-color:${item.gender}"></i><span class="${genderClass(item.word)}">${escapeHtml(item.word)}</span></span><span class="word-level">${item.level}</span></span><span class="word-translation">${escapeHtml(item.meaning)}</span><span class="word-example">${germanText(item.example)}</span><span class="vocab-srs-label">${srsLabel(item.word)}</span></button>`).join("") : `<div class="empty-state">Không tìm thấy từ phù hợp. Hãy thử một từ khác nhé.</div>`}</div>
    <div class="section-heading" style="margin-top:23px"><h2>Học theo cấp độ</h2><button class="text-link" data-action="review-vocab">Lật thẻ từ vựng →</button></div>`;
  pageContent.dataset.vocabFilter = filter;
  pageContent.dataset.vocabLevel = level;
}
function genderClass(word) {
  if (/^der\b/i.test(word)) return "gender-masculine";
  if (/^die\b/i.test(word)) return "gender-feminine";
  if (/^das\b/i.test(word)) return "gender-neuter";
  return "";
}
function dueWords() {
  const today = localDateKey();
  return allWords.filter(item => state.srs[item.word]?.due && state.srs[item.word].due <= today);
}
function srsLabel(word) {
  const card = state.srs[word];
  if (!card || !card.due) return "Chưa ôn · học ngay";
  if (card.due <= localDateKey()) return "Đến hạn ôn";
  return `Ôn lại ${new Intl.DateTimeFormat("vi-VN", { day: "numeric", month: "short" }).format(new Date(`${card.due}T12:00:00`))}`;
}
const speakingPhrases = [
  { level:"A1", text:"Guten Morgen! Wie geht es Ihnen?", translation:"Chào buổi sáng! Quý vị khỏe không?", focus:"Ngữ điệu câu hỏi · âm g trong Morgen" },
  { level:"A1", text:"Ich heiße Linh und komme aus Vietnam.", translation:"Tôi tên Linh và đến từ Việt Nam.", focus:"Âm ch trong ich · trọng âm trong heiße" },
  { level:"A1", text:"Könnten Sie mir bitte helfen?", translation:"Quý vị có thể giúp tôi được không?", focus:"ö trong könnten · ü trong würden" },
  { level:"A2", text:"Am Wochenende fahre ich nach Hamburg.", translation:"Cuối tuần tôi đi Hamburg.", focus:"Âm r · nhấn trọng âm từ Wochenende" },
  { level:"A2", text:"Ich stehe jeden Morgen um sieben Uhr auf.", translation:"Sáng nào tôi cũng thức dậy lúc 7 giờ.", focus:"Âm ö trong Morgen · âm au trong auf" },
  { level:"A2", text:"Wir sind gestern mit dem Zug gefahren.", translation:"Hôm qua chúng tôi đã đi bằng tàu.", focus:"Âm z trong Zug · phụ âm cuối" },
  { level:"B1", text:"Ich lerne Deutsch, weil ich in Berlin arbeiten möchte.", translation:"Tôi học tiếng Đức vì muốn làm việc ở Berlin.", focus:"Nối âm · nhịp điệu mệnh đề phụ" },
  { level:"B1", text:"Obwohl es regnet, gehen wir heute spazieren.", translation:"Mặc dù trời mưa, hôm nay chúng tôi vẫn đi dạo.", focus:"Ngữ điệu nhượng bộ · âm ch trong ich" },
  { level:"B1", text:"Wenn ich mehr Zeit hätte, würde ich öfter lesen.", translation:"Nếu có thêm thời gian, tôi sẽ đọc nhiều hơn.", focus:"ä trong hätte · ü trong würde" },
  { level:"B2", text:"Die Ergebnisse werden nächste Woche veröffentlicht.", translation:"Các kết quả sẽ được công bố vào tuần tới.", focus:"Âm v trong veröffentlicht · phụ âm cuối" },
  { level:"B2", text:"Das Thema, über das wir sprechen, ist sehr aktuell.", translation:"Chủ đề chúng ta đang nói đến rất thời sự.", focus:"ü trong über · nhịp câu quan hệ" },
  { level:"B2", text:"Meiner Ansicht nach wäre eine andere Lösung sinnvoll.", translation:"Theo tôi, một giải pháp khác sẽ hợp lý.", focus:"ä trong wäre · trọng âm Sinnvoll" }
];
let speakingIndex = 0;
let speakingTranscript = "";
let speakingStatus = "";
let activeRecognition = null;
let activeStream = null;
let activeAudioContext = null;
let activeAnalyser = null;
let animationFrame = 0;
let pointerDrag = null;
let suppressChipClickUntil = 0;
function renderSpeaking() {
  const phrase = speakingPhrases[speakingIndex];
  const supported = "SpeechRecognition" in window || "webkitSpeechRecognition" in window;
  const status = speakingStatus || (supported ? "Phát câu mẫu, rồi thu giọng của bạn. Nhận diện giọng nói tùy trình duyệt." : "Trình duyệt chưa hỗ trợ nhận diện giọng Đức. Bạn vẫn có thể nghe mẫu, ghi âm trực quan và tự đối chiếu.");
  const normalized = value => value.toLocaleLowerCase("de-DE").replace(/[.!?,;:]/g, "").replace(/\s+/g, " ").trim();
  const targetWords = new Set(normalized(phrase.text).split(" "));
  const recognizedWords = new Set(normalized(speakingTranscript).split(" "));
  const match = speakingTranscript ? Math.round([...recognizedWords].filter(word => targetWords.has(word)).length / Math.max(1, targetWords.size) * 100) : 0;
  pageContent.innerHTML = `<div class="path-heading"><div><div class="eyebrow">HÃY NGHE · NÓI · TỰ TIN HƠN</div><h1>Phát âm từng câu, vững từng âm.</h1><p>Nghe mẫu tiếng Đức, luyện nói và xem văn bản trình duyệt nhận diện được.</p></div><span class="date-chip">🎙️ &nbsp; de-DE</span></div>
    <div class="speaking-layout"><section class="speaking-card"><div class="phrase-meta"><span class="grammar-tag">${phrase.level}</span><span>${phrase.focus}</span></div><div class="phrase-german">${germanText(phrase.text)}</div><p class="phrase-translation">${phrase.translation}</p>    <div class="pronunciation-actions"><button class="button-dark" data-action="play-model">🔊 Nghe phát âm mẫu</button><button class="button-primary" data-action="start-speaking" ${activeStream ? "disabled" : ""}>${activeStream ? "● Đang nghe…" : "🎙️ Bắt đầu nói"}</button>${activeStream ? '<button class="button-quiet" data-action="stop-speaking">Dừng</button>' : ""}</div>
      <div class="wave-legend"><span><i class="model-wave-dot"></i> Nhịp câu minh họa</span><span><i class="live-wave-dot"></i> Biên độ giọng bạn</span></div><div class="wave-stage"><svg class="reference-wave" viewBox="0 0 640 100" preserveAspectRatio="none" aria-label="Đường nhịp câu minh họa"><path d="M0 50 C20 50 22 48 32 50 S45 75 55 50 S67 20 78 50 S92 56 105 50 S118 40 127 50 S143 84 154 50 S169 28 179 50 S197 54 207 50 S220 38 230 50 S244 73 255 50 S269 24 280 50 S298 56 309 50 S324 36 333 50 S347 81 359 50 S373 26 385 50 S400 56 411 50 S425 42 435 50 S452 78 464 50 S478 22 490 50 S506 55 517 50 S530 35 540 50 S555 76 566 50 S583 29 594 50 S615 52 640 50" /></svg><canvas id="voice-wave" width="640" height="100" aria-label="Biên độ giọng nói trực tiếp"></canvas></div>
      <div class="speech-result"><div><span class="eyebrow">${speakingTranscript ? "VĂN BẢN TRÌNH DUYỆT NHẬN DIỆN" : "KẾT QUẢ LUYỆN NÓI"}</span><p>${speakingTranscript ? escapeHtml(speakingTranscript) : "Câu bạn đọc sẽ xuất hiện ở đây nếu trình duyệt hỗ trợ nhận diện giọng nói."}</p></div>${speakingTranscript ? `<div class="match-score"><strong>${match}%</strong><small>trùng từ<br>tham khảo</small></div>` : ""}</div>
      <p class="privacy-note">🔒 Âm thanh chỉ được dùng trong phiên luyện tập này, không được ứng dụng lưu lại. API nhận diện giọng nói của trình duyệt có thể xử lý âm thanh theo chính sách riêng của nhà cung cấp. Phần trăm hiển thị chỉ đo từ trùng khớp, không phải điểm chấm phát âm.</p></section>
      <aside class="phrase-list"><div class="section-heading"><h2>Câu luyện tập</h2><span class="eyebrow">A1 → B2</span></div>${speakingPhrases.map((item,index) => `<button class="phrase-option ${index === speakingIndex ? "active" : ""}" data-phrase="${index}"><span class="word-level">${item.level}</span><strong>${escapeHtml(item.text)}</strong><small>${escapeHtml(item.focus)}</small></button>`).join("")}</aside></div>`;
}
function playModelVoice(text) {
  if (!("speechSynthesis" in window)) { showToast("Trình duyệt này chưa hỗ trợ đọc văn bản."); return; }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = 0.85;
  const voices = window.speechSynthesis.getVoices();
  const germanVoice = voices.find(voice => voice.lang.toLowerCase().startsWith("de"));
  if (germanVoice) utterance.voice = germanVoice;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}
function stopSpeaking() {
  if (animationFrame) cancelAnimationFrame(animationFrame);
  animationFrame = 0;
  if (activeRecognition) { activeRecognition.onend = null; try { activeRecognition.stop(); } catch (error) { console.error("Không thể dừng nhận diện giọng nói.", error); } }
  activeRecognition = null;
  if (activeStream) activeStream.getTracks().forEach(track => track.stop());
  activeStream = null;
  if (activeAudioContext && activeAudioContext.state !== "closed") activeAudioContext.close().catch(error => console.error("Không thể đóng âm thanh.", error));
  activeAudioContext = null;
  activeAnalyser = null;
}
async function startSpeaking() {
  if (!navigator.mediaDevices?.getUserMedia) { speakingStatus = "Thiết bị hoặc ngữ cảnh trình duyệt không hỗ trợ truy cập micro. Hãy mở ứng dụng qua localhost/HTTPS và kiểm tra quyền micro."; renderSpeaking(); return; }
  try {
    speakingStatus = "Đang xin quyền truy cập micro…";
    renderSpeaking();
    activeStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      activeAudioContext = new AudioContextClass();
      const source = activeAudioContext.createMediaStreamSource(activeStream);
      activeAnalyser = activeAudioContext.createAnalyser();
      activeAnalyser.fftSize = 512;
      source.connect(activeAnalyser);
    }
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) {
      speakingStatus = "Micro đang hoạt động và sóng âm hiển thị trực tiếp. Trình duyệt này chưa có nhận diện giọng Đức; hãy tự đối chiếu với câu mẫu.";
      renderSpeaking();
      if (activeAnalyser) startWaveDrawing(activeAnalyser, document.getElementById("voice-wave"));
      return;
    }
    speakingTranscript = "";
    const recognition = new Recognition();
    activeRecognition = recognition;
    recognition.lang = "de-DE";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.onresult = event => {
      speakingTranscript = Array.from(event.results).map(result => result[0].transcript).join(" ");
      speakingStatus = "Đang nhận diện giọng nói…";
      renderSpeaking();
      const canvas = document.getElementById("voice-wave");
      if (activeAnalyser && canvas) startWaveDrawing(activeAnalyser, canvas);
    };
    recognition.onerror = event => {
      speakingStatus = event.error === "not-allowed" ? "Quyền micro bị từ chối. Hãy cho phép truy cập micro trong cài đặt trình duyệt." : `Không thể nhận diện giọng nói (${event.error}). Hãy thử lại hoặc nghe câu mẫu.`;
      stopSpeaking();
      renderSpeaking();
    };
    recognition.onend = () => {
      stopSpeaking();
      speakingStatus = speakingTranscript ? "Đã nhận xong. So sánh câu nhận diện với câu mẫu và thử lại các âm khó." : "Chưa nhận được giọng nói. Kiểm tra micro, quyền truy cập và thử đọc rõ hơn.";
      renderSpeaking();
    };
    speakingStatus = "Đang nghe — hãy đọc câu tiếng Đức thành tiếng.";
    renderSpeaking();
    if (activeAnalyser) startWaveDrawing(activeAnalyser, document.getElementById("voice-wave"));
    recognition.start();
  } catch (error) {
    stopSpeaking();
    speakingStatus = error.name === "NotAllowedError" ? "Bạn chưa cấp quyền micro. Cho phép micro trong trình duyệt rồi thử lại." : `Không thể khởi động micro (${error.name || "lỗi thiết bị"}). Hãy kiểm tra thiết bị và thử lại.`;
    console.error("Không thể bắt đầu luyện nói.", error);
    renderSpeaking();
  }
}
function startWaveDrawing(analyser, canvas) {
  if (!canvas) return;
  if (animationFrame) cancelAnimationFrame(animationFrame);
  const context = canvas.getContext("2d");
  const data = new Uint8Array(analyser.frequencyBinCount);
  const draw = () => {
    if (!context) return;
    analyser.getByteTimeDomainData(data);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath(); context.strokeStyle = "#5e9f71"; context.lineWidth = 2;
    for (let i = 0; i < data.length; i++) {
      const x = i / (data.length - 1) * canvas.width;
      const y = data[i] / 255 * canvas.height;
      if (i === 0) context.moveTo(x, y); else context.lineTo(x, y);
    }
    context.stroke();
    animationFrame = requestAnimationFrame(draw);
  };
  draw();
}
function renderAchievements() {
  const completedLessons = lessons.filter(lesson => state.completed.includes(lesson.id)).length;
  const complete = completedLessons > 0;
  const currentStreak = getCurrentStreak();
  const streak = currentStreak >= 3;
  const words = new Set(lessons.filter(lesson => state.completed.includes(lesson.id)).flatMap(lesson => lesson.words.map(([word]) => word))).size;
  const masteredAllLessons = completedLessons === lessons.length;
  pageContent.innerHTML = `<div class="path-heading"><div><div class="eyebrow">MỖI BƯỚC ĐỀU ĐÁNG TỰ HÀO</div><h1>Thành tích của bạn</h1><p>Ghi nhận những nỗ lực nhỏ tạo nên tiến bộ lớn.</p></div><span class="date-chip">⚡ &nbsp; ${state.xp} XP</span></div><div class="achievement-grid">
    <article class="achievement-card ${complete ? "" : "dim"}"><div class="achievement-art">🌱</div><h3>Hallo, Welt!</h3><p>Bắt đầu bài học đầu tiên trên hành trình tiếng Đức.</p><span class="achievement-status">${complete ? "✓ ĐÃ MỞ KHÓA" : "0/1 bài học"}</span></article>
    <article class="achievement-card ${streak ? "" : "dim"}"><div class="achievement-art streak-achievement-art">${streakFlameSvg()}</div><h3>Ngọn lửa bền bỉ</h3><p>Học tiếng Đức 3 ngày liên tiếp.</p><span class="achievement-status">${streak ? "✓ ĐÃ MỞ KHÓA" : `${currentStreak}/3 ngày liên tiếp`}</span></article>
    <article class="achievement-card ${completedLessons >= 5 ? "" : "dim"}"><div class="achievement-art">📚</div><h3>Ham học hỏi</h3><p>Hoàn thành 5 bài học bất kỳ.</p><span class="achievement-status">${completedLessons >= 5 ? "✓ ĐÃ MỞ KHÓA" : `${completedLessons}/5 bài học`}</span></article>
    <article class="achievement-card ${state.xp >= 100 ? "" : "dim"}"><div class="achievement-art">⚡</div><h3>Trăm điểm đầu tiên</h3><p>Tích lũy 100 điểm kinh nghiệm.</p><span class="achievement-status">${state.xp >= 100 ? "✓ ĐÃ MỞ KHÓA" : `${state.xp}/100 XP`}</span></article>
    <article class="achievement-card ${words >= 30 ? "" : "dim"}"><div class="achievement-art">🧠</div><h3>Người gom từ</h3><p>Gặp gỡ ít nhất 30 từ mới qua bài học.</p><span class="achievement-status">${words >= 30 ? "✓ ĐÃ MỞ KHÓA" : `${words}/30 từ`}</span></article>
    <article class="achievement-card ${masteredAllLessons ? "" : "dim"}"><div class="achievement-art">🏆</div><h3>Deutsch-Meister</h3><p>Chinh phục toàn bộ bài học hiện có.</p><span class="achievement-status">${masteredAllLessons ? "✓ ĐÃ MỞ KHÓA" : `${completedLessons}/${lessons.length} bài học`}</span></article>
    </div>`;
}
function renderProfile() {
  const completedLessons = lessons.filter(lesson => state.completed.includes(lesson.id)).length;
  const learnedWords = new Set(lessons.filter(lesson => state.completed.includes(lesson.id)).flatMap(lesson => lesson.words.map(([word]) => word))).size;
  const rank = learnerRank(state.xp);
  const currentStreak = getCurrentStreak();
  const activeCourse = levelOrder.find(level => progressPercent(level) < 100) || levelOrder[levelOrder.length - 1];
  const profileImage = pendingAvatarImage ?? state.profile.avatarImage;
  pageContent.innerHTML = `
    <div class="page-intro"><div class="eyebrow">GÓC NHỎ CỦA BẠN</div><h1>Hồ sơ học tập</h1><p>Tuỳ chỉnh danh tính và nhìn lại những gì bạn đã đạt được.</p></div>
    <section class="profile-hero"><div class="profile-hero-avatar">${avatarMarkup(pendingAvatarImage ?? state.profile.avatarImage)}</div><div class="profile-hero-copy"><span class="eyebrow">DEUTSCHLINGO LEARNER</span><h2>${escapeHtml(state.profile.name)}</h2><p>${rank.name} · Đang khám phá cấp ${activeCourse}</p></div><button class="button-quiet" data-page="settings">Cài đặt tài khoản <span>→</span></button></section>
    <section class="profile-stats">
      <article class="profile-stat"><span class="profile-stat-icon">✦</span><strong>${state.xp}</strong><small>XP tích lũy</small></article>
      <article class="profile-stat"><span class="profile-stat-icon">◷</span><strong>${currentStreak}</strong><small>Ngày học liên tiếp</small></article>
      <article class="profile-stat"><span class="profile-stat-icon">✓</span><strong>${completedLessons}<small>/${lessons.length}</small></strong><small>Bài học hoàn thành</small></article>
      <article class="profile-stat"><span class="profile-stat-icon">Aa</span><strong>${learnedWords}</strong><small>Từ đã học qua bài</small></article>
    </section>
    <section class="profile-panel"><div class="profile-panel-heading"><div><span class="eyebrow">THÔNG TIN CÁ NHÂN</span><h2>Cho hồ sơ một dấu ấn riêng</h2></div><span class="local-only-badge">LƯU TRÊN THIẾT BỊ NÀY</span></div>
      <form id="profile-form" class="profile-form">
        <label class="profile-field" for="profile-name">Tên hiển thị<input id="profile-name" name="name" type="text" maxlength="32" required autocomplete="nickname" value="${escapeHtml(state.profile.name)}" placeholder="Tên bạn muốn dùng"></label>
        <div class="profile-field profile-upload-field"><span id="avatar-upload-label">Ảnh đại diện</span><label class="avatar-upload-dropzone" for="profile-avatar-file" aria-describedby="avatar-upload-help"><input id="profile-avatar-file" name="avatarImage" type="file" accept="image/jpeg,image/png,image/webp" aria-labelledby="avatar-upload-label"><span class="avatar-upload-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 8.5A2.5 2.5 0 0 1 6.5 6H9l1.5-2h3L15 6h2.5A2.5 2.5 0 0 1 20 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5z"/><circle cx="12" cy="12.5" r="3.5"/></svg></span><span class="avatar-upload-copy"><strong>Thêm ảnh của bạn</strong><small>Kéo ảnh vào đây hoặc chọn từ thiết bị</small></span><span class="avatar-upload-cta">Chọn ảnh</span></label><small id="avatar-upload-help" class="avatar-upload-help">JPG, PNG hoặc WebP · tối đa 8 MB. Ảnh được cắt vuông, thu nhỏ và lưu riêng trên thiết bị này.</small><span class="avatar-upload-status" aria-live="polite">${pendingAvatarName ? `Đã chọn ${escapeHtml(pendingAvatarName)} · hãy lưu hồ sơ để áp dụng.` : profileImage ? "Ảnh đại diện hiện tại đang được sử dụng." : "Bạn đang dùng biểu tượng khách mặc định."}</span></div>
        <div class="profile-form-footer"><div><p>Tên và ảnh chỉ được lưu trong trình duyệt này; ứng dụng hiện chưa có tài khoản đồng bộ.</p><button class="avatar-reset-button" type="button" data-action="reset-avatar">Dùng biểu tượng khách mặc định</button></div><button class="button-primary" type="submit">Lưu hồ sơ <span>✓</span></button></div>
      </form>
    </section>
    <section class="profile-level-card"><div class="profile-level-emblem">${activeCourse}</div><div class="profile-level-copy"><span class="eyebrow">CHẶNG ĐANG KHÁM PHÁ</span><h2>${levelInfo[activeCourse].name}</h2><p>${levelInfo[activeCourse].description}</p></div><button class="button-quiet" data-page="path">Xem lộ trình →</button></section>`;
}
function renderSettings() {
  pageContent.innerHTML = `
    <div class="page-intro"><div class="eyebrow">TRẢI NGHIỆM THEO CÁCH CỦA BẠN</div><h1>Cài đặt</h1><p>Điều chỉnh nhịp học và cách Deutschlingo phản hồi với bạn.</p></div>
    <section class="settings-group"><div class="settings-group-heading"><span class="settings-heading-icon">◷</span><div><h2>Mục tiêu học tập</h2><p>Một mục tiêu vừa sức giúp việc học đều đặn hơn.</p></div></div>
      <label class="settings-select-row" for="daily-goal"><span><strong>Mục tiêu mỗi ngày</strong><small>Số phút học bạn muốn hướng tới</small></span><select id="daily-goal">${[5, 10, 15, 20, 30].map(minutes => `<option value="${minutes}" ${state.settings.dailyGoal === minutes ? "selected" : ""}>${minutes} phút</option>`).join("")}</select></label>
    </section>
    <section class="settings-group"><div class="settings-group-heading"><span class="settings-heading-icon">✦</span><div><h2>Phản hồi & hiệu ứng</h2><p>Tinh chỉnh âm thanh và chuyển động trong bài học.</p></div></div>
      <label class="settings-toggle-row" for="setting-sound"><span><strong>Âm thanh trả lời đúng</strong><small>Phát âm thanh động viên khi bạn trả lời đúng.</small></span><input id="setting-sound" type="checkbox" ${state.settings.sound ? "checked" : ""}><i aria-hidden="true"></i></label>
      <label class="settings-toggle-row" for="setting-animations"><span><strong>Hiệu ứng chuyển động</strong><small>Tắt để giảm chuyển động, đồng thời tôn trọng cài đặt trợ năng.</small></span><input id="setting-animations" type="checkbox" ${state.settings.animations ? "checked" : ""}><i aria-hidden="true"></i></label>
    </section>
    <section class="settings-group settings-data"><div class="settings-group-heading"><span class="settings-heading-icon">▤</span><div><h2>Dữ liệu học tập</h2><p>Tiến độ và cài đặt hiện chỉ nằm trên thiết bị này.</p></div></div>
      <div class="settings-data-row"><div><strong>Tải bản sao dữ liệu</strong><small>Xuất tiến độ, từ ôn tập, hồ sơ và cài đặt thành tệp JSON.</small></div><button class="button-quiet" data-action="export-data">Tải dữ liệu <span>↓</span></button></div>
      <div class="settings-data-row"><div><strong>Khôi phục bản sao</strong><small>Nhập tệp JSON đã xuất từ Deutschlingo. Dữ liệu hiện tại sẽ được thay thế.</small></div><label class="button-quiet import-data-button" for="import-data-file">Chọn tệp <span>↑</span><input id="import-data-file" type="file" accept="application/json,.json"></label></div>
      <div class="settings-data-row settings-danger-row"><div><strong>Đặt lại tiến độ học</strong><small>Xóa XP, chuỗi ngày, bài đã hoàn thành và lịch ôn từ. Hồ sơ/cài đặt vẫn được giữ.</small></div><button class="settings-danger-button" data-action="reset-progress">Đặt lại tiến độ</button></div>
    </section>
    <p class="settings-footnote">Phiên bản học tập cá nhân · Không cần đăng nhập · Dữ liệu không được gửi lên máy chủ.</p>`;
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
function localDateKey() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function startLesson(id) {
  const lesson = lessons.find(item => item.id === id);
  if (!lesson) return;
  currentLesson = lesson;
  lessonStep = "theory";
  questionIndex = 0;
  correctAnswers = 0;
  comboCount = 0;
  bestCombo = 0;
  comboBonusXp = 0;
  comboMessage = "";
  clearTimeout(comboMessageTimer);
  answered = false;
  lessonEarned = 0;
  theoryAnswered = false;
  theorySelected = -1;
  drillAnswer = [];
  fillChoice = -1;
  quickReferenceOpen = false;
  renderLessonModal();
}
function renderLessonModal() {
  if (!currentLesson) return;
  const lesson = currentLesson;
  const notes = learningNotes[lesson.id];
  const progress = { theory: 12, words: 38, practice: 62, result: 100 }[lessonStep];
  let content = "";
  if (lessonStep === "theory") {
    const firstQuestion = lesson.questions[0];
    content = `<span class="step-kicker">PHẦN 1 · HIỂU TRƯỚC, NHỚ SAU</span><h2>${lesson.focus}</h2><p class="modal-intro">${lesson.intro}</p>
      <article class="learning-layer"><span class="layer-number">01</span><div><h3>Bối cảnh thực tế</h3><p>${notes.context}</p><div class="context-dialogue"><strong>Tình huống:</strong> ${notes.examples[0][0]}</div></div></article>
      <article class="learning-layer"><span class="layer-number">02</span><div><h3>Công thức &amp; vì sao dùng như vậy?</h3><p>${notes.logic}</p><div class="formula-box">${germanText(notes.formula)}</div></div></article>
      ${notes.table ? `<article class="learning-layer"><span class="layer-number">03</span><div><h3>Bảng biến cách cần nhớ</h3>${renderLessonCaseTable(lesson.id)}</div></article>` : ""}
      <article class="learning-layer"><span class="layer-number">${notes.table ? "04" : "03"}</span><div><h3>Ví dụ mổ xẻ từng câu</h3>${notes.examples.map(([sentence, analysis], index) => `<div class="walkthrough"><div class="walkthrough-sentence">${germanText(sentence)}</div><p><strong>Dòng ${index + 1}.</strong> ${analysis}</p></div>`).join("")}</div></article>
      <article class="learning-layer"><span class="layer-number">${notes.table ? "05" : "04"}</span><div><h3>Bẫy thường gặp &amp; mẹo ghi nhớ</h3><p><strong>⚠️ Bẫy:</strong> ${notes.trap}</p><p class="memory-tip"><strong>🧠 Mẹo:</strong> ${notes.memory}</p></div></article>
      <article class="micro-quiz"><div><span class="step-kicker">KIỂM TRA NHANH · CHƯA ĐẾN 30 GIÂY</span><p>${firstQuestion[0]}</p></div><div class="question-options">${firstQuestion[1].map((option, i) => `<button class="answer-option ${theoryAnswered && i === firstQuestion[2] ? "correct" : ""} ${theoryAnswered && i === theorySelected && i !== firstQuestion[2] ? "incorrect" : ""}" data-action="theory-answer" data-answer="${i}" ${theoryAnswered ? "disabled" : ""}>${escapeHtml(option)}</button>`).join("")}</div>${theoryAnswered ? `<div class="answer-feedback">${theorySelected === firstQuestion[2] ? "✓ Richtig! " : "↗ Thử lại trong phần luyện tập nhé. "}${firstQuestion[3]}${comboMessage ? ` <strong class="combo-break-copy">${escapeHtml(comboMessage)}.</strong>` : ""}</div>` : ""}</article>
      <div class="summary-card"><span>📌 TÓM TẮT MỘT PHÚT</span><p>${notes.summary}</p><button class="button-quiet" data-action="copy-summary">Sao chép tóm tắt</button></div>
      <div class="modal-actions"><button class="button-quiet" data-action="open-grammar">§ Mở bảng tra cứu</button><button class="button-dark" data-action="lesson-next">Tiếp tục: từ vựng →</button></div>`;
  } else if (lessonStep === "words") {
    content = `<span class="step-kicker">PHẦN 2 · TỪ VỰNG TRONG NGỮ CẢNH</span><h2>Những từ bạn sẽ dùng ngay</h2><p class="modal-intro">Mạo từ có màu cố định: xanh dương = giống đực · hồng = giống cái · xanh lá/vàng = giống trung. Danh từ số nhiều dùng màu trung tính.</p><div class="vocab-inline">${lesson.words.map(([word, meaning]) => `<button class="vocab-inline-card" data-action="speak" data-word="${escapeHtml(word)}"><strong class="${genderClass(word)}">${escapeHtml(word)}</strong><span>${escapeHtml(meaning)}</span></button>`).join("")}</div><div class="theory-block" style="margin-top:13px"><h3>💡 Ôn có chủ đích</h3><p>Đọc thành tiếng và tự đặt câu ngắn. Sau bài học, thẻ từ mới có thể ôn lại theo lịch 1–3–7 ngày trong mục Từ vựng &amp; ôn tập.</p></div><div class="modal-actions"><button class="button-quiet" data-action="lesson-back">← Ôn ngữ pháp</button><button class="button-dark" data-action="lesson-practice">Bắt đầu luyện tập →</button></div>`;
  } else if (lessonStep === "practice") {
    const totalChallenges = lesson.questions.length + 2;
    if (questionIndex < lesson.questions.length) {
      const [prompt, options, correct, explanation] = lesson.questions[questionIndex];
      content = `<span class="step-kicker">PHẦN 3 · BÀI TẬP TƯƠNG TÁC</span><h2>Chọn câu trả lời chính xác</h2><div class="question-card"><div class="question-count">TRẮC NGHIỆM · ${questionIndex + 1} / ${totalChallenges}</div><div class="question-prompt">${prompt}</div><div class="question-options">${options.map((option, i) => `<button class="answer-option ${answered && i === correct ? "correct" : ""} ${answered && i === selectedAnswer && i !== correct ? "incorrect" : ""}" data-answer="${i}" ${answered ? "disabled" : ""}>${String.fromCharCode(65 + i)}. &nbsp; ${escapeHtml(option)}</button>`).join("")}</div>${answered ? `<div class="answer-feedback">${selectedAnswer === correct ? "✓ Richtig! " : "↗ Gần đúng rồi. "}${explanation}${comboMessage ? ` <strong class="combo-break-copy">${escapeHtml(comboMessage)}.</strong>` : ""}</div>` : ""}</div>`;
    } else if (questionIndex === lesson.questions.length) {
      const order = notes.order;
      const bank = [...order.slice(1), order[0]].filter(word => !drillAnswer.includes(word));
      content = `<span class="step-kicker">BÀI TẬP 2 · XẾP TRẬT TỰ CÂU</span><h2>Ghép từ thành câu đúng</h2><p class="modal-intro">Nhấn từng từ để đưa vào câu; kéo thả các thẻ đã chọn để đổi vị trí. Trên điện thoại, chạm lần lượt là đủ.</p><div class="question-card"><div class="question-count">SẮP XẾP TỪ · ${questionIndex + 1} / ${totalChallenges}</div><div class="word-drop-zone" data-dropzone="answer">${drillAnswer.length ? drillAnswer.map((word, i) => `<button class="word-chip selected" draggable="true" data-selected-index="${i}">${escapeHtml(word)}</button>`).join("") : '<span class="drop-hint">Chạm từ bên dưới hoặc kéo từ vào đây</span>'}</div><div class="word-bank" data-dropzone="bank">${bank.map(word => `<button class="word-chip" draggable="true" data-word="${escapeHtml(word)}">${escapeHtml(word)}</button>`).join("")}</div>${answered ? `<div class="answer-feedback">${isOrderCorrect(order) ? "✓ Câu đã đúng thứ tự!" : `↗ Đáp án: ${escapeHtml(sentenceText(order))}`}${comboMessage ? ` <strong class="combo-break-copy">${escapeHtml(comboMessage)}.</strong>` : ""}</div>` : ""}<button class="button-dark drill-check" data-action="check-order" ${answered ? "disabled" : ""}>Kiểm tra câu trả lời</button></div>`;
    } else {
      const blank = notes.blank;
      content = `<span class="step-kicker">BÀI TẬP 3 · ĐIỀN TỪ THEO NGỮ CẢNH</span><h2>Chọn từ phù hợp để hoàn thành câu</h2><div class="question-card"><div class="question-count">ĐIỀN CHỖ TRỐNG · ${questionIndex + 1} / ${totalChallenges}</div><div class="question-prompt">${germanText(blank.prompt)}</div><div class="question-options">${blank.options.map((option, i) => `<button class="answer-option ${fillChoice === i ? "chosen" : ""} ${answered && i === blank.answer ? "correct" : ""} ${answered && i === fillChoice && i !== blank.answer ? "incorrect" : ""}" data-fill="${i}" ${answered ? "disabled" : ""}>${escapeHtml(option)}</button>`).join("")}</div>${answered ? `<div class="answer-feedback">${fillChoice === blank.answer ? "✓ Richtig!" : "↗ Chưa đúng. Đáp án là: " + escapeHtml(blank.options[blank.answer])}${comboMessage ? ` <strong class="combo-break-copy">${escapeHtml(comboMessage)}.</strong>` : ""}</div>` : '<button class="button-dark drill-check" data-action="check-fill">Kiểm tra câu trả lời</button>'}</div>`;
    }
    const nextAction = questionIndex + 1 === totalChallenges ? "lesson-finish" : "question-next";
    content += `<div class="modal-actions"><span>✨ ${correctAnswers} đáp án đúng</span>${answered ? `<button class="button-dark" data-action="${nextAction}">${nextAction === "lesson-finish" ? "Xem kết quả →" : "Bài tiếp theo →"}</button>` : `<span>${questionIndex < lesson.questions.length ? "Chọn một đáp án để tiếp tục" : "Hoàn thành bài tập để tiếp tục"}</span>`}</div>`;
  } else {
    const maxScore = lesson.questions.length + 2;
    const totalAnswers = maxScore + 1;
    content = `<div class="result-box"><div class="result-emoji">${correctAnswers === totalAnswers ? "🎉" : correctAnswers >= totalAnswers / 2 ? "🌟" : "🌱"}</div><span class="step-kicker">BẠN ĐÃ HOÀN THÀNH BÀI HỌC</span><h2>${correctAnswers >= totalAnswers / 2 ? "Wunderbar! Tiến bộ tuyệt vời." : "Mỗi lần thử là một bước tiến."}</h2><p>${correctAnswers} / ${totalAnswers} câu đúng, gồm kiểm tra nhanh, trắc nghiệm, sắp xếp câu và điền từ. ${correctAnswers === totalAnswers ? "Bạn nắm rất chắc phần này rồi!" : "Hãy xem lại thẻ tóm tắt và thử lại khi sẵn sàng."}</p><div class="summary-card result-summary"><span>📌 NHẮC NHANH</span><p>${notes.summary}</p></div>${bestCombo >= 3 ? `<div class="combo-result">🔥 Combo tốt nhất: ${bestCombo}× · XP thưởng combo: +${comboBonusXp}</div>` : ""}<div class="result-score">✦ &nbsp; +${lessonEarned} XP &nbsp; · &nbsp; ${lesson.title}</div>${lessonEarned === 0 ? '<p class="modal-intro">Lần ôn tập này giúp bạn củng cố kiến thức; XP của bài học đã được nhận trước đó.</p>' : ""}<button class="button-primary" data-action="lesson-close">Tiếp tục hành trình →</button></div>`;
  }
  const comboClass = comboMessage ? "combo-break" : comboCount >= 5 ? "combo-lightning" : comboCount >= 3 ? "combo-fire" : comboCount > 0 ? "combo-spark" : "";
  const comboState = comboMessage ? "break" : comboCount >= 5 ? "lightning" : comboCount >= 3 ? "fire" : "spark";
  const comboLabel = comboMessage || (comboCount >= 5 ? "ON FIRE · COMBO XANH" : comboCount >= 3 ? "ON FIRE · CHUỖI ĐANG NÓNG" : comboCount > 0 ? "ĐÚNG LIÊN TIẾP" : "Sẵn sàng tạo combo");
  const comboMarkup = lessonStep === "result" ? "" : `<div class="combo-banner ${comboCount >= 3 && !comboMessage ? "combo-active" : ""} ${comboMessage ? "combo-message" : ""}" aria-live="polite"><span class="combo-icon" aria-hidden="true">${comboIconSvg(comboState)}</span><div class="combo-copy"><strong>${escapeHtml(comboLabel)}</strong><small>${comboMessage ? "Thử lại nhé — câu đúng tiếp theo sẽ mở chuỗi mới." : comboCount >= 3 ? `Đúng liên tiếp để giữ chuỗi · +${comboBonusXp} XP thưởng` : "Trả lời đúng liên tiếp để tăng combo"}</small></div><div class="combo-score"><strong id="combo-count" data-count="${comboCount}">${comboCount}</strong><small>${comboCount ? "COMBO" : "LIÊN TIẾP"}</small></div><span class="combo-particle particle-one" aria-hidden="true"></span><span class="combo-particle particle-two" aria-hidden="true"></span><span class="combo-particle particle-three" aria-hidden="true"></span></div>`;
  modalRoot.innerHTML = `<div class="lesson-modal ${comboClass}" role="dialog" aria-modal="true" aria-label="${lesson.title}"><div class="modal-top"><div class="modal-top-copy"><span class="lesson-row-icon">${lesson.icon}</span><span><strong>${lesson.level} · ${lesson.title}</strong><small>${lesson.duration} &nbsp;·&nbsp; Bài học tương tác</small></span></div><div class="modal-top-actions">${lessonStep !== "result" ? '<button class="reference-button" data-action="open-grammar">§ Tra cứu</button>' : ""}<button class="close-modal" data-action="lesson-close" aria-label="Đóng bài học">×</button></div></div><div class="lesson-progress"><span style="width:${progress}%"></span></div>${comboMarkup}<div class="modal-body">${content}</div></div>${quickReferenceOpen ? renderQuickReference() : ""}`;
  animateComboCount();
}
function comboIconSvg(state) {
  const paths = {
    spark: '<path d="m16 2-2.7 8.3L5 13l8.3 2.7L16 24l2.7-8.3L27 13l-8.3-2.7L16 2Z"/><path d="m6 22-.9 2.1L3 25l2.1.9L6 28l.9-2.1L9 25l-2.1-.9L6 22Z"/>',
    fire: '<path d="M17 2c1 5.2-2.5 6.6-2 10.1-1.8-1-2.6-2.7-2.4-4.8C8.4 10.5 6 14.3 6 18a10 10 0 0 0 20 0c0-5.8-3.8-11.2-9-16Z"/><path d="M16.5 14.5c.3 2.3-2 3.4-1.8 5.4A2.8 2.8 0 0 0 17.5 22a2.8 2.8 0 0 0 2.8-2.9c0-1.8-1.4-3.4-3.8-4.6Z"/>',
    lightning: '<path d="M18 2 6.5 17h7L12 30l11.5-16h-7L18 2Z"/><path d="M3 7h4M25 25h4M25 5l-2 2M7 25l-2 2"/>',
    break: '<path d="m15 3-3 8-7 2 6 3-2 8 7-6 7 1-4-6 3-7-7 3V3Z"/><path d="m4 26 5-5m13-13 4-4"/>'
  };
  return `<svg viewBox="0 0 32 32" focusable="false">${paths[state]}</svg>`;
}
let selectedAnswer = -1;
function playCorrectAnswerSound() {
  if (!state.settings.sound) return;
  const audio = document.getElementById("correct-answer-sound");
  if (!audio) {
    console.error("Không tìm thấy tệp âm thanh trả lời đúng.");
    return;
  }
  audio.currentTime = 0;
  audio.play().catch(error => {
    if (error.name !== "NotAllowedError") console.error("Không thể phát âm thanh trả lời đúng.", error);
  });
}
function animateComboCount() {
  const counter = document.getElementById("combo-count");
  if (!counter || comboCount < 1) return;
  const target = comboCount;
  const start = Math.max(0, target - 1);
  const duration = 260;
  const startedAt = performance.now();
  const tick = now => {
    if (!counter.isConnected) return;
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = 1 - (1 - progress) ** 3;
    counter.textContent = String(Math.round(start + (target - start) * eased));
    if (progress < 1) requestAnimationFrame(tick);
  };
  counter.textContent = String(start);
  requestAnimationFrame(tick);
}
function recordAnswer(isCorrect) {
  clearTimeout(comboMessageTimer);
  if (isCorrect) {
    correctAnswers++;
    comboCount++;
    bestCombo = Math.max(bestCombo, comboCount);
    if (comboCount >= 3) comboBonusXp += comboCount >= 5 ? 5 : 2;
    comboMessage = "";
    updateDailyStats({ correct: getDailyStats().correct + 1 });
    playCorrectAnswerSound();
    return;
  }
  if (comboCount > 0) {
    comboMessage = `Chuỗi ${comboCount}× bị ngắt`;
    clearTimeout(comboMessageTimer);
    comboMessageTimer = setTimeout(() => {
      comboMessage = "";
      const banner = modalRoot.querySelector(".combo-banner");
      const modal = modalRoot.querySelector(".lesson-modal");
      if (banner) {
        banner.classList.remove("combo-message");
        const label = banner.querySelector(".combo-copy strong");
        const detail = banner.querySelector(".combo-copy small");
        const icon = banner.querySelector(".combo-icon");
        if (label) label.textContent = "Chuỗi combo đã kết thúc";
        if (detail) detail.textContent = "Câu đúng tiếp theo sẽ bắt đầu chuỗi mới.";
        if (icon) icon.innerHTML = comboIconSvg("spark");
      }
      if (modal) modal.classList.remove("combo-break");
    }, 2400);
  }
  comboCount = 0;
}
function chooseAnswer(index) {
  if (answered) return;
  selectedAnswer = index;
  answered = true;
  recordAnswer(index === currentLesson.questions[questionIndex][2]);
  renderLessonModal();
}
function isOrderCorrect(order) {
  return drillAnswer.length === order.length && drillAnswer.every((word, index) => word === order[index]);
}
function sentenceText(words) {
  return words.join(" ").replace(/\s+([,.!?;:])/g, "$1");
}
function checkCurrentDrill() {
  if (answered) return;
  if (questionIndex === currentLesson.questions.length) {
    if (drillAnswer.length !== learningNotes[currentLesson.id].order.length) { showToast("Hãy xếp đủ các từ vào câu trước nhé."); return; }
    answered = true;
    recordAnswer(isOrderCorrect(learningNotes[currentLesson.id].order));
  } else {
    if (fillChoice < 0) { showToast("Chọn một từ để hoàn thành câu nhé."); return; }
    answered = true;
    recordAnswer(fillChoice === learningNotes[currentLesson.id].blank.answer);
  }
  renderLessonModal();
}
function finishLesson() {
  const wasComplete = state.completed.includes(currentLesson.id);
  lessonEarned = wasComplete ? 0 : 15 + correctAnswers * 5 + comboBonusXp;
  if (!wasComplete) state.completed.push(currentLesson.id);
  state.xp += lessonEarned;
  const today = localDateKey();
  const duration = Number.parseInt(currentLesson.duration, 10);
  if (state.studyDate !== today) state.minutesToday = 0;
  state.studyDate = today;
  state.minutesToday += duration;
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = `${yesterdayDate.getFullYear()}-${String(yesterdayDate.getMonth() + 1).padStart(2, "0")}-${String(yesterdayDate.getDate()).padStart(2, "0")}`;
  if (state.lastStudy !== today) state.streak = state.lastStudy === yesterday ? state.streak + 1 : 1;
  state.studyDays = [...new Set([...(state.studyDays || []), today])].slice(-400);
  state.lastStudy = today;
  const dailyStats = getDailyStats();
  updateDailyStats({ lessons: dailyStats.lessons + 1, xp: dailyStats.xp + lessonEarned });
  persist();
  lessonStep = "result";
  renderLessonModal();
}
function reviewVocab(dueOnly = false) {
  const filter = pageContent.dataset.vocabFilter || "";
  const level = pageContent.dataset.vocabLevel || "all";
  const filtered = allWords.filter(item => (level === "all" || item.level === level) && `${item.word} ${item.meaning}`.toLocaleLowerCase("vi").includes(filter.trim().toLocaleLowerCase("vi")));
  const words = dueOnly ? filtered.filter(item => dueWords().some(due => due.word === item.word)) : filtered;
  if (!words.length) { showToast(dueOnly ? "Bạn đã ôn hết thẻ đến hạn. Rất tốt!" : "Chưa có từ phù hợp để ôn. Thử xóa bộ lọc nhé."); return; }
  vocabIndex = Math.min(vocabIndex, words.length - 1);
  let flipped = false;
  const draw = () => {
    if (vocabIndex >= words.length) {
      modalRoot.innerHTML = `<div class="lesson-modal" role="dialog" aria-modal="true" aria-label="Hoàn thành ôn từ"><div class="modal-top"><div class="modal-top-copy"><span class="lesson-row-icon">🎉</span><span><strong>Hoàn thành phiên ôn tập</strong><small>Spaced repetition · Deutschlingo</small></span></div><button class="close-modal" data-action="lesson-close">×</button></div><div class="modal-body"><div class="result-box"><div class="result-emoji">🌱</div><h2>Sehr gut! Bạn đã ôn xong.</h2><p>Các từ đã được lên lịch nhắc lại theo nhịp 1, 3 và 7 ngày để giúp ghi nhớ lâu hơn.</p><button class="button-primary" data-action="lesson-close">Quay lại kho từ vựng</button></div></div></div>`;
      return;
    }
    const item = words[vocabIndex];
    const stored = state.srs[item.word];
    const isDue = !stored || !stored.due || stored.due <= localDateKey();
    modalRoot.innerHTML = `<div class="lesson-modal" role="dialog" aria-modal="true" aria-label="Ôn từ vựng"><div class="modal-top"><div class="modal-top-copy"><span class="lesson-row-icon">🧠</span><span><strong>Thẻ từ vựng · ${vocabIndex + 1}/${words.length}</strong><small>${item.level} · ${item.lesson} · ${isDue ? "đến hạn" : "xem trước"}</small></span></div><button class="close-modal" data-action="lesson-close">×</button></div><div class="modal-body"><span class="step-kicker">NHÌN TỪ, TỰ NHỚ NGHĨA RỒI LẬT THẺ</span><button class="srs-flashcard" data-action="vocab-flip"><span class="word-article"><i class="article-dot" style="--word-color:${item.gender}"></i><strong class="${genderClass(item.word)}">${escapeHtml(flipped ? item.meaning : item.word)}</strong></span><span>${flipped ? germanText(item.example) : "Chạm để xem nghĩa và ví dụ"}</span><small>${item.level} · ${item.lesson}</small></button>${flipped ? `<div class="srs-rating"><p>Bạn nhớ từ này như thế nào?</p><div class="rating-buttons"><button data-rating="again"><strong>Quên</strong><small>ôn lại sau 1 ngày</small></button><button data-rating="hard"><strong>Khó</strong><small>ôn lại sau 1 ngày</small></button><button data-rating="good"><strong>Nhớ được</strong><small>tiếp theo ${stored?.interval === 1 ? "3" : stored?.interval === 3 ? "7" : "1"} ngày</small></button><button data-rating="easy"><strong>Rất dễ</strong><small>chuyển nhanh hơn</small></button></div></div>` : `<div class="modal-actions"><span>⏱️ Lặp lại giãn cách: 1 · 3 · 7 ngày</span><button class="button-dark" data-action="vocab-flip">Lật thẻ →</button></div>`}</div></div>`;
  };
  draw();
  modalRoot.dataset.review = "true";
  modalRoot._drawReview = draw;
  modalRoot._reviewState = { words, dueOnly, get flipped() { return flipped; }, set flipped(value) { flipped = value; }, get index() { return vocabIndex; }, set index(value) { vocabIndex = value; flipped = false; } };
}
function rateVocabulary(rating) {
  const review = modalRoot._reviewState;
  if (!review) return;
  const item = review.words[review.index];
  const previous = state.srs[item.word];
  const previousInterval = Number(previous?.interval) || 0;
  const schedule = { again: 1, hard: 1, good: previousInterval === 1 ? 3 : previousInterval === 3 ? 7 : 1, easy: previousInterval >= 3 ? 7 : 3 };
  const interval = schedule[rating];
  const due = new Date();
  due.setDate(due.getDate() + interval);
  state.srs[item.word] = { interval, due: `${due.getFullYear()}-${String(due.getMonth() + 1).padStart(2, "0")}-${String(due.getDate()).padStart(2, "0")}` };
  persist();
  review.index = review.index + 1;
  modalRoot._drawReview();
}
document.addEventListener("click", event => {
  const target = event.target.closest("button");
  if (!target) {
    if (event.target === modalRoot) closeLesson();
    return;
  }
  if (target.dataset.page) { setPage(target.dataset.page); return; }
  if (target.dataset.grammarFilter) { grammarFilter = target.dataset.grammarFilter; renderGrammar(); return; }
  if (target.dataset.referenceTopic) { quickReferenceTopic = target.dataset.referenceTopic; renderLessonModal(); return; }
  if (target.dataset.phrase !== undefined) {
    if (activeStream)     activeRecognition = null;
    stopSpeaking();
    speakingIndex = Number(target.dataset.phrase); speakingTranscript = ""; speakingStatus = ""; renderSpeaking(); return;
  }
  if (target.dataset.level && target.classList.contains("level-shortcut")) {
    activeLevel = target.dataset.level; setPage("path"); return;
  }
  if (target.dataset.level && target.classList.contains("level-tab")) {
    activeLevel = target.dataset.level;
    if (activePage === "home") setPage("path"); else renderPage();
    return;
  }
  if (target.dataset.lesson) {
    startLesson(target.dataset.lesson); return;
  }
  if (target.dataset.answer !== undefined && target.dataset.action === "theory-answer") {
    if (theoryAnswered) return;
    theorySelected = Number(target.dataset.answer);
    theoryAnswered = true;
    recordAnswer(theorySelected === currentLesson.questions[0][2]);
    renderLessonModal();
    return;
  }
  if (target.dataset.answer !== undefined) { chooseAnswer(Number(target.dataset.answer)); return; }
  if (target.dataset.fill !== undefined) { fillChoice = Number(target.dataset.fill); renderLessonModal(); return; }
  if (target.dataset.word !== undefined && target.classList.contains("word-chip")) {
    if (Date.now() < suppressChipClickUntil) return;
    drillAnswer.push(target.dataset.word); renderLessonModal(); return;
  }
  if (target.dataset.selectedIndex !== undefined) {
    if (Date.now() < suppressChipClickUntil) return;
    drillAnswer.splice(Number(target.dataset.selectedIndex), 1); renderLessonModal(); return;
  }
  if (target.dataset.rating) { rateVocabulary(target.dataset.rating); return; }
  const action = target.dataset.action;
  if (action === "close-menu") { closeMobileMenu(); return; }
  if (action === "reset-avatar") {
    pendingAvatarImage = "";
    pendingAvatarName = "";
    const preview = document.querySelector(".profile-hero-avatar");
    const upload = document.getElementById("profile-avatar-file");
    const status = document.querySelector(".avatar-upload-status");
    if (preview) preview.innerHTML = avatarMarkup();
    if (upload) upload.value = "";
    if (status) status.textContent = "Biểu tượng khách sẽ được dùng khi bạn lưu hồ sơ.";
    showToast("Đã chọn biểu tượng khách. Nhấn “Lưu hồ sơ” để áp dụng.");
    return;
  }
  if (action === "start-next") { startLesson(getNextLesson().id); return; }
  if (action === "lesson-next") { clearTimeout(comboMessageTimer); comboMessage = ""; lessonStep = "words"; renderLessonModal(); return; }
  if (action === "lesson-back") { clearTimeout(comboMessageTimer); comboMessage = ""; lessonStep = "theory"; renderLessonModal(); return; }
  if (action === "lesson-practice") { clearTimeout(comboMessageTimer); comboMessage = ""; lessonStep = "practice"; questionIndex = 0; answered = false; selectedAnswer = -1; drillAnswer = []; fillChoice = -1; renderLessonModal(); return; }
  if (action === "question-next") { clearTimeout(comboMessageTimer); comboMessage = ""; questionIndex++; answered = false; selectedAnswer = -1; fillChoice = -1; renderLessonModal(); return; }
  if (action === "check-order" || action === "check-fill") { checkCurrentDrill(); return; }
  if (action === "lesson-finish") { finishLesson(); return; }
  if (action === "lesson-close") { closeLesson(); return; }
  if (action === "review-vocab") { vocabIndex = 0; reviewVocab(target.dataset.due === "true"); return; }
  if (action === "vocab-flip" && modalRoot._reviewState) { modalRoot._reviewState.flipped = !modalRoot._reviewState.flipped; modalRoot._drawReview(); return; }
  if (action === "open-grammar") { quickReferenceOpen = true; renderLessonModal(); return; }
  if (action === "close-grammar") { quickReferenceOpen = false; renderLessonModal(); return; }
  if (action === "open-full-grammar") { quickReferenceOpen = false; closeLesson(); setPage("grammar"); return; }
  if (action === "export-data") {
    try {
      const backup = { app: "DeutschLingo", version: 1, exportedAt: new Date().toISOString(), data: state };
      const url = URL.createObjectURL(new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" }));
      const link = document.createElement("a");
      link.href = url;
      link.download = `deutschlingo-backup-${localDateKey()}.json`;
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      showToast("Đã tạo bản sao dữ liệu học tập.");
    } catch (error) {
      console.error("Không thể xuất dữ liệu học tập.", error);
      showToast("Không thể tải bản sao dữ liệu. Hãy thử lại.");
    }
    return;
  }
  if (action === "reset-progress") {
    if (!window.confirm("Đặt lại toàn bộ tiến độ học trên thiết bị này? XP, chuỗi ngày, bài đã hoàn thành và lịch ôn từ sẽ bị xóa. Hồ sơ và cài đặt vẫn được giữ.")) return;
    const previousState = state;
    state = {
      ...state,
      completed: [],
      xp: 0,
      streak: 0,
      lastStudy: "",
      studyDate: "",
      minutesToday: 0,
      srs: {},
      studyDays: [],
      dailyStats: { date: "", correct: 0, lessons: 0, xp: 0, claimed: [] }
    };
    if (!persist()) { state = previousState; return; }
    renderPage();
    showToast("Đã đặt lại tiến độ học.");
    return;
  }
  if (action === "copy-summary") {
    if (!navigator.clipboard?.writeText) { showToast("Trình duyệt chưa cấp quyền clipboard. Hãy chọn và sao chép nội dung thủ công."); return; }
    navigator.clipboard.writeText(learningNotes[currentLesson.id].summary).then(() => showToast("Đã sao chép thẻ tóm tắt."), error => { console.error("Không thể sao chép tóm tắt.", error); showToast("Không thể sao chép. Hãy chọn và sao chép nội dung thủ công."); });
    return;
  }
  if (action === "play-word-of-day") { playModelVoice(wordOfTheDay().word.replace(/,\s*.*$/, "")); return; }
  if (action === "play-model") { playModelVoice(speakingPhrases[speakingIndex].text); return; }
  if (action === "start-speaking") { startSpeaking(); return; }
  if (action === "stop-speaking") { stopSpeaking(); speakingStatus = "Đã dừng luyện nói."; renderSpeaking(); return; }
  if ((action === "vocab-prev" || action === "vocab-next") && modalRoot._reviewState) {
    const list = modalRoot._reviewState.words;
    modalRoot._reviewState.index = (modalRoot._reviewState.index + (action === "vocab-next" ? 1 : list.length - 1)) % list.length;
    modalRoot._drawReview();
    return;
  }
  if (action === "speak") {
    const word = target.dataset.word;
    playModelVoice(word);
  }
});
function closeLesson() {
  if (activeStream) stopSpeaking();
  modalRoot.innerHTML = "";
  delete modalRoot._drawReview;
  delete modalRoot._reviewState;
  modalRoot.removeAttribute("data-review");
  renderPage();
}
document.addEventListener("input", event => {
  if (event.target.id === "vocab-search") {
    const level = document.getElementById("vocab-filter")?.value || "all";
    renderVocabulary(event.target.value, level);
    const search = document.getElementById("vocab-search");
    search.focus();
    search.setSelectionRange(search.value.length, search.value.length);
    return;
  }
  if (event.target.id === "grammar-search") {
    grammarSearch = event.target.value;
    const cursor = event.target.selectionStart;
    renderGrammar();
    const search = document.getElementById("grammar-search");
    search.focus();
    search.setSelectionRange(cursor, cursor);
  }
});
async function prepareAvatarImage(file) {
  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
    showToast("Chọn ảnh JPG, PNG hoặc WebP để làm avatar.");
    return;
  }
  if (file.size > 8 * 1024 * 1024) {
    showToast("Ảnh quá lớn. Vui lòng chọn ảnh dưới 8 MB.");
    return;
  }
  try {
    const bitmap = await createImageBitmap(file);
    const sourceSize = Math.min(bitmap.width, bitmap.height);
    const size = Math.min(sourceSize, 320);
    const sourceX = (bitmap.width - sourceSize) / 2;
    const sourceY = (bitmap.height - sourceSize) / 2;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d");
    if (!context) {
      bitmap.close();
      throw new Error("Trình duyệt không tạo được bộ xử lý ảnh.");
    }
    context.fillStyle = "#dcebcf";
    context.fillRect(0, 0, size, size);
    context.drawImage(bitmap, sourceX, sourceY, sourceSize, sourceSize, 0, 0, size, size);
    bitmap.close();
    const image = canvas.toDataURL("image/jpeg", 0.82);
    if (image.length > 300000) throw new Error("Ảnh sau khi xử lý vẫn vượt giới hạn lưu trữ.");
    pendingAvatarImage = image;
    pendingAvatarName = file.name;
    const preview = document.querySelector(".profile-hero-avatar");
    const status = document.querySelector(".avatar-upload-status");
    if (preview) preview.innerHTML = avatarMarkup(image);
    if (status) status.textContent = `Đã chọn ${file.name} · hãy lưu hồ sơ để áp dụng.`;
    showToast("Đã chọn ảnh. Nhấn “Lưu hồ sơ” để áp dụng.");
  } catch (error) {
    console.error("Không thể xử lý ảnh đại diện.", error);
    showToast("Không thể mở ảnh này. Hãy thử một ảnh JPG, PNG hoặc WebP khác.");
  }
}
document.addEventListener("submit", event => {
  if (event.target.id !== "profile-form") return;
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = String(formData.get("name") || "").trim();
  if (!name || name.length > 32) {
    showToast("Hãy nhập tên hiển thị hợp lệ.");
    return;
  }
  const previousProfile = state.profile;
  state.profile = { name, avatarImage: pendingAvatarImage ?? state.profile.avatarImage };
  if (!persist()) { state.profile = previousProfile; return; }
  pendingAvatarImage = null;
  pendingAvatarName = "";
  updateTopbar();
  renderPage();
  showToast("Đã lưu hồ sơ của bạn.");
});
document.addEventListener("change", event => {
  if (event.target.id === "profile-avatar-file") {
    const file = event.target.files?.[0];
    if (file) prepareAvatarImage(file);
  }
  if (event.target.id === "import-data-file") {
    const file = event.target.files?.[0];
    if (file) importBackup(file);
    event.target.value = "";
  }
  if (event.target.id === "vocab-filter") renderVocabulary(document.getElementById("vocab-search").value, event.target.value);
  if (event.target.id === "daily-goal") {
    const dailyGoal = Number(event.target.value);
    if (![5, 10, 15, 20, 30].includes(dailyGoal)) return;
    const previousGoal = state.settings.dailyGoal;
    state.settings.dailyGoal = dailyGoal;
    if (!persist()) { state.settings.dailyGoal = previousGoal; renderPage(); return; }
    renderPage();
    showToast(`Đã đặt mục tiêu ${dailyGoal} phút mỗi ngày.`);
  }
  if (event.target.id === "setting-sound" || event.target.id === "setting-animations") {
    const setting = event.target.id === "setting-sound" ? "sound" : "animations";
    const previousValue = state.settings[setting];
    state.settings[setting] = event.target.checked;
    if (!persist()) { state.settings[setting] = previousValue; applySettings(); renderPage(); return; }
    applySettings();
    showToast("Đã lưu cài đặt của bạn.");
  }
});
document.addEventListener("dragover", event => {
  const dropzone = event.target.closest(".avatar-upload-dropzone");
  if (!dropzone) return;
  event.preventDefault();
  dropzone.classList.add("drag-over");
});
document.addEventListener("dragleave", event => {
  const dropzone = event.target.closest(".avatar-upload-dropzone");
  if (dropzone && (!event.relatedTarget || !dropzone.contains(event.relatedTarget))) dropzone.classList.remove("drag-over");
});
document.addEventListener("drop", event => {
  const dropzone = event.target.closest(".avatar-upload-dropzone");
  if (!dropzone) return;
  event.preventDefault();
  dropzone.classList.remove("drag-over");
  const file = event.dataTransfer?.files[0];
  if (file) prepareAvatarImage(file);
});
document.addEventListener("pointerdown", event => {
  const chip = event.target.closest(".word-chip");
  if (!chip || !event.isPrimary) return;
  pointerDrag = { chip, startX: event.clientX, startY: event.clientY, moved: false };
});
document.addEventListener("pointermove", event => {
  if (!pointerDrag || !event.isPrimary) return;
  if (Math.hypot(event.clientX - pointerDrag.startX, event.clientY - pointerDrag.startY) > 8) {
    pointerDrag.moved = true;
    event.preventDefault();
  }
});
document.addEventListener("pointerup", event => {
  if (!pointerDrag || !pointerDrag.moved) { pointerDrag = null; return; }
  const source = pointerDrag.chip;
  const dropZone = event.target.closest("[data-dropzone]");
  if (dropZone) {
    const sourceSelected = source.dataset.selectedIndex !== undefined;
    const targetChip = event.target.closest("[data-selected-index]");
    if (!sourceSelected && dropZone.dataset.dropzone === "answer") {
      drillAnswer.push(source.dataset.word);
    } else if (sourceSelected && dropZone.dataset.dropzone === "bank") {
      drillAnswer.splice(Number(source.dataset.selectedIndex), 1);
    } else if (sourceSelected && dropZone.dataset.dropzone === "answer") {
      const [moved] = drillAnswer.splice(Number(source.dataset.selectedIndex), 1);
      const targetIndex = targetChip ? Number(targetChip.dataset.selectedIndex) : drillAnswer.length;
      drillAnswer.splice(Math.min(targetIndex, drillAnswer.length), 0, moved);
    }
    suppressChipClickUntil = Date.now() + 500;
    renderLessonModal();
  }
  pointerDrag = null;
});
document.addEventListener("pointercancel", () => { pointerDrag = null; });
document.addEventListener("dragstart", event => {
  const chip = event.target.closest(".word-chip");
  if (!chip || !event.dataTransfer) return;
  event.dataTransfer.effectAllowed = "move";
  if (chip.dataset.selectedIndex !== undefined) {
    event.dataTransfer.setData("text/plain", JSON.stringify({ type: "selected", index: Number(chip.dataset.selectedIndex) }));
  } else {
    event.dataTransfer.setData("text/plain", JSON.stringify({ type: "bank", word: chip.dataset.word }));
  }
});
document.addEventListener("dragover", event => {
  if (event.target.closest("[data-dropzone]")) event.preventDefault();
});
document.addEventListener("drop", event => {
  const zone = event.target.closest("[data-dropzone]");
  if (!zone || !event.dataTransfer) return;
  event.preventDefault();
  try {
    const item = JSON.parse(event.dataTransfer.getData("text/plain"));
    if (item.type === "bank" && zone.dataset.dropzone === "answer") drillAnswer.push(item.word);
    if (item.type === "selected" && zone.dataset.dropzone === "bank") drillAnswer.splice(item.index, 1);
    if (item.type === "selected" && zone.dataset.dropzone === "answer") {
      const targetIndex = event.target.closest("[data-selected-index]");
      if (targetIndex) {
        const [moved] = drillAnswer.splice(item.index, 1);
        drillAnswer.splice(Number(targetIndex.dataset.selectedIndex), 0, moved);
      }
    }
    renderLessonModal();
  } catch (error) {
    console.error("Không thể sắp xếp thẻ từ.", error);
    showToast("Không thể sắp xếp thẻ từ này. Hãy thử chạm vào từng từ.");
  }
});
document.getElementById("menu-toggle").addEventListener("click", event => {
  const isOpen = document.getElementById("sidebar").classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
  event.currentTarget.setAttribute("aria-label", isOpen ? "Đóng menu" : "Mở menu");
  document.body.classList.toggle("menu-open", isOpen);
});
document.querySelector(".brand").addEventListener("click", event => {
  event.preventDefault();
  setPage("home");
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && quickReferenceOpen) { quickReferenceOpen = false; renderLessonModal(); return; }
  if (event.key === "Escape" && modalRoot.innerHTML) closeLesson();
  if (event.key === "Escape" && document.getElementById("sidebar").classList.contains("open")) closeMobileMenu();
});
applySettings();
updateTopbar();
renderPage();
