const admin = require('../utils/service');
const storage = admin.storage();

const checkFolder = async (req, res) => {
    console.log('jahahaha')
    const bucketName = 'gledex-d4404.appspot.com';
    const [files] = await storage.bucket(bucketName).getFiles();
    
    try {
        const config = {
            action: 'read',
            expires: '03-17-2491'
         };
         const promises = [];
         for (let i = 1; i < files.length; i++) {
           console.log(files[i].name);
           promises.push(await files[i].getSignedUrl(config));
         }
        
        const urlsArray = await Promise.all(promises);
        const csr2020 = [];
        for(let i=0; i<urlsArray.length; i++){
            const CSR_2020 = urlsArray[i].filter(function(item) {
                return item.toString().includes("2020_CSR_gl") == true;
            });

            if(CSR_2020.length !=0){
                csr2020.push(CSR_2020);
            }

        }
        // const stringData = JSON.stringify(csr2020);

        var dObj = [];
        var temp_key = ""

        for(let i=0; i<csr2020.length; i++){
            const dataStr = JSON.stringify(temp_key + csr2020[i]);
            const dataString = ("{"+'"img":'+dataStr+"}");
            // console.log(dataString)
            const dataObj = JSON.parse(dataString);
            // console.log(dataObj)
            dObj.push(dataObj)
        }

        console.log(dObj)

        res.send({body: dObj})
        return urlsArray;

    } catch (error) {
        console.error("Error creating user document", error);
    }
}

const csr2018_gallery = async (req, res) => {
    console.log('jahahaha')
    const bucketName = 'gledex-d4404.appspot.com';
    const [files] = await storage.bucket(bucketName).getFiles();
    
    try {
        const config = {
            action: 'read',
            expires: '03-17-2491'
         };
         const promises = [];
         for (let i = 1; i < files.length; i++) {
           console.log(files[i].name);
           promises.push(await files[i].getSignedUrl(config));
         }
        
        const urlsArray = await Promise.all(promises);

        const csr2018 = [];
        for(let i=0; i<urlsArray.length; i++){
            const CSR_2018 = urlsArray[i].filter(function(item) {
                return item.toString().includes("2018_CSR_") == true;
            });
            if(CSR_2018.length !=0){
                csr2018.push(CSR_2018);
            }
        }
        // const stringData = JSON.stringify(csr2020);

        var dObj = [];
        var temp_key = ""

        for(let i=0; i<csr2018.length; i++){
            const dataStr = JSON.stringify(temp_key + csr2018[i]);
            const dataString = ("{"+'"img":'+dataStr+"}");
            // console.log(dataString)
            const dataObj = JSON.parse(dataString);
            // console.log(dataObj)
            dObj.push(dataObj)
        }
        console.log(dObj)

        res.send({body: dObj})
        return urlsArray;

    } catch (error) {
        console.error("Error creating user document", error);
    }
}

const csr2021_gallery = async (req, res) => {
    console.log('jahahaha')
    const bucketName = 'gledex-d4404.appspot.com';
    const [files] = await storage.bucket(bucketName).getFiles();
    
    try {
        const config = {
            action: 'read',
            expires: '03-17-2491'
         };
         const promises = [];
         for (let i = 1; i < files.length; i++) {
           console.log(files[i].name);
           promises.push(await files[i].getSignedUrl(config));
         }
        
        const urlsArray = await Promise.all(promises);

        const csr2021 = [];
        for(let i=0; i<urlsArray.length; i++){
            const CSR_2021 = urlsArray[i].filter(function(item) {
                return item.toString().includes("2021_CSR_") == true;
            });
            if(CSR_2021.length !=0){
                csr2021.push(CSR_2021);
            }
        }
        // const stringData = JSON.stringify(csr2020);

        var dObj = [];
        var temp_key = ""

        for(let i=0; i<csr2021.length; i++){
            const dataStr = JSON.stringify(temp_key + csr2021[i]);
            const dataString = ("{"+'"img":'+dataStr+"}");
            // console.log(dataString)
            const dataObj = JSON.parse(dataString);
            // console.log(dataObj)
            dObj.push(dataObj)
        }
        console.log(dObj)

        res.send({body: dObj})
        return urlsArray;

    } catch (error) {
        console.error("Error creating user document", error);
    }
}

