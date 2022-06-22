// make_header: 関数
// 引数: 呼び出し元から root までのパス
// 返り値: header 全体の HTML
const make_header = (path_from_file_to_root) => {
    const header =
        `<div class="navbar-box bg-success sticky-top">
            <div class="bg-success container">
                <nav class="navbar navbar-expand-md navbar-dark bg-success">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar" aria-controls="Navbar" aria-expanded="false">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="Navbar">
                        <ul class="navbar-nav text-md-center nav-justified w-100">
                            <li class="nav-item"><a class="nav-link" href="${path_from_file_to_root}index.html">トップ</a></li>
                            <li class="nav-item"><a class="nav-link no_link" href="#">対談(準備中)</a></li>
                            <li class="nav-item"><a class="nav-link" href="${path_from_file_to_root}content/question/">質問コーナー</a></li>
                            <li class="nav-item"><a class="nav-link no_link" href="#">動画(準備中)</a></li>
                            <li class="nav-item"><a class="nav-link no_link" href="#">資料室(準備中)</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>`;
    
    return header;
};

export {make_header};