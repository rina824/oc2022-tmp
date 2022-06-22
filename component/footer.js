// make_footer: 関数
// 引数: 呼び出し元から root までのパス
// 返り値: footer 全体の HTML
const make_footer = (path_from_file_to_root) => {
    const footer =
    `
    <!-- フッター(コピーライト) -->
    <footer>
    <div class="footer footer-copyright">
        <span class="small d-block mb-2">Copyright (C) 2022 Nagoya University Co-op Student Committee.</span>
        <span class="small d-block"><a target="_blank" class="text-white" href="${path_from_file_to_root}content/policy/">プライバシーポリシー</a></span>
    </div>
    </footer>
    
    <!-- javascript はここから --> 
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script> 
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> 
    <script type="text/javascript" src="${path_from_file_to_root}js/script.js"></script>
    `;

    return footer;
};

export {make_footer}