const awards2020_gallery = async (req, res) => {
    console.log('jahahaha')
    const bucketName = 'gledex-d4404.appspot.com';
    const [files] = await storage.bucket(bucketName).getFiles();
    
    try {
        const config = {
            action: 'read',
            expires: '03-17-2491'
         };
         const promises = [];
         for (let i = 1; i < files.length; i++) {
           console.log(files[i].name);
           promises.push(await files[i].getSignedUrl(config));
         }
        
        const urlsArray = await Promise.all(promises);

        const awards2020 = [];
        for(let i=0; i<urlsArray.length; i++){
            const AWARDS_2020 = urlsArray[i].filter(function(item) {
                return item.toString().includes("2020_Awards_") == true;
            });
            if(AWARDS_2020.length !=0){
                awards2020.push(AWARDS_2020);
            }
        }
        // const stringData = JSON.stringify(csr2020);

        var dObj = [];
        var temp_key = ""

        for(let i=0; i<awards2020.length; i++){
            const dataStr = JSON.stringify(temp_key + awards2020[i]);
            const dataString = ("{"+'"img":'+dataStr+"}");
            // console.log(dataString)
            const dataObj = JSON.parse(dataString);
            // console.log(dataObj)
            dObj.push(dataObj)
        }
        console.log(dObj)

        res.send({body: dObj})
        return urlsArray;

    } catch (error) {
        console.error("Error creating user document", error);
    }
}

