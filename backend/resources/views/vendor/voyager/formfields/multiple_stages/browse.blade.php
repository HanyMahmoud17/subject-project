<select class="select2" multiple name="{{ $name }}[]" data-name="{{ $name }}">
    @foreach($stages as $stageId => $stageName)
        <option value="{{ $stageId }}" @if(is_array(old($name, $value)) && in_array($stageId, old($name, $value))) selected @endif>{{ $stageName }}</option>
    @endforeach
</select>