<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddQuestionChoiceForeignKeyToUserLearnWordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_learn_words', function (Blueprint $table) {
            $table->foreignId('question_choice_id')->constrained()->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_learn_words', function (Blueprint $table) {
            $table->dropForeign('question_choice_id');
        });
    }
}