const awards2021_gallery = async (req, res) => {
    console.log('jahahaha')
    const bucketName = 'gledex-d4404.appspot.com';
    const [files] = await storage.bucket(bucketName).getFiles();
    
    try {
        const config = {
            action: 'read',
            expires: '03-17-2491'
         };
         const promises = [];
         for (let i = 1; i < files.length; i++) {
           console.log(files[i].name);
           promises.push(await files[i].getSignedUrl(config));
         }
        
        const urlsArray = await Promise.all(promises);

        const awards2021 = [];
        for(let i=0; i<urlsArray.length; i++){
            const AWARDS_2021 = urlsArray[i].filter(function(item) {
                return item.toString().includes("2021_Awards_") == true;
            });
            if(AWARDS_2021.length !=0){
                awards2021.push(AWARDS_2021);
            }
        }
        // const stringData = JSON.stringify(csr2020);

        var dObj = [];
        var temp_key = ""

        for(let i=0; i<awards2021.length; i++){
            const dataStr = JSON.stringify(temp_key + awards2021[i]);
            const dataString = ("{"+'"img":'+dataStr+"}");
            // console.log(dataString)
            const dataObj = JSON.parse(dataString);
            // console.log(dataObj)
            dObj.push(dataObj)
        }
        console.log(dObj)

        res.send({body: dObj})
        return urlsArray;

    } catch (error) {
        console.error("Error creating user document", error);
    }
}
const gatherings2015_gallery = async (req, res) => {
    console.log('jahahaha')
    const bucketName = 'gledex-d4404.appspot.com';
    const [files] = await storage.bucket(bucketName).getFiles();
    
    try {
        const config = {
            action: 'read',
            expires: '03-17-2491'
         };
         const promises = [];
         for (let i = 1; i < files.length; i++) {
           console.log(files[i].name);
           promises.push(await files[i].getSignedUrl(config));
         }
        
        const urlsArray = await Promise.all(promises);

        const gatherings2015 = [];
        for(let i=0; i<urlsArray.length; i++){
            const GATHERINGS_2015 = urlsArray[i].filter(function(item) {
                return item.toString().includes("2015_Gatherings_") == true;
            });
            if(GATHERINGS_2015.length !=0){
                gatherings2020.push(GATHERINGS_2015);
            }
        }
        // const stringData = JSON.stringify(csr2020);

        var dObj = [];
        var temp_key = ""

        for(let i=0; i<gatherings2015.length; i++){
            const dataStr = JSON.stringify(temp_key + gatherings2015[i]);
            const dataString = ("{"+'"img":'+dataStr+"}");
            // console.log(dataString)
            const dataObj = JSON.parse(dataString);
            // console.log(dataObj)
            dObj.push(dataObj)
        }
        console.log(dObj)

        res.send({body: dObj})
        return urlsArray;

    } catch (error) {
        console.error("Error creating user document", error);
    }
}
const gatherings2016_gallery = async (req, res) => {
    console.log('jahahaha')
    const bucketName = 'gledex-d4404.appspot.com';
    const [files] = await storage.bucket(bucketName).getFiles();
    
    try {
        const config = {
            action: 'read',
            expires: '03-17-2491'
         };
         const promises = [];
         for (let i = 1; i < files.length; i++) {
           console.log(files[i].name);
           promises.push(await files[i].getSignedUrl(config));
         }
        
        const urlsArray = await Promise.all(promises);

        const gatherings2016 = [];
        for(let i=0; i<urlsArray.length; i++){
            const GATHERINGS_2016 = urlsArray[i].filter(function(item) {
                return item.toString().includes("2016_Gatherings_") == true;
            });
            if(GATHERINGS_2016.length !=0){
                gatherings2016.push(GATHERINGS_2016);
            }
        }
        // const stringData = JSON.stringify(csr2020);

        var dObj = [];
        var temp_key = ""

        for(let i=0; i<gatherings2016.length; i++){
            const dataStr = JSON.stringify(temp_key + gatherings2016[i]);
            const dataString = ("{"+'"img":'+dataStr+"}");
            // console.log(dataString)
            const dataObj = JSON.parse(dataString);
            // console.log(dataObj)
            dObj.push(dataObj)
        }
        console.log(dObj)

        res.send({body: dObj})
        return urlsArray;

    } catch (error) {
        console.error("Error creating user document", error);
    }
}
const gatherings2017_gallery = async (req, res) => {
    console.log('jahahaha')
    const bucketName = 'gledex-d4404.appspot.com';
    const [files] = await storage.bucket(bucketName).getFiles();
    
    try {
        const config = {
            action: 'read',
            expires: '03-17-2491'
         };
         const promises = [];
         for (let i = 1; i < files.length; i++) {
           console.log(files[i].name);
           promises.push(await files[i].getSignedUrl(config));
         }
        
        const urlsArray = await Promise.all(promises);

        const gatherings2017 = [];
        for(let i=0; i<urlsArray.length; i++){
            const GATHERINGS_2017 = urlsArray[i].filter(function(item) {
                return item.toString().includes("2017_Gatherings_") == true;
            });
            if(GATHERINGS_2017.length !=0){
                gatherings2020.push(GATHERINGS_2017);
            }
        }
        // const stringData = JSON.stringify(csr2020);

        var dObj = [];
        var temp_key = ""

        for(let i=0; i<gatherings2017.length; i++){
            const dataStr = JSON.stringify(temp_key + gatherings2017[i]);
            const dataString = ("{"+'"img":'+dataStr+"}");
            // console.log(dataString)
            const dataObj = JSON.parse(dataString);
            // console.log(dataObj)
            dObj.push(dataObj)
        }
        console.log(dObj)

        res.send({body: dObj})
        return urlsArray;

    } catch (error) {
        console.error("Error creating user document", error);
    }
}
const gatherings2020_gallery = async (req, res) => {
    console.log('jahahaha')
    const bucketName = 'gledex-d4404.appspot.com';
    const [files] = await storage.bucket(bucketName).getFiles();
    
    try {
        const config = {
            action: 'read',
            expires: '03-17-2491'
         };
         const promises = [];
         for (let i = 1; i < files.length; i++) {
           console.log(files[i].name);
           promises.push(await files[i].getSignedUrl(config));
         }
        
        const urlsArray = await Promise.all(promises);

        const gatherings2020 = [];
        for(let i=0; i<urlsArray.length; i++){
            const GATHERINGS_2020 = urlsArray[i].filter(function(item) {
                return item.toString().includes("2020_Gatherings_") == true;
            });
            if(GATHERINGS_2020.length !=0){
                gatherings2020.push(GATHERINGS_2020);
            }
        }
        // const stringData = JSON.stringify(csr2020);

        var dObj = [];
        var temp_key = ""

        for(let i=0; i<gatherings2020.length; i++){
            const dataStr = JSON.stringify(temp_key + gatherings2020[i]);
            const dataString = ("{"+'"img":'+dataStr+"}");
            // console.log(dataString)
            const dataObj = JSON.parse(dataString);
            // console.log(dataObj)
            dObj.push(dataObj)
        }
        console.log(dObj)

        res.send({body: dObj})
        return urlsArray;

    } catch (error) {
        console.error("Error creating user document", error);
    }
}
const gatherings2021_gallery = async (req, res) => {
    console.log('jahahaha')
    const bucketName = 'gledex-d4404.appspot.com';
    const [files] = await storage.bucket(bucketName).getFiles();
    
    try {
        const config = {
            action: 'read',
            expires: '03-17-2491'
         };
         const promises = [];
         for (let i = 1; i < files.length; i++) {
           console.log(files[i].name);
           promises.push(await files[i].getSignedUrl(config));
         }
        
        const urlsArray = await Promise.all(promises);

        const gatherings2021 = [];
        for(let i=0; i<urlsArray.length; i++){
            const GATHERINGS_2021 = urlsArray[i].filter(function(item) {
                return item.toString().includes("2021_Gatherings_") == true;
            });
            if(GATHERINGS_2021.length !=0){
                gatherings2021.push(GATHERINGS_2021);
            }
        }
        // const stringData = JSON.stringify(csr2020);

        var dObj = [];
        var temp_key = ""

        for(let i=0; i<gatherings2021.length; i++){
            const dataStr = JSON.stringify(temp_key + gatherings2021[i]);
            const dataString = ("{"+'"img":'+dataStr+"}");
            // console.log(dataString)
            const dataObj = JSON.parse(dataString);
            // console.log(dataObj)
            dObj.push(dataObj)
        }
        console.log(dObj)

        res.send({body: dObj})
        return urlsArray;

    } catch (error) {
        console.error("Error creating user document", error);
    }
}

