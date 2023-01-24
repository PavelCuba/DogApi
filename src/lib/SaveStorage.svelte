
<script>
      import {Preferences} from "@capacitor/preferences";
   async function getData(key, value){
        const data = await Preferences.get({ key });
        return JSON.parse(data.value);
   }
    async function setData(key,value){
          await Preferences.set({ key, value: JSON.stringify(value) });
    }
</script>



