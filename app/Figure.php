<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Figure extends Model
{
    public $timestamps = false;

    protected $fillable = ['type_id', 'data', 'square'];

    public function type()
    {
        return $this->hasOne(Type::class);
    }

    public static function add($fields)
    {
        $figure = new static;
        $figure->fill($fields);
        $figure->save();

        return $figure;
    }

    public function edit($fields)
    {
        $figure->fill($fields);
        $figure->save();
    }

    public function remove()
    {
        $this->delete();
    }

    public static function calcSquare($type_id, $data)
    {
        $data = json_decode($data);
        switch ($type_id) {
            case 1:
            {
                $radius = $data->radius;
                $square  = Pow($radius,2) * 3.14;
                return $square;
            }
            case 2:
            {
                $length = $data->length;
                $square = $length * $length;
                return $square;
            }
            case 3:
            {
                $firstSide = $data->firstSide;
                $secondSide = $data->secondSide;
                $square = $firstSide * $secondSide;
                return $square;
            }
            case 4:
            {
                $firstSide = $data->firstSide;
                $secondSide = $data->secondSide;
                $thirdSide = $data->thirdSide;
                $pp = ($firstSide + $secondSide + $thirdSide)/2;
                $square = sqrt($pp*($pp-$firstSide)*($pp-$secondSide)*($pp-$thirdSide));
                return $square;
            }
        }
    }

}