const projects2020_gallery = async (req, res) => {
    console.log('jahahaha')
    const bucketName = 'gledex-d4404.appspot.com';
    const [files] = await storage.bucket(bucketName).getFiles();
    
    try {
        const config = {
            action: 'read',
            expires: '03-17-2491'
         };
         const promises = [];
         for (let i = 1; i < files.length; i++) {
           console.log(files[i].name);
           promises.push(await files[i].getSignedUrl(config));
         }
        
        const urlsArray = await Promise.all(promises);

        const projects2020 = [];
        for(let i=0; i<urlsArray.length; i++){
            const PROJECTS_2020 = urlsArray[i].filter(function(item) {
                return item.toString().includes("2020_Projects_") == true;
            });
            if(PROJECTS_2020.length !=0){
                projects2020.push(PROJECTS_2020);
            }
        }
        // const stringData = JSON.stringify(csr2020);

        var dObj = [];
        var temp_key = ""

        for(let i=0; i<projects2020.length; i++){
            const dataStr = JSON.stringify(temp_key + projects2020[i]);
            const dataString = ("{"+'"img":'+dataStr+"}");
            // console.log(dataString)
            const dataObj = JSON.parse(dataString);
            // console.log(dataObj)
            dObj.push(dataObj)
        }
        console.log(dObj)

        res.send({body: dObj})
        return urlsArray;

    } catch (error) {
        console.error("Error creating user document", error);
    }
}
const projects2021_gallery = async (req, res) => {
    console.log('jahahaha')
    const bucketName = 'gledex-d4404.appspot.com';
    const [files] = await storage.bucket(bucketName).getFiles();
    
    try {
        const config = {
            action: 'read',
            expires: '03-17-2491'
         };
         const promises = [];
         for (let i = 1; i < files.length; i++) {
           console.log(files[i].name);
           promises.push(await files[i].getSignedUrl(config));
         }
        
        const urlsArray = await Promise.all(promises);

        const projects2021 = [];
        for(let i=0; i<urlsArray.length; i++){
            const PROJECTS_2021 = urlsArray[i].filter(function(item) {
                return item.toString().includes("2021_Projects_") == true;
            });
            if(PROJECTS_2021.length !=0){
                projects2021.push(PROJECTS_2021);
            }
        }
        // const stringData = JSON.stringify(csr2020);

        var dObj = [];
        var temp_key = ""

        for(let i=0; i<projects2021.length; i++){
            const dataStr = JSON.stringify(temp_key + projects2021[i]);
            const dataString = ("{"+'"img":'+dataStr+"}");
            // console.log(dataString)
            const dataObj = JSON.parse(dataString);
            // console.log(dataObj)
            dObj.push(dataObj)
        }
        console.log(dObj)

        res.send({body: dObj})
        return urlsArray;

    } catch (error) {
        console.error("Error creating user document", error);
    }
}

module.exports = {
    checkFolder, 
    csr2018_gallery, 
    csr2021_gallery, 
    awards2020_gallery, 
    awards2021_gallery, 
    gatherings2015_gallery,
    gatherings2016_gallery,
    gatherings2017_gallery,
    gatherings2020_gallery,
    gatherings2021_gallery,
    projects2020_gallery,
    projects2021_gallery
}