//=============================================================================
// Manosasayaki_CaracterBind.js
// ----------------------------------------------------------------------------
// Copyright (c) 2017-2017 Sigureya
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version
// 0.9.0 2017/04/13 初版 
// ----------------------------------------------------------------------------
// [Twitter]: https://twitter.com/Sigureya/
//=============================================================================

/*:ja
 * @plugindesc マップ上でのキャラクターを対象とする処理をジャックします。
 * 代入した数値のキャラクターを操作対象にします。
 * 
 * @author しぐれん（魔のささやき）
 *
 * @help
 * プラグインコマンドで有効化します。
 * CharacterBind イベントID
 * -1はプレイヤーです。
 * Game_Interpreter.characterをジャックしています。
 * 
 * var 1.0(2017/5/14) 公開
 */

(function () {
    'use strict';

var zz_Game_Interpreter_prototype_character =Game_Interpreter.prototype.character;
Game_Interpreter.prototype.character =function(param){
    if(this.bindedChar_manosasayaki!==undefined){
        return zz_Game_Interpreter_prototype_character.call(this,this.bindedChar_manosasayaki);
    }
    return zz_Game_Interpreter_prototype_character.apply(this,arguments);
}
var zz_Game_Interpreter_prototype_pluginCommand =Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    if(command == "CharacterBind"){
        if(args.length > 0){
            this.bindedChar_manosasayaki = Number(args[0]);
        }else{
            this.bindedChar_manosasayaki = undefined;
        }
    }
};

})();
